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
  '.footer-bottom-bar p',
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
const sigImg          = document.querySelector('.portrait-sig-img');

if (portraitSection && portraitWrap) {
  let sigShown = false;
  const handlePortrait = () => {
    const rect     = portraitSection.getBoundingClientRect();
    const viewH    = window.innerHeight;
    const progress = Math.min(Math.max(-rect.top / (rect.height - viewH), 0), 1);
    const scale    = 1 - progress * 0.42;
    portraitWrap.style.transform = `scale(${scale})`;
    if (progress > 0.25 && !sigShown && sigImg) {
      sigImg.classList.add('visible');
      sigShown = true;
    }
  };
  window.addEventListener('scroll', handlePortrait, { passive: true });
}

// Fade in footer signature on scroll into view
const footerSigImg = document.querySelector('.footer-sig-img');
if (footerSigImg) {
  const sigObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { footerSigImg.classList.add('visible'); sigObs.unobserve(e.target); } });
  }, { threshold: 0.3 });
  sigObs.observe(footerSigImg);
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

// ── HERO LENS REVEAL (Lando-style ellipse) ───────────
const heroSection = document.getElementById('heroSection');
const heroLens    = document.querySelector('.hero-lens');

if (heroSection && heroLens && window.matchMedia('(pointer: fine)').matches) {
  let targetX = 50, targetY = 50;
  let curX    = 50, curY    = 50;
  let raf;

  const lerp = (a, b, t) => a + (b - a) * t;

  const animLens = () => {
    curX = lerp(curX, targetX, 0.09);
    curY = lerp(curY, targetY, 0.09);
    heroLens.style.clipPath =
      `ellipse(22% 18% at ${curX.toFixed(2)}% ${curY.toFixed(2)}%)`;
    raf = requestAnimationFrame(animLens);
  };

  heroSection.addEventListener('mouseenter', e => {
    const rect = heroSection.getBoundingClientRect();
    // Snap to cursor position instantly on enter so there's no drift from center
    curX = targetX = (e.clientX - rect.left) / rect.width  * 100;
    curY = targetY = (e.clientY - rect.top)  / rect.height * 100;
    heroLens.classList.add('active');
    raf = requestAnimationFrame(animLens);
  });

  heroSection.addEventListener('mousemove', e => {
    const rect = heroSection.getBoundingClientRect();
    targetX = (e.clientX - rect.left) / rect.width  * 100;
    targetY = (e.clientY - rect.top)  / rect.height * 100;
  });

  heroSection.addEventListener('mouseleave', () => {
    heroLens.classList.remove('active');
    cancelAnimationFrame(raf);
    // After fade-out transition, reset clip-path so next entry snaps clean
    setTimeout(() => {
      heroLens.style.clipPath = 'ellipse(0% 0% at 50% 50%)';
    }, 260);
  });
}

// ── HERO TITLE PARALLAX ───────────────
const heroTitle = document.getElementById('heroTitle');
if (heroTitle) {
  window.addEventListener('scroll', () => {
    heroTitle.style.transform = `translateY(${window.scrollY * 0.25}px)`;
  }, { passive: true });
}

// ── PROJECT GRID + LIGHTBOX ───────────
(function() {
  const grid     = document.getElementById('projectsGrid');
  const lightbox = document.getElementById('lightbox');
  const detail   = document.getElementById('projDetail');
  if (!grid || !lightbox || typeof PROJECTS === 'undefined') return;

  // ── Render project cards (Projects tab) ──
  function renderProjects() {
    grid.classList.remove('gallery-mode');
    grid.innerHTML = PROJECTS.map(p => `
      <div class="proj-card" data-id="${p.id}">
        <div class="proj-cover">
          ${p.cover
            ? `<img src="${p.cover}" alt="${p.name}" loading="lazy" />`
            : `<div class="proj-cover-placeholder">▶</div>`}
          <div class="proj-hover"><span>View Project →</span></div>
        </div>
        <div class="proj-meta">
          <span class="proj-title">${p.name}</span>
          <span class="proj-tag">${p.category.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(' · ')} · ${p.year}</span>
        </div>
      </div>
    `).join('');
    grid.querySelectorAll('.proj-card').forEach(card => {
      card.addEventListener('click', () => openProjectDetail(card.dataset.id));
      card.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      card.addEventListener('mouseleave',  () => document.body.classList.remove('cursor-hover'));
    });
  }

  // ── Render curated gallery (Pictures / Film Photos / Video tabs) ──
  function renderGallery(filter) {
    if (typeof GALLERY === 'undefined' || !GALLERY[filter] || !GALLERY[filter].length) return;
    grid.classList.add('gallery-mode');
    grid.innerHTML = GALLERY[filter].map((item, i) => {
      if (item.type === 'img') {
        return `<div class="gallery-item" data-index="${i}">
          <img src="${item.src}" alt="" loading="lazy" />
        </div>`;
      } else if (item.type === 'vimeo') {
        return `<div class="gallery-item gallery-item--video" data-index="${i}">
          <img src="https://vumbnail.com/${item.id}.jpg" alt="" loading="lazy" />
        </div>`;
      }
      return '';
    }).join('');
    grid.querySelectorAll('.gallery-item').forEach(el => {
      el.addEventListener('click', () => openSingleItem(GALLERY[filter][+el.dataset.index]));
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave',  () => document.body.classList.remove('cursor-hover'));
    });
  }

  // ── Project detail grid overlay ──
  function openProjectDetail(id) {
    if (!detail) return;
    const project = PROJECTS.find(p => p.id === id);
    if (!project) return;
    document.querySelector('.proj-detail-name').textContent = project.name;
    const dGrid = document.getElementById('projDetailGrid');
    dGrid.innerHTML = project.items.map((item, i) => {
      if (item.type === 'img') {
        return `<div class="gallery-item" data-index="${i}">
          <img src="${item.src}" alt="" loading="lazy" />
        </div>`;
      } else if (item.type === 'vimeo') {
        return `<div class="gallery-item gallery-item--video" data-index="${i}">
          <img src="https://vumbnail.com/${item.id}.jpg" alt="" loading="lazy" />
        </div>`;
      } else if (item.type === 'video') {
        return `<div class="gallery-item gallery-item--video" data-index="${i}"></div>`;
      }
      return '';
    }).join('');
    dGrid.querySelectorAll('.gallery-item').forEach(el => {
      el.addEventListener('click', () => openSingleItem(project.items[+el.dataset.index]));
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave',  () => document.body.classList.remove('cursor-hover'));
    });
    detail.classList.add('active');
    detail.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectDetail() {
    if (!detail) return;
    detail.classList.remove('active');
    detail.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    document.getElementById('projDetailGrid').innerHTML = '';
  }

  if (detail) {
    document.querySelector('.proj-detail-close').addEventListener('click', closeProjectDetail);
  }

  // ── Single-item lightbox ──
  function openSingleItem(item) {
    const media = document.querySelector('.lb-media');
    media.innerHTML = '';
    if (item.type === 'img') {
      const el = document.createElement('img');
      el.src = item.src;
      media.appendChild(el);
    } else if (item.type === 'vimeo') {
      const el = document.createElement('iframe');
      el.src = `https://player.vimeo.com/video/${item.id}?autoplay=1&title=0&byline=0&portrait=0`;
      el.allow = 'autoplay; fullscreen; picture-in-picture';
      el.allowFullscreen = true;
      media.appendChild(el);
    } else if (item.type === 'video') {
      const el = document.createElement('video');
      el.src = item.src; el.autoplay = true;
      el.controls = true; el.playsInline = true;
      media.appendChild(el);
    }
    lightbox.classList.add('active', 'lb-single');
    lightbox.setAttribute('aria-hidden', 'false');
    if (!detail || !detail.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    }
  }

  function closeLightbox() {
    lightbox.classList.remove('active', 'lb-single');
    lightbox.setAttribute('aria-hidden', 'true');
    document.querySelector('.lb-media').innerHTML = '';
    if (!detail || !detail.classList.contains('active')) {
      document.body.style.overflow = '';
    }
  }

  document.querySelector('.lb-close').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox || e.target.classList.contains('lb-body')) closeLightbox();
  });
  document.addEventListener('keydown', e => {
    if (lightbox.classList.contains('active') && e.key === 'Escape') { closeLightbox(); return; }
    if (detail && detail.classList.contains('active') && e.key === 'Escape') closeProjectDetail();
  });

  // ── Filter buttons ──
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      if (f === 'all') renderProjects();
      else renderGallery(f);
    });
  });

  renderProjects(); // initial render
})();
