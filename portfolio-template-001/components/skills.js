/**
 * ═══ SKILLS COMPONENT ═══
 * Renders skill cards with animated progress bars from CONFIG.skills.
 */

const Skills = {
  init() {
    this.renderSkills();
  },

  renderSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;

    grid.innerHTML = CONFIG.skills.map((skill, i) => `
      <div class="skill-card reveal" style="transition-delay: ${i * 0.08}s">
        <div class="skill-card__header">
          <span class="skill-card__name">
            <span class="skill-card__icon">${skill.icon || '⚡'}</span>
            ${skill.name}
          </span>
          <span class="skill-card__level">${skill.level}%</span>
        </div>
        <div class="skill-card__bar">
          <div class="skill-card__fill" data-level="${skill.level}"></div>
        </div>
      </div>
    `).join('');
  },

  /** Animate skill bars when they come into view (called from App) */
  animateBars() {
    document.querySelectorAll('.skill-card__fill').forEach(bar => {
      const level = bar.dataset.level;
      bar.style.width = level + '%';
    });
  }
};
