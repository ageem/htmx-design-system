// Alpine helpers: modal, toast, tabs, dropdown
// Requires Alpine.js. Load after Alpine or register on alpine:init.
(function () {
  function init(Alpine) {
    // Theme persistence
    Alpine.store('theme', {
      value: (localStorage.getItem('theme') || 'light'),
      toggle() {
        this.value = this.value === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', this.value);
        localStorage.setItem('theme', this.value);
      },
      apply() {
        document.documentElement.setAttribute('data-theme', this.value);
      }
    });
    Alpine.store('theme').apply();

    // Dialog manager by id
    Alpine.store('dialog', {
      openIds: new Set(),
      open(id) { this.openIds.add(id); this._toggle(id, true); },
      close(id) { this.openIds.delete(id); this._toggle(id, false); },
      _toggle(id, isOpen) {
        const dlg = document.querySelector(`[data-dialog="${id}"]`);
        const backdrop = document.querySelector(`[data-dialog-backdrop="${id}"]`);
        if (dlg) dlg.toggleAttribute('open', isOpen);
        if (backdrop) backdrop.style.display = isOpen ? 'block' : 'none';
      }
    });

    // Toast queue
    Alpine.store('toast', {
      items: [],
      show(msg, opts = {}) {
        const id = Date.now() + Math.random().toString(36).slice(2);
        const item = { id, msg, variant: opts.variant || 'info' };
        this.items.push(item);
        const ttl = opts.ttl ?? 3000;
        if (ttl > 0) setTimeout(() => this.dismiss(id), ttl);
      },
      dismiss(id) { this.items = this.items.filter(t => t.id !== id); }
    });

    // Tabs helper: x-data="tabs('tab1')"
    Alpine.data('tabs', (initial) => ({
      current: initial,
      is(id) { return this.current === id; },
      select(id) { this.current = id; }
    }));

    // Dropdown helper: x-data="dropdown()"
    Alpine.data('dropdown', () => ({
      open: false,
      toggle() { this.open = !this.open; },
      close() { this.open = false; }
    }));
  }

  if (window.Alpine) {
    init(window.Alpine);
  } else {
    document.addEventListener('alpine:init', () => init(window.Alpine));
  }
})();

