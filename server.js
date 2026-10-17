const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Load environment variables (.env / .env.local)
require('./api/_lib/env');

const PORT = parseInt(process.env.PORT || process.argv[2] || '3000', 10);
const PRIMARY_DIR = path.join(__dirname, 'samin-pied.vercel.app');
const FALLBACK_DIR = __dirname;

// Razorpay API routes
const API_ROUTES = {
  '/api/config': require('./api/config'),
  '/api/create-order': require('./api/create-order'),
  '/api/verify-payment': require('./api/verify-payment'),
  '/api/webhook': require('./api/webhook'),
  '/api/order-status': require('./api/order-status'),
  '/api/record-failure': require('./api/record-failure')
};

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.ogg': 'video/ogg',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf'
};

const ROUTE_MAP = {
  '/': '/index.html',
  '/home': '/index.html',
  '/strategies': '/strategies.html',
  '/strategies.html': '/strategies.html',
  '/analysis': '/market-analysis.html',
  '/analysis.html': '/market-analysis.html',
  '/market-analysis': '/market-analysis.html',
  '/market-analysis.html': '/market-analysis.html',
  '/education': '/education.html',
  '/education.html': '/education.html',
  '/pricing': '/pricing.html',
  '/pricing.html': '/pricing.html',
  '/platform': '/platform.html',
  '/platform.html': '/platform.html',
  '/why-platform': '/platform.html',
  '/why-platform.html': '/platform.html',
  '/community': '/community.html',
  '/community.html': '/community.html',
  '/contact': '/contact.html',
  '/contact.html': '/contact.html',
  '/login': '/login.html',
  '/login.html': '/login.html',
  '/signup': '/login.html',
  '/signup.html': '/login.html',
  '/strategy-breakout-pro.html': '/strategies.html',
  '/strategy-trend-master.html': '/strategies.html',
  '/strategy-momentum-scalper.html': '/strategies.html'
};

function resolveFilePath(reqUrl) {
  let decodedPath;
  try {
    decodedPath = decodeURIComponent(reqUrl.split('?')[0]);
  } catch {
    decodedPath = reqUrl.split('?')[0];
  }

  // Normalize path
  let relativePath = path.posix.normalize(decodedPath);
  if (relativePath.startsWith('/samin-pied.vercel.app')) {
    relativePath = relativePath.replace(/^\/samin-pied\.vercel\.app/, '') || '/';
  }

  if (ROUTE_MAP[relativePath]) {
    relativePath = ROUTE_MAP[relativePath];
  }

  // If path doesn't have an extension and isn't root, check if adding .html finds a file
  if (!path.extname(relativePath) && relativePath !== '/') {
    const candidateWithHtml = path.normalize(path.join(PRIMARY_DIR, relativePath + '.html'));
    if (candidateWithHtml.startsWith(PRIMARY_DIR) && fs.existsSync(candidateWithHtml) && fs.statSync(candidateWithHtml).isFile()) {
      return candidateWithHtml;
    }
  }

  // Try primary directory first (samin-pied.vercel.app)
  const candidatePrimary = path.normalize(path.join(PRIMARY_DIR, relativePath));
  if (candidatePrimary.startsWith(PRIMARY_DIR) && fs.existsSync(candidatePrimary) && fs.statSync(candidatePrimary).isFile()) {
    return candidatePrimary;
  }

  // Try fallback directory (root)
  const candidateFallback = path.normalize(path.join(FALLBACK_DIR, relativePath));
  if (candidateFallback.startsWith(FALLBACK_DIR) && fs.existsSync(candidateFallback) && fs.statSync(candidateFallback).isFile()) {
    return candidateFallback;
  }

  // If path was a folder, check for index.html
  const dirIndex = path.normalize(path.join(PRIMARY_DIR, relativePath, 'index.html'));
  if (dirIndex.startsWith(PRIMARY_DIR) && fs.existsSync(dirIndex) && fs.statSync(dirIndex).isFile()) {
    return dirIndex;
  }

  return null;
}

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-razorpay-signature');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Handle /api/* serverless routes
  if (pathname.startsWith('/api/')) {
    const handler = API_ROUTES[pathname];
    if (!handler) {
      res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ error: `API endpoint not found: ${pathname}` }));
      return;
    }

    // Attach Express/Vercel-like helpers to res
    res.status = function (code) {
      res.statusCode = code;
      return res;
    };
    res.json = function (obj) {
      if (!res.headersSent) {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
      }
      res.end(JSON.stringify(obj));
    };

    req.query = parsedUrl.query || {};

    let rawBody = '';
    req.on('data', (chunk) => {
      rawBody += chunk;
    });

    req.on('end', async () => {
      req.rawBody = rawBody;
      if (rawBody && req.headers['content-type'] && req.headers['content-type'].includes('application/json')) {
        try {
          req.body = JSON.parse(rawBody);
        } catch {
          req.body = {};
        }
      } else {
        req.body = {};
      }

      try {
        await handler(req, res);
      } catch (err) {
        console.error(`Error executing ${pathname}:`, err);
        if (!res.writableEnded) {
          res.status(500).json({ error: err.message || 'Internal Server Error' });
        }
      }
    });
    return;
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
    return;
  }

  let filePath = resolveFilePath(req.url);

  if (!filePath) {
    // If route doesn't match an asset, fallback to index.html
    const fallbackIndex = path.join(PRIMARY_DIR, 'index.html');
    if (fs.existsSync(fallbackIndex)) {
      filePath = fallbackIndex;
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>404 Not Found</h1><p>Requested path was not found on this local server.</p>');
      return;
    }
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const rangeHeader = req.headers.range;

    // Support HTTP Range requests for video/audio streaming
    if (rangeHeader && (ext === '.mp4' || ext === '.webm' || ext === '.ogg' || ext === '.mp3')) {
      const parts = rangeHeader.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;

      if (start >= stats.size || end >= stats.size || start > end) {
        res.writeHead(416, {
          'Content-Range': `bytes */${stats.size}`
        });
        res.end();
        return;
      }

      const chunkSize = (end - start) + 1;
      const fileStream = fs.createReadStream(filePath, { start, end });

      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${stats.size}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize,
        'Content-Type': contentType,
      });

      if (req.method === 'HEAD') {
        res.end();
      } else {
        fileStream.pipe(res);
      }
    } else {
      res.writeHead(200, {
        'Content-Length': stats.size,
        'Content-Type': contentType,
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'no-cache'
      });

      if (req.method === 'HEAD') {
        res.end();
      } else {
        fs.createReadStream(filePath).pipe(res);
      }
    }
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`TRADELAB multi-page server running at:`);
  console.log(`  > Local:   http://localhost:${PORT}/`);
  console.log(`  > Network: http://127.0.0.1:${PORT}/`);
  console.log(`Pages:`);
  console.log(`  1. Home:       http://localhost:${PORT}/`);
  console.log(`  2. Strategies: http://localhost:${PORT}/strategies`);
  console.log(`  3. Analysis:   http://localhost:${PORT}/analysis`);
  console.log(`  4. Education:  http://localhost:${PORT}/education`);
  console.log(`  5. Pricing:    http://localhost:${PORT}/pricing`);
  console.log(`  6. Platform:   http://localhost:${PORT}/platform`);
  console.log(`  7. Community:  http://localhost:${PORT}/community`);
  console.log(`  8. Contact:    http://localhost:${PORT}/contact`);
  console.log(`  9. Login:      http://localhost:${PORT}/login`);
  console.log(`Razorpay (TEST MODE):`);
  console.log(`  > Config:       http://localhost:${PORT}/api/config`);
  console.log(`  > Create Order: POST http://localhost:${PORT}/api/create-order`);
  console.log(`  > Verify:       POST http://localhost:${PORT}/api/verify-payment`);
  console.log(`  > Webhook:      POST http://localhost:${PORT}/api/webhook`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is in use. Retrying on port ${PORT + 1}...`);
    server.listen(PORT + 1, '127.0.0.1');
  } else {
    console.error('Server error:', err);
  }
});
