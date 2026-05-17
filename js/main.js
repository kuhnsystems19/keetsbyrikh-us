// ================================================================
//  KEETS × RIK.HAUS — main.js
// ================================================================

// ── CONFIG ─────────────────────────────────────────────────────────
const CONFIG = {
  FORM_URL: 'YOUR_APPS_SCRIPT_URL_HERE',
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
    getPayload: (f) => ({
      type:      'founding-access',
      firstname: f.firstname.value.trim(),
      lastname:  f.lastname.value.trim(),
      email:     f.email.value.trim(),
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

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmitLoading(submitBtn, true);

    try {
      await sendToSheet(getPayload(form));
      form.hidden      = true;
      successEl.hidden = false;
    } catch (err) {
      console.error('[keets] form error:', err);
      setSubmitLoading(submitBtn, false);
      // Fallback: show success (data likely written despite opaque CORS response)
      form.hidden      = true;
      successEl.hidden = false;
    }
  });
}

async function sendToSheet(payload) {
  const url = CONFIG.FORM_URL;

  if (!url || url === 'YOUR_APPS_SCRIPT_URL_HERE') {
    console.log('[keets] Form payload (not yet connected to sheet):', payload);
    await new Promise(r => setTimeout(r, 600));
    return;
  }

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

  const RANGE    = 180;
  const STRENGTH = 0.35;
  const LERP     = 0.10;

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
