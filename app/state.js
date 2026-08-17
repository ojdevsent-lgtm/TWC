/* TWC Client Intelligence — shared UI state helpers. */
const TWCState = (() => {
  const key = 'twc-ui-state-v1';
  const defaults = { theme: 'dark', assistantOpen: false };
  function read() { try { return { ...defaults, ...(JSON.parse(localStorage.getItem(key)) || {}) }; } catch { return { ...defaults }; } }
  function write(patch) { const next = { ...read(), ...patch }; localStorage.setItem(key, JSON.stringify(next)); return next; }
  return { read, write };
})();
