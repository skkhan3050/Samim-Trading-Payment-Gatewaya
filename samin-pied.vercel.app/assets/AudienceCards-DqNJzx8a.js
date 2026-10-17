function o(e) {
  if (!e) return;
  const i = [
    {
      title: "Technical Analysis",
      desc: "Master chart patterns, support and resistance levels, moving average confluences, and momentum indicators.",
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>',
    },
    {
      title: "Market Structure",
      desc: "Understand how institutional order flow moves price through liquidity pools, fair value gaps, and structural shifts.",
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
    },
    {
      title: "Risk Management",
      desc: "Protect your capital with position sizing models, portfolio heat thresholds, and strict invalidation disciplines.",
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
    },
    {
      title: "Trading Psychology",
      desc: "Eliminate FOMO, revenge trading, and emotional bias by building an unshakeable trader mindset and execution routine.",
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
    },
    {
      title: "Trading Strategies",
      desc: "Step-by-step playbooks for trend trading, range breakouts, and mean reversion setups across crypto assets.",
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>',
    },
    {
      title: "Trade Management",
      desc: "Learn dynamic scaling techniques, trailing stops, and multi-tier take profit executions during active trades.",
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>',
    },
  ];
  e.innerHTML = `
    <div class="container">
      <div class="intro-section" style="margin-bottom: 20px;">
        <span class="tag-label">
          <span class="tag-dot"></span>
          CURRICULUM
        </span>
        <h2 class="heading-lg">
          Build Stronger Trading Skills
        </h2>
        <p class="text-lead intro-desc">
          Comprehensive, structured lessons designed to take you from foundational chart reading to advanced trade execution.
        </p>
      </div>

      <div class="education-grid">
        ${i
          .map(
            (t) => `
          <div class="education-card">
            <div class="education-icon-wrap">
              ${t.icon}
            </div>
            <h3 class="education-title">${t.title}</h3>
            <p class="education-desc">${t.desc}</p>
            <a href="#pricing" class="education-link">
              <span>Learn More</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}
function n(e) {
  if (!e) return;
  const i = "./assets/trader_illustration.jpg";
  e.innerHTML = `
    <!-- Main Showcase Section (Golden Accent) -->
    <div class="container" style="padding-top: 40px; padding-bottom: 40px;">
      <div class="audience-feature-hero" style="background: #162032; border: 1px solid rgba(245, 158, 11, 0.35); border-radius: 20px; padding: 48px; display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 48px; align-items: center; position: relative; overflow: hidden;">
        
        <!-- Left Side: Headline, Copy, Feature Cards & CTAs -->
        <div style="position: relative; z-index: 2;">
          <div style="margin-bottom: 16px;">
            <span class="hero-pill-badge" style="border-color: rgba(245, 158, 11, 0.4); background: rgba(245, 158, 11, 0.08); padding: 6px 14px; border-radius: 999px; font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: #F59E0B; display: inline-flex; align-items: center; gap: 8px;">
              <span style="width: 8px; height: 8px; border-radius: 50%; background: #F59E0B;"></span>
              CYBER READINESS &amp; TRADING MASTERY
            </span>
          </div>

          <h2 style="font-family: var(--font-heading); font-size: clamp(2.2rem, 3.6vw, 3.2rem); font-weight: 800; line-height: 1.12; letter-spacing: -0.03em; color: #FFFFFF; margin-bottom: 18px;">
            Built for Individual Edge.<br/>
            <span style="color: #F59E0B;">Scaled for Teams &amp; Capital.</span>
          </h2>

          <p style="color: #A3B3C9; font-size: 1.08rem; line-height: 1.65; margin-bottom: 32px; max-width: 620px;">
            Whether you are building your personal trading consistency or leading a funded account portfolio, TRADELAB provides battle-tested trading frameworks, risk intelligence, and interactive execution environments.
          </p>

          <!-- 3 Interactive Feature Cards -->
          <div style="display: flex; flex-direction: column; gap: 14px; margin-bottom: 36px;">
            
            <!-- Feature 1 -->
            <div style="background: #0B0F19; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 16px 20px; display: flex; align-items: center; gap: 16px; transition: all 0.2s;" onmouseover="this.style.borderColor='rgba(245, 158, 11, 0.6)'" onmouseout="this.style.borderColor='rgba(255, 255, 255, 0.08)'">
              <div style="width: 36px; height: 36px; border-radius: 8px; background: rgba(245, 158, 11, 0.12); border: 1px solid rgba(245, 158, 11, 0.3); display: flex; align-items: center; justify-content: center; color: #F59E0B; font-weight: 800; font-size: 1.05rem; flex-shrink: 0;">
                ✓
              </div>
              <div>
                <div style="color: #FFFFFF; font-weight: 700; font-size: 0.975rem;">Multi-Timeframe Price Action</div>
                <div style="color: #64748B; font-size: 0.825rem; margin-top: 2px;">Advanced liquidity sweep &amp; order block execution models</div>
              </div>
            </div>

            <!-- Feature 2 -->
            <div style="background: #0B0F19; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 16px 20px; display: flex; align-items: center; gap: 16px; transition: all 0.2s;" onmouseover="this.style.borderColor='rgba(245, 158, 11, 0.6)'" onmouseout="this.style.borderColor='rgba(255, 255, 255, 0.08)'">
              <div style="width: 36px; height: 36px; border-radius: 8px; background: rgba(245, 158, 11, 0.12); border: 1px solid rgba(245, 158, 11, 0.3); display: flex; align-items: center; justify-content: center; color: #F59E0B; font-weight: 800; font-size: 1.05rem; flex-shrink: 0;">
                ✓
              </div>
              <div>
                <div style="color: #FFFFFF; font-weight: 700; font-size: 0.975rem;">Strict Risk &amp; Position Sizing</div>
                <div style="color: #64748B; font-size: 0.825rem; margin-top: 2px;">Mathematical portfolio heat limits &amp; automated invalidations</div>
              </div>
            </div>

            <!-- Feature 3 -->
            <div style="background: #0B0F19; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 16px 20px; display: flex; align-items: center; gap: 16px; transition: all 0.2s;" onmouseover="this.style.borderColor='rgba(245, 158, 11, 0.6)'" onmouseout="this.style.borderColor='rgba(255, 255, 255, 0.08)'">
              <div style="width: 36px; height: 36px; border-radius: 8px; background: rgba(245, 158, 11, 0.12); border: 1px solid rgba(245, 158, 11, 0.3); display: flex; align-items: center; justify-content: center; color: #F59E0B; font-weight: 800; font-size: 1.05rem; flex-shrink: 0;">
                ✓
              </div>
              <div>
                <div style="color: #FFFFFF; font-weight: 700; font-size: 0.975rem;">24/7 Global Infrastructure</div>
                <div style="color: #64748B; font-size: 0.825rem; margin-top: 2px;">Low-latency residential trading proxy hubs in London, NYC &amp; Tokyo</div>
              </div>
            </div>

          </div>

          <!-- CTAs -->
          <div style="display: flex; gap: 16px; flex-wrap: wrap;">
            <a href="/strategies" class="btn btn-primary" style="background: #9DD82C; color: #050B14; font-weight: 700; padding: 14px 28px; border-radius: 8px; font-size: 0.95rem;">
              <span>Explore Strategy Suite</span>
              <span>→</span>
            </a>
            <a href="/pricing" class="btn btn-secondary" style="border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.04); color: #FFFFFF; font-weight: 600; padding: 14px 26px; border-radius: 8px; font-size: 0.95rem;">
              <span>Funded Account Plans</span>
            </a>
            <a href="#audience-video-showcase" class="btn btn-secondary" style="border: 1px solid rgba(245, 158, 11, 0.45); background: rgba(245, 158, 11, 0.1); color: #F59E0B; font-weight: 700; padding: 14px 24px; border-radius: 8px; font-size: 0.95rem; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s;" onmouseover="this.style.background='rgba(245, 158, 11, 0.22)'" onmouseout="this.style.background='rgba(245, 158, 11, 0.1)'">
              <span>▶ Watch Showcase Video</span>
            </a>
          </div>
        </div>

        <!-- Right Side: Clean Flat Terminal Card Frame with Vector Illustration -->
        <div style="position: relative; display: flex; justify-content: center; align-items: center; z-index: 2;">
          
          <div style="width: 100%; border-radius: 16px; border: 1px solid rgba(245, 158, 11, 0.4); background: #0B0F19; overflow: hidden; position: relative;">
            
            <!-- Terminal Card Top Bar -->
            <div style="background: #111927; padding: 12px 18px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: space-between;">
              <div style="display: flex; gap: 6px; align-items: center;">
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #FF3B69;"></span>
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #F59E0B;"></span>
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #F59E0B;"></span>
              </div>
              <div style="font-family: var(--font-mono); font-size: 0.725rem; color: #F59E0B; font-weight: 700; letter-spacing: 0.05em;">
                TRADELAB // OPERATIONAL_HUB
              </div>
              <div style="font-family: var(--font-mono); font-size: 0.675rem; color: #F59E0B; background: rgba(245, 158, 11, 0.1); padding: 2px 8px; border-radius: 4px; font-weight: 600;">
                ● ONLINE
              </div>
            </div>

            <!-- Vector Illustration Image Area -->
            <div style="position: relative; overflow: hidden; display: flex; justify-content: center; background: #0B0F19;">
              <img src="${i}" alt="TRADELAB Trader Vector Illustration" style="width: 100%; height: auto; max-height: 440px; object-fit: contain; display: block;" />
              
              <!-- Center Play Badge overlay linking to video under element -->
              <a href="#audience-video-showcase" onclick="const v=document.getElementById('tradelab-feature-video'); if(v){setTimeout(()=>v.play(),300);}" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 62px; height: 62px; border-radius: 50%; background: rgba(11, 15, 25, 0.88); border: 2px solid #F59E0B; display: flex; align-items: center; justify-content: center; color: #F59E0B; box-shadow: 0 0 25px rgba(245, 158, 11, 0.55); cursor: pointer; transition: all 0.25s; text-decoration: none;" onmouseover="this.style.transform='translate(-50%, -50%) scale(1.1)'; this.style.boxShadow='0 0 35px rgba(245, 158, 11, 0.85)'" onmouseout="this.style.transform='translate(-50%, -50%) scale(1)'; this.style.boxShadow='0 0 25px rgba(245, 158, 11, 0.55)'">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 3px;"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </a>

              <!-- Bottom Overlaid Floating Metric Pills -->
              <div style="position: absolute; bottom: 16px; left: 16px; right: 16px; display: flex; justify-content: space-between; gap: 10px;">
                <div style="background: #111927; border: 1px solid rgba(245, 158, 11, 0.4); padding: 8px 12px; border-radius: 8px;">
                  <div style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted); text-transform: uppercase;">ACTIVE TRADERS</div>
                  <div style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 800; color: #F59E0B;">185,000+</div>
                </div>
                <div style="background: #111927; border: 1px solid rgba(245, 158, 11, 0.4); padding: 8px 12px; border-radius: 8px;">
                  <div style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted); text-transform: uppercase;">EXECUTION UPTIME</div>
                  <div style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 800; color: #F59E0B;">99.98%</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      <!-- Cyber Video Showcase (Added Directly Under Audience Feature Hero) -->
      <div id="audience-video-showcase" class="audience-video-card" style="margin-top: 36px; background: #162032; border: 1px solid rgba(245, 158, 11, 0.35); border-radius: 20px; overflow: hidden; position: relative; box-shadow: 0 16px 40px -10px rgba(0, 0, 0, 0.7), 0 0 30px -5px rgba(245, 158, 11, 0.12);">
        
        <!-- Terminal Header Bar -->
        <div style="background: #111927; padding: 14px 22px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
          <div style="display: flex; gap: 8px; align-items: center;">
            <span style="width: 10px; height: 10px; border-radius: 50%; background: #FF3B69; display: inline-block;"></span>
            <span style="width: 10px; height: 10px; border-radius: 50%; background: #F59E0B; display: inline-block;"></span>
            <span style="width: 10px; height: 10px; border-radius: 50%; background: #9DD82C; display: inline-block;"></span>
            <span style="margin-left: 10px; font-family: var(--font-mono); font-size: 0.775rem; color: #FFFFFF; font-weight: 700; letter-spacing: 0.05em;">
              TRADELAB // REAL-TIME EXECUTION &amp; STRATEGY BRIEFING
            </span>
          </div>
          <div style="display: flex; align-items: center; gap: 12px;">
            <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #94A3B8; display: inline-flex; align-items: center; gap: 6px;">
              <span style="width: 7px; height: 7px; border-radius: 50%; background: #9DD82C; box-shadow: 0 0 6px #9DD82C;"></span>
              1080P HD
            </span>
            <span style="font-family: var(--font-mono); font-size: 0.675rem; color: #F59E0B; background: rgba(245, 158, 11, 0.12); border: 1px solid rgba(245, 158, 11, 0.35); padding: 2px 8px; border-radius: 4px; font-weight: 700;">
              ● STREAM ACTIVE
            </span>
          </div>
        </div>

        <!-- Video Player Frame -->
        <div style="position: relative; background: #070B14; display: flex; justify-content: center; align-items: center; overflow: hidden;">
          <video 
            id="tradelab-feature-video" 
            controls 
            playsinline 
            preload="metadata"
            style="width: 100%; max-height: 560px; display: block; object-fit: contain; background: #000000; outline: none;"
          >
            <source src="./assets/trader_showcase.mp4" type="video/mp4" />
            <source src="./assets/WhatsApp%20Video%202026-10-15%20at%203.53.57%20AM.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <!-- Terminal Status Footer -->
        <div style="background: #111927; padding: 12px 22px; border-top: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px;">
          <div style="display: flex; align-items: center; gap: 18px; flex-wrap: wrap;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-family: var(--font-mono); font-size: 0.68rem; color: #64748B;">LATENCY:</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: #9DD82C;">12ms</span>
            </div>
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-family: var(--font-mono); font-size: 0.68rem; color: #64748B;">FEED:</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: #FFFFFF;">MULTI-TIMEFRAME EXECUTION REEL</span>
            </div>
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-family: var(--font-mono); font-size: 0.68rem; color: #64748B;">SYSTEM:</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: #F59E0B;">99.98% SYNC</span>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <button 
              type="button" 
              onclick="const v=document.getElementById('tradelab-feature-video'); if(v){if(v.paused){v.play();}else{v.pause();}}"
              style="background: rgba(245, 158, 11, 0.12); border: 1px solid rgba(245, 158, 11, 0.35); color: #F59E0B; padding: 6px 14px; border-radius: 6px; font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; cursor: pointer; transition: all 0.2s;"
              onmouseover="this.style.background='rgba(245, 158, 11, 0.22)'" 
              onmouseout="this.style.background='rgba(245, 158, 11, 0.12)'"
            >
              ⏯ Play / Pause
            </button>
            <button 
              type="button" 
              onclick="const v=document.getElementById('tradelab-feature-video'); if(v){v.muted=!v.muted; this.innerText=v.muted?'🔇 Unmute':'🔊 Mute';}"
              style="background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.15); color: #FFFFFF; padding: 6px 14px; border-radius: 6px; font-family: var(--font-mono); font-size: 0.72rem; font-weight: 600; cursor: pointer; transition: all 0.2s;"
              onmouseover="this.style.background='rgba(255, 255, 255, 0.12)'" 
              onmouseout="this.style.background='rgba(255, 255, 255, 0.06)'"
            >
              🔊 Mute / Unmute
            </button>
            <button 
              type="button" 
              onclick="const v=document.getElementById('tradelab-feature-video'); if(v){if(v.requestFullscreen){v.requestFullscreen();}else if(v.webkitRequestFullscreen){v.webkitRequestFullscreen();}}"
              style="background: rgba(157, 216, 44, 0.12); border: 1px solid rgba(157, 216, 44, 0.35); color: #9DD82C; padding: 6px 14px; border-radius: 6px; font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; cursor: pointer; transition: all 0.2s;"
              onmouseover="this.style.background='rgba(157, 216, 44, 0.22)'" 
              onmouseout="this.style.background='rgba(157, 216, 44, 0.12)'"
            >
              ⛶ Fullscreen
            </button>
          </div>
        </div>

      </div>
    </div>

    <!-- Dual Path Cards (Golden Accent) -->
    <div class="container" style="margin-top: 10px; margin-bottom: 40px;">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 28px;">
        
        <!-- Path 1: For Individual Traders -->
        <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 36px; display: flex; flex-direction: column; justify-content: space-between; position: relative; overflow: hidden; transition: all 0.2s;" onmouseover="this.style.borderColor='#F59E0B'" onmouseout="this.style.borderColor='var(--border-subtle)'">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #F59E0B; letter-spacing: 0.1em; font-weight: 700;">FOR INDIVIDUAL TRADERS</span>
              <span style="background: rgba(245, 158, 11, 0.12); color: #F59E0B; padding: 4px 10px; border-radius: 999px; font-size: 0.725rem; font-family: var(--font-mono); font-weight: 600;">INDIVIDUAL PATH</span>
            </div>

            <h3 style="font-size: 1.8rem; font-weight: 800; color: #FFFFFF; margin-bottom: 12px; line-height: 1.2;">
              Develop Personal Consistency &amp; Setup Discipline
            </h3>
            
            <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; margin-bottom: 24px;">
              Master price action fundamentals, trend alignment models, and mathematical position sizing to trade your personal capital with confidence.
            </p>

            <ul style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 32px;">
              <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.9rem; color: #E2E8F0;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Complete Trading Academy &amp; Technical Analysis Modules</span>
              </li>
              <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.9rem; color: #E2E8F0;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Interactive Pre-Trade Execution Checklist Engine</span>
              </li>
              <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.9rem; color: #E2E8F0;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Daily Technical Briefings across BTC, ETH &amp; Alts</span>
              </li>
            </ul>
          </div>

          <a href="/strategies" class="btn btn-primary" style="background: #9DD82C; color: #050B14; font-weight: 700; width: 100%; justify-content: center; padding: 14px;">
            <span>Explore Individual Strategies</span>
            <span>→</span>
          </a>
        </div>

        <!-- Path 2: For Teams & Funded Accounts -->
        <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 36px; display: flex; flex-direction: column; justify-content: space-between; position: relative; overflow: hidden; transition: all 0.2s;" onmouseover="this.style.borderColor='#F59E0B'" onmouseout="this.style.borderColor='var(--border-subtle)'">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #F59E0B; letter-spacing: 0.1em; font-weight: 700;">FOR FUNDED ACCOUNTS &amp; TEAMS</span>
              <span style="background: rgba(245, 158, 11, 0.12); color: #F59E0B; padding: 4px 10px; border-radius: 999px; font-size: 0.725rem; font-family: var(--font-mono); font-weight: 600;">ENTERPRISE PATH</span>
            </div>

            <h3 style="font-size: 1.8rem; font-weight: 800; color: #FFFFFF; margin-bottom: 12px; line-height: 1.2;">
              Scale Risk Management &amp; Multi-Account Execution
            </h3>
            
            <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; margin-bottom: 24px;">
              Deploy institutional trading proxies, manage maximum drawdown limits, and track team performance across prop firm evaluation tiers.
            </p>

            <ul style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 32px;">
              <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.9rem; color: #E2E8F0;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Interactive Funded Account Challenge Calculator</span>
              </li>
              <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.9rem; color: #E2E8F0;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Low-Latency Residential Trading Proxy Networks</span>
              </li>
              <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.9rem; color: #E2E8F0;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Multi-Account Leaderboards &amp; Creator League Rankings</span>
              </li>
            </ul>
          </div>

          <a href="/pricing" class="btn btn-secondary" style="border: 1px solid #9DD82C; color: #9DD82C; font-weight: 700; width: 100%; justify-content: center; padding: 14px;">
            <span>Explore Funded Account Plans</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </div>
  `;
}
export { n as a, o as r };
