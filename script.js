const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (toggle) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;
    event.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    nav?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  { threshold: 0.18 }
);

reveals.forEach((el) => observer.observe(el));

const langToggle = document.querySelector('.lang-toggle');
const translatables = document.querySelectorAll('[data-en]');
const placeholders = document.querySelectorAll('[data-en-placeholder]');

const setLanguage = (lang) => {
  translatables.forEach((el) => {
    if (!el.dataset.es) {
      el.dataset.es = el.textContent;
    }
    el.textContent = lang === 'en' ? el.dataset.en : el.dataset.es;
  });

  placeholders.forEach((el) => {
    if (!el.dataset.esPlaceholder) {
      el.dataset.esPlaceholder = el.getAttribute('placeholder') || '';
    }
    el.setAttribute(
      'placeholder',
      lang === 'en' ? el.dataset.enPlaceholder : el.dataset.esPlaceholder
    );
  });

  if (langToggle) {
    langToggle.textContent = lang === 'en' ? 'EN' : 'ES';
  }
  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem('lang', lang);
};

if (langToggle) {
  langToggle.addEventListener('click', () => {
    const current = localStorage.getItem('lang') || 'es';
    setLanguage(current === 'es' ? 'en' : 'es');
  });
}

const savedLang = localStorage.getItem('lang');
if (savedLang === 'en') {
  setLanguage('en');
}
