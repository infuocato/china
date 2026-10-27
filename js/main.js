/**
 * main.js — navbar e footer minimali, colore d'accento da config.js,
 * animazioni allo scroll. Caricare DOPO js/config.js in ogni pagina.
 */
(function () {
  const cfg = window.SITE_CONFIG;
  if (!cfg) return;

  document.documentElement.style.setProperty("--accent", cfg.accentColor);

  const ICONS = {
    instagram:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>',
    tiktok:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 3c.4 2.2 1.9 3.8 4.4 4v3.1c-1.6.1-3-.4-4.4-1.3v6.6c0 3.5-2.9 6.3-6.4 6.3S3.8 18.9 3.8 15.4c0-3.4 2.7-6.2 6.1-6.3v3.2c-1.6.2-2.9 1.6-2.9 3.2 0 1.8 1.5 3.2 3.3 3.2s3.3-1.4 3.3-3.2V3h3z"/></svg>',
    youtube:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2.5" y="5.5" width="19" height="13" rx="3.5"/><path d="M10.5 9.2 15 12l-4.5 2.8z" fill="currentColor" stroke="none"/></svg>',
  };

  function socialLinks() {
    const s = cfg.social || {};
    let html = "";
    if (s.instagram) html += `<a href="${s.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>`;
    if (s.tiktok) html += `<a href="${s.tiktok}" target="_blank" rel="noopener" aria-label="TikTok">${ICONS.tiktok}</a>`;
    if (s.youtube) html += `<a href="${s.youtube}" target="_blank" rel="noopener" aria-label="YouTube">${ICONS.youtube}</a>`;
    return html;
  }

  // ---- NAVBAR ----
  const navMount = document.getElementById("site-nav");
  if (navMount) {
    navMount.innerHTML = `
      <a href="#main" class="skip-link">Vai al contenuto</a>
      <nav class="nav">
        <div class="container nav-inner">
          <a href="index.html" class="nav-brand">${cfg.brandName}</a>
          <div class="nav-right">
            <div class="nav-social">${socialLinks()}</div>
          </div>
        </div>
      </nav>`;
  }

  // ---- FOOTER ----
  const footerMount = document.getElementById("site-footer");
  if (footerMount) {
    footerMount.innerHTML = `
      <footer class="footer">
        <div class="container">
          <div class="footer-bottom">
            <span>&copy; ${new Date().getFullYear()} ${cfg.brandName}. All rights reserved.</span>
            <div class="footer-social">${socialLinks()}</div>
          </div>
        </div>
      </footer>`;
  }

  // ---- Scroll reveal ----
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }
})();
