/**
 * ═══ HERO COMPONENT ═══
 * Renders the hero section: animated title, typing effect, particle canvas,
 * and entrance animations.
 */

const Hero = {
  roleIndex: 0,
  charIndex: 0,
  isDeleting: false,
  typeSpeed: 80,

  init() {
    // Set hero content from config
    document.getElementById('heroTitle').innerHTML =
      `Hi, I'm <span class="name-gradient">${CONFIG.name}</span>`;
    document.getElementById('heroTagline').textContent = CONFIG.tagline;

    // Start typing animation
    this.typeRole();

    // Initialize particle canvas
    if (CONFIG.settings.enableParticles) {
      this.initParticles();
    }

    // Entrance animations (after preloader)
    this.animateEntrance();
  },

  /** Typewriter effect for rotating roles */
  typeRole() {
    const roles = CONFIG.roles;
    const el = document.getElementById('heroRoleText');
    if (!el || !roles || roles.length === 0) return;

    const current = roles[this.roleIndex];

    if (this.isDeleting) {
      el.textContent = current.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      el.textContent = current.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let delay = this.isDeleting ? 40 : this.typeSpeed;

    if (!this.isDeleting && this.charIndex === current.length) {
      delay = 2000; // pause at end
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % roles.length;
      delay = 500;
    }

    setTimeout(() => this.typeRole(), delay);
  },

  /** GSAP entrance animation sequence */
  animateEntrance() {
    // Delay until GSAP is ready
    const run = () => {
      if (typeof gsap === 'undefined') {
        setTimeout(run, 100);
        return;
      }

      const speed = CONFIG.settings.animationSpeed || 1;
      const tl = gsap.timeline({ delay: 0.3 / speed });

      tl.to('.hero__badge', {
        opacity: 1, y: 0, duration: 0.6 / speed, ease: 'power3.out'
      })
      .to('.hero__title', {
        opacity: 1, y: 0, duration: 0.7 / speed, ease: 'power3.out'
      }, '-=0.3')
      .to('.hero__roles', {
        opacity: 1, y: 0, duration: 0.5 / speed, ease: 'power3.out'
      }, '-=0.4')
      .to('.hero__tagline', {
        opacity: 1, y: 0, duration: 0.5 / speed, ease: 'power3.out'
      }, '-=0.3')
      .to('.hero__cta', {
        opacity: 1, y: 0, duration: 0.5 / speed, ease: 'power3.out'
      }, '-=0.2');
    };

    run();
  },

  /** Canvas particle animation */
  initParticles() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animFrame;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const count = CONFIG.settings.particleCount || 50;

    // Create particles
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    const primaryColor = CONFIG.theme.primaryColor || '#6366F1';

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = primaryColor;
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = primaryColor;
            ctx.globalAlpha = (1 - dist / 120) * 0.15;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      ctx.globalAlpha = 1;
      animFrame = requestAnimationFrame(animate);
    };

    animate();
  }
};
