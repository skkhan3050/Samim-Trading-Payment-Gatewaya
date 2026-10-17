const { getOrder } = require('./_lib/orders');
const { getPlan } = require('./_lib/plans');

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const orderId = req.query ? req.query.orderId : null;
  if (!orderId) {
    return res.status(400).json({ error: 'Missing orderId parameter' });
  }

  const order = getOrder(orderId);
  if (!order) {
    return res.status(404).json({ error: `Order not found: ${orderId}` });
  }

  const plan = getPlan(order.planId);

  return res.status(200).json({
    success: true,
    orderId: order.orderId,
    status: order.status,
    accessGranted: Boolean(order.accessGranted),
    paymentId: order.paymentId || null,
    amount: order.amount,
    currency: order.currency || 'INR',
    isTestMode: true,
    testModeNotice: 'SIMULATED / TEST MODE: No real funds were charged.',
    plan: plan ? {
      id: plan.id,
      name: plan.name,
      priceFormatted: plan.priceFormatted
    } : null,
    createdAt: order.createdAt,
    updatedAt: order.updatedAt,
    paidAt: order.paidAt || null,
    failureReason: order.failureReason || null
  });
};
