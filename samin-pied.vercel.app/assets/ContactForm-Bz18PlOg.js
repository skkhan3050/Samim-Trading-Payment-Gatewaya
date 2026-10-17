import { s as a } from "./Toast-DMDHYwSq.js";
function c(t) {
  if (!t) return;
  t.innerHTML = `
    <div class="container">
      <div class="demo-grid">
        <!-- Left Column: Form -->
        <div class="demo-form-card">
          <div class="form-header">
            <h2 class="form-header-title">Get More Information About Our Trading Strategies</h2>
            <p class="form-header-desc">
              Connect with our strategy team to receive detailed sample modules, framework documentation, and custom package advice.
            </p>
          </div>

          <form id="crypto-contact-form" class="cyber-form" novalidate>
            <div class="form-row-2">
              <div class="form-group">
                <label for="firstName" class="form-label">First Name *</label>
                <input type="text" id="firstName" name="firstName" class="form-input" placeholder="Jordan" required />
              </div>
              <div class="form-group">
                <label for="lastName" class="form-label">Last Name *</label>
                <input type="text" id="lastName" name="lastName" class="form-input" placeholder="Miller" required />
              </div>
            </div>

            <div class="form-row-2">
              <div class="form-group">
                <label for="email" class="form-label">Email Address *</label>
                <input type="email" id="email" name="email" class="form-input" placeholder="jordan.miller@example.com" required />
              </div>
              <div class="form-group">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="tel" id="phone" name="phone" class="form-input" placeholder="+1 (555) 342-9102" />
              </div>
            </div>

            <div class="form-row-2">
              <div class="form-group">
                <label for="tradingExp" class="form-label">Trading Experience *</label>
                <select id="tradingExp" name="tradingExp" class="form-select" required>
                  <option value="" disabled selected>Select Experience</option>
                  <option value="beginner">Beginner (0 - 1 years)</option>
                  <option value="intermediate">Intermediate (1 - 3 years)</option>
                  <option value="advanced">Advanced (3+ years)</option>
                </select>
              </div>
              <div class="form-group">
                <label for="primaryMarket" class="form-label">Primary Market *</label>
                <select id="primaryMarket" name="primaryMarket" class="form-select" required>
                  <option value="" disabled selected>Select Market Focus</option>
                  <option value="bitcoin">Bitcoin (BTC)</option>
                  <option value="ethereum">Ethereum (ETH)</option>
                  <option value="altcoins">Altcoins / Micro-caps</option>
                  <option value="multiple">Multiple / All Markets</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="strategyInterest" class="form-label">Interested Strategy *</label>
              <select id="strategyInterest" name="strategyInterest" class="form-select" required>
                <option value="" disabled selected>Select Strategy Framework</option>
                <option value="trend">Trend Trading Strategy</option>
                <option value="breakout">Breakout Trading Strategy</option>
                <option value="structure">Market Structure Strategy</option>
                <option value="risk">Risk Management & Position Sizing</option>
                <option value="complete">Complete Strategy Package (All-Inclusive)</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message" class="form-label">Trading Goals & Questions</label>
              <textarea id="message" name="message" class="form-textarea" placeholder="Tell us about your current trading style, challenges, or specific questions..."></textarea>
            </div>

            <button type="submit" class="btn btn-primary form-submit-btn" id="contact-submit-btn">
              <span>Request Details</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </form>
        </div>

        <!-- Right Column: Value Prop & Trust -->
        <div class="demo-info-col">
          <span class="tag-label">
            <span class="tag-dot"></span>
            DISCIPLINED EXECUTION
          </span>

          <h2 class="demo-info-title">
            Everything You Need to Build a More Structured Trading Process
          </h2>

          <p class="demo-info-desc">
            Stop letting emotion dictate trade entries and exits. Build consistency with institutional-grade technical analysis and risk parameters.
          </p>

          <ul class="demo-benefits-list">
            <li class="demo-benefit-item">
              <div class="benefit-icon-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9DD82B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div class="benefit-content">
                <strong class="benefit-title">Practical Strategy Frameworks</strong>
                <p class="benefit-desc">Step-by-step setup rules for trending and range-bound crypto markets.</p>
              </div>
            </li>

            <li class="demo-benefit-item">
              <div class="benefit-icon-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
              <div class="benefit-content">
                <strong class="benefit-title">Rigorous Risk Management Concepts</strong>
                <p class="benefit-desc">Preserve your capital with mathematical position sizing and stop-loss logic.</p>
              </div>
            </li>

            <li class="demo-benefit-item">
              <div class="benefit-icon-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38E879" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div class="benefit-content">
                <strong class="benefit-title">Trading Psychology &amp; Journaling</strong>
                <p class="benefit-desc">Master emotional discipline and document setups with repeatable audit routines.</p>
              </div>
            </li>
          </ul>

          <div style="border-top: 1px solid var(--border-subtle); padding-top: 24px; margin-top: 8px;">
            <div style="font-size: 0.75rem; font-family: var(--font-mono); text-transform: uppercase; color: var(--text-muted); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
              <span style="width: 6px; height: 6px; border-radius: 50%; background: #F59E0B;"></span>
              Connect On Official Community &amp; Social Channels:
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 10px;">
              <!-- Telegram -->
              <a href="https://t.me/Goldsblue2057" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; background: rgba(36, 161, 222, 0.1); border: 1px solid rgba(36, 161, 222, 0.35); border-radius: 8px; font-size: 0.85rem; font-weight: 600; color: #FFFFFF; text-decoration: none; transition: all 0.2s;" onmouseover="this.style.background='rgba(36, 161, 222, 0.25)'; this.style.borderColor='#24A1DE'; this.style.transform='translateY(-2px)';" onmouseout="this.style.background='rgba(36, 161, 222, 0.1)'; this.style.borderColor='rgba(36, 161, 222, 0.35)'; this.style.transform='translateY(0)';">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#24A1DE" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                <span>Telegram</span>
              </a>

              <!-- WhatsApp -->
              <a href="https://wa.me/918274053977" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; background: rgba(37, 211, 102, 0.1); border: 1px solid rgba(37, 211, 102, 0.35); border-radius: 8px; font-size: 0.85rem; font-weight: 600; color: #FFFFFF; text-decoration: none; transition: all 0.2s;" onmouseover="this.style.background='rgba(37, 211, 102, 0.25)'; this.style.borderColor='#25D366'; this.style.transform='translateY(-2px)';" onmouseout="this.style.background='rgba(37, 211, 102, 0.1)'; this.style.borderColor='rgba(37, 211, 102, 0.35)'; this.style.transform='translateY(0)';">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                </svg>
                <span>WhatsApp</span>
              </a>

              <!-- Instagram -->
              <a href="https://instagram.com/goldsblue3?utm_source=qr&xtok=emdpamM3Z2pxeTFy" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; background: rgba(225, 48, 108, 0.1); border: 1px solid rgba(225, 48, 108, 0.35); border-radius: 8px; font-size: 0.85rem; font-weight: 600; color: #FFFFFF; text-decoration: none; transition: all 0.2s;" onmouseover="this.style.background='rgba(225, 48, 108, 0.25)'; this.style.borderColor='#E1306C'; this.style.transform='translateY(-2px)';" onmouseout="this.style.background='rgba(225, 48, 108, 0.1)'; this.style.borderColor='rgba(225, 48, 108, 0.35)'; this.style.transform='translateY(0)';">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E1306C" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Instagram</span>
              </a>

              <!-- X / Twitter -->
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.35); border-radius: 8px; font-size: 0.85rem; font-weight: 600; color: #FFFFFF; text-decoration: none; transition: all 0.2s;" onmouseover="this.style.background='rgba(245, 158, 11, 0.25)'; this.style.borderColor='#F59E0B'; this.style.transform='translateY(-2px)';" onmouseout="this.style.background='rgba(245, 158, 11, 0.1)'; this.style.borderColor='rgba(245, 158, 11, 0.35)'; this.style.transform='translateY(0)';">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                </svg>
                <span>X (Twitter)</span>
              </a>

              <!-- Facebook -->
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; background: rgba(24, 119, 242, 0.1); border: 1px solid rgba(24, 119, 242, 0.35); border-radius: 8px; font-size: 0.85rem; font-weight: 600; color: #FFFFFF; text-decoration: none; transition: all 0.2s;" onmouseover="this.style.background='rgba(24, 119, 242, 0.25)'; this.style.borderColor='#1877F2'; this.style.transform='translateY(-2px)';" onmouseout="this.style.background='rgba(24, 119, 242, 0.1)'; this.style.borderColor='rgba(24, 119, 242, 0.35)'; this.style.transform='translateY(0)';">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1877F2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span>Facebook</span>
              </a>

              <!-- YouTube -->
              <a href="https://youtube.com/@goldsblue?si=xCcdltjh1aXwYfgZ" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; background: rgba(255, 0, 0, 0.1); border: 1px solid rgba(255, 0, 0, 0.35); border-radius: 8px; font-size: 0.85rem; font-weight: 600; color: #FFFFFF; text-decoration: none; transition: all 0.2s;" onmouseover="this.style.background='rgba(255, 0, 0, 0.25)'; this.style.borderColor='#FF0000'; this.style.transform='translateY(-2px)';" onmouseout="this.style.background='rgba(255, 0, 0, 0.1)'; this.style.borderColor='rgba(255, 0, 0, 0.35)'; this.style.transform='translateY(0)';">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF0000" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#FF0000"></polygon>
                </svg>
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  const e = t.querySelector("#crypto-contact-form"),
    i = t.querySelector("#contact-submit-btn");
  e == null ||
    e.addEventListener("submit", (s) => {
      s.preventDefault();
      const o = e.querySelector("#firstName").value.trim(),
        r = e.querySelector("#email").value.trim(),
        l = e.querySelector("#tradingExp").value,
        n = e.querySelector("#strategyInterest").value;
      if (!o || !r || !l || !n) {
        a(
          "Please complete all required fields",
          "First name, email, experience level, and strategy are required.",
          "error"
        );
        return;
      }
      (i.disabled = !0),
        (i.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: geo-spin 1s linear infinite;">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
      </svg>
      <span>Processing Request...</span>
    `),
        setTimeout(() => {
          (i.disabled = !1),
            (i.innerHTML = `
        <span>Request Details</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      `),
            e.reset(),
            a(
              "Strategy Details Sent!",
              `Thank you, ${o}. Our strategy team has dispatched your strategy overview package to ${r}.`
            );
        }, 1200);
    });
}
export { c as r };
