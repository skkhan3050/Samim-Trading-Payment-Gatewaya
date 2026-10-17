const RATE = 85;

function getCurr() {
  if (window.getSiteCurrency) return window.getSiteCurrency();
  try {
    return localStorage.getItem("preferred_currency") || "INR";
  } catch {
    return "INR";
  }
}

function setCurr(val) {
  if (window.setSiteCurrency) {
    window.setSiteCurrency(val);
  } else {
    try {
      localStorage.setItem("preferred_currency", val);
    } catch { }
    window.dispatchEvent(
      new CustomEvent("currencyChange", { detail: { currency: val } })
    );
  }
}

// Ensure Razorpay SDK is loaded
function ensureRazorpaySDK() {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      return resolve(true);
    }
    const existing = document.querySelector('script[src*="checkout.razorpay.com"]');
    if (existing) {
      existing.addEventListener('load', () => resolve(true));
      existing.addEventListener('error', () => resolve(false));
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.head.appendChild(script);
  });
}

// In-page Toast Helper
function showToast(title, message, type = 'info') {
  const container = document.getElementById('toast-container') || createToastContainer();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.style.borderColor = type === 'success' ? '#9DD82C' : type === 'error' ? '#FF3B69' : '#F59E0B';
  toast.style.boxShadow = `0 10px 30px rgba(0,0,0,0.8), 0 0 15px ${type === 'success' ? 'rgba(157, 216, 44, 0.3)' : type === 'error' ? 'rgba(255, 59, 105, 0.3)' : 'rgba(245, 158, 11, 0.3)'}`;

  toast.innerHTML = `
    <div style="flex-shrink: 0; margin-top: 2px;">
      ${type === 'success' ? `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9DD82C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ` : type === 'error' ? `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF3B69" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
      ` : `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      `}
    </div>
    <div style="flex-grow: 1;">
      <div style="font-family: var(--font-heading); font-weight: 700; font-size: 0.95rem; color: #FFFFFF; margin-bottom: 2px;">${title}</div>
      <div style="font-size: 0.85rem; color: #A3B3C9; line-height: 1.4;">${message}</div>
    </div>
    <button type="button" style="color: #64748B; font-size: 1.2rem; cursor: pointer; line-height: 1; padding: 2px 4px; background: none; border: none;" aria-label="Close">×</button>
  `;

  toast.querySelector('button').addEventListener('click', () => toast.remove());
  container.appendChild(toast);
  setTimeout(() => {
    if (toast.parentElement) toast.remove();
  }, 6000);
}

function createToastContainer() {
  let c = document.getElementById('toast-container');
  if (!c) {
    c = document.createElement('div');
    c.id = 'toast-container';
    c.className = 'toast-container';
    document.body.appendChild(c);
  }
  return c;
}

// Payment Modals (Success, Failure, Test Simulator)
function showPaymentSuccessModal(orderData, plan) {
  const existing = document.getElementById('rzp-payment-modal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'rzp-payment-modal';
  modal.className = 'rzp-modal-overlay';
  modal.innerHTML = `
    <div class="rzp-modal-card">
      <div class="rzp-modal-glow"></div>
      
      <!-- Top Test Mode Banner -->
      <div class="rzp-badge-banner">
        <span class="rzp-pulse-dot"></span>
        <span>TEST MODE • SIMULATED TRANSACTION</span>
      </div>

      <div class="rzp-success-icon-wrap">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9DD82C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>

      <h3 class="rzp-modal-title">Payment Verified & Access Granted</h3>
      <p class="rzp-modal-desc">
        Your subscription to the <strong style="color: #FFFFFF;">${plan.name}</strong> has been successfully confirmed on the server.
      </p>

      <div class="rzp-details-box">
        <div class="rzp-detail-row">
          <span class="rzp-detail-label">Plan Tier</span>
          <span class="rzp-detail-val" style="color: #9DD82C; font-weight: 700;">${plan.name}</span>
        </div>
        <div class="rzp-detail-row">
          <span class="rzp-detail-label">Amount Paid (Test)</span>
          <span class="rzp-detail-val" style="font-family: var(--font-mono); font-weight: 700; color: #FFFFFF;">${plan.priceFormatted}</span>
        </div>
        <div class="rzp-detail-row">
          <span class="rzp-detail-label">Razorpay Order ID</span>
          <span class="rzp-detail-val" style="font-family: var(--font-mono); font-size: 0.78rem; color: #A3B3C9;">${orderData.orderId}</span>
        </div>
        <div class="rzp-detail-row">
          <span class="rzp-detail-label">Payment ID</span>
          <span class="rzp-detail-val" style="font-family: var(--font-mono); font-size: 0.78rem; color: #A3B3C9;">${orderData.paymentId || 'pay_test_' + Date.now()}</span>
        </div>
        <div class="rzp-detail-row">
          <span class="rzp-detail-label">Server Verification</span>
          <span class="rzp-detail-val" style="color: #9DD82C; font-weight: 600;">HMAC-SHA256 Validated</span>
        </div>
        <div class="rzp-detail-row" style="border-bottom: none;">
          <span class="rzp-detail-label">Actual Status</span>
          <span class="rzp-detail-val" style="color: #9DD82C; font-weight: 700; display: inline-flex; align-items: center; gap: 4px;">
            <span>CAPTURED</span>
            <span style="font-size: 0.7rem; background: rgba(157, 216, 44, 0.2); padding: 1px 6px; border-radius: 4px;">ACTIVE</span>
          </span>
        </div>
      </div>

      <div class="rzp-disclaimer-note">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2" style="flex-shrink: 0; margin-top: 2px;">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <span><strong>Notice:</strong> This transaction was processed in <strong>Razorpay TEST MODE</strong>. No actual money was deducted from your account.</span>
      </div>

      <div class="rzp-modal-actions">
        <a href="/strategies" class="btn btn-primary" style="flex: 1; text-align: center;">
          <span>Access Strategy Dashboard</span>
          <span>→</span>
        </a>
        <button type="button" class="btn btn-secondary rzp-close-btn" style="flex-shrink: 0;">
          <span>Close</span>
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  modal.querySelector('.rzp-close-btn').addEventListener('click', () => modal.remove());
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
}

function showPaymentFailedModal(errorInfo, plan, onRetry) {
  const existing = document.getElementById('rzp-payment-modal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'rzp-payment-modal';
  modal.className = 'rzp-modal-overlay';
  modal.innerHTML = `
    <div class="rzp-modal-card" style="border-color: rgba(255, 59, 105, 0.4);">
      <div class="rzp-modal-glow" style="background: radial-gradient(circle, rgba(255, 59, 105, 0.15) 0%, transparent 70%);"></div>
      
      <div class="rzp-badge-banner" style="background: rgba(255, 59, 105, 0.12); border-color: rgba(255, 59, 105, 0.35); color: #FF3B69;">
        <span class="rzp-pulse-dot" style="background: #FF3B69; box-shadow: 0 0 6px #FF3B69;"></span>
        <span>TEST MODE • PAYMENT FAILED</span>
      </div>

      <div class="rzp-success-icon-wrap" style="background: rgba(255, 59, 105, 0.15); border-color: rgba(255, 59, 105, 0.4);">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FF3B69" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
      </div>

      <h3 class="rzp-modal-title">Payment Did Not Complete</h3>
      <p class="rzp-modal-desc">
        Your attempt to purchase the <strong style="color: #FFFFFF;">${plan.name}</strong> was not completed.
      </p>

      <div class="rzp-details-box" style="border-color: rgba(255, 59, 105, 0.2);">
        <div class="rzp-detail-row">
          <span class="rzp-detail-label">Reason</span>
          <span class="rzp-detail-val" style="color: #FF3B69; font-weight: 700;">${errorInfo.description || errorInfo.message || 'Payment was declined or cancelled'}</span>
        </div>
        ${errorInfo.code ? `
          <div class="rzp-detail-row">
            <span class="rzp-detail-label">Error Code</span>
            <span class="rzp-detail-val" style="font-family: var(--font-mono); font-size: 0.8rem; color: #A3B3C9;">${errorInfo.code}</span>
          </div>
        ` : ''}
        <div class="rzp-detail-row" style="border-bottom: none;">
          <span class="rzp-detail-label">Access Status</span>
          <span class="rzp-detail-val" style="color: #FF3B69; font-weight: 600;">Locked (Not Paid)</span>
        </div>
      </div>

      <div class="rzp-modal-actions">
        <button type="button" class="btn btn-primary rzp-retry-btn" style="flex: 1;">
          <span>Retry Payment (${plan.priceFormatted})</span>
          <span>↻</span>
        </button>
        <button type="button" class="btn btn-secondary rzp-close-btn" style="flex-shrink: 0;">
          <span>Cancel</span>
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  modal.querySelector('.rzp-close-btn').addEventListener('click', () => modal.remove());
  modal.querySelector('.rzp-retry-btn').addEventListener('click', () => {
    modal.remove();
    if (onRetry) onRetry();
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
}

// Development Test Simulator Dialog
// (Enables instant interactive testing of all Razorpay test paths)
function showTestSimulatorModal(orderData, plan, onVerifySuccess, onFail, onCancel) {
  const existing = document.getElementById('rzp-payment-modal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'rzp-payment-modal';
  modal.className = 'rzp-modal-overlay';
  modal.innerHTML = `
    <div class="rzp-modal-card">
      <div class="rzp-modal-glow"></div>
      
      <div class="rzp-badge-banner">
        <span class="rzp-pulse-dot"></span>
        <span>RAZORPAY STANDARD TEST CHECKOUT</span>
      </div>

      <h3 class="rzp-modal-title" style="margin-top: 14px;">Select Test Payment Scenario</h3>
      <p class="rzp-modal-desc">
        Testing <strong style="color: #FFFFFF;">${plan.name}</strong> (${plan.priceFormatted}). Choose a simulated checkout outcome to test end-to-end integration:
      </p>

      <div class="rzp-details-box">
        <div class="rzp-detail-row">
          <span class="rzp-detail-label">Order ID</span>
          <span class="rzp-detail-val" style="font-family: var(--font-mono); color: #9DD82C;">${orderData.orderId}</span>
        </div>
        <div class="rzp-detail-row">
          <span class="rzp-detail-label">Amount (Paise)</span>
          <span class="rzp-detail-val" style="font-family: var(--font-mono); color: #FFFFFF;">${orderData.amount} paise (${plan.priceFormatted})</span>
        </div>
        <div class="rzp-detail-row" style="border-bottom: none;">
          <span class="rzp-detail-label">Currency</span>
          <span class="rzp-detail-val" style="color: #FFFFFF; font-weight: 700;">INR (₹)</span>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 10px; margin: 20px 0;">
        <button type="button" class="btn btn-primary sim-btn-success" style="width: 100%; justify-content: space-between;">
          <span>✓ Simulate Successful Payment (Card / UPI)</span>
          <span style="font-size: 0.8rem; opacity: 0.85;">Captures & Grants Access →</span>
        </button>

        <button type="button" class="btn btn-secondary sim-btn-fail" style="width: 100%; justify-content: space-between; border-color: rgba(255, 59, 105, 0.4); color: #FF3B69;">
          <span>✗ Simulate Payment Failure</span>
          <span style="font-size: 0.8rem; opacity: 0.85;">Declined by Bank →</span>
        </button>

        <button type="button" class="btn btn-secondary sim-btn-cancel" style="width: 100%; justify-content: space-between;">
          <span>⤫ Simulate User Dismissal / Cancel</span>
          <span style="font-size: 0.8rem; opacity: 0.85;">Close Modal →</span>
        </button>
      </div>

      <div class="rzp-disclaimer-note">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2" style="flex-shrink: 0; margin-top: 2px;">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <span>When live test keys (<code style="color: #9DD82C;">rzp_test_...</code>) are set in <code style="color: #9DD82C;">.env</code>, Razorpay's native popup opens automatically.</span>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector('.sim-btn-success').addEventListener('click', () => {
    modal.remove();
    onVerifySuccess({
      razorpay_order_id: orderData.orderId,
      razorpay_payment_id: `pay_sim_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      razorpay_signature: `test_sig_${orderData.orderId}`
    });
  });

  modal.querySelector('.sim-btn-fail').addEventListener('click', () => {
    modal.remove();
    onFail({
      code: 'BAD_REQUEST_ERROR',
      description: 'Test Card payment declined: Insufficient funds (Simulated)'
    });
  });

  modal.querySelector('.sim-btn-cancel').addEventListener('click', () => {
    modal.remove();
    onCancel();
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
      onCancel();
    }
  });
}

// Injected Modal CSS Styles
function injectRazorpayStyles() {
  if (document.getElementById('rzp-styles')) return;
  const style = document.createElement('style');
  style.id = 'rzp-styles';
  style.textContent = `
    .rzp-modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(4, 7, 16, 0.88);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      padding: 16px;
      animation: rzpFadeIn 0.25s ease-out;
    }
    @keyframes rzpFadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .rzp-modal-card {
      position: relative;
      background: linear-gradient(180deg, #101A2C 0%, #080E19 100%);
      border: 1px solid rgba(157, 216, 44, 0.4);
      border-top: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 16px;
      padding: 32px 28px;
      max-width: 500px;
      width: 100%;
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(157, 216, 44, 0.18);
      overflow: hidden;
      animation: rzpSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @keyframes rzpSlideUp {
      from { transform: translateY(20px) scale(0.97); opacity: 0; }
      to { transform: translateY(0) scale(1); opacity: 1; }
    }
    .rzp-modal-glow {
      position: absolute;
      top: -40px;
      right: -40px;
      width: 160px;
      height: 160px;
      background: radial-gradient(circle, rgba(157, 216, 44, 0.2) 0%, transparent 70%);
      pointer-events: none;
    }
    .rzp-badge-banner {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 5px 12px;
      background: rgba(245, 158, 11, 0.12);
      border: 1px solid rgba(245, 158, 11, 0.35);
      border-radius: 999px;
      font-family: var(--font-mono);
      font-size: 0.72rem;
      font-weight: 700;
      color: #F59E0B;
      letter-spacing: 0.06em;
      margin-bottom: 16px;
    }
    .rzp-pulse-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #F59E0B;
      box-shadow: 0 0 8px #F59E0B;
      animation: rzpPulse 1.8s infinite ease-in-out;
    }
    @keyframes rzpPulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(0.8); }
    }
    .rzp-success-icon-wrap {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: rgba(157, 216, 44, 0.12);
      border: 1px solid rgba(157, 216, 44, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 8px 0 16px;
      box-shadow: 0 0 20px rgba(157, 216, 44, 0.25);
    }
    .rzp-modal-title {
      font-family: var(--font-heading);
      font-size: 1.45rem;
      font-weight: 800;
      color: #FFFFFF;
      margin: 0 0 8px;
      letter-spacing: -0.02em;
    }
    .rzp-modal-desc {
      font-size: 0.92rem;
      color: #A3B3C9;
      line-height: 1.5;
      margin: 0 0 20px;
    }
    .rzp-details-box {
      background: rgba(7, 12, 22, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 10px;
      padding: 12px 16px;
      margin-bottom: 16px;
    }
    .rzp-detail-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      font-size: 0.86rem;
    }
    .rzp-detail-label {
      color: #64748B;
      font-weight: 500;
    }
    .rzp-detail-val {
      text-align: right;
    }
    .rzp-disclaimer-note {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      padding: 10px 14px;
      background: rgba(245, 158, 11, 0.08);
      border: 1px solid rgba(245, 158, 11, 0.25);
      border-radius: 8px;
      font-size: 0.78rem;
      color: #FCD34D;
      line-height: 1.45;
      margin-bottom: 20px;
    }
    .rzp-modal-actions {
      display: flex;
      gap: 12px;
      align-items: center;
    }
    .plan-checkout-btn:disabled {
      opacity: 0.65;
      cursor: not-allowed;
      pointer-events: none;
    }
    .plan-checkout-btn .spinner {
      display: inline-block;
      width: 14px;
      height: 14px;
      border: 2px solid currentColor;
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
}

function s(a) {
  if (!a) return;
  injectRazorpayStyles();
  ensureRazorpaySDK();

  const t = [
    {
      id: "starter",
      name: "Starter",
      desc: "For traders building their foundation in crypto markets.",
      usdPrice: 49,
      inrPrice: 3935,
      period: "/ one-time access",
      isFeatured: false,
      features: [
        "Basic strategy framework & rulebook",
        "Foundational trading education modules",
        "Core market structure lessons",
        "Risk management basics & calculators",
        "Standard trade planning templates",
        "Community forum access",
      ],
      cta: "Get Starter",
    },
    {
      id: "pro",
      name: "Pro",
      desc: "For active traders seeking structured setups and daily context.",
      usdPrice: 129,
      inrPrice: 10965,
      period: "/ complete suite",
      isFeatured: true,
      features: [
        "All 3 core strategy frameworks (Trend, Breakout, Structure)",
        "Daily technical market analysis & key levels",
        "Actionable trade setup walkthroughs",
        "Advanced position sizing & risk calculator",
        "Full pre-flight trade checklists",
        "Private community & weekly Q&A calls",
        "Continuous strategy updates",
      ],
      cta: "Explore Pro",
    },
    {
      id: "advanced",
      name: "Advanced",
      desc: "For experienced traders wanting institutional-grade frameworks.",
      usdPrice: 249,
      inrPrice: 21165,
      period: "/ institutional tier",
      isFeatured: false,
      features: [
        "Complete institutional strategy frameworks",
        "Multi-timeframe liquidity & order block models",
        "Advanced volatility & delta analysis tools",
        "Deep-dive market case study library",
        "Portfolio heat & multi-asset risk framework",
        "Direct analyst strategy review channel",
        "Lifetime access to all future frameworks",
      ],
      cta: "Explore Advanced",
    },
  ];

  // Initiate Razorpay Standard Checkout
  async function startCheckout(plan, buttonEl) {
    const originalContent = buttonEl.innerHTML;
    buttonEl.disabled = true;
    buttonEl.innerHTML = `
      <span class="spinner"></span>
      <span>Connecting Razorpay...</span>
    `;

    try {
      // 1. Create secure backend order (Requirement 3)
      const res = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId: plan.id })
      });

      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson.error || `HTTP ${res.status}: Order creation failed`);
      }

      const orderData = await res.json();

      // Check for native Razorpay SDK vs Simulation fallback
      const hasRealTestKeys = orderData.isConfigured && !orderData.isSimulated && orderData.keyId.startsWith('rzp_test_');

      if (window.Razorpay && hasRealTestKeys) {
        // Razorpay Standard Checkout Popup (Requirement 2 & 9)
        const options = {
          key: orderData.keyId,
          amount: orderData.amount,
          currency: orderData.currency || 'INR',
          name: 'TRADELAB',
          description: `${plan.name} Strategy Plan (Test Mode)`,
          image: '/favicon.ico',
          order_id: orderData.orderId,
          notes: {
            planId: plan.id,
            planName: plan.name,
            mode: 'TEST_MODE'
          },
          theme: {
            color: '#9DD82C'
          },
          prefill: {
            name: 'Tradelab Test User',
            email: 'test@tradelab.internal',
            contact: '9999999999'
          },
          handler: async function (response) {
            await verifyPayment(response, plan, buttonEl, originalContent);
          },
          modal: {
            ondismiss: function () {
              buttonEl.disabled = false;
              buttonEl.innerHTML = originalContent;
              showToast('Checkout Cancelled', 'Payment window was closed. No charges were made.', 'info');
            }
          }
        };

        const rzp = new window.Razorpay(options);

        rzp.on('payment.failed', function (resp) {
          buttonEl.disabled = false;
          buttonEl.innerHTML = originalContent;
          const errorDetails = resp.error || {};
          // Record failure on backend (Requirement 8)
          fetch('/api/record-failure', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderId: orderData.orderId, error: errorDetails })
          }).catch(() => { });

          showPaymentFailedModal(errorDetails, plan, () => startCheckout(plan, buttonEl));
        });

        rzp.open();
      } else {
        // Interactive Development Simulator Modal
        // Guarantees immediate testability of all 3 plans and outcomes
        showTestSimulatorModal(
          orderData,
          plan,
          async (simResponse) => {
            await verifyPayment(simResponse, plan, buttonEl, originalContent);
          },
          (simError) => {
            buttonEl.disabled = false;
            buttonEl.innerHTML = originalContent;
            fetch('/api/record-failure', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ orderId: orderData.orderId, error: simError })
            }).catch(() => { });
            showPaymentFailedModal(simError, plan, () => startCheckout(plan, buttonEl));
          },
          () => {
            buttonEl.disabled = false;
            buttonEl.innerHTML = originalContent;
            showToast('Checkout Dismissed', 'Test checkout closed. You have not been charged.', 'info');
          }
        );
      }
    } catch (err) {
      console.error('Checkout error:', err);
      buttonEl.disabled = false;
      buttonEl.innerHTML = originalContent;
      showToast('Checkout Error', err.message, 'error');
    }
  }

  // Verify Payment on Backend (Requirement 6 & 7)
  async function verifyPayment(response, plan, buttonEl, originalContent) {
    buttonEl.innerHTML = `
      <span class="spinner"></span>
      <span>Verifying Payment...</span>
    `;

    try {
      const verifyRes = await fetch('/api/verify-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          planId: plan.id
        })
      });

      const verifyData = await verifyRes.json();

      if (!verifyRes.ok || !verifyData.success || !verifyData.accessGranted) {
        throw new Error(verifyData.error || 'Payment signature verification failed.');
      }

      // Confirm actual status before granting access (Requirement 7)
      const statusRes = await fetch(`/api/order-status?orderId=${encodeURIComponent(response.razorpay_order_id)}`);
      const statusData = await statusRes.json();

      if (!statusData.accessGranted || statusData.status !== 'paid') {
        throw new Error('Payment status verification incomplete. Access cannot be granted yet.');
      }

      // Persist access locally in browser
      try {
        localStorage.setItem('tradelab_active_plan', JSON.stringify({
          planId: plan.id,
          planName: plan.name,
          orderId: response.razorpay_order_id,
          paymentId: response.razorpay_payment_id,
          mode: 'TEST_MODE',
          unlockedAt: new Date().toISOString()
        }));
      } catch { }

      // Reset button
      buttonEl.disabled = false;
      buttonEl.innerHTML = `
        <span style="color: #9DD82C; display: inline-flex; align-items: center; gap: 6px;">
          ✓ Access Active
        </span>
      `;

      showPaymentSuccessModal({
        orderId: response.razorpay_order_id,
        paymentId: response.razorpay_payment_id
      }, plan);

      showToast('Plan Activated (Test Mode)', `${plan.name} verified successfully. Access granted.`, 'success');
    } catch (err) {
      console.error('Verification failure:', err);
      buttonEl.disabled = false;
      buttonEl.innerHTML = originalContent;
      showPaymentFailedModal({ description: err.message }, plan, () => startCheckout(plan, buttonEl));
      showToast('Verification Failed', err.message, 'error');
    }
  }

  function render() {
    const curr = getCurr();

    a.innerHTML = `
      <div class="container">
        <div class="intro-section" style="margin-bottom: 24px;">
          <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; flex-wrap: wrap; gap: 12px; margin-bottom: 12px;">
            <span class="tag-label">
              <span class="tag-dot"></span>
              PRICING PLANS
            </span>

            <!-- Currency Switcher Toggle Bar -->
            <div class="currency-switcher-bar">
              <span class="currency-label-text">Currency:</span>
              <div class="currency-toggle-pill">
                <button type="button" class="curr-toggle-btn ${curr === "INR" ? "active" : ""}" data-curr="INR">
                  <span>🇮🇳 INR (₹)</span>
                </button>
                <button type="button" class="curr-toggle-btn ${curr === "USD" ? "active" : ""}" data-curr="USD">
                  <span>🇺🇸 USD ($)</span>
                </button>
              </div>
              <span class="currency-rate-hint">${curr === "INR" ? "1 USD ≈ ₹85.00" : "USD Billing"}</span>
            </div>
          </div>

          <h2 class="heading-lg">
            Choose Your Trading Strategy Plan
          </h2>
          <p class="text-lead intro-desc">
            Transparent, structured educational strategy packages engineered for disciplined traders at every stage.
          </p>
        </div>

        <div class="pricing-grid" style="margin-bottom:20px;">
          ${t
        .map((e) => {
          const displayPrice =
            curr === "INR"
              ? "₹" + (e.inrPrice ? e.inrPrice.toLocaleString("en-IN") : Math.round(e.usdPrice * RATE).toLocaleString("en-IN"))
              : "$" + e.usdPrice.toLocaleString("en-US");

          return `
            <div class="pricing-card ${e.isFeatured ? "featured" : ""}">
              ${e.isFeatured
              ? '<div class="featured-ribbon">Most Popular</div>'
              : ""
            }
              <div>
                <h3 class="plan-name">${e.name}</h3>
                <p class="plan-desc">${e.desc}</p>
              </div>

              <div class="plan-price-wrap">
                <span class="plan-price">${displayPrice}</span>
                <span class="plan-period">${e.period}</span>
              </div>

              <ul class="plan-features-list">
                ${e.features
              .map(
                (r) => `
                  <li class="plan-feature-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>${r}</span>
                  </li>
                `
              )
              .join("")}
              </ul>

              <div style="margin-top: auto; width: 100%;">
                <button type="button" class="btn ${e.isFeatured ? "btn-primary" : "btn-secondary"} plan-checkout-btn" data-plan-id="${e.id}" style="width: 100%; cursor: pointer;">
                  <span>${e.cta} (${curr === "INR" ? "₹" + e.inrPrice.toLocaleString("en-IN") : "$" + e.usdPrice})</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
                <div style="display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 10px; font-size: 0.72rem; color: #F59E0B; font-family: var(--font-mono); letter-spacing: 0.05em; opacity: 0.9;">
                  <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: #F59E0B; box-shadow: 0 0 6px #F59E0B;"></span>
                  <span>RAZORPAY TEST MODE</span>
                </div>
              </div>
            </div>
          `;
        })
        .join("")}
        </div>

        <!-- Meme Coin Strategy Compact Banner (Under pricing-grid) -->
        <div class="meme-coin-strategy-banner" style=" width:80%; margin:auto; background: linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(168, 85, 247, 0.08) 50%, rgba(16, 24, 39, 0.85) 100%); border: 1px solid rgba(245, 158, 11, 0.35); border-radius: 12px; padding: 60px 54px !important; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; position: relative; overflow: hidden; box-shadow: 0 8px 24px -6px rgba(0, 0, 0, 0.5), 0 0 20px -5px rgba(245, 158, 11, 0.12);">
          <div style="position: absolute; right: -40px; top: -40px; width: 140px; height: 140px; background: radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%); pointer-events: none;"></div>

          <div style="display: flex; align-items: center; gap: 14px; flex-wrap: wrap; position: relative; z-index: 1;">
            <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 800; color: #FFFFFF; margin: 0; letter-spacing: -0.02em; display: inline-flex; align-items: center; gap: 10px; flex-wrap: wrap;">
              <span>Mim coin coming strategy</span>
              <span style="font-size: 0.72rem; background: rgba(157, 216, 44, 0.15); border: 1px solid rgba(157, 216, 44, 0.4); color: #9DD82C; padding: 2px 8px; border-radius: 4px; font-family: var(--font-mono); font-weight: 700;">NEW EXPANSION</span>
            </h3>
          </div>
          <span style=" color: #F59E0B; padding: 3px 10px; font-family: var(--font-mono); font-size: 24px; font-weight: 700; letter-spacing: 0.05em; display: inline-flex; align-items: center; gap: 6px; white-space: nowrap;">
            <span style="width: 6px; height: 9px; border-radius: 50%; "></span>
            COMING <span style="color:gray">SOON</span>
          </span>

          <div style="position: relative; z-index: 1; flex-shrink: 0;">
            <a href="#contact-form" class="btn btn-primary" style="background: #9DD82C; color: #050B14; font-weight: 700; padding: 9px 20px; border-radius: 6px; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 6px; text-decoration: none; transition: all 0.2s; box-shadow: 0 4px 12px rgba(157, 216, 44, 0.25);">
              <span>Notify Me on Launch</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    `;

    // Bind Currency Switcher
    a.querySelectorAll(".curr-toggle-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const selected = btn.getAttribute("data-curr");
        setCurr(selected);
      });
    });

    // Bind Plan Checkout Buttons (Requirement 2)
    a.querySelectorAll(".plan-checkout-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const planId = btn.getAttribute("data-plan-id");
        const plan = t.find((p) => p.id === planId);
        if (plan) {
          startCheckout(plan, btn);
        }
      });
    });
  }

  window.addEventListener("currencyChange", render);
  render();
}

export { s as r };
