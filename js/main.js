// ── YEAR ──────────────────────────────
document.querySelectorAll('#year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

// ── NAV SCROLL ────────────────────────
const nav = document.querySelector('.nav');
if (nav) {
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── MOBILE NAV ───────────────────────
const hamburger = document.querySelector('.nav-hamburger');
if (hamburger) {
  let mobileNav = document.querySelector('.nav-mobile');
  if (!mobileNav) {
    mobileNav = document.createElement('div');
    mobileNav.className = 'nav-mobile';
    mobileNav.innerHTML = `
      <a href="index.html">Home</a>
      <a href="work.html">Work</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
    `;
    document.body.appendChild(mobileNav);
  }

  hamburger.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ── SCROLL REVEAL ─────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${i * 0.06}s`;
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

// ── WORK FILTER ──────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const gridItems  = document.querySelectorAll('.masonry-grid .grid-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    gridItems.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });
});
