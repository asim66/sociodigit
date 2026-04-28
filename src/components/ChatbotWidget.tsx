// @ts-nocheck
"use client";
import { useEffect } from 'react';

export default function ChatbotWidget() {
  useEffect(() => {
    // ── Inject Google Fonts ──
    if (!document.getElementById('sd-fonts')) {
      const link = document.createElement('link');
      link.id = 'sd-fonts';
      link.rel = 'stylesheet';
      link.href =
        'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap';
      document.head.appendChild(link);
    }

    // ── Inject CSS ──
    if (!document.getElementById('sd-styles')) {
      const style = document.createElement('style');
      style.id = 'sd-styles';
      style.textContent = `
:root {
  --sd-accent:      #E8421A;
  --sd-accent-dk:   #C43510;
  --sd-accent-lt:   #FF6B3D;
  --sd-glow:        rgba(232,66,26,0.22);
  --sd-white:       #ffffff;
  --sd-bg:          #fdf6f3;
  --sd-surface:     #fff7f4;
  --sd-border:      #f0e6e0;
  --sd-border2:     #fde0d5;
  --sd-text:        #1f1a18;
  --sd-muted:       #9a8e88;
  --sd-bot-bubble:  #ffffff;
  --sd-radius:      22px;
}

#sd-launcher {
  position: fixed; bottom: 28px; right: 28px;
  width: 60px; height: 60px; border-radius: 16px;
  background: var(--sd-accent);
  border: none; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 6px 24px var(--sd-glow), 0 2px 8px rgba(232,66,26,0.15);
  z-index: 99999; overflow: visible;
  transition: transform 0.2s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s ease, border-radius 0.2s ease;
}
#sd-launcher:hover {
  transform: scale(1.08) translateY(-3px);
  border-radius: 20px;
  box-shadow: 0 12px 36px rgba(232,66,26,0.38);
}
#sd-launcher svg { width: 25px; height: 25px; fill: #fff; display: block; position: relative; z-index: 1; }
#sd-launcher .sd-ico-close { display: none; }
#sd-launcher.sd-open .sd-ico-chat { display: none; }
#sd-launcher.sd-open .sd-ico-close { display: block; }
#sd-launcher::after {
  content: ''; position: absolute; inset: -3px; border-radius: 19px;
  border: 2px solid rgba(232,66,26,0.4);
  animation: sd-pulse 2.6s ease-out infinite; pointer-events: none;
}
@keyframes sd-pulse { 0%{ transform:scale(1); opacity:.6; } 100%{ transform:scale(1.65); opacity:0; } }

#sd-notif {
  position: absolute; top: -4px; right: -4px;
  width: 12px; height: 12px; border-radius: 50%;
  background: #22c55e; border: 2px solid #fff;
  z-index: 2; animation: sd-pop-in 0.4s cubic-bezier(0.34,1.56,0.64,1) both;
}
#sd-launcher.sd-open #sd-notif { display: none; }
@keyframes sd-pop-in { from{transform:scale(0);} to{transform:scale(1);} }

#sd-chat {
  position: fixed; bottom: 106px; right: 28px;
  width: 375px; height: 592px;
  background: var(--sd-bg);
  border-radius: var(--sd-radius);
  box-shadow: 0 20px 60px rgba(232,66,26,0.12), 0 4px 20px rgba(0,0,0,0.07);
  display: flex; flex-direction: column; overflow: hidden;
  z-index: 99998;
  transform: scale(0.88) translateY(20px); opacity: 0;
  pointer-events: none; transform-origin: bottom right;
  transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.24s ease;
  border: 1px solid var(--sd-border2);
}
#sd-chat.sd-show { transform: scale(1) translateY(0); opacity: 1; pointer-events: all; }

.sd-head {
  background: linear-gradient(135deg, #E8421A 0%, #ff6b3d 100%);
  padding: 16px 18px;
  display: flex; align-items: center; gap: 12px;
  flex-shrink: 0; position: relative; overflow: hidden;
}
.sd-head::before {
  content: '';
  position: absolute; bottom: -18px; right: -18px;
  width: 80px; height: 80px; border-radius: 50%;
  background: rgba(255,255,255,0.10);
  pointer-events: none;
}
.sd-head::after {
  content: '';
  position: absolute; top: -24px; right: 40px;
  width: 60px; height: 60px; border-radius: 50%;
  background: rgba(255,255,255,0.07);
  pointer-events: none;
}
.sd-ava {
  width: 42px; height: 42px; border-radius: 14px;
  background: rgba(255,255,255,0.22);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; font-size: 21px;
  border: 1.5px solid rgba(255,255,255,0.3);
  position: relative; z-index: 1;
}
.sd-head-info { flex: 1; position: relative; z-index: 1; }
.sd-head-info h3 {
  font-family: 'Plus Jakarta Sans', sans-serif; color: #fff;
  font-size: 15px; font-weight: 700; margin: 0; padding: 0;
  letter-spacing: -0.01em;
}
.sd-head-info p {
  color: rgba(255,255,255,0.72); font-size: 11px;
  font-family: 'Outfit', sans-serif; font-weight: 400;
  margin: 3px 0 0; padding: 0;
  display: flex; align-items: center; gap: 5px;
}
.sd-dot {
  width: 6px; height: 6px; background: #a7f3d0;
  border-radius: 50%; display: inline-block;
  animation: sd-blink 2.2s infinite; flex-shrink: 0;
}
@keyframes sd-blink { 0%,100%{opacity:1} 50%{opacity:.3} }

.sd-bar { height: 4px; background: rgba(232,66,26,0.10); flex-shrink: 0; }
.sd-bar-fill {
  height: 100%;
  background: var(--sd-accent);
  transition: width 0.55s cubic-bezier(0.4,0,0.2,1);
  width: 0%; border-radius: 0 4px 4px 0;
}

.sd-msgs {
  flex: 1; overflow-y: auto; padding: 16px 14px 8px;
  display: flex; flex-direction: column; gap: 8px;
  background: var(--sd-bg);
  scrollbar-width: thin; scrollbar-color: var(--sd-border2) transparent;
}
.sd-msgs::-webkit-scrollbar { width: 4px; }
.sd-msgs::-webkit-scrollbar-thumb { background: var(--sd-border2); border-radius: 4px; }

.sd-msg {
  max-width: 82%; padding: 10px 14px; border-radius: 16px;
  font-size: 13.5px; line-height: 1.6;
  font-family: 'Outfit', sans-serif; font-weight: 400;
  margin: 0; animation: sd-pop .26s cubic-bezier(0.34,1.56,0.64,1);
}
@keyframes sd-pop {
  from { opacity: 0; transform: translateY(8px) scale(0.95); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
.sd-msg.sd-bot {
  background: var(--sd-bot-bubble);
  color: var(--sd-text);
  border-bottom-left-radius: 4px;
  align-self: flex-start;
  border: 1px solid var(--sd-border2);
  box-shadow: 0 1px 4px rgba(232,66,26,0.06);
}
.sd-msg.sd-user {
  background: var(--sd-accent);
  color: #fff;
  border-bottom-right-radius: 4px;
  align-self: flex-end;
  box-shadow: 0 4px 14px rgba(232,66,26,0.28);
}

.sd-typing {
  display: flex; gap: 5px; align-items: center;
  padding: 11px 14px;
  background: var(--sd-bot-bubble);
  border: 1px solid var(--sd-border2);
  border-radius: 16px; border-bottom-left-radius: 4px;
  align-self: flex-start; width: fit-content;
  animation: sd-pop .22s ease;
  box-shadow: 0 1px 4px rgba(232,66,26,0.06);
}
.sd-typing span {
  width: 6px; height: 6px; background: var(--sd-accent-lt);
  border-radius: 50%; animation: sd-tdot 1.2s ease infinite;
  display: block; opacity: 0.6;
}
.sd-typing span:nth-child(2) { animation-delay: .2s; }
.sd-typing span:nth-child(3) { animation-delay: .4s; }
@keyframes sd-tdot {
  0%,60%,100% { transform: translateY(0); opacity: 0.4; }
  30% { transform: translateY(-5px); opacity: 1; }
}

.sd-chips {
  display: flex; flex-wrap: wrap; gap: 7px;
  align-self: flex-start; max-width: 100%; animation: sd-pop .3s ease;
}
.sd-chip {
  background: var(--sd-white);
  border: 1.5px solid var(--sd-border2);
  color: var(--sd-accent);
  font-size: 12.5px; font-weight: 600; padding: 7px 15px;
  border-radius: 10px; cursor: pointer;
  transition: all .18s ease;
  font-family: 'Outfit', sans-serif; line-height: 1;
  box-shadow: 0 1px 4px rgba(232,66,26,0.07);
}
.sd-chip:hover {
  background: var(--sd-accent); color: #fff;
  border-color: var(--sd-accent);
  transform: translateY(-2px);
  box-shadow: 0 5px 16px rgba(232,66,26,0.28);
}

.sd-multicheck {
  display: flex; flex-wrap: wrap; gap: 7px;
  align-self: flex-start; max-width: 100%; animation: sd-pop .3s ease;
}
.sd-mchip {
  background: var(--sd-white);
  border: 1.5px solid var(--sd-border);
  color: var(--sd-muted);
  font-size: 12.5px; font-weight: 500; padding: 7px 14px;
  border-radius: 10px; cursor: pointer;
  transition: all .18s ease;
  font-family: 'Outfit', sans-serif; line-height: 1;
  user-select: none;
}
.sd-mchip.sd-mchip-on {
  background: var(--sd-accent); border-color: var(--sd-accent);
  color: #fff; box-shadow: 0 3px 10px rgba(232,66,26,0.25);
  transform: translateY(-1px);
}
.sd-mchip:hover:not(.sd-mchip-on) { border-color: var(--sd-accent); color: var(--sd-accent); }
.sd-mcheck-confirm {
  align-self: flex-start; margin-top: 4px;
  background: var(--sd-accent); color: #fff;
  border: none; border-radius: 10px;
  padding: 8px 20px; font-size: 12.5px; font-weight: 600;
  font-family: 'Outfit', sans-serif; cursor: pointer;
  transition: all .18s ease;
  box-shadow: 0 4px 12px rgba(232,66,26,0.28);
  animation: sd-pop .35s ease;
}
.sd-mcheck-confirm:hover {
  background: var(--sd-accent-dk); transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(232,66,26,0.38);
}

.sd-input-row {
  padding: 10px 12px;
  border-top: 1px solid var(--sd-border2);
  display: flex; gap: 8px; align-items: center; flex-shrink: 0;
  background: var(--sd-surface);
}
.sd-input-row input,
.sd-input-row select {
  flex: 1; border: 1.5px solid var(--sd-border2); border-radius: 10px;
  padding: 10px 14px; font-family: 'Outfit', sans-serif; font-weight: 400;
  font-size: 13.5px; outline: none;
  background: var(--sd-white); color: var(--sd-text);
  transition: border-color .2s, box-shadow .2s;
  appearance: none; -webkit-appearance: none;
  box-shadow: none; width: auto; height: auto;
}
.sd-input-row input::placeholder { color: #ccc4bf; }
.sd-input-row input:focus,
.sd-input-row select:focus {
  border-color: var(--sd-accent);
  box-shadow: 0 0 0 3px rgba(232,66,26,0.10);
  outline: none;
}
.sd-input-row select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23E8421A' stroke-width='1.6' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right 14px center;
  padding-right: 36px; cursor: pointer; background-color: var(--sd-white);
}
.sd-input-row textarea {
  flex: 1; border: 1.5px solid var(--sd-border2); border-radius: 10px;
  padding: 10px 14px; font-family: 'Outfit', sans-serif; font-weight: 400;
  font-size: 13.5px; outline: none;
  background: var(--sd-white); color: var(--sd-text);
  resize: none; height: 64px;
  transition: border-color .2s, box-shadow .2s; box-shadow: none;
}
.sd-input-row textarea::placeholder { color: #ccc4bf; }
.sd-input-row textarea:focus {
  border-color: var(--sd-accent);
  box-shadow: 0 0 0 3px rgba(232,66,26,0.10); outline: none;
}

.sd-send {
  width: 40px; height: 40px; min-width: 40px; border-radius: 50%;
  background: var(--sd-accent); border: none; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all .2s ease; padding: 0;
  box-shadow: 0 4px 12px rgba(232,66,26,0.32);
}
.sd-send:hover {
  background: var(--sd-accent-dk);
  transform: scale(1.08) translateY(-1px);
  box-shadow: 0 6px 18px rgba(232,66,26,0.44);
}
.sd-send svg { width: 16px; height: 16px; fill: #fff; display: block; }
.sd-send:disabled { background: #e8e0db; cursor: not-allowed; transform: none; box-shadow: none; }

.sd-subtext {
  text-align: center; font-size: 10.5px; color: var(--sd-muted);
  padding: 0 16px 6px; flex-shrink: 0;
  font-family: 'Outfit', sans-serif; line-height: 1.45;
  background: var(--sd-surface);
}

.sd-foot {
  text-align: center; font-size: 10px; color: #c8bfba;
  padding: 5px 0 8px; border-top: 1px solid var(--sd-border2); flex-shrink: 0;
  font-family: 'Outfit', sans-serif; background: var(--sd-surface);
}
.sd-foot a { color: var(--sd-accent); text-decoration: none; }

.sd-success-wrap {
  flex: 1; display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  padding: 28px 24px; text-align: center; gap: 14px;
  animation: sd-pop .4s ease; background: var(--sd-bg);
}
.sd-success-icon {
  width: 72px; height: 72px; border-radius: 20px;
  background: linear-gradient(135deg, #E8421A, #ff6b3d);
  display: flex; align-items: center; justify-content: center;
  font-size: 34px;
  box-shadow: 0 8px 28px rgba(232,66,26,0.30);
}
.sd-success-wrap h2 {
  font-family: 'Plus Jakarta Sans', sans-serif; color: var(--sd-text);
  font-size: 20px; font-weight: 700; margin: 0; line-height: 1.3;
  letter-spacing: -0.02em;
}
.sd-success-wrap p {
  color: var(--sd-muted); font-size: 13px; line-height: 1.65;
  margin: 0; font-family: 'Outfit', sans-serif; max-width: 260px;
}
.sd-success-tag {
  background: #fff4f0; border: 1.5px solid var(--sd-border2);
  color: var(--sd-accent); font-weight: 600;
  font-size: 11.5px; padding: 7px 18px; border-radius: 10px;
  font-family: 'Outfit', sans-serif;
}

.sd-gone { display: none !important; }

@media (max-width: 420px) {
  #sd-chat { width: calc(100vw - 18px); right: 9px; bottom: 94px; height: 520px; }
  #sd-launcher { right: 12px; bottom: 16px; }
}
      `;
      document.head.appendChild(style);
    }

    // ── Inject HTML ──
    if (!document.getElementById('sd-launcher')) {
      const launcherHTML = `
        <button id="sd-launcher" aria-label="Chat with Sociodigit">
          <div id="sd-notif"></div>
          <svg class="sd-ico-chat" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-2 10H6v-2h12v2zm0-3H6V7h12v2z"/>
          </svg>
          <svg class="sd-ico-close" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>

        <div id="sd-chat" role="dialog" aria-label="Sociodigit Chat">
          <div class="sd-head">
            <div class="sd-ava">⚡</div>
            <div class="sd-head-info">
              <h3>Sociodigit</h3>
              <p><span class="sd-dot"></span>Online — typically instant</p>
            </div>
          </div>
          <div class="sd-bar"><div class="sd-bar-fill" id="sdProgress"></div></div>
          <div class="sd-msgs" id="sdMsgs"></div>
          <div class="sd-input-row sd-gone" id="sdInputRow">
            <input type="text" id="sdInput" placeholder="Type here…" autocomplete="off"/>
            <button class="sd-send" id="sdSend" aria-label="Send">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
          <div class="sd-subtext sd-gone" id="sdSubtext"></div>
          <div class="sd-success-wrap sd-gone" id="sdSuccess"></div>
          <div class="sd-foot">Powered by <a href="https://sociodigit.in/" target="_blank" rel="noopener">Sociodigit</a></div>
        </div>
      `;
      const wrapper = document.createElement('div');
      wrapper.innerHTML = launcherHTML;
      document.body.appendChild(wrapper);
    }

    // ── Inject Script ──
    if (!(window as any).__sdChatbotInit) {
      (window as any).__sdChatbotInit = true;

      (function () {
        var CFG = {
          web3key: '808cd900-3839-4620-a172-e3d8efbd1074',
          notifyEmail: 'hi@sociodigit.in',
        };

        var GROW_STEPS: any[] = [
          {
            key: 'name',
            ask: "What's your <strong>full name</strong>? 👋",
            type: 'text',
            placeholder: 'e.g. Priya Sharma',
            validate: function (v: string) { return v.trim().length > 1 || '⚠️ Please enter your full name.'; },
            ack: function (v: string) { return 'Hey <strong>' + v.split(' ')[0] + '</strong>! Great to connect. 🙌'; },
          },
          {
            key: 'company',
            ask: "What's your <strong>company name</strong>? 🏢",
            type: 'text',
            placeholder: 'e.g. XYZ Private Limited',
            validate: function (v: string) { return v.trim().length > 1 || '⚠️ Please enter your company name.'; },
            ack: function (v: string) { return 'Wonderful — <strong>' + v + '</strong>! 👍'; },
          },
          {
            key: 'industry',
            ask: "Which <strong>industry</strong> does your business operate in? 🏭",
            type: 'select',
            options: ['E-commerce & Retail','Healthcare & Pharma','Education & EdTech','Real Estate','Hospitality & Travel','Manufacturing & B2B','Finance & BFSI','IT & SaaS','NGO & Non-Profit','Other'],
            placeholder: 'Select your industry',
            validate: function (v: string) { return v !== '' || '⚠️ Please select your industry.'; },
            ack: function (v: string) { return 'Got it — <strong>' + v + '</strong>! 👍'; },
          },
          {
            key: 'business_goal',
            ask: "What is your <strong>primary business goal</strong> right now? 🎯",
            type: 'select',
            options: ['Generate more leads & sales','Build brand awareness online','Improve website traffic & SEO','Launch a new product or service','Automate marketing & workflows','Expand to new markets','Not sure — need expert guidance'],
            placeholder: 'Select your main goal',
            validate: function (v: string) { return v !== '' || '⚠️ Please select your primary goal.'; },
            ack: function (v: string) { return '<strong>' + v + '</strong> — that\'s a great focus! 🚀'; },
          },
          {
            key: 'website',
            ask: "What's your <strong>website URL</strong>? 🌐",
            subtext: '✳️ Optional — type <em>None</em> if you don\'t have one.',
            type: 'text',
            placeholder: 'https://yoursite.com or None',
            validate: function (v: string) {
              if (v === '' || v.toLowerCase() === 'none') return true;
              try {
                var u = new URL(v.indexOf('://') === -1 ? 'https://' + v : v);
                return (u.protocol === 'http:' || u.protocol === 'https:') || '⚠️ Please enter a valid URL or type None.';
              } catch (e) { return '⚠️ Please enter a valid URL (e.g. https://yoursite.com) or type None.'; }
            },
            ack: function (v: string) {
              return (v.toLowerCase() === 'none' || v === '')
                ? 'No worries — we can help you build one! 🚀'
                : 'Great — we\'ll take a look at <strong>' + v + '</strong>. 🔍';
            },
          },
          {
            key: 'budget',
            ask: "What's your <strong>approximate monthly budget</strong> for digital growth? 💰",
            type: 'select',
            options: ['Under ₹25,000','₹25,000 – ₹50,000','₹50,000 – ₹1,00,000','₹1,00,000 – ₹3,00,000','₹3,00,000+'],
            placeholder: 'Select a budget range',
            validate: function (v: string) { return v !== '' || '⚠️ Please select a budget range.'; },
            ack: function (v: string) { return 'A budget of <strong>' + v + '</strong>/month — noted! ✅'; },
          },
          {
            key: 'timeline',
            ask: "When are you looking to <strong>get started</strong>? 📅",
            type: 'select',
            options: ['As soon as possible','Within 1 month','Within 3 months','Just exploring for now'],
            placeholder: 'Select a timeline',
            validate: function (v: string) { return v !== '' || '⚠️ Please select a timeline.'; },
            ack: function (v: string) { return '<strong>' + v + '</strong> — perfect, we\'ll plan accordingly. 🗓️'; },
          },
          {
            key: 'email',
            ask: "What's your <strong>business email address</strong>? 📧",
            type: 'email',
            placeholder: 'you@company.com',
            validate: function (v: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || '⚠️ Please enter a valid email address.'; },
            ack: function (v: string) { return 'Got it — we\'ll reach you at <strong>' + v + '</strong>. ✅'; },
          },
          {
            key: 'phone',
            ask: "Lastly, what's your <strong>phone number</strong>? 📱",
            subtext: '📌 Indian mobile numbers only (10 digits, no country code needed).',
            type: 'tel',
            placeholder: 'e.g. 9876543210',
            validate: function (v: string) {
              var d = v.replace(/\D/g, '');
              if (d.length === 12 && d.startsWith('91')) d = d.slice(2);
              return d.length === 10 || '⚠️ Please enter a valid 10-digit Indian mobile number.';
            },
            ack: function () { return 'All done! Our team will analyse your inputs and reach out with a tailored growth strategy. 🙏'; },
          },
        ];

        var SUB_SERVICES: Record<string, string[]> = {
          'IT Services': ['Website Design','Application Development','Chatbot Development','Web App Development','Portal Development','Custom App Development','IT Infrastructure Design'],
          'DevOps Services': ['Cloud Deployment','Cloud Apps as a Service','Kubernetes & Docker','CI/CD Pipelines','DevOps & Cloud Engineering','Microservices Integration'],
          'Marketing Services & Automation': ['AI Search','Organic Search','Social Media Management','Online Reputation Management','Marketing Automation','WhatsApp Automation','Performance Marketing'],
        };

        var EXPLORE_FOLLOWUP: any[] = [
          {
            key: 'name',
            ask: "What's your <strong>full name</strong>? 👋",
            type: 'text',
            placeholder: 'e.g. Priya Sharma',
            validate: function (v: string) { return v.trim().length > 1 || '⚠️ Please enter your full name.'; },
            ack: function (v: string) { return 'Nice to meet you, <strong>' + v.split(' ')[0] + '</strong>! 🙌'; },
          },
          {
            key: 'email',
            ask: "What's your <strong>business email address</strong>? 📧",
            type: 'email',
            placeholder: 'you@company.com',
            validate: function (v: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || '⚠️ Please enter a valid email address.'; },
            ack: function (v: string) { return 'Got it — we\'ll reach you at <strong>' + v + '</strong>. ✅'; },
          },
          {
            key: 'phone',
            ask: "What's your <strong>phone number</strong>? 📱",
            subtext: '📌 Indian mobile numbers only (10 digits, no country code needed).',
            type: 'tel',
            placeholder: 'e.g. 9876543210',
            validate: function (v: string) {
              var d = v.replace(/\D/g, '');
              if (d.length === 12 && d.startsWith('91')) d = d.slice(2);
              return d.length === 10 || '⚠️ Please enter a valid 10-digit Indian mobile number.';
            },
            ack: function () { return 'Noted! ✅'; },
          },
          {
            key: 'website',
            ask: "What's your <strong>website URL</strong>? 🌐",
            subtext: '✳️ Optional — type <em>None</em> if you don\'t have one.',
            type: 'text',
            placeholder: 'https://yoursite.com or None',
            validate: function (v: string) {
              if (v === '' || v.toLowerCase() === 'none') return true;
              try {
                var u = new URL(v.indexOf('://') === -1 ? 'https://' + v : v);
                return (u.protocol === 'http:' || u.protocol === 'https:') || '⚠️ Please enter a valid URL or type None.';
              } catch (e) { return '⚠️ Please enter a valid URL (e.g. https://yoursite.com) or type None.'; }
            },
            ack: function (v: string) {
              return (v.toLowerCase() === 'none' || v === '')
                ? 'No worries — we can help you build one! 🚀'
                : 'Got it — we\'ll review <strong>' + v + '</strong>. 🔍';
            },
          },
          {
            key: 'availability',
            ask: "When are you <strong>available for a call</strong>? 📅",
            subtext: '📌 Please mention your preferred date and time in IST (e.g. Monday 15 July, 3:00 PM IST).',
            type: 'text',
            placeholder: 'e.g. Monday 15 July, 3:00 PM IST',
            validate: function (v: string) { return v.trim().length > 2 || '⚠️ Please share your preferred date and time.'; },
            ack: function (v: string) { return 'Noted — we\'ll reach out around <strong>' + v + '</strong>. 🕐'; },
          },
          {
            key: 'issue',
            ask: "What <strong>issue or challenge</strong> are you currently facing? 🤔",
            subtext: '📝 Please describe in as much detail as you\'d like.',
            type: 'textarea',
            placeholder: 'e.g. We need faster deployment, better uptime...',
            validate: function (v: string) { return v.trim().length > 2 || '⚠️ Please describe the issue you\'re facing.'; },
            ack: function () { return 'Thank you for sharing — our team will review this before we call you! 🙏'; },
          },
        ];

        var EXPLORE_STEPS: any[] = [
          {
            key: 'service',
            ask: "Which <strong>service category</strong> are you interested in? 🎯",
            type: 'select',
            options: ['IT Services','DevOps Services','Marketing Services & Automation'],
            placeholder: 'Select a service',
            validate: function (v: string) { return v !== '' || '⚠️ Please select a service.'; },
            ack: function (v: string) { return 'Great choice — <strong>' + v + '</strong>! Let me show you what\'s available. 🚀'; },
          },
        ];

        var QUICK_STEPS: any[] = [
          {
            key: 'name',
            ask: "What's your <strong>full name</strong>? 👋",
            type: 'text',
            placeholder: 'e.g. Priya Sharma',
            validate: function (v: string) { return v.trim().length > 1 || '⚠️ Please enter your name.'; },
            ack: function (v: string) { return 'Hey <strong>' + v.split(' ')[0] + '</strong>! 🙌'; },
          },
          {
            key: 'phone',
            ask: "What's the best <strong>phone number</strong> to reach you on? 📱",
            subtext: '📌 Indian mobile numbers only (10 digits, no country code needed).',
            type: 'tel',
            placeholder: 'e.g. 9876543210',
            validate: function (v: string) {
              var d = v.replace(/\D/g, '');
              if (d.length === 12 && d.startsWith('91')) d = d.slice(2);
              return d.length === 10 || '⚠️ Please enter a valid 10-digit Indian mobile number.';
            },
            ack: function () { return 'Perfect! Our team will call you shortly. 📞'; },
          },
        ];

        var stepIdx = -1;
        var started = false;
        var answers: Record<string, string> = {};
        var curInput: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null = null;
        var activeSteps = GROW_STEPS;

        var elMsgs = document.getElementById('sdMsgs')!;
        var elRow = document.getElementById('sdInputRow')!;
        var elSubtext = document.getElementById('sdSubtext')!;
        var elProgress = document.getElementById('sdProgress')!;
        var elSuccess = document.getElementById('sdSuccess')!;

        // Wire up launcher
        var launcher = document.getElementById('sd-launcher')!;
        launcher.onclick = function () { sdToggle(); };

        // Wire up send button
        var sendBtn = document.getElementById('sdSend')!;
        sendBtn.onclick = function () { sdSubmit(); };

        // Wire up Enter key on base input
        var baseInputEl = document.getElementById('sdInput') as HTMLInputElement;
        baseInputEl.onkeydown = function (e: KeyboardEvent) {
          if (e.key === 'Enter') { e.preventDefault(); sdSubmit(); }
        };

        function saveProgress() {
          var flowName = 'grow';
          if (activeSteps === QUICK_STEPS) flowName = 'quick';
          else if (activeSteps === EXPLORE_STEPS || (activeSteps.length > 1 && activeSteps[0] === EXPLORE_STEPS[0])) flowName = 'explore';
          sessionStorage.setItem('sd_chat_state', JSON.stringify({
            flow: flowName,
            stepIdx: stepIdx,
            answers: answers
          }));
        }

        async function restoreChat(state: any) {
          answers = state.answers;
          var flowName = state.flow;
          if (flowName === 'quick') activeSteps = QUICK_STEPS;
          else if (flowName === 'explore') {
            activeSteps = EXPLORE_STEPS;
            if (answers['sub_services']) {
              activeSteps = EXPLORE_STEPS.concat(EXPLORE_FOLLOWUP);
            }
          } else {
            activeSteps = GROW_STEPS;
          }

          await addMsg('Hey! 👋 Welcome back. Resuming our chat...', 'bot');

          for (var i = 0; i <= state.stepIdx; i++) {
            if (i >= activeSteps.length) break;
            var step = activeSteps[i];
            if (i < state.stepIdx) {
              await addMsg(step.ask, 'bot');
              var ans = answers[step.key];
              await addMsg(ans || '—', 'user');

              if (flowName === 'explore' && i === 0 && answers['sub_services']) {
                await addMsg('Which specific <strong>' + ans + '</strong> solutions are you interested in?', 'bot');
                await addMsg(answers['sub_services'], 'user');
              }
            }
          }

          stepIdx = state.stepIdx - 1;
          sdNextStep();
        }

        function sdToggle() {
          var chat = document.getElementById('sd-chat')!;
          var btn = document.getElementById('sd-launcher')!;
          var open = chat.classList.toggle('sd-show');
          btn.classList.toggle('sd-open', open);
          if (open && !started) {
            started = true;
            var saved = sessionStorage.getItem('sd_chat_state');
            if (saved) {
              try {
                var state = JSON.parse(saved);
                if (state.stepIdx >= 0) {
                  restoreChat(state);
                  return;
                }
              } catch (e) { }
            }
            sdStart();
          }
        }

        function addMsg(html: string, who: string): Promise<void> {
          return new Promise(function (res) {
            var d = document.createElement('div');
            d.className = 'sd-msg sd-' + who;
            d.innerHTML = html;
            elMsgs.appendChild(d);
            elMsgs.scrollTop = elMsgs.scrollHeight;
            setTimeout(res, 40);
          });
        }

        function showTyping() {
          var d = document.createElement('div');
          d.className = 'sd-typing'; d.id = 'sd-t';
          d.innerHTML = '<span></span><span></span><span></span>';
          elMsgs.appendChild(d);
          elMsgs.scrollTop = elMsgs.scrollHeight;
        }

        function hideTyping() {
          var t = document.getElementById('sd-t'); if (t) t.remove();
        }

        function showChips(opts: string[], cb: (o: string) => void) {
          var w = document.createElement('div');
          w.className = 'sd-chips';
          opts.forEach(function (o) {
            var c = document.createElement('button');
            c.className = 'sd-chip'; c.textContent = o;
            c.onclick = function () { w.remove(); cb(o); };
            w.appendChild(c);
          });
          elMsgs.appendChild(w);
          elMsgs.scrollTop = elMsgs.scrollHeight;
        }

        function showMultiCheck(opts: string[], cb: (chosen: string[]) => void) {
          var selected: string[] = [];
          var w = document.createElement('div');
          w.className = 'sd-multicheck';
          w.id = 'sd-multicheck-wrap';

          opts.forEach(function (o) {
            var c = document.createElement('button');
            c.className = 'sd-mchip';
            c.textContent = o;
            c.type = 'button';
            c.onclick = function () {
              if (c.classList.contains('sd-mchip-on')) {
                c.classList.remove('sd-mchip-on');
                selected = selected.filter(function (s) { return s !== o; });
              } else {
                c.classList.add('sd-mchip-on');
                selected.push(o);
              }
              var btn = document.getElementById('sd-mcheck-btn');
              if (selected.length > 0) {
                if (!btn) {
                  var b = document.createElement('button');
                  b.id = 'sd-mcheck-btn';
                  b.className = 'sd-mcheck-confirm';
                  b.type = 'button';
                  b.textContent = 'Confirm ✓';
                  b.onclick = function () {
                    var wrap = document.getElementById('sd-multicheck-wrap');
                    var btnEl = document.getElementById('sd-mcheck-btn');
                    if (wrap) wrap.remove();
                    if (btnEl) btnEl.remove();
                    cb(selected.slice());
                  };
                  elMsgs.appendChild(b);
                  elMsgs.scrollTop = elMsgs.scrollHeight;
                }
              } else {
                if (btn) btn.remove();
              }
            };
            w.appendChild(c);
          });

          elMsgs.appendChild(w);
          elMsgs.scrollTop = elMsgs.scrollHeight;
        }

        function wait(ms: number): Promise<void> {
          return new Promise(function (r) { setTimeout(r, ms); });
        }

        function setProgress(n: number) {
          elProgress.style.width = Math.round((n / activeSteps.length) * 100) + '%';
        }

        function showInput(step: any) {
          ['sd-dyn-sel', 'sd-dyn-ta'].forEach(function (id) {
            var el = document.getElementById(id); if (el) el.remove();
          });
          var baseInput = document.getElementById('sdInput') as HTMLInputElement;
          elRow.classList.remove('sd-gone');

          if (step.type === 'select') {
            baseInput.classList.add('sd-gone');
            var sel = document.createElement('select');
            sel.id = 'sd-dyn-sel';
            sel.innerHTML = '<option value="" disabled selected>' + step.placeholder + '</option>';
            step.options.forEach(function (o: string) {
              var opt = document.createElement('option');
              opt.value = o; opt.textContent = o; sel.appendChild(opt);
            });
            elRow.insertBefore(sel, document.getElementById('sdSend'));
            curInput = sel; sel.focus();
          } else if (step.type === 'textarea') {
            baseInput.classList.add('sd-gone');
            var ta = document.createElement('textarea');
            ta.id = 'sd-dyn-ta';
            ta.placeholder = step.placeholder;
            ta.onkeydown = function (e: KeyboardEvent) {
              if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sdSubmit(); }
            };
            elRow.insertBefore(ta, document.getElementById('sdSend'));
            curInput = ta; ta.focus();
          } else {
            baseInput.classList.remove('sd-gone');
            baseInput.type = step.type || 'text';
            baseInput.placeholder = step.placeholder;
            baseInput.value = '';
            curInput = baseInput; baseInput.focus();
          }

          if (step.subtext) {
            elSubtext.innerHTML = step.subtext;
            elSubtext.classList.remove('sd-gone');
          } else {
            elSubtext.classList.add('sd-gone');
          }
        }

        function hideInput() {
          elRow.classList.add('sd-gone');
          elSubtext.classList.add('sd-gone');
          ['sd-dyn-sel', 'sd-dyn-ta'].forEach(function (id) {
            var el = document.getElementById(id); if (el) el.remove();
          });
          var bi = document.getElementById('sdInput') as HTMLInputElement;
          bi.classList.remove('sd-gone');
          bi.value = '';
          curInput = null;
        }

        async function sdStart() {
          showTyping(); await wait(800); hideTyping();
          await addMsg('Hey! 👋 Welcome to <strong>Sociodigit</strong>', 'bot');
          showTyping(); await wait(950); hideTyping();
          await addMsg('How can we help you grow today?', 'bot');
          await wait(350);
          showChips(
            ['🚀 Grow my business', '🔍 Explore services', '📞 Speak to our team'],
            async function (choice) {
              await addMsg(choice, 'user');
              showTyping(); await wait(850); hideTyping();
              if (choice === '📞 Speak to our team') {
                activeSteps = QUICK_STEPS;
                await addMsg("Sure! Share a couple of quick details and we'll call you right back. 📞", 'bot');
              } else if (choice === '🔍 Explore services') {
                activeSteps = EXPLORE_STEPS;
                await addMsg("Great! Let's find the right service for you. I'll ask a few quick questions. 🔍", 'bot');
              } else {
                activeSteps = GROW_STEPS;
                await addMsg("Excellent! Let's understand your business better so we can recommend the right growth strategy for you. I'll ask a few quick questions. 🚀", 'bot');
              }
              await wait(380);
              sdNextStep();
            }
          );
        }

        async function sdNextStep() {
          stepIdx++;
          saveProgress();
          if (stepIdx >= activeSteps.length) { await sdFinish(); return; }
          setProgress(stepIdx);
          var step = activeSteps[stepIdx];

          if (activeSteps === EXPLORE_STEPS && step === undefined) { await sdFinish(); return; }

          showTyping(); await wait(680); hideTyping();
          await addMsg(step.ask, 'bot');
          await wait(80);

          if (activeSteps === EXPLORE_STEPS && stepIdx === 0) {
            showInput(step);
            return;
          }

          showInput(step);
        }

        async function sdSubmit() {
          if (stepIdx < 0 || stepIdx >= activeSteps.length) return;
          var step = activeSteps[stepIdx];
          var val = curInput ? curInput.value.trim() : '';
          var check = step.validate(val);
          if (check !== true) {
            if (curInput) {
              (curInput as HTMLElement).style.borderColor = '#e05a3a';
              setTimeout(function () { if (curInput) (curInput as HTMLElement).style.borderColor = '#e0dbd6'; }, 1800);
            }
            var err = document.getElementById('sd-err');
            if (!err) {
              err = document.createElement('div');
              err.id = 'sd-err';
              err.style.cssText = 'font-size:11px;color:#e05a3a;text-align:center;padding:2px 14px 4px;font-family:Outfit,sans-serif;flex-shrink:0;background:var(--sd-surface,#fff4f0);';
              elSubtext.parentNode!.insertBefore(err, elSubtext.nextSibling);
            }
            err.textContent = check;
            setTimeout(function () { var e2 = document.getElementById('sd-err'); if (e2) e2.remove(); }, 2200);
            return;
          }
          var errEl = document.getElementById('sd-err');
          if (errEl) errEl.remove();

          answers[step.key] = val || 'Not provided';
          hideInput();
          await addMsg(val || '—', 'user');
          showTyping(); await wait(620); hideTyping();
          await addMsg(step.ack(val), 'bot');
          await wait(280);

          if (activeSteps === EXPLORE_STEPS && stepIdx === 0) {
            var subOpts = SUB_SERVICES[val];
            if (subOpts && subOpts.length) {
              showTyping(); await wait(700); hideTyping();
              await addMsg('Which specific <strong>' + val + '</strong> solutions are you interested in?<br/><em style="font-size:11.5px;color:#888;">You can select one or more options, then click <strong>Confirm ✓</strong></em>', 'bot');
              await wait(120);

              showMultiCheck(subOpts, async function (chosen) {
                answers['sub_services'] = chosen.join(', ');
                await addMsg(chosen.join(' · '), 'user');
                showTyping(); await wait(650); hideTyping();
                await addMsg('Got it — <strong>' + chosen.join(', ') + '</strong>. Let me get a few more details. 📋', 'bot');
                await wait(280);

                activeSteps = EXPLORE_STEPS.concat(EXPLORE_FOLLOWUP);
                sdNextStep();
              });
              return;
            }
          }

          sdNextStep();
        }

        async function sdFinish() {
          sessionStorage.removeItem('sd_chat_state');
          showTyping(); await wait(1000); hideTyping();
          await addMsg('All done! ⚡ Sending your details to our team now…', 'bot');
          setProgress(activeSteps.length);

          var isExplore = activeSteps === EXPLORE_STEPS || (activeSteps.length > 1 && activeSteps[0] === EXPLORE_STEPS[0]);
          var flowType = activeSteps === QUICK_STEPS ? 'quick' : isExplore ? 'explore' : 'grow';

          var subjectMap: Record<string, string> = {
            quick: '📞 Callback Request — Sociodigit',
            explore: '🔍 Service Enquiry — Sociodigit',
            grow: '🚀 Growth Lead — Sociodigit',
          };

          var payload = Object.assign({
            access_key: CFG.web3key,
            subject: subjectMap[flowType],
            from_name: 'Sociodigit Website Chatbot',
            replyto: answers.email || '',
          }, answers);

          try {
            var res = await fetch('https://api.web3forms.com/submit', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
              body: JSON.stringify(payload),
            });
            var json = await res.json();
            if (!json.success) throw new Error('failed');
          } catch (e) {
            console.log('SD Lead:', answers);
          }

          elMsgs.classList.add('sd-gone');
          elRow.classList.add('sd-gone');
          elSubtext.classList.add('sd-gone');

          var fname = (answers.name || 'there').split(' ')[0];
          elSuccess.classList.remove('sd-gone');

          if (flowType === 'quick') {
            elSuccess.innerHTML =
              '<div class="sd-success-icon">📞</div>' +
              '<h2>We\'ll call you soon,<br/>' + fname + '!</h2>' +
              '<p>Our team at <strong>Sociodigit</strong> will call you within <strong>24 business hours</strong>.</p>' +
              '<div class="sd-success-tag">📲 Expect a call on ' + (answers.phone || 'your number') + '</div>';
          } else if (flowType === 'explore') {
            elSuccess.innerHTML =
              '<div class="sd-success-icon">🔍</div>' +
              '<h2>You\'re all set,<br/>' + fname + '!</h2>' +
              '<p>Our <strong>' + (answers.service || 'services') + '</strong> team at <strong>Sociodigit</strong> will review your query and reach out at your preferred time.</p>' +
              '<div class="sd-success-tag">📅 We\'ll connect around ' + (answers.availability || 'your chosen time') + '</div>';
          } else {
            elSuccess.innerHTML =
              '<div class="sd-success-icon">🚀</div>' +
              '<h2>You\'re all set,<br/>' + fname + '!</h2>' +
              '<p>Our team at <strong>Sociodigit</strong> will analyse your inputs and reach out within <strong>24 business hours</strong> with a tailored growth strategy.</p>' +
              '<div class="sd-success-tag">📬 Strategy plan sent to ' + (answers.email || 'your email') + '</div>';
          }
        }

        // Expose sdSubmit globally so inline handlers work
        (window as any).sdSubmit = sdSubmit;
        (window as any).sdToggle = sdToggle;
      })();
    }

    // ── Cleanup on unmount ──
    return () => {
      ['sd-launcher', 'sd-chat'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.parentElement?.remove();
      });
      document.getElementById('sd-styles')?.remove();
      document.getElementById('sd-fonts')?.remove();
      delete (window as any).__sdChatbotInit;
      delete (window as any).sdSubmit;
      delete (window as any).sdToggle;
    };
  }, []);

  return null;
}
