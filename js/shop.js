/**
 * shop.js — ricerca, filtri, ordinamento e rendering della galleria prodotti.
 * Tutto lato client, nessun reload di pagina.
 */
(function () {
  const cfg = window.SITE_CONFIG;
  const { productCardHTML } = window.ProductUtils;

  const state = {
    search: "",
    categoria: new Set(),
    tag: new Set(),
    taglia: new Set(),
    colore: new Set(),
    priceMin: null,
    priceMax: null,
    sort: "recenti",
  };

  // ---- Precompila da query string (es. da tile categoria in Home) ----
  const params = new URLSearchParams(location.search);
  if (params.get("categoria")) state.categoria.add(params.get("categoria"));
  if (params.get("tag")) state.tag.add(params.get("tag"));
  if (params.get("q")) state.search = params.get("q");

  // ---- Costruisci markup filtri (identico per desktop + drawer mobile) ----
  function filterGroupsHTML(suffix) {
    const checkGroup = (title, key, options) => `
      <div class="filter-group">
        <h3>${title}</h3>
        <div class="filter-options">
          ${options
            .map(
              (opt) => `
            <label class="check">
              <input type="checkbox" data-filter="${key}" value="${opt}" id="${key}-${opt}-${suffix}">
              ${opt}
            </label>`
            )
            .join("")}
        </div>
      </div>`;

    const colorGroup = `
      <div class="filter-group">
        <h3>Colore</h3>
        <div class="swatches" id="colorSwatches-${suffix}">
          ${cfg.colors
            .map((c) => `<button type="button" class="swatch" data-filter="colore" data-value="${c}" title="${c}">${c.slice(0, 2)}</button>`)
            .join("")}
        </div>
      </div>`;

    const priceGroup = `
      <div class="filter-group">
        <h3>Prezzo</h3>
        <div class="price-inputs">
          <input type="number" min="0" placeholder="Min €" id="priceMin-${suffix}" aria-label="Prezzo minimo">
          <span style="color:var(--ink-dim)">—</span>
          <input type="number" min="0" placeholder="Max €" id="priceMax-${suffix}" aria-label="Prezzo massimo">
        </div>
      </div>`;

    return (
      checkGroup("Categoria", "categoria", cfg.categories) +
      checkGroup("Tag", "tag", cfg.tags) +
      checkGroup("Taglia", "taglia", cfg.sizes) +
      colorGroup +
      priceGroup +
      `<button type="button" class="reset-link" data-reset="${suffix}">Azzera filtri</button>`
    );
  }

  document.getElementById("filtersFormDesktop").innerHTML = filterGroupsHTML("d");
  document.getElementById("filtersFormMobile").innerHTML = filterGroupsHTML("m");

  // ---- Sync stato -> checkbox/swatch/prezzo in entrambe le copie ----
  function syncFormFromState() {
    ["d", "m"].forEach((suf) => {
      ["categoria", "tag", "taglia"].forEach((key) => {
        document.querySelectorAll(`input[data-filter="${key}"]`).forEach((el) => {
          if (el.id.endsWith("-" + suf)) el.checked = state[key].has(el.value);
        });
      });
      document.querySelectorAll(`#colorSwatches-${suf} .swatch`).forEach((el) => {
        el.classList.toggle("active", state.colore.has(el.dataset.value));
      });
      const minEl = document.getElementById(`priceMin-${suf}`);
      const maxEl = document.getElementById(`priceMax-${suf}`);
      if (minEl) minEl.value = state.priceMin ?? "";
      if (maxEl) maxEl.value = state.priceMax ?? "";
    });
    document.getElementById("searchInput").value = state.search;
    document.getElementById("sortSelect").value = state.sort;
  }

  // ---- Listeners condivisi (checkbox, swatch, prezzo) su entrambe le copie ----
  function attachFilterListeners() {
    document.querySelectorAll('input[data-filter="categoria"], input[data-filter="tag"], input[data-filter="taglia"]').forEach((el) => {
      el.addEventListener("change", () => {
        const key = el.dataset.filter;
        if (el.checked) state[key].add(el.value);
        else state[key].delete(el.value);
        render();
      });
    });
    document.querySelectorAll('.swatch[data-filter="colore"]').forEach((el) => {
      el.addEventListener("click", () => {
        const v = el.dataset.value;
        if (state.colore.has(v)) state.colore.delete(v);
        else state.colore.add(v);
        render();
      });
    });
    ["d", "m"].forEach((suf) => {
      const minEl = document.getElementById(`priceMin-${suf}`);
      const maxEl = document.getElementById(`priceMax-${suf}`);
      if (minEl)
        minEl.addEventListener("input", () => {
          state.priceMin = minEl.value ? Number(minEl.value) : null;
          render();
        });
      if (maxEl)
        maxEl.addEventListener("input", () => {
          state.priceMax = maxEl.value ? Number(maxEl.value) : null;
          render();
        });
    });
    document.querySelectorAll("[data-reset]").forEach((btn) => {
      btn.addEventListener("click", resetFilters);
    });
  }

  function resetFilters() {
    state.search = "";
    state.categoria.clear();
    state.tag.clear();
    state.taglia.clear();
    state.colore.clear();
    state.priceMin = null;
    state.priceMax = null;
    render();
  }

  // ---- Ricerca e ordinamento ----
  document.getElementById("searchInput").addEventListener("input", (e) => {
    state.search = e.target.value;
    render();
  });
  document.getElementById("sortSelect").addEventListener("change", (e) => {
    state.sort = e.target.value;
    render();
  });
  document.getElementById("emptyResetBtn").addEventListener("click", resetFilters);

  // ---- Drawer mobile ----
  const drawer = document.getElementById("filterDrawer");
  document.getElementById("openFiltersBtn").addEventListener("click", () => drawer.classList.add("open"));
  document.getElementById("closeFiltersBtn").addEventListener("click", () => drawer.classList.remove("open"));
  document.getElementById("filterDrawerBackdrop").addEventListener("click", () => drawer.classList.remove("open"));
  document.getElementById("mobileApplyBtn").addEventListener("click", () => drawer.classList.remove("open"));
  document.getElementById("mobileResetBtn").addEventListener("click", resetFilters);

  // ---- Filtro + rendering ----
  function matches(p) {
    const q = state.search.trim().toLowerCase();
    if (q) {
      const hay = [p.nome, p.categoria, ...(p.tag || []), p.descrizione || ""].join(" ").toLowerCase();
      if (!hay.includes(q)) return false;
    }
    if (state.categoria.size && !state.categoria.has(p.categoria)) return false;
    if (state.tag.size && !p.tag.some((t) => state.tag.has(t))) return false;
    if (state.taglia.size && !p.taglie.some((t) => state.taglia.has(t))) return false;
    if (state.colore.size && !p.colori.some((c) => state.colore.has(c))) return false;
    if (state.priceMin != null && p.prezzo < state.priceMin) return false;
    if (state.priceMax != null && p.prezzo > state.priceMax) return false;
    return true;
  }

  function sortProducts(list) {
    const arr = list.slice();
    switch (state.sort) {
      case "prezzo-asc":
        return arr.sort((a, b) => a.prezzo - b.prezzo);
      case "prezzo-desc":
        return arr.sort((a, b) => b.prezzo - a.prezzo);
      case "nome-asc":
        return arr.sort((a, b) => a.nome.localeCompare(b.nome));
      case "nome-desc":
        return arr.sort((a, b) => b.nome.localeCompare(a.nome));
      default:
        return arr.sort((a, b) => new Date(b.dataInserimento) - new Date(a.dataInserimento));
    }
  }

  function activeFilterChips() {
    const chips = [];
    state.categoria.forEach((v) => chips.push({ key: "categoria", v }));
    state.tag.forEach((v) => chips.push({ key: "tag", v }));
    state.taglia.forEach((v) => chips.push({ key: "taglia", v }));
    state.colore.forEach((v) => chips.push({ key: "colore", v }));
    if (state.priceMin != null || state.priceMax != null) {
      chips.push({ key: "prezzo", v: `€${state.priceMin ?? 0}–${state.priceMax ?? "∞"}`, isPrice: true });
    }
    return chips;
  }

  function render() {
    const filtered = sortProducts(cfg.products.filter(matches));

    // grid
    const grid = document.getElementById("productGrid");
    const empty = document.getElementById("emptyState");
    if (filtered.length === 0) {
      grid.innerHTML = "";
      grid.style.display = "none";
      empty.hidden = false;
    } else {
      grid.style.display = "";
      empty.hidden = true;
      grid.innerHTML = filtered.map((p) => productCardHTML(p)).join("");
    }

    // results count
    document.getElementById("resultsCount").textContent = `${filtered.length} articol${filtered.length === 1 ? "o" : "i"}`;

    // active filter chips
    const chips = activeFilterChips();
    const chipsWrap = document.getElementById("activeFilters");
    if (!chips.length) {
      chipsWrap.hidden = true;
      chipsWrap.innerHTML = "";
    } else {
      chipsWrap.hidden = false;
      chipsWrap.innerHTML =
        chips
          .map(
            (c) => `
        <span class="chip">
          ${c.v}
          <button type="button" aria-label="Rimuovi filtro ${c.v}" data-remove-chip="${c.key}" data-remove-value="${c.isPrice ? "" : c.v}">×</button>
        </span>`
          )
          .join("") + `<button type="button" class="reset-link" style="margin-left:4px">Azzera filtri</button>`;

      chipsWrap.querySelectorAll("[data-remove-chip]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const key = btn.dataset.removeChip;
          if (key === "prezzo") {
            state.priceMin = null;
            state.priceMax = null;
          } else {
            state[key].delete(btn.dataset.removeValue);
          }
          render();
        });
      });
      chipsWrap.querySelector(".reset-link").addEventListener("click", resetFilters);
    }

    syncFormFromState();
  }

  attachFilterListeners();
  syncFormFromState();
  render();
})();
