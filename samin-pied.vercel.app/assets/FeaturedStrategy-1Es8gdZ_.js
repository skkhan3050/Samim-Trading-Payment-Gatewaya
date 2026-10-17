function t(e) {
  e &&
    (e.innerHTML = `
    <div class="container">
      <!-- Section Tag / Header -->
      <div class="section-header-tag">
        <span class="tag-label">
          <span class="tag-dot"></span>
          FEATURED TRADING STRATEGY
        </span>
        <div class="line"></div>
      </div>

      <!-- Featured Strategy Card -->
      <div class="featured-strategy-card">
        <div class="featured-content">
          <span class="tag-badge" style="align-self: flex-start; background: rgba(245, 158, 11,0.12); border-color: var(--neon-green);">
            SYSTEMATIC FRAMEWORK
          </span>
          <h3 class="featured-title">
            Turn Market Analysis Into a Structured Trading Plan
          </h3>
          <p class="featured-desc">
            Learn how to identify market structure, define entry conditions, manage risk and plan exits before entering a trade. Eliminate impulsive decisions with a repeatable, rule-based approach.
          </p>
          <a href="#strategy-products" class="btn btn-primary" style="align-self: flex-start; padding: 12px 26px;">
            <span>Explore Strategy</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        <!-- Professional Trading Chart Setup SVG -->
        <div class="featured-visual">
          <svg viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg" class="featured-3d-chart-svg" style="width:100%; height:100%;">
            <defs>
              <!-- 3D Curved Outer Border Gradients -->
              <linearGradient id="border3dOuterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#9DD82B" stop-opacity="0.85"/>
                <stop offset="35%" stop-color="#38E879" stop-opacity="0.5"/>
                <stop offset="70%" stop-color="#00E5FF" stop-opacity="0.3"/>
                <stop offset="100%" stop-color="#040C04" stop-opacity="0.9"/>
              </linearGradient>
              <linearGradient id="border3dInnerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#9DD82B" stop-opacity="0.6"/>
                <stop offset="50%" stop-color="#00E5FF" stop-opacity="0.2"/>
                <stop offset="100%" stop-color="#9DD82B" stop-opacity="0.4"/>
              </linearGradient>
              <radialGradient id="featChartGlow" cx="65%" cy="40%" r="55%">
                <stop offset="0%" stop-color="#9DD82B" stop-opacity="0.25"/>
                <stop offset="60%" stop-color="#00E5FF" stop-opacity="0.08"/>
                <stop offset="100%" stop-color="#060C18" stop-opacity="0"/>
              </radialGradient>
              <linearGradient id="volSpikeGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#9DD82B"/>
                <stop offset="100%" stop-color="#10E76F"/>
              </linearGradient>
            </defs>

            <!-- 3D Beveled Outer Curved Frame -->
            <rect x="2" y="2" width="496" height="316" rx="20" fill="#050A14" stroke="url(#border3dOuterGrad)" stroke-width="2" filter="drop-shadow(0 0 12px rgba(157, 216, 43, 0.25))"/>
            <!-- 3D Inset Curved Rim -->
            <rect x="7" y="7" width="486" height="306" rx="15" fill="none" stroke="url(#border3dInnerGrad)" stroke-width="1.2" opacity="0.75"/>
            
            <circle cx="330" cy="140" r="140" fill="url(#featChartGlow)" class="svg-ambient-pulse"/>

            <!-- Cyber Floor Grid Pattern -->
            <g opacity="0.15">
              <line x1="20" y1="70" x2="480" y2="70" stroke="#00E5FF" stroke-width="0.8" stroke-dasharray="2 4"/>
              <line x1="20" y1="130" x2="480" y2="130" stroke="#00E5FF" stroke-width="0.8" stroke-dasharray="2 4"/>
              <line x1="20" y1="190" x2="480" y2="190" stroke="#00E5FF" stroke-width="0.8" stroke-dasharray="2 4"/>
              <line x1="20" y1="250" x2="480" y2="250" stroke="#00E5FF" stroke-width="0.8" stroke-dasharray="2 4"/>
            </g>

            <!-- Candlestick Floor Shadows (for 3D depth) -->
            <ellipse cx="42" cy="235" rx="7" ry="2.5" fill="#000000" opacity="0.6"/>
            <ellipse cx="65" cy="225" rx="7" ry="2.5" fill="#000000" opacity="0.6"/>
            <ellipse cx="90" cy="215" rx="7" ry="2.5" fill="#000000" opacity="0.6"/>
            <ellipse cx="114" cy="230" rx="7" ry="2.5" fill="#000000" opacity="0.6"/>
            <ellipse cx="140" cy="245" rx="7" ry="2.5" fill="#000000" opacity="0.6"/>
            <ellipse cx="168" cy="220" rx="8" ry="3" fill="#000000" opacity="0.6"/>
            <ellipse cx="200" cy="205" rx="8" ry="3" fill="#000000" opacity="0.6"/>
            <ellipse cx="230" cy="175" rx="8" ry="3" fill="#000000" opacity="0.6"/>
            <ellipse cx="260" cy="185" rx="8" ry="3" fill="#000000" opacity="0.6"/>
            <ellipse cx="295" cy="195" rx="8" ry="3" fill="#000000" opacity="0.6"/>
            <ellipse cx="335" cy="155" rx="9" ry="3.5" fill="#000000" opacity="0.6"/>
            <ellipse cx="375" cy="130" rx="9" ry="3.5" fill="#000000" opacity="0.6"/>

            <!-- Candlesticks Array -->
            <!-- Candle 1 (Green) -->
            <line x1="42" y1="200" x2="42" y2="230" stroke="#38E879" stroke-width="1.5"/>
            <rect x="37" y="206" width="10" height="18" rx="1.5" fill="#38E879" class="svg-candle-pulse"/>

            <!-- Candle 2 (Green) -->
            <line x1="65" y1="168" x2="65" y2="218" stroke="#38E879" stroke-width="1.5"/>
            <rect x="60" y="174" width="10" height="36" rx="1.5" fill="#38E879" class="svg-candle-pulse-alt"/>

            <!-- Candle 3 (Red Pullback) -->
            <line x1="90" y1="140" x2="90" y2="195" stroke="#FF3B69" stroke-width="1.5"/>
            <rect x="85" y="146" width="10" height="40" rx="1.5" fill="#FF3B69" class="svg-candle-pulse"/>

            <!-- Candle 4 (Red Dip) -->
            <line x1="114" y1="155" x2="114" y2="210" stroke="#FF3B69" stroke-width="1.5"/>
            <rect x="109" y="162" width="10" height="32" rx="1.5" fill="#FF3B69" class="svg-candle-pulse-alt"/>

            <!-- Candle 5 (Green Higher Low Reversal) -->
            <line x1="140" y1="170" x2="140" y2="225" stroke="#38E879" stroke-width="1.5"/>
            <rect x="135" y="176" width="10" height="35" rx="1.5" fill="#38E879" class="svg-candle-pulse"/>

            <!-- Candle 6 (Green Expansion) -->
            <line x1="168" y1="130" x2="168" y2="195" stroke="#38E879" stroke-width="1.5"/>
            <rect x="163" y="138" width="10" height="44" rx="1.5" fill="#38E879" class="svg-candle-pulse-alt"/>

            <!-- Candle 7 (Green Breakout Peak / BOS) -->
            <line x1="200" y1="90" x2="200" y2="160" stroke="#38E879" stroke-width="1.5"/>
            <rect x="195" y="98" width="10" height="48" rx="1.5" fill="#38E879" class="svg-candle-pulse"/>

            <!-- Candle 8 (Red Retest into OTE) -->
            <line x1="230" y1="78" x2="230" y2="135" stroke="#FF3B69" stroke-width="1.5"/>
            <rect x="225" y="85" width="10" height="36" rx="1.5" fill="#FF3B69" class="svg-candle-pulse-alt"/>

            <!-- Candle 9 (Red Dip to Entry Zone) -->
            <line x1="260" y1="95" x2="260" y2="160" stroke="#FF3B69" stroke-width="1.5"/>
            <rect x="255" y="105" width="10" height="35" rx="1.5" fill="#FF3B69" class="svg-candle-pulse"/>

            <!-- Candle 10 (Green Bounce from Entry) -->
            <line x1="295" y1="115" x2="295" y2="175" stroke="#9DD82B" stroke-width="2"/>
            <rect x="290" y="122" width="10" height="38" rx="1.5" fill="#9DD82B" class="svg-neon-glow-candle"/>

            <!-- Candle 11 (Green Big Expansion) -->
            <line x1="335" y1="75" x2="335" y2="140" stroke="#38E879" stroke-width="2"/>
            <rect x="330" y="82" width="11" height="45" rx="2" fill="#38E879" class="svg-candle-pulse"/>

            <!-- Candle 12 (Massive Green Bull Continuation) -->
            <line x1="375" y1="35" x2="375" y2="110" stroke="#9DD82B" stroke-width="2.5"/>
            <rect x="369" y="44" width="12" height="52" rx="2" fill="#9DD82B" class="svg-neon-glow-candle"/>

            <!-- Electric Cyan Market Structure Zigzag Polyline -->
            <path d="M42 215 L90 148 L140 195 L230 85 L295 145 L335 95 L485 30" stroke="#00E5FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" class="svg-wave-flow"/>

            <!-- Pivot Markers & Tags -->
            <!-- 1. Swing High -->
            <circle cx="90" cy="148" r="5" fill="#00E5FF" class="svg-beacon-core"/>
            <rect x="54" y="120" width="72" height="18" rx="4" fill="rgba(8, 17, 31, 0.9)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
            <text x="90" y="132" fill="#FFFFFF" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="bold" text-anchor="middle">SWING HIGH</text>

            <!-- 2. Higher Low -->
            <circle cx="140" cy="195" r="5" fill="#00E5FF" class="svg-beacon-core"/>
            <rect x="102" y="208" width="76" height="18" rx="4" fill="rgba(8, 17, 31, 0.9)" stroke="rgba(0, 229, 255, 0.4)" stroke-width="1"/>
            <text x="140" y="220" fill="#00E5FF" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="bold" text-anchor="middle">HIGHER LOW</text>

            <!-- 3. BOS (Break of Structure) Peak -->
            <circle cx="230" cy="85" r="8" stroke="#9DD82B" stroke-width="1.8" class="svg-beacon-ring"/>
            <circle cx="230" cy="85" r="4" fill="#FFFFFF" class="svg-beacon-core"/>
            <rect x="155" y="52" width="150" height="20" rx="4" fill="rgba(10, 22, 12, 0.92)" stroke="#9DD82B" stroke-width="1.2" class="svg-card-hud-border"/>
            <text x="230" y="65" fill="#9DD82B" font-family="'JetBrains Mono', monospace" font-size="8" font-weight="bold" text-anchor="middle">BOS (BREAK OF STRUCTURE)</text>

            <!-- 4. Entry Zone (Fib OTE 0.618 - 0.705) -->
            <rect x="252" y="122" width="104" height="38" rx="4" fill="rgba(157, 216, 43, 0.12)" stroke="#9DD82B" stroke-width="1.5" class="svg-card-hud-border"/>
            <text x="304" y="137" fill="#9DD82B" font-family="'JetBrains Mono', monospace" font-size="8" font-weight="bold" text-anchor="middle">ENTRY ZONE</text>
            <text x="304" y="150" fill="#9DD82B" font-family="'JetBrains Mono', monospace" font-size="6.5" font-weight="600" text-anchor="middle">FIB OTE 0.618 - 0.705</text>

            <!-- 5. Expansion Pivot -->
            <circle cx="335" cy="95" r="5" fill="#9DD82B" class="svg-beacon-core"/>

            <!-- 6. Stop Loss Marker & Badge -->
            <line x1="240" y1="180" x2="410" y2="180" stroke="#FF3B69" stroke-width="1.5" stroke-dasharray="3 3"/>
            <rect x="280" y="186" width="115" height="20" rx="4" fill="rgba(28, 9, 17, 0.95)" stroke="#FF3B69" stroke-width="1" class="svg-zone-pulse-red"/>
            <text x="337" y="199" fill="#FF3B69" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="bold" text-anchor="middle">STOP LOSS (-4.2%)</text>

            <!-- Bottom Volume Histogram Bars -->
            <rect x="35" y="270" width="10" height="18" rx="1.5" fill="#38E879"/>
            <rect x="58" y="264" width="10" height="24" rx="1.5" fill="#38E879"/>
            <rect x="82" y="274" width="10" height="14" rx="1.5" fill="#FF3B69"/>
            <rect x="106" y="268" width="10" height="20" rx="1.5" fill="#FF3B69"/>
            <rect x="130" y="272" width="10" height="16" rx="1.5" fill="#38E879"/>
            <rect x="160" y="258" width="10" height="30" rx="1.5" fill="#38E879"/>
            <rect x="190" y="252" width="10" height="36" rx="1.5" fill="#38E879"/>
            <rect x="222" y="262" width="10" height="26" rx="1.5" fill="#38E879"/>
            <rect x="254" y="272" width="10" height="16" rx="1.5" fill="#FF3B69"/>
            <rect x="286" y="266" width="10" height="22" rx="1.5" fill="#38E879"/>
            <rect x="328" y="248" width="10" height="40" rx="1.5" fill="#38E879"/>
            <rect x="370" y="238" width="12" height="50" rx="2" fill="url(#volSpikeGrad)" class="svg-neon-glow-candle"/>

            <!-- Top-Left Risk/Reward Projection Box -->
            <rect x="24" y="26" width="145" height="40" rx="4" fill="rgba(8, 17, 31, 0.9)" stroke="rgba(157, 216, 43, 0.35)" stroke-width="1"/>
            <text x="34" y="41" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="7" font-weight="600" letter-spacing="0.04em">RISK / REWARD PROJECTION</text>
            <text x="34" y="56" fill="#9DD82B" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="bold">1 : 3.2 PLANNED SETUP</text>

            <!-- Top-Right Floating Order Flow Pill -->
            <g transform="translate(105, 14)">
              <rect x="0" y="0" width="365" height="30" rx="15" fill="rgba(6, 12, 22, 0.94)" stroke="rgba(0, 229, 255, 0.4)" stroke-width="1.2" filter="drop-shadow(0 4px 14px rgba(0,0,0,0.6))"/>
              <text x="14" y="19" fill="#FFFFFF" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="bold">BTC/USDT <tspan fill="#00E5FF">15M • 3D ORDER FLOW</tspan></text>
              <line x1="195" y1="6" x2="195" y2="24" stroke="rgba(255,255,255,0.15)"/>
              <circle cx="212" cy="15" r="3.5" fill="#9DD82B" class="svg-beacon-core"/>
              <text x="222" y="19" fill="#9DD82B" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="bold">$67,840.50 +4.82%</text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  `);
}
export { t as r };
