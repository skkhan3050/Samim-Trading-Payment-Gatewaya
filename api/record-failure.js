const { updateOrderStatus } = require('./_lib/orders');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { orderId, error } = req.body || {};

    if (orderId) {
      updateOrderStatus(orderId, 'failed', {
        failureDetails: error || {},
        failureReason: (error && (error.description || error.reason || error.code)) || 'Checkout error',
        failedAt: new Date().toISOString()
      });
    }

    return res.status(200).json({
      success: true,
      recorded: true,
      status: 'failed'
    });
  } catch (err) {
    console.error('Failed to record payment failure:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
