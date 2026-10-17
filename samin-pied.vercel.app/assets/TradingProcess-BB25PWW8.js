function t(s) {
  if (!s) return;
  const i = [
    {
      num: "01",
      stepTag: "STEP 01",
      badge: "MARKET SCAN",
      title: "Analyze",
      accentColor: "#00E5FF",
      desc: "Study multi-timeframe market structure, macro trend context, liquidity pools, and orderflow imbalances before considering any position.",
      icon: `
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#00E5FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="9" stroke-dasharray="3 3"/>
          <line x1="12" y1="3" x2="12" y2="12"/>
          <line x1="12" y1="12" x2="18" y2="15"/>
          <circle cx="12" cy="12" r="2.5" fill="#00E5FF"/>
        </svg>
      `,
      tags: ["Structure Mapping", "Liquidity Zones", "Volume Profile"],
    },
    {
      num: "02",
      stepTag: "STEP 02",
      badge: "TRIGGER MATRIX",
      title: "Plan",
      accentColor: "#F59E0B",
      desc: "Define crystal-clear entry confirmations, exact invalidation levels (stop loss), and staggered take-profit milestones with a minimum 1:3 R:R.",
      icon: `
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="22" y1="12" x2="18" y2="12"/>
          <line x1="6" y1="12" x2="2" y2="12"/>
          <line x1="12" y1="6" x2="12" y2="2"/>
          <line x1="12" y1="22" x2="12" y2="18"/>
          <circle cx="12" cy="12" r="3" fill="rgba(245, 158, 11, 0.2)"/>
        </svg>
      `,
      tags: ["Stop Loss Anchor", "R:R Ratio > 1:3", "Target Scale-Out"],
    },
    {
      num: "03",
      stepTag: "STEP 03",
      badge: "RISK PROTOCOL",
      title: "Manage Risk",
      accentColor: "#F59E0B",
      desc: "Calculate dynamic position sizing based strictly on your account risk budget (e.g. 1.0% max capital risk) before placing any execution order.",
      icon: `
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(245, 158, 11, 0.12)"/>
          <polyline points="9 12 11 14 15 10" stroke="#F59E0B" stroke-width="2.2"/>
        </svg>
      `,
      tags: ["1.0% Risk Cap", "Auto Position Size", "Drawdown Shield"],
    },
    {
      num: "04",
      stepTag: "STEP 04",
      badge: "AUTOMATED FLOW",
      title: "Execute",
      accentColor: "#38E879",
      desc: "Execute with zero emotional hesitation. Let mathematical edge and strict invalidation rules play out without premature manual tampering.",
      icon: `
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#38E879" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="rgba(56, 232, 121, 0.15)"/>
        </svg>
      `,
      tags: ["Disciplined Entry", "No FOMO Trading", "Post-Trade Log"],
    },
  ];
  s.innerHTML = `
    <!-- Process Ambient Background Video -->
    <div class="process-video-bg-container" aria-hidden="true">
      <video class="process-bg-video" autoplay loop muted playsinline preload="auto">
        <source src="./process-bg-video.mp4" type="video/mp4" />
      </video>
      <div class="process-video-overlay"></div>
    </div>

    <div class="container process-container-relative">
      <div class="intro-section process-intro-wrap">
        <span class="tag-label">
          <span class="tag-dot"></span>
          EXECUTION METHODOLOGY
        </span>
        <h2 class="heading-lg">
          A Structured Approach to Crypto Trading
        </h2>
        <p class="text-lead intro-desc">
          Replace impulsive emotional guesswork with a battle-tested, systematic 4-step execution workflow.
        </p>
      </div>

      <!-- Process Interactive Stepper Progress Bar -->
      <div class="process-pipeline-indicator" aria-hidden="true">
        <div class="pipeline-track">
          <div class="pipeline-glow-pulse"></div>
        </div>
      </div>

      <!-- 4 High-Tech Process Cards -->
      <div class="process-grid">
        ${i
          .map(
            (e) => `
          <div class="process-card" style="--step-accent: ${e.accentColor}">
            
            <!-- Watermark Step Number Background -->
            <span class="process-watermark-num">${e.num}</span>

            <!-- Top Header Area: Step Pill + Graphic Icon -->
            <div class="process-card-header">
              <div class="process-icon-box" style="border-color: ${
                e.accentColor
              }33; background: ${e.accentColor}12;">
                ${e.icon}
              </div>
              <div class="process-badge-group">
                <span class="process-step-num">${e.stepTag}</span>
                <span class="process-micro-badge" style="color: ${
                  e.accentColor
                }; border-color: ${e.accentColor}40;">${e.badge}</span>
              </div>
            </div>

            <!-- Title & Description -->
            <div class="process-card-body">
              <h3 class="process-step-title">${e.title}</h3>
              <p class="process-step-desc">${e.desc}</p>
            </div>

            <!-- Feature Tags Checklist Row -->
            <div class="process-tags-list">
              ${e.tags
                .map(
                  (o) => `
                <span class="process-feature-pill">
                  <span class="pill-bullet" style="background: ${e.accentColor}"></span>
                  ${o}
                </span>
              `
                )
                .join("")}
            </div>

            <!-- Bottom Glowing Accent Line -->
            <div class="process-card-bottom-bar" style="background: linear-gradient(90deg, transparent, ${
              e.accentColor
            }, transparent);"></div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}
export { t as r };
