const { verifyPaymentSignature, fetchPaymentDetails, getCredentials } = require('./_lib/razorpay');
const { getOrder, updateOrderStatus } = require('./_lib/orders');
const { getPlan } = require('./_lib/plans');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      planId
    } = req.body || {};

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        error: 'Missing required parameters: razorpay_order_id, razorpay_payment_id, razorpay_signature'
      });
    }

    // 1. Verify cryptographic HMAC signature
    const isSignatureValid = verifyPaymentSignature(
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    );

    if (!isSignatureValid) {
      console.warn(`Payment signature verification failed for order ${razorpay_order_id}`);
      updateOrderStatus(razorpay_order_id, 'failed', {
        failureReason: 'Cryptographic HMAC signature mismatch',
        failedAt: new Date().toISOString()
      });
      return res.status(400).json({
        success: false,
        verified: false,
        error: 'Payment signature verification failed. Access denied.'
      });
    }

    // 2. Look up existing order in ledger
    let order = getOrder(razorpay_order_id);
    const plan = getPlan(planId || (order && order.planId));

    // 3. Confirm actual payment status with Razorpay API (Requirement 7)
    let paymentDetails;
    try {
      paymentDetails = await fetchPaymentDetails(razorpay_payment_id);
    } catch (err) {
      console.error('Error fetching payment details from Razorpay:', err);
      // If fetching fails, we must not blindly grant access
      return res.status(502).json({
        success: false,
        verified: false,
        error: 'Failed to verify payment status with payment gateway: ' + err.message
      });
    }

    // Check payment capture/authorization status
    const isPaymentCaptured =
      paymentDetails &&
      (paymentDetails.status === 'captured' || paymentDetails.status === 'authorized');

    if (!isPaymentCaptured) {
      updateOrderStatus(razorpay_order_id, 'failed', {
        paymentId: razorpay_payment_id,
        paymentStatus: paymentDetails ? paymentDetails.status : 'unknown',
        failureReason: 'Payment not captured or authorized'
      });
      return res.status(400).json({
        success: false,
        verified: false,
        error: `Payment status is '${paymentDetails ? paymentDetails.status : 'unknown'}', not captured.`
      });
    }

    // 4. Update order state and grant access
    const updatedOrder = updateOrderStatus(razorpay_order_id, 'paid', {
      paymentId: razorpay_payment_id,
      signature: razorpay_signature,
      planId: plan ? plan.id : (order ? order.planId : 'starter'),
      amount: plan ? plan.amount : (order ? order.amount : 0),
      currency: 'INR',
      status: 'paid',
      accessGranted: true,
      verifiedAt: new Date().toISOString()
    });

    const creds = getCredentials();

    return res.status(200).json({
      success: true,
      verified: true,
      accessGranted: true,
      status: 'paid',
      isTestMode: true,
      message: 'Payment verified successfully in Razorpay TEST MODE.',
      testModeNotice: 'SIMULATED PAYMENT: No real funds were charged or transferred.',
      order: {
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
        plan: plan ? {
          id: plan.id,
          name: plan.name,
          priceFormatted: plan.priceFormatted
        } : null,
        paidAt: updatedOrder.paidAt || new Date().toISOString()
      }
    });
  } catch (err) {
    console.error('Verification error:', err);
    return res.status(500).json({
      success: false,
      error: err.message || 'Internal error verifying payment'
    });
  }
};
