const fs = require('fs');
const path = require('path');

// In-memory store
const ordersCache = new Map();

function getStoragePath() {
  const primaryPath = path.join(process.cwd(), 'data', 'orders.json');
  try {
    const dir = path.dirname(primaryPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    return primaryPath;
  } catch {
    // Fallback for serverless environments (like Vercel /tmp)
    return path.join('/tmp', 'orders.json');
  }
}

function loadOrdersFromDisk() {
  try {
    const filePath = getStoragePath();
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      if (Array.isArray(data)) {
        for (const order of data) {
          if (order && order.orderId) {
            ordersCache.set(order.orderId, order);
          }
        }
      }
    }
  } catch (err) {
    console.warn('Orders persistence: Using in-memory store (file sync skipped)');
  }
}

function persistOrdersToDisk() {
  try {
    const filePath = getStoragePath();
    const data = Array.from(ordersCache.values());
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    // Serverless read-only fallback silently handled
  }
}

// Initial load
loadOrdersFromDisk();

function saveOrder(order) {
  ordersCache.set(order.orderId, {
    ...order,
    updatedAt: new Date().toISOString()
  });
  persistOrdersToDisk();
  return ordersCache.get(order.orderId);
}

function getOrder(orderId) {
  if (!orderId) return null;
  return ordersCache.get(orderId) || null;
}

function updateOrderStatus(orderId, status, details = {}) {
  const existing = ordersCache.get(orderId);
  if (!existing) {
    const newOrder = {
      orderId,
      status,
      ...details,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    ordersCache.set(orderId, newOrder);
    persistOrdersToDisk();
    return newOrder;
  }

  const updated = {
    ...existing,
    status,
    ...details,
    updatedAt: new Date().toISOString()
  };

  if (status === 'paid') {
    updated.accessGranted = true;
    updated.paidAt = new Date().toISOString();
  }

  ordersCache.set(orderId, updated);
  persistOrdersToDisk();
  return updated;
}

function grantAccess(orderId) {
  return updateOrderStatus(orderId, 'paid', { accessGranted: true });
}

module.exports = {
  saveOrder,
  getOrder,
  updateOrderStatus,
  grantAccess
};
