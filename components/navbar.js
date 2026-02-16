/**
 * ═══ NAVBAR COMPONENT ═══
 * Handles navigation rendering, scroll behavior, active section highlighting,
 * mobile menu, and theme toggling.
 */

const Navbar = {
  /** Initialize navbar with config data */
  init() {
    // Set logo text
    document.getElementById('navLogo').textContent = CONFIG.name;

    // Populate mobile menu links
    const mobileNav = document.getElementById('mobileMenuNav');
    const links = document.querySelectorAll('.navbar__link');
    links.forEach(link => {
      const clone = link.cloneNode(true);
      clone.addEventListener('click', () => Navbar.closeMobileMenu());
      mobileNav.appendChild(clone);
    });

    // Bind events
    this.bindEvents();
    this.initTheme();
  },

  bindEvents() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('navHamburger');
    const themeToggle = document.getElementById('themeToggle');

    // Scroll → sticky style + active section
    window.addEventListener('scroll', () => {
      // Sticky navbar background
      navbar.classList.toggle('scrolled', window.scrollY > 50);
      // Active section highlight
      this.updateActiveSection();
    });

    // Hamburger toggle
    hamburger.addEventListener('click', () => this.toggleMobileMenu());

    // Theme toggle
    themeToggle.addEventListener('click', () => this.toggleTheme());

    // Smooth scroll for all nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 72,
            behavior: 'smooth'
          });
        }
      });
    });
  },

  /** Highlight active nav link based on scroll position */
  updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      const links = document.querySelectorAll(`.navbar__link[data-section="${id}"]`);
      if (scrollY >= top && scrollY < top + height) {
        document.querySelectorAll('.navbar__link').forEach(l => l.classList.remove('active'));
        links.forEach(l => l.classList.add('active'));
      }
    });
  },

  toggleMobileMenu() {
    const hamburger = document.getElementById('navHamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const isActive = mobileMenu.classList.toggle('active');
    hamburger.classList.toggle('active', isActive);
    document.body.style.overflow = isActive ? 'hidden' : '';
  },

  closeMobileMenu() {
    document.getElementById('mobileMenu').classList.remove('active');
    document.getElementById('navHamburger').classList.remove('active');
    document.body.style.overflow = '';
  },

  /** Initialize theme from localStorage or default to dark */
  initTheme() {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  },

  /** Toggle between dark and light themes */
  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
  }
};
