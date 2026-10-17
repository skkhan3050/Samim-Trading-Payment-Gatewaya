function P(i) {
  if (!i) return;
  const l = [
    "Daily market discussions & chart reviews",
    "Curated educational trade breakdowns",
    "Continuous strategy framework updates",
    "Live weekly technical analysis webinars",
    "Multi-asset research & macro perspectives",
    "Peer feedback from disciplined traders",
  ];
  i.innerHTML = `
    <div class="container">
      <div class="community-card">
        <div>
          <span class="tag-badge" style="background: rgba(39, 117, 255, 0.12); border-color: rgba(39, 117, 255, 0.4); color: #00E5FF; margin-bottom: 16px;">
            TRADER NETWORK
          </span>
          <h2 class="heading-lg" style="margin-bottom: 16px;">
            Learn, Analyze and Improve Together
          </h2>
          <p class="text-lead" style="font-size: 1.05rem;">
            Join a community focused on trading education, market analysis and disciplined execution. Trade alongside fellow analytical traders who prioritize risk management.
          </p>

          <ul class="community-features-list">
            ${l
              .map(
                (c) => `
              <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; color: #FFFFFF;">
                <span class="bullet-check-icon" aria-hidden="true" style="width: 18px; height: 18px;">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>${c}</span>
              </li>
            `
              )
              .join("")}
          </ul>

          <a href="#contact-form" class="btn btn-primary btn-lg">
            <span>Join the Community</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        <!-- Community Network Graphic SVG -->
        <div class="community-visual-container">
          <svg viewBox="0 0 360 280" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto;">
            <defs>
              <style>
                @keyframes commHubSpin1 {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
                @keyframes commHubSpin2 {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(-360deg); }
                }
                @keyframes commPulseWave {
                  0% { r: 40; opacity: 0.9; stroke-width: 1.5; }
                  100% { r: 85; opacity: 0; stroke-width: 0.5; }
                }
                @keyframes commDataStream {
                  to { stroke-dashoffset: -32; }
                }
                @keyframes commFloat1 {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-5px); }
                }
                @keyframes commFloat2 {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(5px); }
                }
                @keyframes commFloat3 {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(4px); }
                }
                @keyframes commFloat4 {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-4px); }
                }
                @keyframes commBeacon {
                  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 4px currentColor); }
                  50% { transform: scale(1.15); filter: drop-shadow(0 0 10px currentColor); }
                }
                @keyframes commScanline {
                  0% { transform: translateY(0px); opacity: 0.2; }
                  50% { opacity: 0.7; }
                  100% { transform: translateY(240px); opacity: 0.2; }
                }
                .comm-orbit-1 { animation: commHubSpin1 18s linear infinite; transform-origin: 180px 140px; }
                .comm-orbit-2 { animation: commHubSpin2 12s linear infinite; transform-origin: 180px 140px; }
                .comm-rip-1 { animation: commPulseWave 2.4s cubic-bezier(0.1, 0.8, 0.3, 1) infinite; }
                .comm-rip-2 { animation: commPulseWave 2.4s cubic-bezier(0.1, 0.8, 0.3, 1) 1.2s infinite; }
                .comm-stream-main { animation: commDataStream 2.2s linear infinite; }
                .comm-stream-cross { animation: commDataStream 3.5s linear infinite; }
                .comm-node-1 { animation: commFloat1 3.8s ease-in-out infinite; }
                .comm-node-2 { animation: commFloat2 4.2s ease-in-out infinite; }
                .comm-node-3 { animation: commFloat3 4s ease-in-out infinite; }
                .comm-node-4 { animation: commFloat4 3.5s ease-in-out infinite; }
                .comm-ping { animation: commBeacon 2s ease-in-out infinite; transform-origin: center; }
                .comm-scan { animation: commScanline 4s ease-in-out infinite; }
              </style>

              <radialGradient id="commHubGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#9DD82B" stop-opacity="0.35"/>
                <stop offset="70%" stop-color="#00E5FF" stop-opacity="0.1"/>
                <stop offset="100%" stop-color="#070E1A" stop-opacity="0"/>
              </radialGradient>

              <linearGradient id="commLaserGrad" x1="0" y1="0" x2="360" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="rgba(157, 216, 43, 0)"/>
                <stop offset="50%" stop-color="rgba(157, 216, 43, 0.5)"/>
                <stop offset="100%" stop-color="rgba(157, 216, 43, 0)"/>
              </linearGradient>
            </defs>

            <!-- Background Grid Matrix -->
            <path d="M0 70 H360 M0 140 H360 M0 210 H360" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
            <path d="M90 0 V280 M180 0 V280 M270 0 V280" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>

            <!-- Scanning Laser Line -->
            <line x1="20" y1="20" x2="340" y2="20" stroke="url(#commLaserGrad)" stroke-width="1.5" class="comm-scan"/>

            <!-- Center Radial Ambient Glow -->
            <circle cx="180" cy="140" r="75" fill="url(#commHubGlow)"/>

            <!-- Cross-Desk Interconnecting Constellation Links -->
            <line x1="80" y1="70" x2="280" y2="70" stroke="rgba(0, 229, 255, 0.25)" stroke-width="1" stroke-dasharray="4 4" class="comm-stream-cross"/>
            <line x1="80" y1="210" x2="280" y2="210" stroke="rgba(157, 216, 43, 0.25)" stroke-width="1" stroke-dasharray="4 4" class="comm-stream-cross"/>
            <line x1="80" y1="70" x2="80" y2="210" stroke="rgba(39, 117, 255, 0.2)" stroke-width="1" stroke-dasharray="4 4" class="comm-stream-cross"/>
            <line x1="280" y1="70" x2="280" y2="210" stroke="rgba(255, 59, 105, 0.2)" stroke-width="1" stroke-dasharray="4 4" class="comm-stream-cross"/>

            <!-- Active Data Streams Between Hub and Desks -->
            <line x1="180" y1="140" x2="80" y2="70" stroke="#00E5FF" stroke-width="2" stroke-dasharray="6 4" class="comm-stream-main"/>
            <line x1="180" y1="140" x2="280" y2="70" stroke="#38E879" stroke-width="2" stroke-dasharray="6 4" class="comm-stream-main"/>
            <line x1="180" y1="140" x2="80" y2="210" stroke="#9DD82B" stroke-width="2" stroke-dasharray="6 4" class="comm-stream-main"/>
            <line x1="180" y1="140" x2="280" y2="210" stroke="#FF3B69" stroke-width="2" stroke-dasharray="6 4" class="comm-stream-main"/>

            <!-- Expanding Center Ripple Halos -->
            <circle cx="180" cy="140" r="45" stroke="#9DD82B" fill="none" class="comm-rip-1"/>
            <circle cx="180" cy="140" r="45" stroke="#00E5FF" fill="none" class="comm-rip-2"/>

            <!-- Central Community Hub (TRADELAB CORE) -->
            <g>
              <!-- Outer Rotating Orbit Rings -->
              <circle cx="180" cy="140" r="56" stroke="rgba(157, 216, 43, 0.35)" stroke-width="1.5" stroke-dasharray="8 6" class="comm-orbit-1"/>
              <circle cx="180" cy="140" r="48" stroke="rgba(0, 229, 255, 0.35)" stroke-width="1.2" stroke-dasharray="4 4" class="comm-orbit-2"/>

              <!-- Core Capsule Body -->
              <circle cx="180" cy="140" r="42" fill="#0A1626" stroke="#9DD82B" stroke-width="2.2" filter="drop-shadow(0 0 16px rgba(157, 216, 43, 0.35))"/>
              
              <!-- Core Icon/Logo Indicator -->
              <circle cx="180" cy="116" r="3.5" fill="#9DD82B" class="comm-ping"/>
              <text x="180" y="136" fill="#9DD82B" font-family="monospace" font-size="10.5" font-weight="bold" text-anchor="middle" letter-spacing="0.05em">TRADELAB</text>
              <text x="180" y="152" fill="#FFFFFF" font-family="sans-serif" font-size="8.5" font-weight="700" text-anchor="middle" letter-spacing="0.08em">COMMUNITY</text>
              <text x="180" y="166" fill="#00E5FF" font-family="monospace" font-size="7.5" font-weight="600" text-anchor="middle">SYNC // 24/7</text>
            </g>

            <!-- Satellite Trader Node 1: BTC DESK -->
            <g class="comm-node-1" transform="translate(0, 0)">
              <circle cx="80" cy="70" r="30" fill="#091322" stroke="#00E5FF" stroke-width="2" filter="drop-shadow(0 0 10px rgba(0, 229, 255, 0.3))"/>
              <circle cx="80" cy="53" r="2.5" fill="#00E5FF" class="comm-ping"/>
              <text x="80" y="70" fill="#00E5FF" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">BTC DESK</text>
              <text x="80" y="83" fill="#FFFFFF" font-family="monospace" font-size="7.5" text-anchor="middle">+4.8% ▲</text>
            </g>

            <!-- Satellite Trader Node 2: ETH DESK -->
            <g class="comm-node-2" transform="translate(0, 0)">
              <circle cx="280" cy="70" r="30" fill="#091322" stroke="#38E879" stroke-width="2" filter="drop-shadow(0 0 10px rgba(56, 232, 121, 0.3))"/>
              <circle cx="280" cy="53" r="2.5" fill="#38E879" class="comm-ping"/>
              <text x="280" y="70" fill="#38E879" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">ETH DESK</text>
              <text x="280" y="83" fill="#FFFFFF" font-family="monospace" font-size="7.5" text-anchor="middle">ACTIVE</text>
            </g>

            <!-- Satellite Trader Node 3: ALTS LAB -->
            <g class="comm-node-3" transform="translate(0, 0)">
              <circle cx="80" cy="210" r="30" fill="#091322" stroke="#9DD82B" stroke-width="2" filter="drop-shadow(0 0 10px rgba(157, 216, 43, 0.3))"/>
              <circle cx="80" cy="193" r="2.5" fill="#9DD82B" class="comm-ping"/>
              <text x="80" y="210" fill="#9DD82B" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">ALTS LAB</text>
              <text x="80" y="223" fill="#FFFFFF" font-family="monospace" font-size="7.5" text-anchor="middle">ALPHA INFLOW</text>
            </g>

            <!-- Satellite Trader Node 4: RISK DESK -->
            <g class="comm-node-4" transform="translate(0, 0)">
              <circle cx="280" cy="210" r="30" fill="#140A10" stroke="#FF3B69" stroke-width="2" filter="drop-shadow(0 0 10px rgba(255, 59, 105, 0.3))"/>
              <circle cx="280" cy="193" r="2.5" fill="#FF3B69" class="comm-ping"/>
              <text x="280" y="210" fill="#FF3B69" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">RISK DESK</text>
              <text x="280" y="223" fill="#FFFFFF" font-family="monospace" font-size="7.5" text-anchor="middle">1.0% MAX RISK</text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  `;
}
const $ = {
  open1: [
    {
      rank: 1,
      prevRank: 20,
      direction: "up",
      change: "+19",
      name: "Keone_Sanchez",
      userid: "382780",
      points: 63,
      record: "4W · 0D · 0L",
      pnl: "+$26,037",
      isPositive: !0,
      rewardLabel: "Finale Seat",
      isFinale: !0,
      maxReward: "Up to $180,000",
    },
    {
      rank: 2,
      prevRank: 18,
      direction: "up",
      change: "+16",
      name: "NvrBackDwn",
      userid: "19844",
      points: 62,
      record: "4W · 0D · 0L",
      pnl: "+$25,331",
      isPositive: !0,
      rewardLabel: "Finale Seat",
      isFinale: !0,
      maxReward: "Up to $180,000",
    },
    {
      rank: 3,
      prevRank: 35,
      direction: "up",
      change: "+32",
      name: "Robert_Mulik",
      userid: "630498",
      points: 61,
      record: "4W · 0D · 0L",
      pnl: "+$24,768",
      isPositive: !0,
      rewardLabel: "Finale Seat",
      isFinale: !0,
      maxReward: "Up to $180,000",
    },
    {
      rank: 4,
      prevRank: 11,
      direction: "up",
      change: "+7",
      name: "Frump",
      userid: "102627",
      points: 61,
      record: "4W · 0D · 0L",
      pnl: "+$24,672",
      isPositive: !0,
      rewardLabel: "Finale Seat",
      isFinale: !0,
      maxReward: "Up to $180,000",
    },
    {
      rank: 5,
      prevRank: 38,
      direction: "up",
      change: "+33",
      name: "Shraad",
      userid: "486065",
      points: 61,
      record: "3W · 0D · 1L",
      pnl: "+$25,774",
      isPositive: !0,
      rewardLabel: "$10,000",
      isFinale: !1,
    },
    {
      rank: 6,
      prevRank: 4,
      direction: "down",
      change: "-2",
      name: "trimi",
      userid: "482082",
      points: 59,
      record: "4W · 0D · 0L",
      pnl: "+$23,789",
      isPositive: !0,
      rewardLabel: "$8,000",
      isFinale: !1,
    },
    {
      rank: 7,
      prevRank: 18,
      direction: "up",
      change: "+11",
      name: "Ollie_Quick",
      userid: "288414",
      points: 58,
      record: "4W · 0D · 0L",
      pnl: "+$24,521",
      isPositive: !0,
      rewardLabel: "$8,000",
      isFinale: !1,
    },
    {
      rank: 8,
      prevRank: 64,
      direction: "up",
      change: "+56",
      name: "GodsTradingTeam",
      userid: "57074",
      points: 57,
      record: "4W · 0D · 0L",
      pnl: "+$22,426",
      isPositive: !0,
      rewardLabel: "$8,000",
      isFinale: !1,
    },
    {
      rank: 9,
      prevRank: 30,
      direction: "up",
      change: "+21",
      name: "Ivan_Amidzic",
      userid: "87842",
      points: 57,
      record: "3W · 1D · 0L",
      pnl: "+$23,828",
      isPositive: !0,
      rewardLabel: "$8,000",
      isFinale: !1,
    },
    {
      rank: 10,
      prevRank: 76,
      direction: "up",
      change: "+66",
      name: "Kristijan_Mitrovski",
      userid: "125466",
      points: 57,
      record: "3W · 0D · 1L",
      pnl: "+$24,810",
      isPositive: !0,
      rewardLabel: "$8,000",
      isFinale: !1,
    },
    {
      rank: 11,
      prevRank: 88,
      direction: "up",
      change: "+77",
      name: "Ibrahim_Ba",
      userid: "193964",
      points: 56,
      record: "4W · 0D · 0L",
      pnl: "+$22,601",
      isPositive: !0,
      rewardLabel: "$4,000",
      isFinale: !1,
    },
    {
      rank: 12,
      prevRank: 102,
      direction: "up",
      change: "+90",
      name: "Sahara_1519",
      userid: "313418",
      points: 56,
      record: "3W · 0D · 1L",
      pnl: "+$23,494",
      isPositive: !0,
      rewardLabel: "$4,000",
      isFinale: !1,
    },
    {
      rank: 13,
      prevRank: 120,
      direction: "up",
      change: "+107",
      name: "EmperorPenguin",
      userid: "102430",
      points: 55,
      record: "4W · 0D · 0L",
      pnl: "+$23,145",
      isPositive: !0,
      rewardLabel: "$4,000",
      isFinale: !1,
    },
    {
      rank: 14,
      prevRank: 39,
      direction: "up",
      change: "+25",
      name: "Mehmet_Aksoy",
      userid: "140766",
      points: 55,
      record: "4W · 0D · 0L",
      pnl: "+$22,783",
      isPositive: !0,
      rewardLabel: "$4,000",
      isFinale: !1,
    },
    {
      rank: 15,
      prevRank: 1,
      direction: "down",
      change: "-14",
      name: "Joakim",
      userid: "645653",
      points: 55,
      record: "4W · 0D · 0L",
      pnl: "+$22,059",
      isPositive: !0,
      rewardLabel: "$4,000",
      isFinale: !1,
    },
    {
      rank: 16,
      prevRank: 58,
      direction: "up",
      change: "+42",
      name: "Chenge",
      userid: "433398",
      points: 54,
      record: "4W · 0D · 0L",
      pnl: "+$22,333",
      isPositive: !0,
      rewardLabel: "$4,000",
      isFinale: !1,
    },
    {
      rank: 17,
      prevRank: 137,
      direction: "up",
      change: "+120",
      name: "Rajesh_Nair",
      userid: "4344",
      points: 54,
      record: "4W · 0D · 0L",
      pnl: "+$21,952",
      isPositive: !0,
      rewardLabel: "$4,000",
      isFinale: !1,
    },
    {
      rank: 18,
      prevRank: 3,
      direction: "down",
      change: "-15",
      name: "FRAC",
      userid: "133275",
      points: 54,
      record: "4W · 0D · 0L",
      pnl: "+$21,368",
      isPositive: !0,
      rewardLabel: "$4,000",
      isFinale: !1,
    },
    {
      rank: 19,
      prevRank: 153,
      direction: "up",
      change: "+134",
      name: "Psychas",
      userid: "166687",
      points: 54,
      record: "4W · 0D · 0L",
      pnl: "+$21,357",
      isPositive: !0,
      rewardLabel: "$4,000",
      isFinale: !1,
    },
    {
      rank: 20,
      prevRank: 129,
      direction: "up",
      change: "+109",
      name: "Gabriel_Ramirez",
      userid: "374350",
      points: 54,
      record: "3W · 0D · 1L",
      pnl: "+$23,198",
      isPositive: !0,
      rewardLabel: "$4,000",
      isFinale: !1,
    },
    {
      rank: 21,
      prevRank: 100,
      direction: "up",
      change: "+79",
      name: "EgmReyCaranto",
      userid: "97947",
      points: 54,
      record: "3W · 0D · 1L",
      pnl: "+$22,747",
      isPositive: !0,
      rewardLabel: "$4,000",
      isFinale: !1,
    },
    {
      rank: 22,
      prevRank: 174,
      direction: "up",
      change: "+152",
      name: "Robert_May",
      userid: "197835",
      points: 53,
      record: "4W · 0D · 0L",
      pnl: "+$21,490",
      isPositive: !0,
      rewardLabel: "$4,000",
      isFinale: !1,
    },
    {
      rank: 23,
      prevRank: 161,
      direction: "up",
      change: "+138",
      name: "Julionson_Dema",
      userid: "532766",
      points: 53,
      record: "3W · 0D · 1L",
      pnl: "+$25,711",
      isPositive: !0,
      rewardLabel: "$4,000",
      isFinale: !1,
    },
    {
      rank: 24,
      prevRank: 231,
      direction: "up",
      change: "+207",
      name: "Tradewithkrixx",
      userid: "339889",
      points: 52,
      record: "4W · 0D · 0L",
      pnl: "+$20,938",
      isPositive: !0,
      rewardLabel: "$4,000",
      isFinale: !1,
    },
    {
      rank: 25,
      prevRank: 7,
      direction: "down",
      change: "-18",
      name: "Justin_Mancuso",
      userid: "547946",
      points: 52,
      record: "4W · 0D · 0L",
      pnl: "+$20,742",
      isPositive: !0,
      rewardLabel: "$4,000",
      isFinale: !1,
    },
  ],
  open2: [
    {
      rank: 1,
      prevRank: 1,
      direction: "same",
      change: "0",
      name: "Reyansh_Chopra055",
      userid: "8101",
      points: 48,
      record: "4W · 0D · 0L",
      pnl: "+$31,240",
      isPositive: !0,
      rewardLabel: "Finale Seat",
      isFinale: !0,
      maxReward: "Up to $180,000",
    },
    {
      rank: 2,
      prevRank: 2,
      direction: "same",
      change: "0",
      name: "Advait_Rao077",
      userid: "8102",
      points: 46,
      record: "4W · 0D · 0L",
      pnl: "+$28,490",
      isPositive: !0,
      rewardLabel: "Finale Seat",
      isFinale: !0,
      maxReward: "Up to $180,000",
    },
    {
      rank: 3,
      prevRank: 3,
      direction: "same",
      change: "0",
      name: "Tara_Menon031",
      userid: "8103",
      points: 45,
      record: "3W · 1D · 0L",
      pnl: "+$26,800",
      isPositive: !0,
      rewardLabel: "Finale Seat",
      isFinale: !0,
      maxReward: "Up to $180,000",
    },
    {
      rank: 4,
      prevRank: 4,
      direction: "same",
      change: "0",
      name: "Zayn_Malik882",
      userid: "8104",
      points: 44,
      record: "3W · 1D · 0L",
      pnl: "+$25,110",
      isPositive: !0,
      rewardLabel: "Finale Seat",
      isFinale: !0,
      maxReward: "Up to $180,000",
    },
    {
      rank: 5,
      prevRank: 5,
      direction: "same",
      change: "0",
      name: "Siddharth_Verma049",
      userid: "8105",
      points: 42,
      record: "3W · 0D · 1L",
      pnl: "+$22,950",
      isPositive: !0,
      rewardLabel: "$10,000",
      isFinale: !1,
    },
    {
      rank: 6,
      prevRank: 6,
      direction: "same",
      change: "0",
      name: "Elena_Rostova112",
      userid: "8106",
      points: 41,
      record: "3W · 0D · 1L",
      pnl: "+$21,400",
      isPositive: !0,
      rewardLabel: "$8,000",
      isFinale: !1,
    },
    {
      rank: 7,
      prevRank: 7,
      direction: "same",
      change: "0",
      name: "Lucas_Silva204",
      userid: "8107",
      points: 40,
      record: "3W · 0D · 1L",
      pnl: "+$20,850",
      isPositive: !0,
      rewardLabel: "$8,000",
      isFinale: !1,
    },
    {
      rank: 8,
      prevRank: 8,
      direction: "same",
      change: "0",
      name: "Chloe_Dupont062",
      userid: "8108",
      points: 39,
      record: "2W · 2D · 0L",
      pnl: "+$19,730",
      isPositive: !0,
      rewardLabel: "$8,000",
      isFinale: !1,
    },
  ],
  creator: [
    {
      rank: 1,
      prevRank: 1,
      direction: "same",
      change: "0",
      name: "@TheChartGuy",
      supporters: "12,480 supporters",
      userid: "1001",
      points: 512,
      record: "6W · 1D · 1L",
      pnl: "+$41,280",
      isPositive: !0,
      rewardLabel: "Finale seat",
      isFinale: !0,
    },
    {
      rank: 2,
      prevRank: 2,
      direction: "same",
      change: "0",
      name: "@CryptoBullFX",
      supporters: "9,840 supporters",
      userid: "1002",
      points: 482,
      record: "5W · 2D · 1L",
      pnl: "+$36,450",
      isPositive: !0,
      rewardLabel: "Finale seat",
      isFinale: !0,
    },
    {
      rank: 3,
      prevRank: 3,
      direction: "same",
      change: "0",
      name: "@QuantumAlgo",
      supporters: "8,210 supporters",
      userid: "1003",
      points: 460,
      record: "5W · 1D · 2L",
      pnl: "+$31,200",
      isPositive: !0,
      rewardLabel: "Finale seat",
      isFinale: !0,
    },
    {
      rank: 4,
      prevRank: 4,
      direction: "same",
      change: "0",
      name: "@AlphaSniper",
      supporters: "7,450 supporters",
      userid: "1004",
      points: 442,
      record: "4W · 3D · 1L",
      pnl: "+$29,800",
      isPositive: !0,
      rewardLabel: "Finale seat",
      isFinale: !0,
    },
    {
      rank: 5,
      prevRank: 5,
      direction: "same",
      change: "0",
      name: "@ApexTrends",
      supporters: "6,120 supporters",
      userid: "1005",
      points: 415,
      record: "4W · 2D · 2L",
      pnl: "+$24,500",
      isPositive: !0,
      rewardLabel: "$10,000",
      isFinale: !1,
    },
    {
      rank: 6,
      prevRank: 6,
      direction: "same",
      change: "0",
      name: "@NexusPip",
      supporters: "5,890 supporters",
      userid: "1006",
      points: 398,
      record: "4W · 1D · 3L",
      pnl: "+$22,100",
      isPositive: !0,
      rewardLabel: "$8,000",
      isFinale: !1,
    },
  ],
};
function E(i) {
  if (!i) return;
  let l = "open1",
    c = "",
    v = "all",
    f = "all";
  i.innerHTML = `
    <div class="w-layout-blockcontainer container w-container">
      <div id="ptl-leaderboard" class="ptl-leaderboard-component">
        <div class="ptl-leader-main-wrp">
          
          <!-- Header Tag & Title -->
          <div class="ptl-leader-head">
            <div data-ptl-date="" class="ptl-leader-tag">
              <div class="ptl-leader-tag-crcl"></div>
              <div class="ptl-leader-tag-txt">LIVE NOW · OPEN 1 · MATCH 5 OF 8</div>
            </div>
            <h1 class="ptl-leader-h1">Trader <span class="text-neon">Leaderboard</span></h1>
            <p class="ptl-leader-sub">Real-time competitive standings, verified match stats, and prize pool allocations.</p>
          </div>

          <!-- Tournament Tabs -->
          <div class="ptl-leader-tab-main">
            <div class="ptl-leader-tab-list">
              <div class="ptl-leader-tab-list-items">
                <button type="button" class="ptl-leader-tab-btn active" data-tab="open1">
                  <div class="ptl-leader-tab-btn-head">Open 1</div>
                  <div class="ptl-leader-tab-btn-body">
                    <span class="ptl-badge-pill">Live</span>
                    <span class="ptl-tab-dates">· 21 Sep – 15 Oct</span>
                  </div>
                </button>
              </div>
              <div class="ptl-leader-tab-list-items">
                <button type="button" class="ptl-leader-tab-btn" data-tab="open2">
                  <div class="ptl-leader-tab-btn-head">Open 2</div>
                  <div class="ptl-leader-tab-btn-body">
                    <span class="ptl-badge-pill incoming">Begins</span>
                    <span class="ptl-tab-dates">· 26 Oct – 19 Nov</span>
                  </div>
                </button>
              </div>
              <div class="ptl-leader-tab-list-items">
                <button type="button" class="ptl-leader-tab-btn" data-tab="creator">
                  <div class="ptl-leader-tab-btn-head">Creator League</div>
                  <div class="ptl-leader-tab-btn-body">
                    <span class="ptl-tab-dates">28 Sep – 11 Nov</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <!-- Controls: Search and Filters -->
          <div class="ptl-leaderboard-controls">
            <div class="input-search-wrp is-visible">
              <input type="search" placeholder="Search trader name..." class="input-search" id="ptl-search-input" value="">
              <button type="button" class="input-search-btn" aria-label="Search trader" title="Search trader" id="ptl-search-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>

            <div class="ptl-leaderboard-filters">
              <!-- Rank Filter -->
              <div class="ptl-filter" data-filter="rank">
                <button type="button" class="ptl-filter-trigger" id="ptl-rank-trigger" aria-haspopup="listbox" aria-expanded="false">
                  <span class="ptl-filter-label">Rank: <span class="ptl-filter-value" id="ptl-rank-val">All</span></span>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" stroke="currentColor" stroke-width="1.5"></path></svg>
                </button>
                <ul id="ptl-filter-rank-menu" class="ptl-filter-options" role="listbox" hidden>
                  <li class="ptl-filter-option" data-value="all">All</li>
                  <li class="ptl-filter-option" data-value="top4">Top 4 (Finalists)</li>
                  <li class="ptl-filter-option" data-value="top10">Top 10</li>
                  <li class="ptl-filter-option" data-value="top25">Top 25</li>
                </ul>
              </div>

              <!-- Status Filter -->
              <div class="ptl-filter" data-filter="status">
                <button type="button" class="ptl-filter-trigger" id="ptl-status-trigger" aria-haspopup="listbox" aria-expanded="false">
                  <span class="ptl-filter-label">Status: <span class="ptl-filter-value" id="ptl-status-val">All Players</span></span>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" stroke="currentColor" stroke-width="1.5"></path></svg>
                </button>
                <ul id="ptl-filter-status-menu" class="ptl-filter-options" role="listbox" hidden>
                  <li class="ptl-filter-option" data-value="all">All Players</li>
                  <li class="ptl-filter-option" data-value="finale">Finale Seats Only</li>
                  <li class="ptl-filter-option" data-value="cash">Cash Prize Winners</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Table Container -->
          <div class="tab-cont-main" id="ptl-table-container">
            <!-- Dynamic Table Content rendered here -->
          </div>

          <!-- Pagination Bar -->
          <div class="ptl-pagination-wrp">
            <div class="ptl-pagination-info">
              Showing <span class="ptl-pagination-range" id="ptl-showing-range">1–25</span> of <span class="ptl-pagination-total" id="ptl-total-count">45,158</span> traders
            </div>
            <div class="ptl-pagination-controls">
              <button type="button" class="ptl-page-btn ptl-prev-btn" id="ptl-prev-btn" disabled>Previous</button>
              <div class="ptl-page-numbers">
                <button type="button" class="ptl-page-num active" data-page="1">1</button>
                <button type="button" class="ptl-page-num" data-page="2">2</button>
                <button type="button" class="ptl-page-num" data-page="3">3</button>
                <button type="button" class="ptl-page-num" data-page="4">4</button>
                <span class="ptl-page-dots">...</span>
                <button type="button" class="ptl-page-num" data-page="904">904</button>
              </div>
              <button type="button" class="ptl-page-btn ptl-next-btn" id="ptl-next-btn">Next</button>
            </div>
          </div>

          <!-- Footer Rules Info -->
          <div class="ldr-btm-wrp">
            <div class="ldr-btm-rch-txt">
              <p><strong>Tied on points?</strong> More match wins takes the higher spot. Still tied? Your exact cumulative P&amp;L (down to the cent) decides it.</p>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Trader Detail Modal -->
    <div id="trader-detail-modal" class="pricing-popup-main is-hidden" aria-hidden="true">
      <div class="pricing-popup-wrp">
        <button type="button" class="plt-close-btn" id="modal-close-btn" aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div id="modal-content-body" class="modal-inner-content">
          <!-- Injected dynamically -->
        </div>
      </div>
    </div>
  `;
  function p() {
    const a = document.getElementById("ptl-table-container");
    if (!a) return;
    let t = $[l] || [];
    if (c.trim()) {
      const e = c.toLowerCase();
      t = t.filter((b) => b.name.toLowerCase().includes(e));
    }
    v === "top4"
      ? (t = t.filter((e) => e.rank <= 4))
      : v === "top10"
      ? (t = t.filter((e) => e.rank <= 10))
      : v === "top25" && (t = t.filter((e) => e.rank <= 25)),
      f === "finale"
        ? (t = t.filter((e) => e.isFinale))
        : f === "cash" && (t = t.filter((e) => !e.isFinale));
    const m = document.getElementById("ptl-showing-range"),
      u = document.getElementById("ptl-total-count");
    if (
      (m &&
        u &&
        ((m.textContent = t.length > 0 ? `1–${t.length}` : "0"),
        (u.textContent = l === "creator" ? "16" : "45,158")),
      t.length === 0)
    ) {
      a.innerHTML = `
        <div class="creators-table-row empty-state">
          <div class="empty-state-text">No traders found matching your criteria. Try adjusting your filters.</div>
        </div>
      `;
      return;
    }
    let r = t
      .map((e, b) => {
        e.rank <= 3;
        const g =
            e.rank === 1
              ? "🥇"
              : e.rank === 2
              ? "🥈"
              : e.rank === 3
              ? "🥉"
              : "",
          D =
            e.rank <= 4
              ? "creators-table-row runners-up"
              : "creators-table-row",
          S =
            e.direction === "up"
              ? `<span class="ptl-rank-arr up" title="Rank up ${e.change}"><svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor"><path d="M5 1.5L9 7.5H1L5 1.5Z"></path></svg></span>`
              : e.direction === "down"
              ? `<span class="ptl-rank-arr down" title="Rank down ${e.change}"><svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor"><path d="M5 8.5L1 2.5H9L5 8.5Z"></path></svg></span>`
              : "",
          C = e.isFinale
            ? `<div class="creators-table-tag reward-tag finale-seat-tag">
            <svg class="creators-table-tag-ico" width="14" height="14" viewBox="0 0 24 24" fill="#9DD82C">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span class="creators-table-tag-txt finale-seat-label">Finale Seat</span>
          </div>`
            : `<div class="creators-table-box-count bg-font text-neon font-mono font-semibold">${e.rewardLabel}</div>`;
        return `
        <div class="${D}" data-trader="${e.name.toLowerCase()}" data-idx="${b}">
          <div class="creators-table-col rank">
            <div class="creators-table-box">
              <div class="creators-table-box-rank">
                <span class="rank-num">${g} ${e.rank}</span>
                ${S}
              </div>
            </div>
          </div>

          <div class="creators-table-col trader clickable" data-action="open-modal" data-trader-name="${
            e.name
          }">
            <div class="creators-table-box">
              <span class="creators-table-box-count trader-name-link">${
                e.name
              }</span>
              ${
                e.supporters
                  ? `<div class="trader-supporters-sub">${e.supporters}</div>`
                  : ""
              }
            </div>
          </div>

          <div class="creators-table-col points">
            <div class="creators-table-box">
              <div class="creators-table-box-count points-val">${
                e.points
              } pts</div>
            </div>
          </div>

          <div class="creators-table-col matches">
            <div class="creators-table-box">
              <div class="creators-table-box-count font-mono">${e.record}</div>
            </div>
          </div>

          <div class="creators-table-col total">
            <div class="creators-table-box">
              <div class="creators-table-box-count pnl-val active">${
                e.pnl
              }</div>
            </div>
          </div>

          <div class="creators-table-col reward">
            <div class="creators-table-box last">
              ${C}
            </div>
          </div>
        </div>
      `;
      })
      .join("");
    (a.innerHTML = `
      <div class="creators-table-main">
        <div class="creators-table">
          <div class="creators-table-head">
            <div class="creators-table-row head-row">
              <div class="creators-table-col rank"><div class="creators-table-box-txt">Rank</div></div>
              <div class="creators-table-col trader"><div class="creators-table-box-txt">Trader</div></div>
              <div class="creators-table-col points"><div class="creators-table-box-txt">Points</div></div>
              <div class="creators-table-col matches"><div class="creators-table-box-txt">Match Record</div></div>
              <div class="creators-table-col total"><div class="creators-table-box-txt">Total PnL</div></div>
              <div class="creators-table-col reward"><div class="creators-table-box-txt">Reward</div></div>
            </div>
          </div>
          <div class="creators-table-body">
            ${r}
          </div>
        </div>
      </div>
    `),
      a.querySelectorAll('[data-action="open-modal"]').forEach((e) => {
        e.addEventListener("click", (b) => {
          const g = e.getAttribute("data-trader-name");
          R(g);
        });
      });
  }
  function R(a) {
    const t = document.getElementById("trader-detail-modal"),
      m = document.getElementById("modal-content-body");
    if (!t || !m) return;
    const u = $[l] || [],
      r = u.find((e) => e.name === a) || u[0];
    (m.innerHTML = `
      <div class="modal-trader-header">
        <div class="modal-trader-avatar">
          <span class="avatar-letter">${r.name.charAt(0).toUpperCase()}</span>
        </div>
        <div class="modal-trader-meta">
          <h3 class="modal-trader-title">${r.name}</h3>
          <div class="modal-trader-sub">User ID: <span class="font-mono text-neon">#${
            r.userid || "7892"
          }</span> · Tournament: ${l.toUpperCase()}</div>
        </div>
        <div class="modal-trader-rank-badge">
          <div class="rank-badge-num">RANK #${r.rank}</div>
          <div class="rank-badge-status">${
            r.isFinale ? "FINALE QUALIFIER" : "ACTIVE CONTESTANT"
          }</div>
        </div>
      </div>

      <div class="modal-stats-grid">
        <div class="modal-stat-card">
          <div class="stat-label">Total Points</div>
          <div class="stat-value text-neon">${r.points} pts</div>
        </div>
        <div class="modal-stat-card">
          <div class="stat-label">Match Record</div>
          <div class="stat-value">${r.record}</div>
        </div>
        <div class="modal-stat-card">
          <div class="stat-label">Verified PnL</div>
          <div class="stat-value text-green">${r.pnl}</div>
        </div>
        <div class="modal-stat-card">
          <div class="stat-label">Current Allocation</div>
          <div class="stat-value text-gold">${r.rewardLabel}</div>
        </div>
      </div>

      <div class="modal-timeline">
        <h4 class="timeline-heading">Recent Tournament Match Outcomes</h4>
        <div class="timeline-row">
          <span class="timeline-match">Match 1 vs Market</span>
          <span class="timeline-res win">WIN (+15 pts · +$6,240)</span>
        </div>
        <div class="timeline-row">
          <span class="timeline-match">Match 2 vs Market</span>
          <span class="timeline-res win">WIN (+16 pts · +$7,180)</span>
        </div>
        <div class="timeline-row">
          <span class="timeline-match">Match 3 vs Market</span>
          <span class="timeline-res win">WIN (+16 pts · +$6,950)</span>
        </div>
        <div class="timeline-row">
          <span class="timeline-match">Match 4 vs Market</span>
          <span class="timeline-res win">WIN (+16 pts · +$5,667)</span>
        </div>
      </div>
    `),
      t.classList.remove("is-hidden"),
      t.classList.add("is-open"),
      document.body.classList.add("ptl-modal-open");
  }
  function k() {
    const a = document.getElementById("trader-detail-modal");
    a &&
      (a.classList.add("is-hidden"),
      a.classList.remove("is-open"),
      document.body.classList.remove("ptl-modal-open"));
  }
  const x = i.querySelectorAll(".ptl-leader-tab-btn");
  x.forEach((a) => {
    a.addEventListener("click", () => {
      x.forEach((t) => t.classList.remove("active")),
        a.classList.add("active"),
        (l = a.getAttribute("data-tab")),
        p();
    });
  });
  const y = i.querySelector("#ptl-search-input");
  y &&
    y.addEventListener("input", (a) => {
      (c = a.target.value), p();
    });
  const o = i.querySelector("#ptl-rank-trigger"),
    s = i.querySelector("#ptl-filter-rank-menu"),
    w = i.querySelector("#ptl-rank-val");
  o &&
    s &&
    (o.addEventListener("click", (a) => {
      a.stopPropagation();
      const t = !s.hidden;
      (s.hidden = t), o.setAttribute("aria-expanded", !t), n && (n.hidden = !0);
    }),
    s.querySelectorAll(".ptl-filter-option").forEach((a) => {
      a.addEventListener("click", () => {
        (v = a.getAttribute("data-value")),
          w && (w.textContent = a.textContent),
          (s.hidden = !0),
          o.setAttribute("aria-expanded", "false"),
          p();
      });
    }));
  const d = i.querySelector("#ptl-status-trigger"),
    n = i.querySelector("#ptl-filter-status-menu"),
    F = i.querySelector("#ptl-status-val");
  d &&
    n &&
    (d.addEventListener("click", (a) => {
      a.stopPropagation();
      const t = !n.hidden;
      (n.hidden = t), d.setAttribute("aria-expanded", !t), s && (s.hidden = !0);
    }),
    n.querySelectorAll(".ptl-filter-option").forEach((a) => {
      a.addEventListener("click", () => {
        (f = a.getAttribute("data-value")),
          F && (F.textContent = a.textContent),
          (n.hidden = !0),
          d.setAttribute("aria-expanded", "false"),
          p();
      });
    })),
    document.addEventListener("click", (a) => {
      s &&
        !s.hidden &&
        !o.contains(a.target) &&
        ((s.hidden = !0), o && o.setAttribute("aria-expanded", "false")),
        n &&
          !n.hidden &&
          !d.contains(a.target) &&
          ((n.hidden = !0), d && d.setAttribute("aria-expanded", "false"));
    });
  const L = i.querySelector("#modal-close-btn");
  L && L.addEventListener("click", k);
  const h = i.querySelector("#trader-detail-modal");
  h &&
    h.addEventListener("click", (a) => {
      a.target === h && k();
    }),
    p();
}
export { E as a, P as r };
