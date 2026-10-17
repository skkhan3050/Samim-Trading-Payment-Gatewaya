const { getPlan } = require('./_lib/plans');
const { createRazorpayOrder, getCredentials } = require('./_lib/razorpay');
const { saveOrder } = require('./_lib/orders');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { planId } = req.body || {};

    if (!planId) {
      return res.status(400).json({
        success: false,
        error: 'Missing required field: planId (starter, pro, or advanced)'
      });
    }

    const plan = getPlan(planId);
    if (!plan) {
      return res.status(400).json({
        success: false,
        error: `Invalid planId: '${planId}'. Valid plans are: starter, pro, advanced.`
      });
    }

    const orderResult = await createRazorpayOrder(plan);

    // Save order in backend ledger
    const saved = saveOrder({
      orderId: orderResult.orderId,
      planId: plan.id,
      planName: plan.name,
      amount: plan.amount,
      currency: plan.currency,
      status: 'created',
      receipt: orderResult.receipt,
      isSimulated: orderResult.isSimulated,
      isTestMode: true,
      accessGranted: false,
      createdAt: new Date().toISOString()
    });

    const creds = getCredentials();

    return res.status(200).json({
      success: true,
      orderId: orderResult.orderId,
      amount: orderResult.amount,
      currency: orderResult.currency,
      keyId: orderResult.keyId,
      receipt: orderResult.receipt,
      isSimulated: orderResult.isSimulated,
      isTestMode: true,
      isConfigured: creds.isConfigured,
      plan: {
        id: plan.id,
        name: plan.name,
        priceFormatted: plan.priceFormatted,
        amount: plan.amount,
        currency: plan.currency
      }
    });
  } catch (err) {
    console.error('Failed to create Razorpay order:', err);
    return res.status(500).json({
      success: false,
      error: err.message || 'Failed to create Razorpay order'
    });
  }
};
