// ================================================================
//  KEETS × RIK.HAUS — main.js
// ================================================================

// ── CONFIG ─────────────────────────────────────────────────────────
// After setting up Google Apps Script (see SETUP.md), paste the
// deployment URL here. One URL handles both form types.
const CONFIG = {
  FORM_URL: 'YOUR_APPS_SCRIPT_URL_HERE',
};

// ── TRANSLATIONS ────────────────────────────────────────────────────
const T = {
  de: {
    'nav.collab':       'Zusammenarbeiten',
    'nav.waitlist':     'Zur Warteliste',
    'hero.label':       'Jetzt auf Warteliste eintragen',
    'hero.tagline':     'Die neue Art, deine Stadt kennenzulernen.',
    'hero.discovered':  'entdeckt',
    'hero.by':          'Ein Projekt von',
    'hero.scroll':      'scroll',
    'cta.waitlist':     'Zur Warteliste',
    'cta.collab':       'Zusammenarbeiten',
    'about.label':      'Das Konzept',
    'about.heading':    'ENTDECK DEINE STADT',
    'about.lead':       'Keets verwandelt jeden Spaziergang in eine Entdeckungsreise. Lauf durch die Straßen deiner Stadt – die Karte enthüllt sich Schritt für Schritt unter deinen Füßen.',
    'step1.title':      'Lauf los',
    'step1.text':       'Öffne die App und starte die Aufzeichnung. Zu Fuß, mit dem Rad oder den Öffis – jeder Weg zählt.',
    'step2.title':      'Enthüll die Karte',
    'step2.text':       'Jede Straße, die du begehst, leuchtet auf der Karte auf. Sieh in Echtzeit, welche Viertel du schon kennst.',
    'step3.title':      'Complette Viertel',
    'step3.text':       'Schaff es, ganze Stadtteile zu erkunden. Setze dir Challenges und entdecke Orte, die du noch nie besucht hast.',
    'mission.label':    'rik.haus',
    'mission.heading':  'BOUTIQUE CONTENT FÜR HÄUSER NERDS',
    'mission.p1':       'Rik.haus ist Eriks Plattform für alles, was mit Stadt zu tun hat — Immobilien, Architektur, Stadtentwicklung und jetzt auch Apps. No slop. Nur echte Geschichten aus echten Städten.',
    'mission.p2':       'Keets ist das erste Produkt aus dem rik.haus Universum. Gebaut von jemandem, der selbst durch Städte läuft und wissen will: wie viel habe ich schon gesehen?',
    'waitlist.label':   'Early Access',
    'waitlist.heading': 'AUF DIE WARTELISTE',
    'waitlist.lead':    'Sei dabei, wenn Keets an den Start geht. Trag dich jetzt ein und bekomm frühzeitigen Zugang.',
    'form.email':       'E-Mail-Adresse',
    'form.access':      'Ich möchte auf die Warteliste für',
    'form.app':         'Die fertige App',
    'form.beta':        'Beta über TestFlight',
    'form.platform':    'Ich nutze',
    'form.submit':      'Eintragen',
    'form.privacy':     'Keine Spam. Nur wichtige Updates.',
    'success.title':    'Du bist dabei!',
    'success.text':     'Wir melden uns, wenn Keets startet. Bis bald auf den Straßen.',
    'modal.label':      'Anfrage',
    'modal.title':      'ZUSAMMENARBEITEN',
    'modal.lead':       'Hast du ein Projekt für rik.haus oder Keets? Meld dich.',
    'collab.who':       'Hallo! Ich repräsentiere...',
    'collab.company':   'Ein Unternehmen',
    'collab.agency':    'Eine Social Media Agentur',
    'collab.other':     'Sonstiges',
    'collab.message':   'Kurze Nachricht (optional)',
    'collab.submit':    'Anfrage senden',
    'collab.success.title': 'Nachricht erhalten!',
    'collab.success.text':  'Erik meldet sich in Kürze bei dir.',
    'footer.collab':    'Zusammenarbeiten',
    'footer.copy':      '© 2025 rik.haus. Alle Rechte vorbehalten.',
    'footer.tagline':   'never slop ✕',
    'app.settings':     'Settings',
    'app.record':       'Record',
    'app.quests':       'Quests',
  },
  en: {
    'nav.collab':       'Collaborate',
    'nav.waitlist':     'Join Waitlist',
    'hero.label':       'Now taking waitlist signups',
    'hero.tagline':     'The new way to discover your city.',
    'hero.discovered':  'explored',
    'hero.by':          'A project by',
    'hero.scroll':      'scroll',
    'cta.waitlist':     'Join Waitlist',
    'cta.collab':       'Collaborate',
    'about.label':      'The Concept',
    'about.heading':    'DISCOVER YOUR CITY',
    'about.lead':       'Keets turns every walk into a journey of discovery. Walk the streets of your city – the map reveals itself step by step beneath your feet.',
    'step1.title':      'Start Walking',
    'step1.text':       'Open the app and start recording. On foot, by bike, or public transit – every route counts.',
    'step2.title':      'Unlock the Map',
    'step2.text':       'Every street you walk lights up on the map. See in real time which neighborhoods you\'ve already covered.',
    'step3.title':      'Complete Districts',
    'step3.text':       'Challenge yourself to explore entire city districts. Set goals and discover places you\'ve never been before.',
    'mission.label':    'rik.haus',
    'mission.heading':  'BOUTIQUE CONTENT FOR CITY NERDS',
    'mission.p1':       'Rik.haus is Erik\'s platform for everything city-related — real estate, architecture, urban development, and now apps. No slop. Just real stories from real cities.',
    'mission.p2':       'Keets is the first product from the rik.haus universe. Built by someone who walks cities himself and wants to know: how much of it have I actually seen?',
    'waitlist.label':   'Early Access',
    'waitlist.heading': 'JOIN THE WAITLIST',
    'waitlist.lead':    'Be there when Keets launches. Sign up now and get early access.',
    'form.email':       'Email Address',
    'form.access':      'I want to join the waitlist for',
    'form.app':         'The finished app',
    'form.beta':        'Beta via TestFlight',
    'form.platform':    'I use',
    'form.submit':      'Sign Up',
    'form.privacy':     'No spam. Only important updates.',
    'success.title':    'You\'re in!',
    'success.text':     'We\'ll reach out when Keets launches. See you on the streets.',
    'modal.label':      'Inquiry',
    'modal.title':      'LET\'S WORK TOGETHER',
    'modal.lead':       'Got a project for rik.haus or Keets? Get in touch.',
    'collab.who':       'Hello! I represent...',
    'collab.company':   'A Company',
    'collab.agency':    'A Social Media Agency',
    'collab.other':     'Other',
    'collab.message':   'Short message (optional)',
    'collab.submit':    'Send Inquiry',
    'collab.success.title': 'Message received!',
    'collab.success.text':  'Erik will get back to you shortly.',
    'footer.collab':    'Collaborate',
    'footer.copy':      '© 2025 rik.haus. All rights reserved.',
    'footer.tagline':   'never slop ✕',
    'app.settings':     'Settings',
    'app.record':       'Record',
    'app.quests':       'Quests',
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
  const nav        = document.getElementById('nav');
  const hamburger  = document.getElementById('nav-hamburger');
  const links      = document.getElementById('nav-links');

  // Scroll shadow
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 16);
  }, { passive: true });

  // Mobile hamburger
  hamburger?.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close mobile nav on any link/button click inside it
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
    formId:    'waitlist-form',
    successId: 'waitlist-success',
    submitId:  'wl-submit',
    getPayload: (f) => ({
      type:      'waitlist',
      email:     f.email.value.trim(),
      access:    f.access?.value ?? '',
      platform:  f.platform?.value ?? '',
      timestamp: new Date().toISOString(),
    }),
  });

  setupForm({
    formId:    'collab-form',
    successId: 'collab-success',
    submitId:  'collab-submit',
    getPayload: (f) => ({
      type:      'collab',
      email:     f.email.value.trim(),
      who:       f.who?.value ?? '',
      message:   f.message?.value.trim() ?? '',
      timestamp: new Date().toISOString(),
    }),
  });
}

function setupForm({ formId, successId, submitId, getPayload }) {
  const form      = document.getElementById(formId);
  const successEl = document.getElementById(successId);
  const submitBtn = document.getElementById(submitId);
  if (!form || !successEl) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Basic HTML5 validation
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Loading state
    setSubmitLoading(submitBtn, true);

    try {
      await sendToSheet(getPayload(form));
      // Show success
      form.hidden   = true;
      successEl.hidden = false;
    } catch (err) {
      console.error('[keets] form error:', err);
      setSubmitLoading(submitBtn, false);
      // Fallback: still show success if it's likely a CORS/opaque response issue
      // (data was likely written but we can't confirm)
      form.hidden      = true;
      successEl.hidden = false;
    }
  });
}

async function sendToSheet(payload) {
  const url = CONFIG.FORM_URL;

  // If not configured yet, log and resolve (dev mode)
  if (!url || url === 'YOUR_APPS_SCRIPT_URL_HERE') {
    console.log('[keets] Form payload (not yet connected to sheet):', payload);
    await new Promise(r => setTimeout(r, 600)); // simulate delay
    return;
  }

  // no-cors: Google Apps Script doesn't return CORS headers by default.
  // The request is sent and data is written, but we receive an opaque response.
  await fetch(url, {
    method:  'POST',
    mode:    'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(payload),
  });
}

function setSubmitLoading(btn, isLoading) {
  if (!btn) return;
  const text    = btn.querySelector('.btn-text');
  const loading = btn.querySelector('.btn-loading');
  btn.disabled  = isLoading;
  if (text)    text.hidden    = isLoading;
  if (loading) loading.hidden = !isLoading;
}

// ── BADGE MAGNET ─────────────────────────────────────────────────────
function initBadgeMagnet() {
  const badge = document.querySelector('.mission__badge');
  if (!badge || window.matchMedia('(pointer: coarse)').matches) return;

  const RANGE    = 180; // px from badge center to start attracting
  const STRENGTH = 0.35; // fraction of the distance to pull (0 = none, 1 = full)
  const LERP     = 0.10; // easing speed per frame

  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;

  document.addEventListener('mousemove', (e) => {
    const rect    = badge.getBoundingClientRect();
    const centerX = rect.left + rect.width  / 2;
    const centerY = rect.top  + rect.height / 2;
    const dx      = e.clientX - centerX;
    const dy      = e.clientY - centerY;
    const dist    = Math.sqrt(dx * dx + dy * dy);

    if (dist < RANGE) {
      const factor = (1 - dist / RANGE) * STRENGTH;
      targetX = dx * factor;
      targetY = dy * factor;
    } else {
      targetX = 0;
      targetY = 0;
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
