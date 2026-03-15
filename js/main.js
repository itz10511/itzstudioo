/* ═══════════════════════════════════════
   iTZ.STUDiOO — main.js
   ═══════════════════════════════════════ */

// ── LOWERCASE "i" TWIST ───────────────
// All display text is uppercase via CSS, but every "i" stays lowercase.
// This walks text nodes inside display elements and wraps each "i" / "I"
// with <span class="i-lower"> which CSS forces back to lowercase.
function wrapLowerI(selector) {
  document.querySelectorAll(selector).forEach(el => {
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
    const nodes = [];
    let node;
    while ((node = walker.nextNode())) nodes.push(node);

    nodes.forEach(textNode => {
      const text = textNode.textContent;
      if (!/[iI]/.test(text)) return;

      const frag = document.createDocumentFragment();
      text.split(/([iI])/).forEach(part => {
        if (part === 'i' || part === 'I') {
          const span = document.createElement('span');
          span.className = 'i-lower';
          span.textContent = 'i';
          frag.appendChild(span);
        } else {
          frag.appendChild(document.createTextNode(part));
        }
      });
      textNode.parentNode.replaceChild(frag, textNode);
    });
  });
}

wrapLowerI([
  'h1', 'h2', 'h3',
  '.nav-logo',
  '.hero-eyebrow',
  '.page-title',
  '.quote-text',
  '.statement-text',
  '.footer-tagline',
  '.cta-title',
  '.socials-title',
  '.about-name',
  '.contact-title',
  '.service-item h3',
  '.service-card h3',
  '.services-section h2',
  '.filter-btn',
  '.project-name',
  '.photo-card-label',
  '.footer-col-label',
  '.footer-nav-col a:not(.business-btn)',
  '.feat-caption p',
  '.project-cat',
].join(','));

// ── YEAR ──────────────────────────────
document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());

// ── NAV SCROLL ────────────────────────
const nav = document.querySelector('.nav');
if (nav) {
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── MOBILE NAV ────────────────────────
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

// ── CUSTOM CURSOR ─────────────────────
const dot  = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');

if (dot && ring && window.matchMedia('(pointer: fine)').matches) {
  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  });

  // Ring follows with slight lag
  const animRing = () => {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    requestAnimationFrame(animRing);
  };
  animRing();

  document.querySelectorAll('a, button, .feat-item, .project-card, .social-card, .photo-card').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });

  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; });
}

// ── CLIP-PATH MOUSE TRACKING ──────────
// Tracks mouse position within each card and updates CSS vars --x --y for the reveal layer
function bindClipReveal(selector) {
  document.querySelectorAll(selector).forEach(item => {
    const mediaEl = item.querySelector('.feat-media, .project-card-img');
    if (!mediaEl) return;
    item.addEventListener('mousemove', e => {
      const rect = mediaEl.getBoundingClientRect();
      item.style.setProperty('--x', ((e.clientX - rect.left) / rect.width * 100).toFixed(1) + '%');
      item.style.setProperty('--y', ((e.clientY - rect.top)  / rect.height * 100).toFixed(1) + '%');
    });
  });
}
bindClipReveal('.feat-item');
bindClipReveal('.project-card');

// ── PORTRAIT SCROLL SHRINK + SIGNATURE ─
const portraitSection = document.getElementById('portraitSection');
const portraitWrap    = document.getElementById('portraitWrap');
const sigPath         = document.querySelector('.portrait-sig .sig-path');

if (portraitSection && portraitWrap) {
  let sigDrawn = false;
  const handlePortrait = () => {
    const rect     = portraitSection.getBoundingClientRect();
    const viewH    = window.innerHeight;
    const progress = Math.min(Math.max(-rect.top / (rect.height - viewH), 0), 1);
    const scale    = 1 - progress * 0.42;
    portraitWrap.style.transform = `scale(${scale})`;
    if (progress > 0.25 && !sigDrawn && sigPath) {
      sigPath.classList.add('drawn');
      sigDrawn = true;
    }
  };
  window.addEventListener('scroll', handlePortrait, { passive: true });
}

// Draw footer signature on scroll into view
const footerSigPath = document.querySelector('.footer-sig-path');
if (footerSigPath) {
  const sigObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { footerSigPath.classList.add('drawn'); sigObs.unobserve(e.target); } });
  }, { threshold: 0.3 });
  sigObs.observe(footerSigPath);
}

// ── SCROLL REVEAL ─────────────────────
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = (i * 0.07) + 's';
      entry.target.classList.add('revealed');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('[data-reveal]').forEach(el => revealObs.observe(el));

// ── HORIZONTAL PHOTO STRIP ────────────
// Photos slide from right to left as you scroll through the section
const stripSection = document.getElementById('photoStripSection');
const stripTrack   = document.getElementById('photoStripTrack');

if (stripSection && stripTrack) {
  const handleStrip = () => {
    const rect     = stripSection.getBoundingClientRect();
    const viewH    = window.innerHeight;
    const progress = Math.min(Math.max((-rect.top + viewH * 0.5) / (rect.height + viewH), 0), 1);
    const maxMove  = stripTrack.scrollWidth - stripSection.offsetWidth;
    stripTrack.style.transform = `translateX(${-progress * maxMove * 0.7}px)`;
  };
  window.addEventListener('scroll', handleStrip, { passive: true });
  handleStrip();
}

// ── HERO TITLE PARALLAX ───────────────
const heroTitle = document.getElementById('heroTitle');
if (heroTitle) {
  window.addEventListener('scroll', () => {
    heroTitle.style.transform = `translateY(${window.scrollY * 0.25}px)`;
  }, { passive: true });
}

// ── WORK PAGE FILTER ──────────────────
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
