/**
 * products.js — funzioni condivise per lavorare con l'elenco prodotti
 * definito in js/config.js
 */
(function () {
  const cfg = window.SITE_CONFIG;
  if (!cfg) return;

  function formatPrice(n) {
    return "€" + Number(n).toFixed(0);
  }

  function getProductBySlug(slug) {
    return cfg.products.find((p) => p.slug === slug);
  }

  function productCardHTML(p) {
    const img = (p.immagini && p.immagini[0]) || "";
    const tags = (p.tag || []).slice(0, 3);
    return `
      <article class="card">
        <a href="product.html?slug=${encodeURIComponent(p.slug)}" aria-label="${p.nome}">
          <div class="card-media">
            <div class="card-tags">
              ${tags.map((t) => `<span class="pill">${t}</span>`).join("")}
            </div>
            <img src="${img}" alt="${p.nome}" loading="lazy" width="600" height="750">
          </div>
        </a>
        <div class="card-body">
          <div class="card-top">
            <a href="product.html?slug=${encodeURIComponent(p.slug)}">
              <span class="card-name">${p.nome}</span>
            </a>
            <span class="card-price">${formatPrice(p.prezzo)}</span>
          </div>
          <span class="card-meta">${p.categoria}${p.stato === "riservato" ? " · Riservato" : ""}</span>
          <div class="card-actions">
            <a class="btn btn-primary" href="product.html?slug=${encodeURIComponent(p.slug)}">Vedi dettagli</a>
          </div>
        </div>
      </article>
    `;
  }

  window.ProductUtils = { formatPrice, getProductBySlug, productCardHTML };
})();
