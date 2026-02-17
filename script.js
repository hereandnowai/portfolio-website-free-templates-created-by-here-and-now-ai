/**
 * ═══════════════════════════════════════════════════════════════
 *  PORTFOLIO — Main Application Engine
 *  Orchestrates all components, animations, and interactions.
 * ═══════════════════════════════════════════════════════════════
 */

const App = {
  /** Bootstrap the entire application */
  init() {
    // 1. Apply theme colors from config
    this.applyTheme();

    // 2. Initialize all components
    Navbar.init();
    Hero.init();
    Skills.init();
    Projects.init();
    Contact.init();
    Footer.init();

    // 3. Render About section
    this.renderAbout();

    // 4. Initialize interactions
    this.initScrollReveal();
    this.initScrollProgress();
    this.initBackToTop();

    // 5. Custom cursor (desktop only)
    if (CONFIG.settings.enableCursorGlow && window.matchMedia('(pointer: fine)').matches) {
      this.initCustomCursor();
    }

    // 6. Initialize EmailJS
    this.initEmailJS();

    // 7. Update page title
    document.title = `${CONFIG.name} — ${CONFIG.title}`;

    // 8. Hide preloader
    this.hidePreloader();
  },

  /** Apply theme colors from CONFIG to CSS variables */
  applyTheme() {
    const t = CONFIG.theme;
    if (!t) return;
    const root = document.documentElement;

    // Common variables that apply to both themes
    const commonMap = {
      '--primary': t.primaryColor,
      '--secondary': t.secondaryColor,
      '--accent': t.accentColor,
      '--radius': t.borderRadius,
      '--font': t.fontFamily,
    };

    // Dark theme specific variables from config (default)
    const darkMap = {
      '--bg-primary': t.bgPrimary,
      '--bg-secondary': t.bgSecondary,
      '--bg-card': t.bgCard,
      '--text-primary': t.textPrimary,
      '--text-secondary': t.textSecondary,
      '--text-muted': t.textMuted,
      '--glass-bg': t.glassBg,
      '--glass-border': t.glassBorder,
    };

    // Apply common variables as inline styles
    Object.entries(commonMap).forEach(([prop, value]) => {
      if (value) root.style.setProperty(prop, value);
    });

    // Apply dark theme variables via a style tag to allow light theme overrides
    const styleEl = document.createElement('style');
    styleEl.id = 'dynamic-theme-config';
    styleEl.textContent = `
      :root:not([data-theme="light"]) {
        ${Object.entries(darkMap)
          .filter(([_, v]) => v)
          .map(([k, v]) => `${k}: ${v};`)
          .join('\n        ')}
      }
    `;
    document.head.appendChild(styleEl);
  },

  /** Render the About section */
  renderAbout() {
    // Avatar
    const avatar = document.getElementById('aboutAvatar');
    if (avatar) {
      if (CONFIG.about.avatarUrl) {
        avatar.innerHTML = `<img src="${CONFIG.about.avatarUrl}" alt="${CONFIG.name}">`;
      } else {
        // Generate initials avatar
        const initials = CONFIG.name.split(' ').map(w => w[0]).join('').toUpperCase();
        avatar.textContent = initials;
      }
    }

    // About text
    const content = document.getElementById('aboutContent');
    if (content && CONFIG.about.description) {
      const paragraphs = Array.isArray(CONFIG.about.description)
        ? CONFIG.about.description
        : [CONFIG.about.description];

      content.innerHTML = paragraphs.map(p => `<p class="reveal">${p}</p>`).join('') +
        (CONFIG.about.resumeUrl ? `
          <a href="${CONFIG.about.resumeUrl}" class="btn btn--ghost reveal" target="_blank" rel="noopener">
            <span>Download Resume</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </a>` : '');
    }
  },

  /** Scroll-triggered reveal animations */
  initScrollReveal() {
    const elements = document.querySelectorAll('.reveal, .reveal-left');

    // Use GSAP ScrollTrigger if available, fallback to IntersectionObserver
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      elements.forEach(el => {
        if (el._scrollRevealInitialized) return;
        el._scrollRevealInitialized = true;

        ScrollTrigger.create({
          trigger: el,
          start: 'top 88%',
          once: true,
          onEnter: () => {
            el.classList.add('visible');
            // Animate skill bars when skills section enters view
            if (el.closest('#skills')) {
              Skills.animateBars();
            }
          }
        });
      });
    } else {
      // Fallback: IntersectionObserver
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.closest('#skills')) {
              Skills.animateBars();
            }
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      elements.forEach(el => observer.observe(el));
    }
  },

  /** Scroll progress bar */
  initScrollProgress() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;

    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      bar.style.width = progress + '%';
    });
  },

  /** Back to top button */
  initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 500);
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  },

  /** Custom cursor with glow effect */
  initCustomCursor() {
    document.body.classList.add('custom-cursor');
    const cursor = document.getElementById('cursor');
    const dot = cursor.querySelector('.cursor__dot');
    const ring = cursor.querySelector('.cursor__ring');

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
    });

    // Smooth follow for ring
    const animateCursor = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
      requestAnimationFrame(animateCursor);
    };
    animateCursor();

    // Hover effect on interactive elements
    const interactives = 'a, button, .project-card, input, textarea, .skill-card';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactives)) {
        cursor.classList.add('hovering');
      }
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactives)) {
        cursor.classList.remove('hovering');
      }
    });
  },

  /** Initialize EmailJS if configured */
  initEmailJS() {
    if (typeof emailjs !== 'undefined' && CONFIG.emailjs && CONFIG.emailjs.publicKey !== 'YOUR_PUBLIC_KEY') {
      emailjs.init({ publicKey: CONFIG.emailjs.publicKey });
    }
  },

  /** Hide preloader with animation */
  hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    if (!CONFIG.settings.enablePreloader) {
      preloader.remove();
      return;
    }

    // Give the page a moment to render, then fade out
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('hidden');
        setTimeout(() => preloader.remove(), 600);
      }, 800);
    });
  }
};

/* ─── BOOT ──────────────────────────────────────────────────── */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init());
} else {
  App.init();
}
