/* Replay a gentle reveal whenever content re-enters the viewport. */
(() => {
  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const targets = [];
  document.querySelectorAll('main section').forEach((section) => {
    section.querySelectorAll('h1, h2, h3, .grid > div').forEach((element, index) => {
      // A heading inside an animated grid cell moves with its parent.
      if (element.matches('h1, h2, h3') && element.parentElement.closest('.grid > div')) return;
      element.classList.add('scroll-reveal');
      element.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 75}ms`);
      targets.push(element);
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('scroll-reveal-active');
        void entry.target.offsetWidth;
        entry.target.classList.add('scroll-reveal-active');
      } else {
        entry.target.classList.remove('scroll-reveal-active');
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -7% 0px' });

  targets.forEach((element) => observer.observe(element));
})();

/* Demo dialog and compact navigation. */
(() => {
  const overlay = document.getElementById('demo-overlay');
  const dialog = overlay.querySelector('.demo-dialog');
  const close = overlay.querySelector('.demo-close');
  const form = document.getElementById('demo-form');
  let opener = null;

  function openDemo(event) {
    if (event) event.preventDefault();
    opener = document.activeElement;
    overlay.hidden = false;
    document.body.classList.add('demo-open');
    dialog.focus();
  }
  function closeDemo() {
    overlay.hidden = true;
    document.body.classList.remove('demo-open');
    if (opener && typeof opener.focus === 'function') opener.focus();
  }

  document.querySelectorAll('button, a').forEach((element) => {
    const label = element.textContent.replace(/\s+/g, ' ').trim().toLowerCase();
    if (label.includes('book a demo') || label.includes('free 15-min demo') ||
        label === 'start' || label.includes('get started today') || label.includes('talk to our team')) {
      element.addEventListener('click', openDemo);
    }
  });
  close.addEventListener('click', closeDemo);
  overlay.addEventListener('click', (event) => { if (event.target === overlay) closeDemo(); });
  document.addEventListener('keydown', (event) => {
    if (overlay.hidden) return;
    if (event.key === 'Escape') closeDemo();
    if (event.key === 'Tab') {
      const focusable = [...dialog.querySelectorAll('button, input, select')].filter(el => !el.disabled);
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const subject = encodeURIComponent('EKhum demo request — ' + values.get('organization'));
    const body = encodeURIComponent(`Name: ${values.get('name')}\nWork email: ${values.get('email')}\nPhone: ${values.get('phone')}\nOrganization type: ${values.get('organizationType')}\nOrganization: ${values.get('organization')}\nPreferred time: ${values.get('time')}`);
    // Open prepared email for the demo booking
    window.location.href = `mailto:contact@ekhum.org?subject=${subject}&body=${body}`;
  });

  const menuButton = document.querySelector('[aria-label="Toggle Menu"]');
  const nav = document.querySelector('.main-nav');
  if (menuButton && nav) {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('mobile-nav-open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('mobile-nav-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }
})();
