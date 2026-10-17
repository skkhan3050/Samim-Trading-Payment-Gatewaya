const { getCredentials } = require('./_lib/razorpay');
const { PLANS } = require('./_lib/plans');

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const creds = getCredentials();

  return res.status(200).json({
    success: true,
    keyId: creds.keyId || 'rzp_test_sandbox_tradelab',
    isConfigured: creds.isConfigured,
    isTestMode: true,
    environment: 'development',
    currency: 'INR',
    plans: Object.values(PLANS).map((p) => ({
      id: p.id,
      name: p.name,
      amount: p.amount,
      priceFormatted: p.priceFormatted,
      currency: p.currency,
      usdEquivalent: p.usdEquivalent
    }))
  });
};
