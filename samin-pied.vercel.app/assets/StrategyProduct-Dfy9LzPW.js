function E(i) {
  if (!i) return;
  const g = [
    "Defined algorithmic execution rules",
    "Precision entry trigger conditions",
    "Multi-target dynamic exit framework",
    "Real-time risk & position sizing engine",
    "Automated pre-flight trade validation checklist",
    "Institutional order flow & liquidity sweep telemetry",
    "Interactive video breakdown walkthroughs",
    "Continuous quantitative firmware updates",
  ];
  i.innerHTML = `
    <div class="container">
      <div class="premium-product-card">
        <!-- Left Column: Strategy Info & Benefits -->
        <div class="premium-product-left">
          <div class="hero-badge-wrap">
            <span class="tag-badge" style="background: rgba(245, 158, 11,0.12); border-color: var(--neon-green); margin-bottom: 18px;">
              <span class="tag-dot"></span>
              INSTITUTIONAL QUANTITATIVE SUITE
            </span>
          </div>
          <h2 class="heading-lg" style="color: #FFFFFF; font-weight: 800; margin-bottom: 18px; line-height: 1.15;">
            Master Market Structure With<br/>
            <span class="hero-title-gradient" style="background: linear-gradient(135deg, #FFFFFF 20%, #9DD82C 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; display: inline-block;">Systematic Precision.</span>
          </h2>
          <p class="text-lead" style="font-size: 1.05rem; margin-bottom: 28px; max-width: 580px;">
            Harness professional-grade trading frameworks integrating algorithmic liquidity tracking, mathematically sound risk management, and rigorous trade execution rules.
          </p>

          <div class="premium-bullets-grid">
            ${g
              .map(
                (e) => `
              <div class="premium-bullet-row">
                <span class="bullet-check-icon" aria-hidden="true">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>${e}</span>
              </div>
            `
              )
              .join("")}
          </div>

          <div style="display: flex; flex-wrap: wrap; gap: 16px; margin-top: 24px;">
            <a href="#pricing" class="btn btn-primary btn-lg" id="btn-get-strategy">
              <span>Deploy Strategy Suite</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#faq" class="btn btn-secondary btn-lg">
              <span>Technical Specs</span>
            </a>
          </div>
        </div>

        <!-- Right Column: Interactive 3D Animated Terminal Card -->
        <div class="terminal-3d-stage">
          <!-- Holographic 3D Floating Rings in Background -->
          <div class="terminal-ambient-sphere" aria-hidden="true"></div>
          <div class="terminal-grid-plane" aria-hidden="true"></div>

          <!-- The 3D Interactive Tilt Card -->
          <div class="terminal-3d-card" id="interactive-framework-card">
            <!-- Animated Top Laser Border Beam -->
            <div class="terminal-laser-beam" aria-hidden="true"></div>
            <!-- Glass Gloss Reflection Shimmer -->
            <div class="terminal-glass-glare" id="terminal-glass-glare" aria-hidden="true"></div>

            <!-- Terminal Header -->
            <div class="terminal-header-3d">
              <div class="terminal-title-left">
                <span class="terminal-pulse-orb"></span>
                <span class="terminal-exe-name">TRADELAB_FRAMEWORK_v3.4.exe</span>
              </div>
              <div class="terminal-license-pill">
                <span class="license-dot"></span>
                <span class="license-txt">[ACTIVE LICENSE]</span>
              </div>
            </div>

            <!-- 3D Layer 1: Strategy Module Selector -->
            <div class="terminal-layer-card layer-module" id="module-trigger-card">
              <div class="layer-header-row">
                <div class="layer-label-mono">CURRENT STRATEGY MODULE</div>
                <div class="layer-badge-enabled">
                  <span class="live-blinker"></span>
                  <span>ENABLED</span>
                </div>
              </div>
              <div class="layer-module-name" id="active-module-title">Market Structure & Liquidity Model</div>
              <div class="layer-module-meta">
                <span class="meta-tag">TIMEFRAME: 15M / 1H / 4H</span>
                <span class="meta-tag">TYPE: SWEEP & BOS</span>
              </div>
            </div>

            <!-- 3D Layer 2: Real-time Risk Calculator Engine -->
            <div class="terminal-layer-card layer-risk">
              <div class="layer-header-row">
                <div class="layer-label-mono">RISK CALCULATOR ENGINE</div>
                <div class="math-discipline-badge">MATH DISCIPLINE</div>
              </div>
              <div class="risk-stats-grid-2col">
                <div class="risk-col-cell">
                  <div class="risk-lbl-mono">Portfolio Heat:</div>
                  <div class="risk-val-row">
                    <span class="risk-val-green" id="framework-heat-val">0.85%</span>
                    <span class="risk-sub-green">(Optimal)</span>
                  </div>
                </div>
                <div class="risk-col-cell">
                  <div class="risk-lbl-mono">Target R:R:</div>
                  <div class="risk-val-row">
                    <span class="risk-val-cyan" id="framework-rr-val">1 : 3.4</span>
                    <span class="risk-sub-cyan">(High Asymmetry)</span>
                  </div>
                </div>
              </div>
              <!-- Risk Meter Bar with Glowing Gradient & Notch -->
              <div class="risk-meter-track-v2">
                <div class="risk-meter-fill-v2">
                  <span class="risk-meter-pin"></span>
                </div>
              </div>
              <!-- Bottom Legend Row -->
              <div class="risk-meter-bottom-legend">
                <span class="legend-low">0.00% LOW RISK</span>
                <span class="legend-cur">CURRENT: 0.85%</span>
                <span class="legend-max">MAX CAP: 1.50%</span>
              </div>
            </div>

            <!-- 3D Layer 3: Interactive Verification Checklist -->
            <div class="terminal-layer-card layer-checklist">
              <div class="layer-header-row">
                <div class="layer-label-mono">TRADE CHECKLIST STATUS</div>
                <span class="checklist-score" id="checklist-counter">4/4 VERIFIED</span>
              </div>
              <div class="checklist-items-group">
                <div class="checklist-item-animated verified">
                  <span class="check-icon-box">✓</span>
                  <span class="check-text">High-Timeframe Bias Confirmed</span>
                </div>
                <div class="checklist-item-animated verified">
                  <span class="check-icon-box">✓</span>
                  <span class="check-text">Liquidity Sweep & Displacement Verified</span>
                </div>
                <div class="checklist-item-animated verified">
                  <span class="check-icon-box">✓</span>
                  <span class="check-text">Fair Value Gap (FVG) Retest Confluence</span>
                </div>
              </div>
            </div>

            <!-- 3D Layer 4: Real-time Telemetry Stream Output -->
            <div class="terminal-console-stream">
              <div class="console-header-mini">
                <span class="console-prompt">&gt; ENGINE LOGS:</span>
                <span class="console-freq">428 op/sec</span>
              </div>
              <div class="console-line-ticker" id="console-stream-text">
                [OK] Liquidity mapped at $64,850.00 | Execution risk 0.85% verified | Order ready...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  const a = i.querySelector("#interactive-framework-card"),
    s = i.querySelector("#terminal-glass-glare"),
    l = i.querySelector("#framework-heat-val"),
    n = i.querySelector("#framework-rr-val"),
    t = i.querySelector("#console-stream-text");
  if (a) {
    let e;
    const u = () => {
        (e = a.getBoundingClientRect()),
          (a.style.transition =
            "transform 0.1s ease-out, box-shadow 0.3s ease");
      },
      h = (d) => {
        e || (e = a.getBoundingClientRect());
        const c = d.clientX - e.left,
          p = d.clientY - e.top,
          v = e.width / 2,
          m = e.height / 2,
          k = ((p - m) / m) * -12,
          f = ((c - v) / v) * 14;
        if (
          ((a.style.transform = `perspective(1000px) rotateX(${k}deg) rotateY(${f}deg) translateZ(10px) scale(1.02)`),
          s)
        ) {
          const b = (c / e.width) * 100,
            x = (p / e.height) * 100;
          (s.style.background = `radial-gradient(circle at ${b}% ${x}%, rgba(255,255,255,0.18) 0%, rgba(245, 158, 11,0.06) 40%, transparent 75%)`),
            (s.style.opacity = "1");
        }
      },
      y = () => {
        (a.style.transition =
          "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease"),
          (a.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)"),
          s && (s.style.opacity = "0");
      };
    a.addEventListener("mouseenter", u),
      a.addEventListener("mousemove", h),
      a.addEventListener("mouseleave", y);
  }
  const o = [
    "[OK] Liquidity mapped at $64,850.00 | Execution risk 0.85% verified | Order ready...",
    "[FEED] Orderbook imbalance detected (+14.2% Delta) | BOS confirmed on 15M...",
    "[TELEMETRY] Trailing stop updated to $63,200.00 | Profit target unlocked...",
    "[CHECK] Multi-timeframe trend alignment verified across 15M / 1H / 4H...",
    "[ALGO] Spread 0.01% tight | Sub-millisecond latency connection active...",
  ];
  let r = 0;
  setInterval(() => {
    if (l) {
      const e = (0.8 + Math.random() * 0.1).toFixed(2);
      l.textContent = `${e}%`;
    }
    if (n) {
      const e = (3.35 + Math.random() * 0.2).toFixed(1);
      n.textContent = `1 : ${e}`;
    }
    t &&
      ((r = (r + 1) % o.length),
      (t.style.opacity = "0"),
      setTimeout(() => {
        (t.textContent = o[r]), (t.style.opacity = "1");
      }, 200));
  }, 2600);
}
export { E as r };
