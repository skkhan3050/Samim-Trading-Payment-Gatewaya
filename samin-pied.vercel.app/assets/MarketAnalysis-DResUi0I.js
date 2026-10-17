const a = {
  btc: {
    tabName: "Bitcoin",
    title: "Make decisions with a defined trading framework",
    desc: "Analyze Bitcoin market dynamics through high-timeframe trend context, key weekly support/resistance levels, and order book liquidity clusters.",
    bullets: [
      "Market structure analysis",
      "Support and resistance mapping",
      "Macro trend identification",
      "Entry and exit planning",
      "Risk/reward analysis",
      "Position sizing models",
      "Trading psychology discipline",
    ],
    cta: "Explore Bitcoin Analysis",
    visual: `
      <svg viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
        <defs>
          <style>
            @keyframes btcScanline {
              0% { transform: translateY(0px); opacity: 0; }
              20% { opacity: 0.8; }
              80% { opacity: 0.8; }
              100% { transform: translateY(280px); opacity: 0; }
            }
            @keyframes btcPathGlow {
              0%, 100% { stroke: #9DD82B; filter: drop-shadow(0 0 4px rgba(157, 216, 43, 0.4)); }
              50% { stroke: #00E5FF; filter: drop-shadow(0 0 10px rgba(0, 229, 255, 0.8)); }
            }
            @keyframes btcDashFlow {
              to { stroke-dashoffset: -40; }
            }
            @keyframes btcRipple {
              0% { r: 4; opacity: 1; stroke-width: 1.5; }
              100% { r: 24; opacity: 0; stroke-width: 0.5; }
            }
            @keyframes btcCandleFloat {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-4px); }
            }
            @keyframes btcBadgePulse {
              0%, 100% { opacity: 0.85; transform: scale(1); }
              50% { opacity: 1; transform: scale(1.03); }
            }
            .btc-scan { animation: btcScanline 4s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
            .btc-curve { animation: btcPathGlow 4s ease-in-out infinite, btcDashFlow 6s linear infinite; }
            .btc-rip-1 { animation: btcRipple 2.2s cubic-bezier(0.1, 0.8, 0.3, 1) infinite; }
            .btc-rip-2 { animation: btcRipple 2.2s cubic-bezier(0.1, 0.8, 0.3, 1) 1.1s infinite; }
            .btc-candles { animation: btcCandleFloat 3.5s ease-in-out infinite; }
            .btc-badge { animation: btcBadgePulse 3s ease-in-out infinite; transform-origin: center; }
          </style>
          <radialGradient id="btcGlow" cx="60%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#2775FF" stop-opacity="0.35"/>
            <stop offset="60%" stop-color="#070E1A" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#070E1A" stop-opacity="1"/>
          </radialGradient>
          <linearGradient id="btcTrendGrad" x1="40" y1="260" x2="440" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#2775FF"/>
            <stop offset="50%" stop-color="#00E5FF"/>
            <stop offset="100%" stop-color="#9DD82B"/>
          </linearGradient>
          <linearGradient id="laserGrad" x1="0" y1="0" x2="480" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="rgba(0, 229, 255, 0)"/>
            <stop offset="50%" stop-color="rgba(0, 229, 255, 0.6)"/>
            <stop offset="100%" stop-color="rgba(0, 229, 255, 0)"/>
          </linearGradient>
        </defs>

        <!-- Base Background -->
        <rect width="480" height="340" fill="#070E1A"/>
        <circle cx="280" cy="170" r="140" fill="url(#btcGlow)"/>

        <!-- Grid Matrix -->
        <path d="M0 60 H480 M0 120 H480 M0 180 H480 M0 240 H480 M0 300 H480" stroke="rgba(255,255,255,0.035)" stroke-width="1"/>
        <path d="M80 0 V340 M160 0 V340 M240 0 V340 M320 0 V340 M400 0 V340" stroke="rgba(255,255,255,0.02)" stroke-width="1"/>

        <!-- Animated Laser Scanning Line -->
        <line x1="0" y1="40" x2="480" y2="40" stroke="url(#laserGrad)" stroke-width="2" class="btc-scan"/>

        <!-- High-Timeframe Trend Arc with Flowing Dash & Neon Glow -->
        <path d="M40 260 C 120 270, 180 190, 240 180 S 340 100, 440 70" stroke="url(#btcTrendGrad)" stroke-width="3.5" stroke-linecap="round" stroke-dasharray="12 6" fill="none" class="btc-curve"/>

        <!-- Dynamic Candlestick Cluster -->
        <g class="btc-candles">
          <!-- Candle 1 -->
          <line x1="200" y1="180" x2="200" y2="225" stroke="rgba(244, 63, 94, 0.8)" stroke-width="1.5"/>
          <rect x="195" y="190" width="10" height="25" rx="1" fill="#F43F5E"/>

          <!-- Candle 2 (Bounce) -->
          <line x1="225" y1="150" x2="225" y2="210" stroke="#38E879" stroke-width="1.5"/>
          <rect x="220" y="160" width="10" height="38" rx="1" fill="#38E879"/>

          <!-- Candle 3 -->
          <line x1="250" y1="130" x2="250" y2="188" stroke="#38E879" stroke-width="1.5"/>
          <rect x="245" y="142" width="10" height="32" rx="1" fill="#38E879"/>

          <!-- Candle 4 (Breakout) -->
          <line x1="275" y1="105" x2="275" y2="165" stroke="#9DD82B" stroke-width="2"/>
          <rect x="270" y="118" width="10" height="36" rx="1" fill="#9DD82B" filter="drop-shadow(0 0 6px rgba(157, 216, 43, 0.6))"/>
        </g>

        <!-- Key Levels: Support Line & Badge -->
        <line x1="120" y1="180" x2="460" y2="180" stroke="#00E5FF" stroke-width="1.5" stroke-dasharray="4 4"/>
        <g class="btc-badge" transform="translate(0, 0)">
          <rect x="180" y="168" width="138" height="24" rx="4" fill="#0A1626" stroke="#00E5FF" stroke-width="1.2" filter="drop-shadow(0 2px 8px rgba(0, 229, 255, 0.25))"/>
          <circle cx="192" cy="180" r="3" fill="#00E5FF"/>
          <text x="254" y="184" fill="#00E5FF" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">BTC 4H SUPPORT ($63.8K)</text>
        </g>

        <!-- Resistance Line & Badge -->
        <line x1="240" y1="70" x2="470" y2="70" stroke="#FF3B69" stroke-width="1.5" stroke-dasharray="4 4"/>
        <g class="btc-badge" transform="translate(0, 0)">
          <rect x="330" y="58" width="132" height="24" rx="4" fill="#180B13" stroke="#FF3B69" stroke-width="1.2" filter="drop-shadow(0 2px 8px rgba(255, 59, 105, 0.25))"/>
          <circle cx="342" cy="70" r="3" fill="#FF3B69"/>
          <text x="402" y="74" fill="#FF3B69" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">KEY RESISTANCE ($68.5K)</text>
        </g>

        <!-- Ripple Target Marker at Top of Arc -->
        <circle cx="440" cy="70" r="5" fill="#9DD82B"/>
        <circle cx="440" cy="70" r="8" stroke="#9DD82B" fill="none" class="btc-rip-1"/>
        <circle cx="440" cy="70" r="8" stroke="#00E5FF" fill="none" class="btc-rip-2"/>

        <!-- Header HUD Tag -->
        <rect x="24" y="20" width="220" height="22" rx="4" fill="rgba(157, 216, 43, 0.1)" stroke="rgba(157, 216, 43, 0.35)"/>
        <circle cx="34" cy="31" r="3.5" fill="#9DD82B"/>
        <text x="46" y="34" fill="#9DD82B" font-family="monospace" font-size="9.5" font-weight="bold">BTC_TECHNICAL_MODEL // ACTIVE</text>
      </svg>
    `,
  },
  eth: {
    tabName: "Ethereum",
    title: "Track ETH liquidity zones and volatility expansion",
    desc: "Identify high-probability Ethereum setups by tracking ETH/BTC relative strength, DeFi liquidity dynamics, and key breakout channels.",
    bullets: [
      "ETH/BTC pair correlation & momentum",
      "Gas & on-chain settlement context",
      "Range highs & range lows identification",
      "Fibonacci retracement entry targets",
      "Risk/reward calculation models",
      "Volatility-adjusted stop losses",
      "Trade journal execution discipline",
    ],
    cta: "Explore Ethereum Analysis",
    visual: `
      <svg viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
        <defs>
          <style>
            @keyframes ethFloat3D {
              0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); filter: drop-shadow(0 0 16px rgba(0, 229, 255, 0.4)); }
              50% { transform: translateY(-8px) rotate(2deg) scale(1.04); filter: drop-shadow(0 0 28px rgba(0, 229, 255, 0.8)); }
            }
            @keyframes ethChannelMarch {
              to { stroke-dashoffset: -32; }
            }
            @keyframes ethCorePulse {
              0%, 100% { r: 5; fill: #9DD82B; opacity: 0.9; }
              50% { r: 9; fill: #00E5FF; opacity: 1; filter: drop-shadow(0 0 8px #00E5FF); }
            }
            @keyframes ethWaveTrace {
              0% { stroke-dashoffset: 200; }
              100% { stroke-dashoffset: 0; }
            }
            .eth-gem { animation: ethFloat3D 4.5s ease-in-out infinite; transform-origin: 240px 160px; }
            .eth-channel { animation: ethChannelMarch 4s linear infinite; }
            .eth-core { animation: ethCorePulse 2s ease-in-out infinite; }
          </style>
          <radialGradient id="ethGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#00E5FF" stop-opacity="0.35"/>
            <stop offset="70%" stop-color="#2775FF" stop-opacity="0.1"/>
            <stop offset="100%" stop-color="#070E1A" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <rect width="480" height="340" fill="#070E1A"/>
        <circle cx="240" cy="170" r="140" fill="url(#ethGlow)"/>

        <!-- Grid Matrix -->
        <path d="M0 60 H480 M0 120 H480 M0 180 H480 M0 240 H480 M0 300 H480" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>

        <!-- Ascending Channel Boundary Lines with Marching Ants -->
        <line x1="40" y1="290" x2="440" y2="130" stroke="#38E879" stroke-width="2" stroke-dasharray="6 4" class="eth-channel"/>
        <line x1="40" y1="210" x2="440" y2="50" stroke="#00E5FF" stroke-width="2" stroke-dasharray="6 4" class="eth-channel"/>
        <polygon points="40,290 440,130 440,50 40,210" fill="rgba(0, 229, 255, 0.04)"/>

        <!-- Ethereum Diamond 3D Geometry with Floating Animation -->
        <g class="eth-gem">
          <!-- Upper Diamond -->
          <polygon points="240,80 290,150 240,175 190,150" stroke="#00E5FF" stroke-width="2.5" fill="rgba(0, 229, 255, 0.18)"/>
          <polygon points="240,80 290,150 240,175" fill="rgba(0, 229, 255, 0.28)"/>
          
          <!-- Lower Diamond -->
          <polygon points="240,185 290,165 240,235 190,165" stroke="#2775FF" stroke-width="2" fill="rgba(39, 117, 255, 0.22)"/>
          <polygon points="240,185 290,165 240,235" fill="rgba(39, 117, 255, 0.35)"/>

          <!-- Center Facet Line -->
          <line x1="240" y1="80" x2="240" y2="235" stroke="rgba(255, 255, 255, 0.6)" stroke-width="1.5"/>

          <!-- Animated Glowing Core -->
          <circle cx="240" cy="160" r="6" class="eth-core"/>
        </g>

        <!-- Channel Target HUD Badge -->
        <rect x="310" y="32" width="145" height="24" rx="4" fill="#0A1626" stroke="#00E5FF" stroke-width="1" filter="drop-shadow(0 2px 8px rgba(0, 229, 255, 0.3))"/>
        <text x="382" y="48" fill="#00E5FF" font-family="monospace" font-size="9.5" font-weight="bold" text-anchor="middle">TARGET: $3,850 ▲</text>

        <!-- Header HUD Tag -->
        <rect x="24" y="20" width="220" height="22" rx="4" fill="rgba(0, 229, 255, 0.1)" stroke="rgba(0, 229, 255, 0.35)"/>
        <circle cx="34" cy="31" r="3.5" fill="#00E5FF"/>
        <text x="46" y="34" fill="#00E5FF" font-family="monospace" font-size="9.5" font-weight="bold">ETH_CHANNEL_ANALYSIS // $3,420</text>
      </svg>
    `,
  },
  alts: {
    tabName: "Altcoins",
    title: "Navigate Altcoin market rotations and high-beta setups",
    desc: "Filter through thousands of crypto pairs to isolate top-tier momentum leaders with strong structural support and clean risk parameters.",
    bullets: [
      "Bitcoin dominance (BTC.D) tracking",
      "Sector rotation analysis (L1/L2, DeFi, AI)",
      "High-beta volume breakout triggers",
      "Aggressive risk truncation rules",
      "Tiered profit scaling targets",
      "Correlated asset risk management",
      "Strict invalidation discipline",
    ],
    cta: "Explore Altcoin Analysis",
    visual: `
      <svg viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
        <defs>
          <style>
            @keyframes radarSpin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            @keyframes nodePulse1 {
              0%, 100% { transform: scale(1); filter: drop-shadow(0 0 10px rgba(39, 117, 255, 0.4)); }
              50% { transform: scale(1.06); filter: drop-shadow(0 0 20px rgba(39, 117, 255, 0.9)); }
            }
            @keyframes nodePulse2 {
              0%, 100% { transform: scale(1); filter: drop-shadow(0 0 10px rgba(157, 216, 43, 0.4)); }
              50% { transform: scale(1.08); filter: drop-shadow(0 0 24px rgba(157, 216, 43, 0.9)); }
            }
            @keyframes nodePulse3 {
              0%, 100% { transform: scale(1); filter: drop-shadow(0 0 10px rgba(0, 229, 255, 0.4)); }
              50% { transform: scale(1.06); filter: drop-shadow(0 0 20px rgba(0, 229, 255, 0.9)); }
            }
            @keyframes constelFlow {
              to { stroke-dashoffset: -30; }
            }
            .alt-radar-beam { animation: radarSpin 5s linear infinite; transform-origin: 240px 170px; }
            .alt-node-sol { animation: nodePulse1 3.2s ease-in-out infinite; transform-origin: 130px 140px; }
            .alt-node-l1 { animation: nodePulse2 2.8s ease-in-out infinite; transform-origin: 290px 105px; }
            .alt-node-defi { animation: nodePulse3 3.6s ease-in-out infinite; transform-origin: 350px 230px; }
            .alt-constel { animation: constelFlow 3s linear infinite; }
          </style>
          <radialGradient id="radarSweepGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="rgba(157, 216, 43, 0.25)"/>
            <stop offset="100%" stop-color="rgba(7, 14, 26, 0)"/>
          </radialGradient>
        </defs>

        <rect width="480" height="340" fill="#070E1A"/>

        <!-- Concentric Radar Range Rings -->
        <circle cx="240" cy="170" r="50" stroke="rgba(255, 255, 255, 0.05)" stroke-width="1"/>
        <circle cx="240" cy="170" r="95" stroke="rgba(255, 255, 255, 0.05)" stroke-width="1"/>
        <circle cx="240" cy="170" r="140" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1"/>
        
        <!-- Radar Scanning Sweep Beam -->
        <g class="alt-radar-beam">
          <path d="M240 170 L380 170 A 140 140 0 0 0 339 71 Z" fill="url(#radarSweepGrad)"/>
          <line x1="240" y1="170" x2="380" y2="170" stroke="#9DD82B" stroke-width="1.8"/>
        </g>

        <!-- Connecting Constellation Web Lines -->
        <line x1="130" y1="140" x2="290" y2="105" stroke="#9DD82B" stroke-width="1.5" stroke-dasharray="4 4" class="alt-constel"/>
        <line x1="290" y1="105" x2="350" y2="230" stroke="#00E5FF" stroke-width="1.5" stroke-dasharray="4 4" class="alt-constel"/>
        <line x1="350" y1="230" x2="130" y2="140" stroke="#2775FF" stroke-width="1.5" stroke-dasharray="4 4" class="alt-constel"/>

        <!-- Asset Node 1: SOL -->
        <g class="alt-node-sol">
          <circle cx="130" cy="140" r="44" fill="rgba(39, 117, 255, 0.2)" stroke="#2775FF" stroke-width="2.2"/>
          <text x="130" y="136" fill="#FFFFFF" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">SOL</text>
          <text x="130" y="152" fill="#00E5FF" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle">+14.2% ▲</text>
        </g>

        <!-- Asset Node 2: Layer-1 Leaders -->
        <g class="alt-node-l1">
          <circle cx="290" cy="105" r="54" fill="rgba(157, 216, 43, 0.22)" stroke="#9DD82B" stroke-width="2.5"/>
          <text x="290" y="102" fill="#9DD82B" font-family="monospace" font-size="11.5" font-weight="bold" text-anchor="middle">LAYER-1</text>
          <text x="290" y="118" fill="#FFFFFF" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">ROTATION ALPHA</text>
        </g>

        <!-- Asset Node 3: DeFi Sector -->
        <g class="alt-node-defi">
          <circle cx="350" cy="230" r="42" fill="rgba(0, 229, 255, 0.18)" stroke="#00E5FF" stroke-width="2.2"/>
          <text x="350" y="226" fill="#00E5FF" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">DEFI</text>
          <text x="350" y="242" fill="#FFFFFF" font-family="monospace" font-size="9.5" text-anchor="middle">TVL INFLOW</text>
        </g>

        <!-- Header HUD Tag -->
        <rect x="24" y="20" width="240" height="22" rx="4" fill="rgba(157, 216, 43, 0.1)" stroke="rgba(157, 216, 43, 0.35)"/>
        <circle cx="34" cy="31" r="3.5" fill="#9DD82B"/>
        <text x="46" y="34" fill="#9DD82B" font-family="monospace" font-size="9.5" font-weight="bold">SECTOR_ROTATION_RADAR // ACTIVE</text>
      </svg>
    `,
  },
  structure: {
    tabName: "Market Structure",
    title: "Master market structure and liquidity engineering",
    desc: "Read the market without lagging indicators by understanding swing highs, swing lows, order blocks, and liquidity engineering.",
    bullets: [
      "Break of Structure (BOS) verification",
      "Change of Character (CHoCH) shifts",
      "Fair Value Gaps (FVG) imbalances",
      "Buy-side & sell-side liquidity sweeps",
      "Premium vs Discount pricing zones",
      "Multi-timeframe structural alignment",
      "Systematic trade validation rules",
    ],
    cta: "Explore Market Structure",
    visual: `
      <svg viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
        <defs>
          <style>
            @keyframes sweepPulse {
              0%, 100% { stroke: #FF3B69; filter: drop-shadow(0 0 4px rgba(255, 59, 105, 0.4)); }
              50% { stroke: #FF6B8B; filter: drop-shadow(0 0 12px rgba(255, 59, 105, 0.9)); }
            }
            @keyframes sweepPointRipple {
              0% { r: 5; opacity: 1; }
              100% { r: 22; opacity: 0; stroke-width: 0.5; }
            }
            @keyframes structurePathFlow {
              to { stroke-dashoffset: -40; }
            }
            @keyframes discountBoxGlow {
              0%, 100% { border-color: #9DD82B; fill: rgba(157, 216, 43, 0.08); }
              50% { fill: rgba(157, 216, 43, 0.2); }
            }
            .str-sweep-line { animation: sweepPulse 2.5s ease-in-out infinite; }
            .str-rip { animation: sweepPointRipple 2s cubic-bezier(0.1, 0.8, 0.3, 1) infinite; }
            .str-path { animation: structurePathFlow 5s linear infinite; }
            .str-box { animation: discountBoxGlow 3s ease-in-out infinite; }
          </style>
          <linearGradient id="strPathGrad" x1="60" y1="200" x2="420" y2="240" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#2775FF"/>
            <stop offset="50%" stop-color="#FF3B69"/>
            <stop offset="75%" stop-color="#00E5FF"/>
            <stop offset="100%" stop-color="#9DD82B"/>
          </linearGradient>
        </defs>

        <rect width="480" height="340" fill="#070E1A"/>

        <!-- Grid Matrix -->
        <path d="M0 60 H480 M0 120 H480 M0 180 H480 M0 240 H480 M0 300 H480" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>

        <!-- Equal Highs Buy-Side Liquidity Level -->
        <line x1="50" y1="90" x2="430" y2="90" stroke="#FF3B69" stroke-width="1.8" stroke-dasharray="5 5" class="str-sweep-line"/>
        <rect x="60" y="78" width="190" height="22" rx="3" fill="#180B13" stroke="#FF3B69" stroke-width="1"/>
        <text x="155" y="93" fill="#FF3B69" font-family="monospace" font-size="8.5" font-weight="bold" text-anchor="middle">BUY-SIDE LIQUIDITY (EQUAL HIGHS)</text>

        <!-- Liquidity Sweep Price Path -->
        <path d="M60 210 L140 120 L200 170 L300 74 L330 145 L420 230" stroke="url(#strPathGrad)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="10 4" fill="none" class="str-path"/>

        <!-- Sweep Point Ripple -->
        <circle cx="300" cy="74" r="6" fill="#FF3B69"/>
        <circle cx="300" cy="74" r="10" stroke="#FF3B69" fill="none" class="str-rip"/>
        
        <!-- Liquidity Sweep HUD Badge -->
        <rect x="230" y="44" width="140" height="22" rx="4" fill="#0A1626" stroke="#9DD82B" stroke-width="1.2" filter="drop-shadow(0 2px 8px rgba(157, 216, 43, 0.3))"/>
        <circle cx="240" cy="55" r="3" fill="#9DD82B"/>
        <text x="303" y="59" fill="#9DD82B" font-family="monospace" font-size="8.5" font-weight="bold" text-anchor="middle">SWEEP & REVERSAL</text>

        <!-- Order Block Discount Entry Box -->
        <rect x="250" y="165" width="150" height="38" rx="4" fill="rgba(157, 216, 43, 0.1)" stroke="#9DD82B" stroke-width="1.5" class="str-box" filter="drop-shadow(0 0 12px rgba(157, 216, 43, 0.2))"/>
        <text x="325" y="188" fill="#9DD82B" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">DISCOUNT ENTRY ZONE</text>

        <!-- Break of Structure (BOS) Line -->
        <line x1="200" y1="170" x2="430" y2="170" stroke="#00E5FF" stroke-width="1.2" stroke-dasharray="3 3"/>
        <text x="400" y="164" fill="#00E5FF" font-family="monospace" font-size="8" font-weight="bold">BOS (4H)</text>

        <!-- Header HUD Tag -->
        <rect x="24" y="20" width="230" height="22" rx="4" fill="rgba(0, 229, 255, 0.1)" stroke="rgba(0, 229, 255, 0.35)"/>
        <circle cx="34" cy="31" r="3.5" fill="#00E5FF"/>
        <text x="46" y="34" fill="#00E5FF" font-family="monospace" font-size="9.5" font-weight="bold">MARKET_STRUCTURE // LIQUIDITY</text>
      </svg>
    `,
  },
  technical: {
    tabName: "Technical Analysis",
    title: "Combine price action with high-confluence technicals",
    desc: "Build strong confluence by combining price action, moving average alignment, volume profiles, and momentum oscillators.",
    bullets: [
      "Volume weighted average price (VWAP)",
      "Moving average crossover confirmation",
      "RSI momentum divergence detection",
      "Horizontal key level interaction",
      "Risk/reward ratio optimization",
      "Strict trade invalidation rules",
      "Execution checklist verification",
    ],
    cta: "Explore Technical Analysis",
    visual: `
      <svg viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
        <defs>
          <style>
            @keyframes techWave1 {
              0%, 100% { transform: translateY(0px); filter: drop-shadow(0 0 6px rgba(0, 229, 255, 0.4)); }
              50% { transform: translateY(-5px); filter: drop-shadow(0 0 14px rgba(0, 229, 255, 0.8)); }
            }
            @keyframes techWave2 {
              0%, 100% { transform: translateY(0px); filter: drop-shadow(0 0 6px rgba(157, 216, 43, 0.4)); }
              50% { transform: translateY(4px); filter: drop-shadow(0 0 14px rgba(157, 216, 43, 0.8)); }
            }
            @keyframes rsiScanMove {
              0% { transform: translateX(0px); opacity: 0.3; }
              50% { opacity: 1; }
              100% { transform: translateX(380px); opacity: 0.3; }
            }
            @keyframes crossPing {
              0%, 100% { r: 4; fill: #9DD82B; }
              50% { r: 8; fill: #00E5FF; filter: drop-shadow(0 0 8px #00E5FF); }
            }
            .tech-w1 { animation: techWave1 4s ease-in-out infinite; }
            .tech-w2 { animation: techWave2 3.5s ease-in-out infinite; }
            .tech-scanner { animation: rsiScanMove 4s linear infinite; }
            .tech-crosspoint { animation: crossPing 2s ease-in-out infinite; }
          </style>
          <linearGradient id="rsiWaveGrad" x1="40" y1="280" x2="440" y2="280" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#2775FF"/>
            <stop offset="50%" stop-color="#00E5FF"/>
            <stop offset="100%" stop-color="#9DD82B"/>
          </linearGradient>
        </defs>

        <rect width="480" height="340" fill="#070E1A"/>

        <!-- Grid Matrix -->
        <path d="M0 60 H480 M0 120 H480 M0 180 H480 M0 240 H480 M0 300 H480" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>

        <!-- Price Confluence Wave 1 (Fast EMA 20 - Cyan) -->
        <path d="M40 120 Q 140 40, 240 130 T 440 80" stroke="#00E5FF" stroke-width="2.8" fill="none" class="tech-w1"/>

        <!-- Price Confluence Wave 2 (Slow EMA 50 - Neon Lime) -->
        <path d="M40 160 Q 140 100, 240 170 T 440 120" stroke="#9DD82B" stroke-width="2.4" fill="none" class="tech-w2"/>

        <!-- Golden Crossover Point -->
        <circle cx="340" cy="115" r="5" class="tech-crosspoint"/>
        <rect x="290" y="80" width="105" height="20" rx="3" fill="#0A1626" stroke="#9DD82B" stroke-width="1"/>
        <text x="342" y="94" fill="#9DD82B" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">EMA CROSSOVER</text>

        <!-- Lower Indicator Pane (RSI 14) -->
        <rect x="40" y="235" width="400" height="70" rx="4" fill="#0B1320" stroke="rgba(255,255,255,0.08)"/>
        
        <!-- Overbought (70) and Oversold (30) Reference Lines -->
        <line x1="40" y1="255" x2="440" y2="255" stroke="rgba(244, 63, 94, 0.4)" stroke-width="1" stroke-dasharray="3 3"/>
        <line x1="40" y1="285" x2="440" y2="285" stroke="rgba(56, 232, 121, 0.4)" stroke-width="1" stroke-dasharray="3 3"/>
        
        <!-- RSI Waveform -->
        <path d="M40 280 Q 90 250, 140 270 T 240 290 T 340 248 T 440 265" stroke="url(#rsiWaveGrad)" stroke-width="2.2" fill="none"/>

        <!-- Realtime Vertical Scan Tracker in RSI Box -->
        <g class="tech-scanner">
          <line x1="50" y1="235" x2="50" y2="305" stroke="#00E5FF" stroke-width="1.5" stroke-dasharray="2 2"/>
          <circle cx="50" cy="270" r="3" fill="#00E5FF"/>
        </g>

        <!-- RSI Pane Header -->
        <text x="50" y="248" fill="#9AA7B8" font-family="monospace" font-size="8.5" font-weight="bold">RSI CONFLUENCE (14) // 62.4 BULLISH</text>

        <!-- Header HUD Tag -->
        <rect x="24" y="20" width="220" height="22" rx="4" fill="rgba(157, 216, 43, 0.1)" stroke="rgba(157, 216, 43, 0.35)"/>
        <circle cx="34" cy="31" r="3.5" fill="#9DD82B"/>
        <text x="46" y="34" fill="#9DD82B" font-family="monospace" font-size="9.5" font-weight="bold">TECHNICAL_CONFLUENCE // 4H</text>
      </svg>
    `,
  },
};
function n(r) {
  if (!r) return;
  let i = "btc";
  const s = () => {
    const e = a[i];
    (r.innerHTML = `
      <div class="container">
        <div class="analysis-header">
          <span class="tag-label">
            <span class="tag-dot"></span>
            MARKET RESEARCH
          </span>
          <h2 class="heading-lg">
            Understand the Market Before You Trade
          </h2>
          <p class="text-lead" style="max-width: 640px;">
            Actionable market breakdowns and technical frameworks engineered for clear execution.
          </p>
        </div>

        <!-- Category Tabs -->
        <div class="analysis-tabs-bar" role="tablist">
          ${Object.keys(a)
            .map(
              (t) => `
            <button class="tab-btn ${
              i === t ? "active" : ""
            }" data-tab="${t}" role="tab" aria-selected="${i === t}">
              ${a[t].tabName}
            </button>
          `
            )
            .join("")}
        </div>

        <!-- Active Analysis Panel -->
        <div class="analysis-panel">
          <div class="analysis-content">
            <h3 class="analysis-title">${e.title}</h3>
            <p class="analysis-desc">${e.desc}</p>
            
            <ul class="analysis-bullets">
              ${e.bullets
                .map(
                  (t) => `
                <li class="analysis-bullet-item">
                  <span class="bullet-check-icon" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>${t}</span>
                </li>
              `
                )
                .join("")}
            </ul>

            <a href="/strategies" class="btn btn-primary btn-lg" style="align-self: flex-start; margin-top: 8px;">
              <span>${e.cta}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          <div class="analysis-visual">
            ${e.visual}
          </div>
        </div>
      </div>
    `),
      r.querySelectorAll(".tab-btn").forEach((t) => {
        t.addEventListener("click", () => {
          (i = t.getAttribute("data-tab")), s();
        });
      });
  };
  s();
}
export { n as r };
