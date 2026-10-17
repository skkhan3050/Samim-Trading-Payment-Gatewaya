(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) o(i);
  new MutationObserver((i) => {
    for (const r of i)
      if (r.type === "childList")
        for (const s of r.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && o(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(i) {
    const r = {};
    return (
      i.integrity && (r.integrity = i.integrity),
      i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function o(i) {
    if (i.ep) return;
    i.ep = !0;
    const r = m(i);
    fetch(i.href, r);
  }
})();
if (!window.getSiteCurrency) {
  window.getSiteCurrency = function () {
    try {
      return localStorage.getItem("preferred_currency") || "INR";
    } catch {
      return "INR";
    }
  };
  window.setSiteCurrency = function (curr) {
    try {
      localStorage.setItem("preferred_currency", curr);
    } catch {}
    window.dispatchEvent(
      new CustomEvent("currencyChange", { detail: { currency: curr } })
    );
  };
}
function w(a) {
  if (!a) return;
  const curr = window.getSiteCurrency ? window.getSiteCurrency() : "INR";
  const t = window.location.pathname.toLowerCase(),
    isHome = t === "/" || t === "" || t.endsWith("/index.html") || t.endsWith("/home"),
    isStrategies = t.includes("strategies"),
    isAnalysis = t.includes("analysis"),
    isEducation = t.includes("education"),
    isPricing = t.includes("pricing"),
    isPlatform = t.includes("platform"),
    isCommunity = t.includes("community"),
    isContact = t.includes("contact"),
    isLogin = t.includes("login");
  a.innerHTML = `
    <div class="container header-inner">
      <!-- Brand Logo -->
      <a href="/" class="brand-logo" id="header-brand-logo">
        <img class="brand-logo-icon" src="/assets/golds-blue-logo.png" alt="Golds Blue Logo" width="36" height="36" style="width: 36px; height: 36px; object-fit: contain; border-radius: 50%; display: inline-block; vertical-align: middle;"/>
        <span>Golds Blue</span>
        <span class="tag-badge" style="font-size: 0.65rem; padding: 2px 8px; margin-left: 4px; border-color: rgba(16, 185, 129, 0.4);">Signal</span>
      </a>

      <!-- Desktop Navigation -->
      <nav class="nav-desktop" aria-label="Main Navigation">
        <div class="nav-item ${isHome ? "active" : ""}">
          <a href="/" class="nav-link">Home</a>
        </div>

        <div class="nav-item ${isStrategies ? "active" : ""}">
          <a href="/strategies" class="nav-link has-dropdown">
            <span>Strategies</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </a>
          <!-- Strategies Mega Menu -->
          <div class="mega-menu">
            <div>
              <div class="mega-col-title">Individual Strategies</div>
              <a href="/strategies#strategy-products" class="mega-item">
                <span class="mega-item-title">Breakout Pro Engine</span>
                <span class="mega-item-desc">High-volatility range expansion model</span>
              </a>
              <a href="/strategies#strategy-products" class="mega-item">
                <span class="mega-item-title">Trend Following Master</span>
                <span class="mega-item-desc">Multi-timeframe trend alignment</span>
              </a>
              <a href="/strategies#strategy-products" class="mega-item">
                <span class="mega-item-title">Momentum Scalper FX/Crypto</span>
                <span class="mega-item-desc">Liquidity sweeps & rapid execution</span>
              </a>
            </div>
            <div>
              <div class="mega-col-title">Strategy Frameworks</div>
              <a href="/strategies#strategy-products" class="mega-item">
                <span class="mega-item-title">All Trading Strategies</span>
                <span class="mega-item-desc">Browse complete strategy catalog</span>
              </a>
              <a href="/strategies#trading-process" class="mega-item">
                <span class="mega-item-title">Execution Framework</span>
                <span class="mega-item-desc">4-step disciplined trading process</span>
              </a>
            </div>
            <div>
              <div class="mega-col-title">Platform & Analytics</div>
              <a href="/platform" class="mega-item">
                <span class="mega-item-title">Why Platform</span>
                <span class="mega-item-desc">Institutional infrastructure & proxies</span>
              </a>
              <a href="/community" class="mega-item">
                <span class="mega-item-title">Trader Community</span>
                <span class="mega-item-desc">Live leaderboards & trader network</span>
              </a>
            </div>
          </div>
        </div>

        <div class="nav-item ${isAnalysis ? "active" : ""}">
          <a href="/analysis" class="nav-link">Analysis</a>
        </div>

        <div class="nav-item ${isEducation ? "active" : ""}">
          <a href="/education" class="nav-link">Education</a>
        </div>

        <div class="nav-item ${isPricing ? "active" : ""}">
          <a href="/pricing" class="nav-link">Pricing</a>
        </div>

        <div class="nav-item ${isPlatform ? "active" : ""}">
          <a href="/platform" class="nav-link">Platform</a>
        </div>

        <div class="nav-item ${isCommunity ? "active" : ""}">
          <a href="/community" class="nav-link">Community</a>
        </div>

        <div class="nav-item ${isContact ? "active" : ""}">
          <a href="/contact" class="nav-link">Contact</a>
        </div>
      </nav>

      <!-- Right Action Items -->
      <div class="header-actions">
        <!-- Header Currency Switcher (USD / INR) -->
        <div class="header-curr-pill" id="header-curr-pill" title="Toggle Currency (USD / INR)">
          <button type="button" class="header-curr-opt ${curr === "INR" ? "active" : ""}" data-set-curr="INR">
            <span>₹ INR</span>
          </button>
          <button type="button" class="header-curr-opt ${curr === "USD" ? "active" : ""}" data-set-curr="USD">
            <span>$ USD</span>
          </button>
        </div>

        <a href="/login" class="login-nav-btn ${isLogin ? "active" : ""}" id="nav-login-btn">Log In</a>
        <a href="/strategies" class="btn btn-primary btn-sm" id="nav-explore-btn" style="background: #9DD82C; color: #050B14; font-weight: 700;">Explore Strategies</a>
        <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Open Navigation Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div class="mobile-drawer" id="mobile-drawer">
      <ul class="mobile-nav-list">
        <li><a href="/" class="mobile-nav-link ${isHome ? "active" : ""}">Home</a></li>
        <li><a href="/strategies" class="mobile-nav-link ${isStrategies ? "active" : ""}">Strategies</a></li>
        <li><a href="/strategies#strategy-products" class="mobile-nav-link" style="padding-left: 1rem; font-size: 0.9rem;">→ Breakout Pro Detail</a></li>
        <li><a href="/strategies#strategy-products" class="mobile-nav-link" style="padding-left: 1rem; font-size: 0.9rem;">→ Trend Master Detail</a></li>
        <li><a href="/strategies#strategy-products" class="mobile-nav-link" style="padding-left: 1rem; font-size: 0.9rem;">→ Momentum Scalper Detail</a></li>
        <li><a href="/analysis" class="mobile-nav-link ${isAnalysis ? "active" : ""}">Analysis</a></li>
        <li><a href="/education" class="mobile-nav-link ${isEducation ? "active" : ""}">Education</a></li>
        <li><a href="/pricing" class="mobile-nav-link ${isPricing ? "active" : ""}">Pricing</a></li>
        <li><a href="/platform" class="mobile-nav-link ${isPlatform ? "active" : ""}">Platform</a></li>
        <li><a href="/community" class="mobile-nav-link ${isCommunity ? "active" : ""}">Community</a></li>
        <li><a href="/contact" class="mobile-nav-link ${isContact ? "active" : ""}">Contact</a></li>
        <li><a href="/login" class="mobile-nav-link ${isLogin ? "active" : ""}" style="color: #9DD82C; font-weight: 700;">🔐 Log In to Portal</a></li>
      </ul>
      <div style="margin-top: auto; display: flex; flex-direction: column; gap: 10px;">
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px;">
          <span style="font-size: 0.85rem; color: #94A3B8; font-weight: 600;">Currency:</span>
          <div class="header-curr-pill">
            <button type="button" class="header-curr-opt ${curr === "INR" ? "active" : ""}" data-set-curr="INR">
              <span>₹ INR</span>
            </button>
            <button type="button" class="header-curr-opt ${curr === "USD" ? "active" : ""}" data-set-curr="USD">
              <span>$ USD</span>
            </button>
          </div>
        </div>
        <a href="/login" class="btn btn-secondary" style="width: 100%; border-color: rgba(255,255,255,0.2); font-weight: 600;">Log In to Portal</a>
        <a href="/strategies" class="btn btn-primary" style="width: 100%; background: #9DD82C; color: #050B14; font-weight: 700;">Explore Strategies</a>
      </div>
    </div>
  `;
  const f = a,
    c = a.querySelector("#mobile-menu-toggle"),
    d = a.querySelector("#mobile-drawer"),
    u = a.querySelectorAll(".mobile-nav-link");

  if (d && d.parentElement === a) {
    document.body.appendChild(d);
  }

  // Header currency switcher listeners
  document.querySelectorAll(".header-curr-opt").forEach((btn) => {
    btn.addEventListener("click", (ev) => {
      ev.preventDefault();
      const chosen = btn.getAttribute("data-set-curr");
      if (window.setSiteCurrency) {
        window.setSiteCurrency(chosen);
      }
    });
  });
  window.addEventListener("currencyChange", (ev) => {
    const newCurr = ev.detail.currency;
    document.querySelectorAll(".header-curr-opt").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-set-curr") === newCurr);
    });
  });

  window.addEventListener("scroll", () => {
    window.scrollY > 20
      ? f.classList.add("scrolled")
      : f.classList.remove("scrolled");
  });
  const e = () => {
    d.classList.toggle("open");
    const n = d.classList.contains("open");
    document.body.style.overflow = n ? "hidden" : "";
    c.innerHTML = n
      ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
      : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
  };
  c == null || c.addEventListener("click", e);
  u.forEach((n) => {
    n.addEventListener("click", () => {
      d.classList.remove("open");
      document.body.style.overflow = "";
      if (c) {
        c.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
      }
    });
  });
}
function b(a) {
  a &&
    (a.innerHTML = `
    <div class="container">
      <!-- 5-Column Grid -->
      <div class="footer-top-grid">
        <!-- Col 1: Brand -->
        <div class="footer-brand-col">
          <a href="/" class="brand-logo">
            <img class="brand-logo-icon" src="/assets/golds-blue-logo.png" alt="Golds Blue Logo" width="36" height="36" style="width: 36px; height: 36px; object-fit: contain; border-radius: 50%; display: inline-block; vertical-align: middle;"/>
            <span>Golds Blue</span>
          </a>

          <p class="footer-brand-desc">
            Structured crypto trading strategies, technical market analysis, and disciplined risk management education for serious traders.
          </p>

          <a href="/strategies" class="btn btn-primary btn-sm" style="align-self: flex-start;">
            <span>Explore Strategies</span>
          </a>

          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px;">
            <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted); background: rgba(255,255,255,0.03); padding: 4px 8px; border-radius: 4px; border: 1px solid var(--border-subtle);">📊 Price Action</span>
            <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted); background: rgba(255,255,255,0.03); padding: 4px 8px; border-radius: 4px; border: 1px solid var(--border-subtle);">🛡️ Risk-First</span>
            <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted); background: rgba(255,255,255,0.03); padding: 4px 8px; border-radius: 4px; border: 1px solid var(--border-subtle);">⚡ Systematic</span>
          </div>
        </div>

        <!-- Col 2: Trading Strategies -->
        <div>
          <div class="footer-col-title">Strategies</div>
          <ul class="footer-links-list">
            <li><a href="/strategies" class="footer-link">All Strategies</a></li>
            <li><a href="/strategies#strategy-products" class="footer-link">Breakout Pro Engine</a></li>
            <li><a href="/strategies#strategy-products" class="footer-link">Trend Following Master</a></li>
            <li><a href="/strategies#strategy-products" class="footer-link">Momentum Scalper</a></li>
            <li><a href="/analysis" class="footer-link">Market Analysis</a></li>
            <li><a href="/platform" class="footer-link">Trading Tools</a></li>
          </ul>
        </div>

        <!-- Col 3: Education -->
        <div>
          <div class="footer-col-title">Education</div>
          <ul class="footer-links-list">
            <li><a href="/education" class="footer-link">Academy Overview</a></li>
            <li><a href="/education" class="footer-link">Technical Analysis</a></li>
            <li><a href="/education" class="footer-link">Risk Management</a></li>
            <li><a href="/education" class="footer-link">Trading Psychology</a></li>
            <li><a href="/strategies#trading-process" class="footer-link">4-Step Execution Flow</a></li>
          </ul>
        </div>

        <!-- Col 4: Community & Support -->
        <div>
          <div class="footer-col-title">Community</div>
          <ul class="footer-links-list">
            <li><a href="/community" class="footer-link">Trader Network</a></li>
            <li><a href="/community#leaderboard" class="footer-link">Live Leaderboard</a></li>
            <li><a href="/platform#residential-proxies" class="footer-link">Residential Proxies</a></li>
            <li><a href="/contact" class="footer-link">Contact & Consultation</a></li>
            <li><a href="/contact" class="footer-link">Book Strategy Demo</a></li>
          </ul>
        </div>

        <!-- Col 5: Company -->
        <div>
          <div class="footer-col-title">Company</div>
          <ul class="footer-links-list">
            <li><a href="/platform" class="footer-link">About TRADELAB</a></li>
            <li><a href="/platform" class="footer-link">Our Methodology</a></li>
            <li><a href="/pricing" class="footer-link">Pricing & Plans</a></li>
            <li><a href="/contact" class="footer-link">Contact Us</a></li>
            <li><a href="#risk-disclaimer" class="footer-link">Risk Disclaimer</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <div class="footer-social-links">
          <!-- WhatsApp -->
          <a href="https://wa.me/918274053977" target="_blank" rel="noopener noreferrer" class="social-icon-link" aria-label="WhatsApp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
            </svg>
          </a>
          <!-- Instagram -->
          <a href="https://instagram.com/goldsblue3?utm_source=qr&xtok=emdpamM3Z2pxeTFy" target="_blank" rel="noopener noreferrer" class="social-icon-link" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <!-- Facebook -->
          <a href="#" class="social-icon-link" aria-label="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <!-- Telegram -->
          <a href="https://t.me/Goldsblue2057" target="_blank" rel="noopener noreferrer" class="social-icon-link" aria-label="Telegram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </a>
          <!-- YouTube -->
          <a href="https://youtube.com/@goldsblue?si=xCcdltjh1aXwYfgZ" target="_blank" rel="noopener noreferrer" class="social-icon-link" aria-label="YouTube">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </a>
        </div>

        <div class="footer-legal-links">
          <a href="contact.html">Privacy Policy</a>
          <a href="contact.html">Terms of Use</a>
          <a href="contact.html">Risk Disclosure</a>
          <a href="contact.html">Cookie Preferences</a>
        </div>

        <div class="footer-copyright">
          © 2026 TRADELAB Technologies Inc. All rights reserved.
        </div>
      </div>
    </div>
  `);
}
function C() {
  const a = document.getElementById("trading-matrix-canvas");
  if (!a) return;
  const t = a.getContext("2d", { alpha: !0 });
  let m,
    o = (a.width = window.innerWidth),
    i = (a.height = window.innerHeight);
  const r = () => {
    (o = a.width = window.innerWidth), (i = a.height = window.innerHeight);
  };
  window.addEventListener("resize", r, { passive: !0 });
  const s = window.innerWidth < 768,
    g = s ? 24 : 45,
    h = [
      { r: 245, g: 158, b: 11 },
      { r: 59, g: 130, b: 246 },
      { r: 148, g: 163, b: 184 },
    ],
    l = Array.from({ length: g }, () => {
      const d = h[Math.floor(Math.random() * h.length)];
      return {
        x: Math.random() * o,
        y: Math.random() * i,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        radius: Math.random() * 1.5 + 0.8,
        color: d,
        baseAlpha: Math.random() * 0.25 + 0.1,
      };
    }),
    f = Array.from({ length: s ? 3 : 7 }, () => ({
      x: Math.random() * o,
      y: Math.random() * i,
      vy: -0.08,
      text: [
        "BTC/USDT",
        "ETH/USDT",
        "R:R 1:3.2",
        "ORDER BLOCK",
        "LIQUIDITY SWEEP",
        "RISK 1.0%",
      ][Math.floor(Math.random() * 6)],
      alpha: Math.random() * 0.12 + 0.05,
    }));
  function c() {
    t.clearRect(0, 0, o, i);
    const d = 80;
    (t.strokeStyle = "rgba(255, 255, 255, 0.015)"), (t.lineWidth = 1);
    for (let e = 0; e < o; e += d)
      t.beginPath(), t.moveTo(e, 0), t.lineTo(e, i), t.stroke();
    for (let e = 0; e < i; e += d)
      t.beginPath(), t.moveTo(0, e), t.lineTo(o, e), t.stroke();
    t.font = '500 10px "JetBrains Mono", monospace';
    for (const e of f)
      (e.y += e.vy),
        e.y < -20 && ((e.y = i + 20), (e.x = Math.random() * o)),
        (t.fillStyle = `rgba(148, 163, 184, ${e.alpha})`),
        t.fillText(e.text, e.x, e.y);
    const u = s ? 100 : 140;
    for (let e = 0; e < l.length; e++)
      for (let n = e + 1; n < l.length; n++) {
        const v = l[e].x - l[n].x,
          p = l[e].y - l[n].y,
          y = Math.sqrt(v * v + p * p);
        if (y < u) {
          const k = 1 - y / u,
            x = k * 0.08;
          t.beginPath(),
            t.moveTo(l[e].x, l[e].y),
            t.lineTo(l[n].x, l[n].y),
            (t.strokeStyle = `rgba(${l[e].color.r}, ${l[e].color.g}, ${l[e].color.b}, ${x})`),
            (t.lineWidth = k * 1),
            t.stroke();
        }
      }
    for (const e of l)
      (e.x += e.vx),
        (e.y += e.vy),
        (e.x < 0 || e.x > o) && (e.vx *= -1),
        (e.y < 0 || e.y > i) && (e.vy *= -1),
        t.beginPath(),
        t.arc(e.x, e.y, e.radius, 0, Math.PI * 2),
        (t.fillStyle = `rgba(${e.color.r}, ${e.color.g}, ${e.color.b}, ${e.baseAlpha})`),
        t.fill();
    m = requestAnimationFrame(c);
  }
  return (
    c(),
    () => {
      cancelAnimationFrame(m), window.removeEventListener("resize", r);
    }
  );
}
export { b as a, C as i, w as r };
