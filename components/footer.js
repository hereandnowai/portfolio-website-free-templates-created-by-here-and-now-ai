/**
 * ═══ FOOTER COMPONENT ═══
 * Renders footer content from CONFIG.
 */

const Footer = {
  init() {
    this.renderFooter();
  },

  renderFooter() {
    // Brand section
    const brand = document.getElementById('footerBrand');
    if (brand) {
      brand.innerHTML = `
        <span class="footer__brand-name">${CONFIG.name}</span>
        <span class="footer__brand-tagline">${CONFIG.title}</span>
      `;
    }

    // Social links
    const socialContainer = document.getElementById('footerSocial');
    if (socialContainer && CONFIG.social) {
      socialContainer.innerHTML = Object.entries(CONFIG.social)
        .filter(([_, url]) => url)
        .map(([platform, url]) => {
          const href = platform === 'email' ? `mailto:${url}` : url;
          return `<a href="${href}" target="_blank" rel="noopener">${platform.charAt(0).toUpperCase() + platform.slice(1)}</a>`;
        }).join('');
    }

    // Bottom copyright
    const bottom = document.getElementById('footerBottom');
    if (bottom) {
      bottom.innerHTML = `
        <p>© ${new Date().getFullYear()} ${CONFIG.name}. Chief AI Scientist at HERE AND NOW AI - Artificial Intelligence Research Institute</p>
      `;
    }
  }
};
