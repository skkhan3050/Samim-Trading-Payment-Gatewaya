// Strict server-side pricing catalog
// All prices in smallest currency unit (paise: 1 INR = 100 paise)
const PLANS = {
  starter: {
    id: 'starter',
    name: 'Starter Plan',
    tier: 'Foundation',
    amount: 393500, // ₹3,935 in paise
    currency: 'INR',
    priceFormatted: '₹3,935',
    usdEquivalent: '$49',
    period: '/ one-time access',
    features: [
      'Basic strategy framework & rulebook',
      'Foundational trading education modules',
      'Core market structure lessons',
      'Risk management basics & calculators',
      'Standard trade planning templates',
      'Community forum access'
    ]
  },
  pro: {
    id: 'pro',
    name: 'Pro Strategy Suite',
    tier: 'Professional',
    amount: 1096500, // ₹10,965 in paise
    currency: 'INR',
    priceFormatted: '₹10,965',
    usdEquivalent: '$129',
    period: '/ complete suite',
    isFeatured: true,
    features: [
      'All 3 core strategy frameworks (Trend, Breakout, Structure)',
      'Daily technical market analysis & key levels',
      'Actionable trade setup walkthroughs',
      'Advanced position sizing & risk calculator',
      'Full pre-flight trade checklists',
      'Private community & weekly Q&A calls',
      'Continuous strategy updates'
    ]
  },
  advanced: {
    id: 'advanced',
    name: 'Advanced Institutional Tier',
    tier: 'Institutional',
    amount: 2116500, // ₹21,165 in paise
    currency: 'INR',
    priceFormatted: '₹21,165',
    usdEquivalent: '$249',
    period: '/ institutional tier',
    features: [
      'Complete institutional strategy frameworks',
      'Multi-timeframe liquidity & order block models',
      'Advanced volatility & delta analysis tools',
      'Deep-dive market case study library',
      'Portfolio heat & multi-asset risk framework',
      'Direct analyst strategy review channel',
      'Lifetime access to all future frameworks'
    ]
  }
};

function getPlan(planId) {
  if (!planId) return null;
  const key = String(planId).toLowerCase().trim();
  return PLANS[key] || null;
}

module.exports = {
  PLANS,
  getPlan
};
