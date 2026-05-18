// ================================================================
//  KEETS × RIK.HAUS — main.js
// ================================================================

const CONFIG = {
  // Formspree endpoints — replace with real IDs after creating forms at formspree.io
  FOUNDING_FORM_URL: 'https://formspree.io/f/mykvynjy',
  COLLAB_FORM_URL:   'https://formspree.io/f/xdajowgv',
};

// ── TRANSLATIONS ────────────────────────────────────────────────────
const T = {
  de: {
    'nav.collab':         'Zusammenarbeiten',
    'nav.waitlist':       'Founding Access',
    'hero.label':         'Founding Access · iOS & Android',
    'hero.tagline':       'Die neue Art, deine Stadt kennenzulernen.',
    'hero.discovered':    'entdeckt',
    'hero.by':            'Ein Projekt von',
    'hero.scroll':        'scroll',
    'cta.waitlist':       'Founding Access anfragen',
    'cta.collab':         'Zusammenarbeiten',
    'about.label':        'Das Konzept',
    'about.heading':      'ENTDECK DEINE STADT',
    'about.lead':         'Keets legt einen Nebel über deine Karte – und hebt ihn auf, während du läufst. Straße für Straße, Viertel für Viertel.',
    'step1.title':        'Lauf los',
    'step1.text':         'Öffne die App und starte die Aufzeichnung. Zu Fuß, mit dem Rad oder den Öffis – jeder Weg zählt.',
    'step2.title':        'Heb den Nebel',
    'step2.text':         'Jede Straße, die du begehst, leuchtet auf der Karte auf. Sieh in Echtzeit, welche Viertel du schon kennst – und wie viel noch im Dunkeln liegt.',
    'step3.title':        'Quests abschließen',
    'step3.text':         'Wähle ein Viertel als Quest. Verfolge deinen Fortschritt live. Erreich die 100% und hak das Viertel ab.',
    'features.label':     'Features',
    'features.heading':   'GEBAUT MIT ABSICHT',
    'feature1.title':     'Deine Daten. Nur auf deinem Gerät.',
    'feature1.text':      'Kein Cloud-Upload. Kein Tracking. Deine erkundete Route gehört nur dir — sie verlässt dein Telefon nie.',
    'feature2.title':     'Quests. Viertel. 100%.',
    'feature2.text':      'Such dir ein Stadtviertel als Quest. Keets trackt deinen Fortschritt live. Erreich die 100% — dann nimm dir das nächste vor.',
    'mission.label':      'rik.haus',
    'mission.heading':    'BOUTIQUE CONTENT FÜR HÄUSER NERDS',
    'mission.p1':         'Rik.haus ist Eriks Plattform für alles, was mit Stadt zu tun hat — Immobilien, Architektur, Stadtentwicklung und jetzt auch Apps. No slop. Nur echte Geschichten aus echten Städten.',
    'mission.p2':         'Keets ist das erste Produkt aus dem rik.haus Universum. Gebaut von jemandem, der selbst durch Städte läuft und wissen will: wie viel habe ich schon gesehen?',
    'waitlist.label':     'Founding Access',
    'waitlist.heading':   'FOUNDING ACCESS',
    'waitlist.lead':      'Keets ist geschlossen. Founding Members erhalten frühzeitigen Zugang — und können drei Freunde direkt mitbringen.',
    'founding.benefit1':  '3 Monate gratis',
    'founding.benefit2':  '3 Invite Codes',
    'founding.benefit3':  'iOS · Android',
    'form.firstname':     'Vorname',
    'form.lastname':      'Nachname',
    'form.email':         'E-Mail-Adresse',
    'form.platform':      'Ich nutze',
    'form.submit':        'Zugang anfragen',
    'form.privacy':       'Wir prüfen deinen Antrag und schicken dir deinen Invite Code per E-Mail.',
    'success.title':      'Anfrage eingegangen!',
    'success.text':       'Wir melden uns per E-Mail mit deinem Invite Code. Bis bald auf den Straßen.',
    'modal.label':        'Anfrage',
    'modal.title':        'ZUSAMMENARBEITEN',
    'modal.lead':         'Hast du ein Projekt für rik.haus oder Keets? Meld dich.',
    'collab.who':         'Hallo! Ich repräsentiere...',
    'collab.company':     'Ein Unternehmen',
    'collab.agency':      'Eine Social Media Agentur',
    'collab.other':       'Sonstiges',
    'collab.message':     'Kurze Nachricht (optional)',
    'collab.submit':      'Anfrage senden',
    'collab.success.title': 'Nachricht erhalten!',
    'collab.success.text':  'Erik meldet sich in Kürze bei dir.',
    'footer.collab':      'Zusammenarbeiten',
    'footer.copy':        '© 2025 rik.haus. Alle Rechte vorbehalten.',
    'footer.tagline':     'never slop ✕',
    'app.settings':       'Settings',
    'app.record':         'Record',
    'app.quests':         'Quests',
  },
  en: {
    'nav.collab':         'Collaborate',
    'nav.waitlist':       'Founding Access',
    'hero.label':         'Founding Access · iOS & Android',
    'hero.tagline':       'The new way to discover your city.',
    'hero.discovered':    'explored',
    'hero.by':            'A project by',
    'hero.scroll':        'scroll',
    'cta.waitlist':       'Apply for Founding Access',
    'cta.collab':         'Collaborate',
    'about.label':        'The Concept',
    'about.heading':      'DISCOVER YOUR CITY',
    'about.lead':         'Keets puts a fog over your map — and lifts it as you walk. Street by street, district by district.',
    'step1.title':        'Start Walking',
    'step1.text':         'Open the app and start recording. On foot, by bike, or public transit – every route counts.',
    'step2.title':        'Lift the Fog',
    'step2.text':         'Every street you walk lights up on the map. See in real time which neighborhoods you\'ve covered — and how much is still in the dark.',
    'step3.title':        'Complete Quests',
    'step3.text':         'Pick a district as your quest. Track your progress live. Hit 100% and move on to the next one.',
    'features.label':     'Features',
    'features.heading':   'BUILT WITH INTENT',
    'feature1.title':     'Your data. On your device only.',
    'feature1.text':      'No cloud upload. No tracking. Your explored route is yours alone — it never leaves your phone.',
    'feature2.title':     'Quests. Districts. 100%.',
    'feature2.text':      'Pick a city district as a quest. Keets tracks your progress live. Hit 100% — then go find the next one.',
    'mission.label':      'rik.haus',
    'mission.heading':    'BOUTIQUE CONTENT FOR CITY NERDS',
    'mission.p1':         'Rik.haus is Erik\'s platform for everything city-related — real estate, architecture, urban development, and now apps. No slop. Just real stories from real cities.',
    'mission.p2':         'Keets is the first product from the rik.haus universe. Built by someone who walks cities himself and wants to know: how much of it have I actually seen?',
    'waitlist.label':     'Founding Access',
    'waitlist.heading':   'FOUNDING ACCESS',
    'waitlist.lead':      'Keets is closed. Founding members get early access — and can bring three friends along directly.',
    'founding.benefit1':  '3 months free',
    'founding.benefit2':  '3 Invite Codes',
    'founding.benefit3':  'iOS · Android',
    'form.firstname':     'First Name',
    'form.lastname':      'Last Name',
    'form.email':         'Email Address',
    'form.platform':      'I use',
    'form.submit':        'Apply for Access',
    'form.privacy':       'We\'ll review your request and send your invite code by email.',
    'success.title':      'Request received!',
    'success.text':       'We\'ll send your invite code by email. See you on the streets.',
    'modal.label':        'Inquiry',
    'modal.title':        'LET\'S WORK TOGETHER',
    'modal.lead':         'Got a project for rik.haus or Keets? Get in touch.',
    'collab.who':         'Hello! I represent...',
    'collab.company':     'A Company',
    'collab.agency':      'A Social Media Agency',
    'collab.other':       'Other',
    'collab.message':     'Short message (optional)',
    'collab.submit':      'Send Inquiry',
    'collab.success.title': 'Message received!',
    'collab.success.text':  'Erik will get back to you shortly.',
    'footer.collab':      'Collaborate',
    'footer.copy':        '© 2025 rik.haus. All rights reserved.',
    'footer.tagline':     'never slop ✕',
    'app.settings':       'Settings',
    'app.record':         'Record',
    'app.quests':         'Quests',
  },
};

// ── STATE ───────────────────────────────────────────────────────────
let currentLang = 'de';

// ── INIT ────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initLang();
  initNav();
  initModal();
  initForms();
  initScrollReveal();
  initBadgeMagnet();
  initFogCanvas();
  initFeatureRing();
});

// ── LANGUAGE ────────────────────────────────────────────────────────
function initLang() {
  const btns = document.querySelectorAll('.lang-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.lang === currentLang) return;
      currentLang = btn.dataset.lang;
      applyLang();
      btns.forEach(b => b.classList.toggle('active', b.dataset.lang === currentLang));
    });
  });
  applyLang();
}

function applyLang() {
  document.documentElement.lang = currentLang;
  const dict = T[currentLang];
  document.querySelectorAll('[data-key]').forEach(el => {
    const val = dict[el.dataset.key];
    if (val !== undefined) el.textContent = val;
  });
}

// ── NAV ─────────────────────────────────────────────────────────────
function initNav() {
  const nav       = document.getElementById('nav');
  const hamburger = document.getElementById('nav-hamburger');
  const links     = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 16);
  }, { passive: true });

  hamburger?.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  links?.addEventListener('click', (e) => {
    if (e.target.matches('a, button:not(.lang-btn)')) {
      links.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');
    }
  });
}

// ── MODAL ───────────────────────────────────────────────────────────
function initModal() {
  const modal    = document.getElementById('modal-collab');
  const backdrop = document.getElementById('modal-backdrop');
  const closeBtn = document.getElementById('modal-close');

  const triggers = [
    document.getElementById('btn-collab'),
    document.getElementById('hero-collab-btn'),
    document.getElementById('footer-collab-btn'),
  ];

  triggers.forEach(btn => btn?.addEventListener('click', openModal));
  closeBtn?.addEventListener('click', closeModal);
  backdrop?.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });

  function openModal() {
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  }
  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
  }
}

// ── FORMS ───────────────────────────────────────────────────────────
function initForms() {
  setupForm({
    formId:    'founding-form',
    successId: 'founding-success',
    submitId:  'founding-submit',
    url:       CONFIG.FOUNDING_FORM_URL,
    getPayload: (f) => ({
      firstname: f.firstname.value.trim(),
      lastname:  f.lastname.value.trim(),
      email:     f.email.value.trim(),
      platform:  f.platform?.value ?? '',
    }),
  });

  setupForm({
    formId:    'collab-form',
    successId: 'collab-success',
    submitId:  'collab-submit',
    url:       CONFIG.COLLAB_FORM_URL,
    getPayload: (f) => ({
      email:   f.email.value.trim(),
      who:     f.who?.value ?? '',
      message: f.message?.value.trim() ?? '',
    }),
  });
}

function setupForm({ formId, successId, submitId, url, getPayload }) {
  const form      = document.getElementById(formId);
  const successEl = document.getElementById(successId);
  const submitBtn = document.getElementById(submitId);
  if (!form || !successEl) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    setSubmitLoading(submitBtn, true);
    try {
      await submitForm(url, getPayload(form));
      form.hidden      = true;
      successEl.hidden = false;
    } catch (err) {
      console.error('[keets] form error:', err);
      setSubmitLoading(submitBtn, false);
    }
  });
}

async function submitForm(url, payload) {
  if (!url || url.includes('YOUR_')) {
    console.log('[keets] Form payload (not connected):', payload);
    await new Promise(r => setTimeout(r, 600));
    return;
  }
  const res = await fetch(url, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body:    JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Formspree error: ${res.status}`);
}

function setSubmitLoading(btn, isLoading) {
  if (!btn) return;
  const text    = btn.querySelector('.btn-text');
  const loading = btn.querySelector('.btn-loading');
  btn.disabled  = isLoading;
  if (text)    text.hidden    = isLoading;
  if (loading) loading.hidden = !isLoading;
}

// ── FOG CANVAS ANIMATION ─────────────────────────────────────────────
function initFogCanvas() {
  const canvas = document.getElementById('fog-canvas');
  if (!canvas) return;

  function setup() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W   = canvas.offsetWidth;
    const H   = canvas.offsetHeight;
    if (!W || !H) return;

    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    // Offscreen buffer for fog — draw cells here (no blur), then blit once
    const fogBuf = document.createElement('canvas');
    fogBuf.width  = canvas.width;
    fogBuf.height = canvas.height;
    const fogCtx  = fogBuf.getContext('2d');
    fogCtx.scale(dpr, dpr);

    // Fog grid — each cell is CELL×CELL logical px
    const CELL = 15;
    const COLS = Math.ceil(W / CELL) + 2;
    const ROWS = Math.ceil(H / CELL) + 2;
    let fog = Array.from({ length: ROWS }, () => new Float32Array(COLS).fill(1));

    // Walking path, normalized from 200×260 SVG coords to canvas
    const sx = W / 200, sy = H / 260;
    const pts = [
      [108, 22], [108, 72], [138, 72], [138, 102],
      [108, 102], [108, 132], [78, 132], [78, 162], [48, 162],
    ].map(([x, y]) => [x * sx, y * sy]);

    const segs  = pts.slice(1).map(([x, y], i) => Math.hypot(x - pts[i][0], y - pts[i][1]));
    const TOTAL = segs.reduce((a, b) => a + b, 0);

    function ptAt(len) {
      let acc = 0;
      for (let i = 0; i < segs.length; i++) {
        if (acc + segs[i] >= len) {
          const t = (len - acc) / segs[i];
          return [
            pts[i][0] + t * (pts[i + 1][0] - pts[i][0]),
            pts[i][1] + t * (pts[i + 1][1] - pts[i][1]),
          ];
        }
        acc += segs[i];
      }
      return pts[pts.length - 1];
    }

    // Soften fog around a point — creates organic clearing blobs
    function clearAround(px, py) {
      const R  = 2.2;
      const cx = px / CELL, cy = py / CELL;
      const r0 = Math.max(0, Math.floor(cy - R - 1));
      const r1 = Math.min(ROWS - 1, Math.ceil(cy + R + 1));
      const c0 = Math.max(0, Math.floor(cx - R - 1));
      const c1 = Math.min(COLS - 1, Math.ceil(cx + R + 1));
      for (let r = r0; r <= r1; r++) {
        for (let c = c0; c <= c1; c++) {
          const d = Math.hypot(c + 0.5 - cx, r + 0.5 - cy);
          if (d < R) fog[r][c] = Math.max(0, fog[r][c] - 0.38 * (1 - d / R));
        }
      }
    }

    function drawBG() {
      ctx.fillStyle = '#0a1018';
      ctx.fillRect(0, 0, W, H);
      // Subtle city blocks
      const BS = 40, GS = 11;
      ctx.fillStyle = '#131f2e';
      for (let x = GS; x < W + BS; x += BS + GS) {
        for (let y = GS; y < H + BS; y += BS + GS) {
          ctx.fillRect(x, y, BS, BS);
        }
      }
      // Street lines
      ctx.strokeStyle = 'rgba(255,255,255,0.038)';
      ctx.lineWidth   = 0.6;
      for (let x = GS + BS; x < W + BS; x += BS + GS) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = GS + BS; y < H + BS; y += BS + GS) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }
    }

    function drawPath(len) {
      if (len <= 0) return;
      ctx.beginPath();
      ctx.moveTo(pts[0][0], pts[0][1]);
      let acc = 0;
      for (let i = 0; i < segs.length; i++) {
        if (acc + segs[i] >= len) {
          const t = (len - acc) / segs[i];
          ctx.lineTo(
            pts[i][0] + t * (pts[i + 1][0] - pts[i][0]),
            pts[i][1] + t * (pts[i + 1][1] - pts[i][1])
          );
          break;
        }
        ctx.lineTo(pts[i + 1][0], pts[i + 1][1]);
        acc += segs[i];
      }
      ctx.strokeStyle = '#FF3450';
      ctx.lineWidth   = 2.2;
      ctx.lineCap     = 'round';
      ctx.lineJoin    = 'round';
      ctx.stroke();
    }

    function drawDot(px, py, ts) {
      const pulse = 0.5 + 0.5 * Math.sin(ts / 380);
      // Outer glow ring
      ctx.beginPath();
      ctx.arc(px, py, 11 + pulse * 5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,52,80,${(0.14 + pulse * 0.09).toFixed(2)})`;
      ctx.fill();
      // Core dot
      ctx.beginPath();
      ctx.arc(px, py, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#FF3450';
      ctx.fill();
      // Specular highlight
      ctx.beginPath();
      ctx.arc(px - 1, py - 1, 1.8, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,0.75)';
      ctx.fill();
    }

    // Fog rendered with blur — cells drawn to offscreen buffer, blitted once
    function drawFog() {
      fogCtx.clearRect(0, 0, W, H);
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const a = fog[r][c];
          if (a < 0.018) continue;
          fogCtx.fillStyle = `rgba(10,16,24,${a.toFixed(2)})`;
          fogCtx.fillRect(c * CELL - 1, r * CELL - 1, CELL + 2, CELL + 2);
        }
      }
      ctx.save();
      ctx.filter = 'blur(9px)';
      ctx.drawImage(fogBuf, 0, 0, W, H);
      ctx.restore();
    }

    let drawn = 0, t0 = null, raf;
    const DELAY = 500;  // ms before path starts
    const DUR   = 4600; // ms to draw full path
    const HOLD  = 2400; // ms pause before loop restart

    function reset() {
      drawn = 0;
      t0    = null;
      for (let r = 0; r < ROWS; r++) fog[r].fill(1);
    }

    function frame(ts) {
      if (!t0) t0 = ts;
      const el     = ts - t0;
      const target = el > DELAY ? Math.min(TOTAL, ((el - DELAY) / DUR) * TOTAL) : 0;

      // Smooth progressive fog clearing
      if (target > drawn) {
        const steps = 8;
        for (let s = 0; s <= steps; s++) {
          const l = drawn + ((target - drawn) * s) / steps;
          clearAround(...ptAt(Math.min(l, TOTAL)));
        }
        drawn = target;
      }

      ctx.clearRect(0, 0, W, H);
      drawBG();
      drawFog();
      drawPath(drawn);
      if (drawn > 3) drawDot(...ptAt(drawn), ts);

      if (drawn >= TOTAL) {
        setTimeout(() => { reset(); raf = requestAnimationFrame(frame); }, HOLD);
        return;
      }
      raf = requestAnimationFrame(frame);
    }

    // Only animate when canvas is in viewport
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        raf = requestAnimationFrame(frame);
      } else {
        cancelAnimationFrame(raf);
      }
    }, { threshold: 0.1 });
    io.observe(canvas);
  }

  // Run after layout is complete
  if (canvas.offsetWidth) {
    setup();
  } else {
    requestAnimationFrame(() => setup());
  }
}

// ── FEATURE RING ANIMATION ───────────────────────────────────────────
function initFeatureRing() {
  const ring = document.querySelector('.feature-ring');
  if (!ring) return;

  const card = ring.closest('.feature-card');
  if (!card) return;

  const io = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      ring.classList.add('animated');
      io.disconnect();
    }
  }, { threshold: 0.4 });
  io.observe(card);
}

// ── BADGE MAGNET ─────────────────────────────────────────────────────
function initBadgeMagnet() {
  const badge = document.querySelector('.mission__badge');
  if (!badge || window.matchMedia('(pointer: coarse)').matches) return;

  const RANGE = 180, STRENGTH = 0.35, LERP = 0.10;
  let targetX = 0, targetY = 0, currentX = 0, currentY = 0;

  document.addEventListener('mousemove', (e) => {
    const rect    = badge.getBoundingClientRect();
    const centerX = rect.left + rect.width  / 2;
    const centerY = rect.top  + rect.height / 2;
    const dx = e.clientX - centerX, dy = e.clientY - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < RANGE) {
      const factor = (1 - dist / RANGE) * STRENGTH;
      targetX = dx * factor; targetY = dy * factor;
    } else {
      targetX = 0; targetY = 0;
    }
  }, { passive: true });

  (function loop() {
    currentX += (targetX - currentX) * LERP;
    currentY += (targetY - currentY) * LERP;
    badge.style.transform = `translate(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px) rotate(-12deg)`;
    requestAnimationFrame(loop);
  })();
}

// ── SCROLL REVEAL ────────────────────────────────────────────────────
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}
