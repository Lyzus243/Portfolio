const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open navigation'); }
menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    const field = document.createElement('textarea');
    field.value = 'oreoluwaoluwaseun21@gmail.com';
    field.style.position = 'fixed'; field.style.left = '-9999px';
    document.body.appendChild(field); field.select();
    const copied = document.execCommand('copy'); field.remove();
    if (!copied) await navigator.clipboard.writeText('oreoluwaoluwaseun21@gmail.com');
    status.textContent = 'Copied!';
  }
  catch { status.textContent = 'Select the email address to copy it.'; }
});
const projects = {
  careloop: { name: 'Careloop', label: 'BUSINESS SOFTWARE / FEATURED PROJECT', body: '<p>A customer-focused business application built to help owners organise customer relationships, orders, and sales in one workflow.</p><h3>The business challenge</h3><p>Customer details and order information can become scattered as a business grows. Careloop brings those activities together so owners can keep a clearer view of their operations.</p><h3>What I built</h3><p>A Python back end with a responsive web interface, customer and product management, order workflows, sales records, and a WhatsApp handoff for delivery arrangements.</p><h3>The technical approach</h3><p>Python, FastAPI, JavaScript, HTML/CSS, SQLite, and database migrations. The focus is on a practical customer journey and connected business records.</p>', url: 'https://www.mycareloop.com.ng', action: 'Visit Careloop ↗' },
  studyrpg: { name: 'StudyRPG', label: 'GAMIFIED LEARNING / FEATURED PROJECT', body: '<p>A study project that explores how learning can feel more engaging through the language and experience of a role-playing game.</p><h3>The opportunity</h3><p>Studying takes sustained effort. StudyRPG explores an immersive learning world as a way to give that effort a stronger sense of direction and progress.</p><h3>The design focus</h3><p>Bringing study activities into an engaging digital experience, with an emphasis on a learning realm and a clear sense of progression.</p><h3>Explore the work</h3><p>The repository offers a closer look at the project. The screenshot shows the actual StudyRPG landing page, introducing its learning adventure and immersive world.</p>', url: 'https://github.com/Lyzus243/Studyrpg2', action: 'Explore the repository ↗' }
};
const dialog = document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = projects[button.dataset.project];
  document.querySelector('#dialog-title').textContent = project.name;
  document.querySelector('#dialog-eyebrow').textContent = project.label;
  document.querySelector('#dialog-body').innerHTML = project.body;
  const link = document.querySelector('#dialog-link'); link.href = project.url; link.textContent = project.action.replace('↗', '');
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });

// Theme state is shared with the early page initializer in theme.js.
const themeToggle = document.querySelector('#theme-toggle');
function updateThemeControl() {
  const dark = document.documentElement.dataset.theme === 'dark';
  themeToggle.setAttribute('aria-pressed', String(dark));
  themeToggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  themeToggle.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
}
updateThemeControl();
themeToggle.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('portfolio-theme', theme); } catch { /* Still works when storage is unavailable. */ }
  updateThemeControl();
});
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  let saved; try { saved = localStorage.getItem('portfolio-theme'); } catch {}
  if (saved !== 'light' && saved !== 'dark') {
    document.documentElement.dataset.theme = event.matches ? 'dark' : 'light';
    updateThemeControl();
  }
});
