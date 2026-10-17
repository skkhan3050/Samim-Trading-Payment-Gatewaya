const https = require('https');
const crypto = require('crypto');
const { loadEnv } = require('./env');

function getCredentials() {
  loadEnv();
  const keyId = process.env.RAZORPAY_KEY_ID || '';
  const keySecret = process.env.RAZORPAY_KEY_SECRET || '';
  let webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET || keySecret;
  if (!webhookSecret || webhookSecret.includes('YOUR_') || webhookSecret.includes('placeholder')) {
    webhookSecret = keySecret;
  }

  const isConfigured = Boolean(
    keyId &&
    keySecret &&
    !keyId.includes('YOUR_KEY') &&
    !keyId.includes('placeholder') &&
    !keySecret.includes('YOUR_KEY') &&
    !keySecret.includes('placeholder')
  );

  const isTestMode = keyId.startsWith('rzp_test_') || !isConfigured;

  return {
    keyId,
    keySecret,
    webhookSecret,
    isConfigured,
    isTestMode
  };
}

function makeRazorpayRequest(method, endpoint, data = null) {
  const { keyId, keySecret } = getCredentials();
  const authHeader = 'Basic ' + Buffer.from(`${keyId}:${keySecret}`).toString('base64');

  return new Promise((resolve, reject) => {
    const postData = data ? JSON.stringify(data) : null;
    const options = {
      hostname: 'api.razorpay.com',
      port: 443,
      path: endpoint,
      method: method,
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/json',
        'User-Agent': 'Tradelab-Razorpay-Integration/1.0'
      }
    };

    if (postData) {
      options.headers['Content-Length'] = Buffer.byteLength(postData);
    }

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(parsed);
          } else {
            const err = new Error(parsed.error ? parsed.error.description || parsed.error.code : `Razorpay API error: ${res.statusCode}`);
            err.statusCode = res.statusCode;
            err.razorpayError = parsed.error;
            reject(err);
          }
        } catch {
          reject(new Error(`Invalid JSON response from Razorpay: ${body}`));
        }
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    if (postData) {
      req.write(postData);
    }
    req.end();
  });
}

async function createRazorpayOrder(plan) {
  const creds = getCredentials();

  // If real test credentials are configured, call Razorpay Orders API
  if (creds.isConfigured && creds.keyId.startsWith('rzp_test_')) {
    const receipt = `rcpt_${plan.id}_${Date.now()}`;
    const payload = {
      amount: plan.amount,
      currency: 'INR',
      receipt: receipt,
      payment_capture: 1,
      notes: {
        planId: plan.id,
        planName: plan.name,
        priceFormatted: plan.priceFormatted,
        mode: 'TEST_MODE'
      }
    };

    const order = await makeRazorpayRequest('POST', '/v1/orders', payload);
    return {
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      receipt: order.receipt,
      keyId: creds.keyId,
      isSimulated: false,
      isTestMode: true
    };
  }

  // Development simulation mode:
  // Used when test keys are not yet pasted into .env, ensuring end-to-end testing works immediately
  const mockOrderId = `order_test_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  return {
    orderId: mockOrderId,
    amount: plan.amount,
    currency: 'INR',
    receipt: `rcpt_sim_${plan.id}_${Date.now()}`,
    keyId: creds.keyId || 'rzp_test_sandbox_tradelab',
    isSimulated: true,
    isTestMode: true
  };
}

function verifyPaymentSignature(orderId, paymentId, signature) {
  const creds = getCredentials();
  const secret = creds.keySecret || 'test_secret_for_simulation';

  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(`${orderId}|${paymentId}`)
    .digest('hex');

  // Also support simulation signatures for dev testing
  if (!creds.isConfigured && (signature === `test_sig_${orderId}` || signature === expectedSignature)) {
    return true;
  }

  try {
    const sigBuffer = Buffer.from(signature, 'utf8');
    const expectedBuffer = Buffer.from(expectedSignature, 'utf8');
    if (sigBuffer.length !== expectedBuffer.length) {
      return false;
    }
    return crypto.timingSafeEqual(sigBuffer, expectedBuffer);
  } catch {
    return false;
  }
}

async function fetchPaymentDetails(paymentId) {
  const creds = getCredentials();
  if (creds.isConfigured && !paymentId.startsWith('pay_sim_')) {
    return await makeRazorpayRequest('GET', `/v1/payments/${paymentId}`);
  }

  // Simulated payment details
  return {
    id: paymentId,
    status: 'captured',
    amount: null, // caller checks against order
    currency: 'INR',
    method: 'card',
    captured: true,
    notes: { mode: 'TEST_MODE' }
  };
}

function verifyWebhookSignature(rawBody, signatureHeader) {
  if (!signatureHeader) return false;
  const creds = getCredentials();
  const secret = creds.webhookSecret || creds.keySecret || 'test_secret';

  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(rawBody)
    .digest('hex');

  try {
    const sigBuffer = Buffer.from(signatureHeader, 'utf8');
    const expectedBuffer = Buffer.from(expectedSignature, 'utf8');
    if (sigBuffer.length !== expectedBuffer.length) {
      return false;
    }
    return crypto.timingSafeEqual(sigBuffer, expectedBuffer);
  } catch {
    return false;
  }
}

module.exports = {
  getCredentials,
  createRazorpayOrder,
  verifyPaymentSignature,
  fetchPaymentDetails,
  verifyWebhookSignature
};
