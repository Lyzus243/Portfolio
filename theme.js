(() => {
  let saved;
  try { saved = localStorage.getItem('portfolio-theme'); } catch {}
  document.documentElement.dataset.theme = saved === 'light' || saved === 'dark'
    ? saved : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
})();
