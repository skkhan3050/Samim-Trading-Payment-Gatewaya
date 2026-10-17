const { verifyWebhookSignature } = require('./_lib/razorpay');
const { updateOrderStatus, getOrder } = require('./_lib/orders');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const signature = req.headers['x-razorpay-signature'] || '';
    const rawBody = req.rawBody || (typeof req.body === 'string' ? req.body : JSON.stringify(req.body));

    // Verify webhook authenticity
    const isValid = verifyWebhookSignature(rawBody, signature);
    if (!isValid) {
      console.warn('Webhook signature mismatch detected');
      return res.status(400).json({ error: 'Invalid webhook signature' });
    }

    const event = typeof req.body === 'object' ? req.body : JSON.parse(rawBody);
    const eventType = event.event;
    const payload = event.payload || {};

    console.log(`Razorpay Webhook event received: ${eventType}`);

    switch (eventType) {
      case 'payment.captured': {
        const payment = payload.payment && payload.payment.entity;
        if (payment && payment.order_id) {
          updateOrderStatus(payment.order_id, 'paid', {
            paymentId: payment.id,
            amount: payment.amount,
            currency: payment.currency,
            accessGranted: true,
            webhookCapturedAt: new Date().toISOString()
          });
        }
        break;
      }

      case 'payment.failed': {
        const payment = payload.payment && payload.payment.entity;
        if (payment && payment.order_id) {
          updateOrderStatus(payment.order_id, 'failed', {
            paymentId: payment.id,
            failureReason: payment.error_description || payment.error_code || 'Payment failed',
            accessGranted: false,
            failedAt: new Date().toISOString()
          });
        }
        break;
      }

      case 'order.paid': {
        const order = payload.order && payload.order.entity;
        if (order && order.id) {
          updateOrderStatus(order.id, 'paid', {
            amount: order.amount,
            accessGranted: true,
            orderPaidAt: new Date().toISOString()
          });
        }
        break;
      }

      default:
        console.log(`Unhandled webhook event type: ${eventType}`);
        break;
    }

    return res.status(200).json({ status: 'ok', received: true, event: eventType });
  } catch (err) {
    console.error('Webhook processing error:', err);
    return res.status(500).json({ error: 'Webhook processing error: ' + err.message });
  }
};
