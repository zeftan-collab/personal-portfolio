/* ============ CONTENT DATA (edit text here) ============ */
const education = [
  { dot: 'bg-rose-glow', chip: 'bg-rose-deep/30 text-rose-soft border-rose-glow/30', sub: 'text-rose-glow', date: '2023 — Present (4th Year)', school: 'La Consolacion University Philippines (LCUP)', level: 'Bachelor of Science in Information Technology (BSIT)', note: 'Currently completing 4th-year capstone development, advanced web applications, user interface research, and campus-wide software solutions.' },
  { dot: 'bg-moss-500', chip: 'bg-moss-800/60 text-moss-300 border-moss-500/30', sub: 'text-moss-300', date: 'Graduated June 2023', school: 'Assumpta Academy, Bulacan, Inc.', level: 'Senior High School', note: 'Strengthened academic foundations, computer literacy, and team collaboration.' },
  { dot: 'bg-pink-400', chip: 'bg-purple-900/40 text-pink-300 border-pink-500/30', sub: 'text-pink-300', date: 'Graduated May 2021', school: 'Assumpta Academy, Bulacan, Inc.', level: 'Junior High School', note: 'Built core problem-solving abilities and initial interest in digital arts and multimedia.' },
  { dot: 'bg-parchment-muted', chip: 'bg-stone-800/80 text-parchment-muted border-zinc-700', sub: 'text-parchment-muted', date: 'Graduated March 2017', school: 'Young Achievers Montessori School Inc.', level: 'Elementary Education', note: '' }
];

const skillCategories = {
  'web-dev': { title: 'Web Development', icon: '🌐', desc: 'Basic knowledge of website structure, styling, and server-side development.', skills: [
    ['HTML', 'Basic knowledge of webpage structure and content.'], ['CSS', 'Basic knowledge of styling and designing web pages.'], ['PHP', 'Basic understanding of server-side scripting and web development.']] },
  'programming': { title: 'Programming', icon: '💻', desc: 'Foundational knowledge of programming languages and concepts.', skills: [
    ['C#', 'Basic knowledge of programming syntax and logic.'], ['Python', 'Familiarity with basic programming concepts and syntax.'], ['Java', 'Basic understanding of object-oriented programming and fundamentals.']] },
  'database': { title: 'Database Management', icon: '🗄️', desc: 'Basic knowledge of database concepts and data management.', skills: [
    ['SQL', 'Basic knowledge of SQL queries and database operations.']] },
  'networking': { title: 'Networking', icon: '📡', desc: 'Understanding of fundamental computer networking concepts.', skills: [
    ['Computer Networking', 'Basic knowledge of networking fundamentals and connectivity.'], ['Network Configuration', 'Familiarity with basic network setup and configuration.']] },
  'troubleshooting': { title: 'Troubleshooting', icon: '🔧', desc: 'Basic technical support and problem-solving knowledge.', skills: [
    ['Hardware Troubleshooting', 'Basic knowledge of identifying common computer hardware issues.'], ['Software Troubleshooting', 'Familiarity with identifying and resolving common software problems.']] },
  'appdev': { title: 'Application Development', icon: '📱', desc: 'Basic understanding of the process of developing applications.', skills: [
    ['App Development', 'Foundational knowledge of application development concepts and processes.']] },
  'versioncontrol': { title: 'Version Control & Git', icon: '🐙', desc: 'Code repositories, project tracking, and team workflows.', skills: [
    ['GitHub', 'Familiarity with repositories and basic project management and code-sharing features.']] },
  'productivity': { title: 'Productivity Tools', icon: '📊', desc: 'Spreadsheet creation, data management, and business productivity software.', skills: [
    ['Microsoft Excel', 'Spreadsheet creation, data organization, formatting, and basic formulas.', 'Certified MOS Associate']] }
};

const projects = [
  { title: 'Campus Lost and Found System', img: 'images/project-lostfound.png', badge: 'Capstone', hover: 'text-moss-300', badgeColor: 'text-moss-300 border-moss-500/30', foot: '🎓 LCUP Community', category: 'Capstone Project', tags: ['PHP', 'MySQL', 'LCUP Portal'], desc: 'A campus-friendly system designed to help the LCUP community report, search for, and manage lost and found belongings.' },
  { title: 'Student Attendance Monitoring', img: 'images/project-attendance.png', badge: 'App Dev', hover: 'text-pink-300', badgeColor: 'text-pink-300 border-pink-500/30', foot: '📋 Records Manager', category: 'Desktop Application', tags: ['C# / .NET', 'Database', 'Desktop App'], desc: 'A simple application that allows professors to monitor student attendance and manage attendance records efficiently.' },
  { title: 'Café Website Design – Figma', img: 'images/project-cafe.png', badge: 'Figma UI/UX', hover: 'text-amber-300', badgeColor: 'text-amber-300 border-amber-500/30', foot: '📐 Design Concept', category: 'Figma Prototype', tags: ['Figma', 'UI/UX', 'Wireframing'], desc: 'A conceptual coffee shop website design focused on creating an appealing layout and user-friendly interface.' }
];

const certs = [
  { img: 'images/cert-mos.png', issuer: 'Microsoft Certified', color: 'text-rose-glow', title: 'MOS: Excel Associate (Office 2019)', desc: 'Fundamental understanding of Excel: cell formatting, references, formulas, and workbook organization.', left: 'May 21, 2024', right: 'X66c-XM8H' },
  { img: 'images/cert-html-css.png', issuer: 'Top 25% Rank', color: 'text-emerald-400', title: 'HTML/CSS Certification', desc: 'Evaluated through work-sample testing to verify real-world markup and styling skills.', left: 'TestDome Verified', right: 'Aug 8, 2026' },
  { img: 'images/cert-security.png', issuer: 'CloudSwyft & Microsoft', color: 'text-sky-400', title: 'Enterprise Security', desc: 'Completed in partnership with LCUP Center for Lifelong Learning, exploring enterprise protection principles.', left: 'LCUP Partnership', right: 'April 22, 2026' },
  { img: 'images/cert-csharp.png', issuer: 'freeCodeCamp & Microsoft', color: 'text-pink-300', title: 'Foundational C# Certification', desc: 'Verifies syntax logic, variables, conditionals, and object-oriented C# patterns.', left: 'Verified Credential', right: 'October 7, 2025' }
];

const badges = [
  { img: 'images/badge-iot.png', issuer: 'Cisco Academy', color: 'text-moss-300', title: 'Introduction to IoT', desc: 'Digital transformation & connected device systems.', date: 'Issued Dec 06, 2025' },
  { img: 'images/badge-mos.png', issuer: 'Microsoft', color: 'text-rose-glow', title: 'Excel Associate 2019', desc: 'Formulas, tables, data modeling & workbooks.', date: 'Issued May 21, 2024' }
];

const seminars = [
  { img: 'images/seminar-kadakareer.png', tag: 'Career Webinar', date: 'Sept 16, 2026', title: 'KadaKareer Pace Level Up V.7.1', org: '', desc: 'Active participation in professional IT upskilling, mentorship, and career roadmap formulation.' },
  { img: 'images/seminar-ethical-hacking.png', tag: 'Tech & Ethics', date: 'Feb 2, 2024', title: 'Ethical Hacking: Juggling Technology and Morality', org: 'JPSSITE - LCUP', desc: 'Explored ethical dimensions of cybersecurity, vulnerability disclosure, and IT responsibilities.' }
];

const contacts = [
  { icon: 'fa-phone', label: 'Contact Number', text: '09761770306', href: 'tel:09761770306' },
  { icon: 'fa-graduation-cap', label: 'Educational Email', text: 'zofiaelisse.tan@email.lcup.edu.ph', href: 'mailto:zofiaelisse.tan@email.lcup.edu.ph' },
  { icon: 'fa-envelope', label: 'Personal Email', text: 'zeftan0130@gmail.com', href: 'mailto:zeftan0130@gmail.com' },
  { icon: 'fa-location-dot', label: 'Location & University', text: 'Bulacan, Philippines (LCUP)' }
];

/* ============ RENDERING ============ */
const $ = (id) => document.getElementById(id);

$('education').innerHTML = education.map(e => `
  <div class="relative pl-6 group">
    <div class="absolute -left-[19px] top-1 w-3.5 h-3.5 rounded-full ${e.dot} border-2 border-twilight group-hover:scale-125 transition"></div>
    <span class="inline-block px-3 py-0.5 rounded-full text-[11px] font-semibold border mb-1 ${e.chip}">${e.date}</span>
    <h4 class="text-base font-bold text-white font-fairytale">${e.school}</h4>
    <p class="${e.sub} text-xs font-medium">${e.level}</p>
    ${e.note ? `<p class="text-parchment-muted text-xs mt-1.5 leading-relaxed">${e.note}</p>` : ''}
  </div>`).join('');

$('skill-tabs').innerHTML = Object.entries(skillCategories).map(([key, c]) => `
  <button type="button" class="skill-card-btn text-left bg-twilight-card border border-twilight-border rounded-2xl p-5 group" data-skill="${key}">
    <div class="flex items-center justify-between mb-3"><span class="text-2xl">${c.icon}</span><i class="fa-solid fa-chevron-down text-xs text-parchment-muted transition-transform duration-300"></i></div>
    <h4 class="font-bold text-white text-base font-fairytale group-hover:text-rose-glow transition">${c.title}</h4>
    <p class="text-xs text-moss-300 font-medium mt-1">${c.skills.length} skill${c.skills.length > 1 ? 's' : ''}</p>
  </button>`).join('');

function selectSkill(key) {
  const c = skillCategories[key];
  document.querySelectorAll('.skill-card-btn').forEach(b => {
    const on = b.dataset.skill === key;
    b.classList.toggle('active', on);
    b.querySelector('.fa-chevron-down').classList.toggle('rotate-180', on);
  });
  $('detail-icon').textContent = c.icon;
  $('detail-title').textContent = c.title;
  $('detail-desc').textContent = c.desc;
  $('detail-count').textContent = `${c.skills.length} skill${c.skills.length > 1 ? 's' : ''}`;
  $('detail-skills-list').innerHTML = c.skills.map(([name, desc, level]) => `
    <div class="p-4 rounded-2xl bg-twilight/90 border border-twilight-border hover:border-rose-glow/40 transition flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between gap-2 mb-2"><h5 class="text-sm font-bold text-white font-fairytale">${name}</h5>
        <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-rose-deep/20 text-rose-glow border border-rose-glow/30 text-center">${level || 'Beginner'}</span></div>
        <p class="text-xs text-parchment-muted leading-relaxed">${desc}</p>
      </div>
      <div class="mt-4 pt-2 border-t border-twilight-border/40 flex justify-between text-[10px] text-moss-300"><span>Fundamental Skill</span><span class="text-rose-glow">✦</span></div>
    </div>`).join('');
}
$('skill-tabs').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-skill]');
  if (btn) selectSkill(btn.dataset.skill);
});
selectSkill('web-dev');

$('project-grid').innerHTML = projects.map((p, i) => `
  <article class="arch-card bg-twilight-card border border-twilight-border overflow-hidden flex flex-col group cursor-pointer" data-project="${i}" tabindex="0" role="button" aria-label="Preview ${p.title}">
    <div class="h-48 relative overflow-hidden bg-zinc-900 border-b border-twilight-border">
      <img src="${p.img}" alt="${p.title} preview" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
      <div class="absolute inset-0 bg-gradient-to-t from-twilight-card via-transparent to-transparent opacity-70"></div>
      <div class="absolute inset-1.5 border border-moss-500/30 rounded-t-[3.8rem] pointer-events-none"></div>
      <span class="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-twilight-card/90 border backdrop-blur-md ${p.badgeColor}">${p.badge}</span>
    </div>
    <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
      <div><h3 class="font-fairytale text-lg text-white font-bold group-hover:${p.hover} transition">${p.title}</h3>
      <p class="text-parchment-muted text-xs leading-relaxed mt-2">${p.desc}</p></div>
      <div class="pt-4 border-t border-twilight-border/60">
        <div class="flex flex-wrap gap-1 mb-4">${p.tags.map(t => `<span class="px-2 py-0.5 rounded-full text-[10px] parchment-tag text-parchment-light">${t}</span>`).join('')}</div>
        <div class="flex items-center justify-between text-xs"><span class="${p.hover} font-medium">${p.foot}</span><span class="text-rose-glow font-medium group-hover:underline">Click to view →</span></div>
      </div>
    </div>
  </article>`).join('');

$('cert-grid').innerHTML = certs.map(c => `
  <div class="bg-gradient-to-b from-[#18131d] to-twilight-card border border-twilight-border hover:border-rose-glow/60 p-5 rounded-3xl transition duration-300 hover:-translate-y-1.5 group flex flex-col justify-between">
    <div>
      <div class="h-44 rounded-2xl overflow-hidden bg-black/50 border border-twilight-border mb-4"><img src="${c.img}" alt="${c.title} certificate" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"></div>
      <span class="text-[10px] font-semibold ${c.color} uppercase tracking-wider">${c.issuer}</span>
      <h4 class="font-fairytale text-sm text-white font-bold mt-1">${c.title}</h4>
      <p class="text-parchment-muted text-xs mt-2 leading-relaxed">${c.desc}</p>
    </div>
    <div class="mt-4 pt-3 border-t border-twilight-border/40 text-[10px] text-moss-300 flex justify-between"><span>${c.left}</span><span class="text-rose-glow">${c.right}</span></div>
  </div>`).join('');

$('badge-list').innerHTML = badges.map(b => `
  <div class="p-4 rounded-2xl bg-twilight border border-twilight-border flex items-center gap-4 group hover:border-rose-glow/50 transition">
    <img src="${b.img}" alt="${b.title} badge" class="w-16 h-16 rounded-xl object-cover bg-black shrink-0 border border-twilight-border">
    <div><span class="text-[10px] ${b.color} font-semibold uppercase tracking-wider">${b.issuer}</span>
    <h4 class="font-fairytale text-xs text-white font-bold mt-0.5">${b.title}</h4>
    <p class="text-[11px] text-parchment-muted mt-1">${b.desc}</p><span class="text-[10px] text-zinc-500">${b.date}</span></div>
  </div>`).join('');

$('seminar-list').innerHTML = seminars.map(s => `
  <div class="p-4 rounded-2xl bg-twilight border border-twilight-border flex flex-col sm:flex-row items-center gap-4 hover:border-rose-glow/40 transition">
    <img src="${s.img}" alt="${s.title} certificate" class="w-full sm:w-28 h-20 rounded-xl object-cover bg-black shrink-0 border border-zinc-800">
    <div class="flex-1">
      <div class="flex items-center justify-between"><span class="text-[10px] font-semibold text-rose-glow uppercase tracking-wider">${s.tag}</span><span class="text-[10px] text-zinc-500">${s.date}</span></div>
      <h4 class="font-fairytale text-xs text-white font-bold mt-1">${s.title}</h4>
      ${s.org ? `<p class="text-[10px] text-rose-glow font-medium mt-0.5">${s.org}</p>` : ''}
      <p class="text-[11px] text-parchment-muted mt-1">${s.desc}</p>
    </div>
  </div>`).join('');

$('contact-list').innerHTML = contacts.map(c => `
  <div class="flex items-center gap-4">
    <div class="w-10 h-10 shrink-0 rounded-full bg-rose-deep/20 border border-rose-glow/30 flex items-center justify-center text-rose-glow"><i class="fa-solid ${c.icon}"></i></div>
    <div class="min-w-0"><span class="block text-[11px] text-moss-300 uppercase tracking-wider">${c.label}</span>
    ${c.href ? `<a href="${c.href}" class="text-sm font-medium text-white hover:text-rose-glow transition break-all">${c.text}</a>` : `<span class="text-sm font-medium text-white">${c.text}</span>`}</div>
  </div>`).join('');

/* ============ PROJECT MODAL ============ */
const modal = $('project-modal');
function openProject(i) {
  const p = projects[i];
  $('modal-img').src = p.img; $('modal-img').alt = p.title + ' preview';
  $('modal-title').textContent = p.title; $('modal-desc').textContent = p.desc; $('modal-badge').textContent = p.category;
  $('modal-tags').innerHTML = p.tags.map(t => `<span class="px-2 py-0.5 rounded-full text-[11px] parchment-tag text-parchment-light">${t}</span>`).join('');
  modal.classList.replace('hidden', 'flex');
  document.body.style.overflow = 'hidden';
  $('modal-close').focus();
}
function closeProject() { modal.classList.replace('flex', 'hidden'); document.body.style.overflow = ''; }
$('project-grid').addEventListener('click', (e) => { const c = e.target.closest('[data-project]'); if (c) openProject(+c.dataset.project); });
$('project-grid').addEventListener('keydown', (e) => { const c = e.target.closest('[data-project]'); if (c && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openProject(+c.dataset.project); } });
$('modal-close').addEventListener('click', closeProject);
modal.addEventListener('click', (e) => { if (e.target === modal) closeProject(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeProject(); });

/* ============ MOBILE MENU ============ */
const menu = $('mobile-menu'), menuBtn = $('menu-btn');
menuBtn.addEventListener('click', () => {
  const open = menu.classList.toggle('hidden') === false;
  menuBtn.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { menu.classList.add('hidden'); menuBtn.setAttribute('aria-expanded', false); }));

/* ============ CONTACT FORM (opens the visitor's email app) ============ */
$('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const body = `${$('f-message').value}\n\nFrom: ${$('f-name').value} (${$('f-email').value})`;
  window.location.href = `mailto:zeftan0130@gmail.com?subject=${encodeURIComponent($('f-subject').value)}&body=${encodeURIComponent(body)}`;
});

/* ============ SPARKLE CURSOR ============ */
const canvas = $('sparkle-canvas'), ctx = canvas.getContext('2d');
const sparkleColors = ['#ff7eb3', '#ffd1e3', '#ffffff', '#c93774', '#9ec19d'];
const particles = [];
function resize() { canvas.width = innerWidth; canvas.height = innerHeight; }
resize(); addEventListener('resize', resize);

addEventListener('mousemove', (e) => {
  for (let i = 0; i < 3; i++) particles.push({
    x: e.clientX + (Math.random() - 0.5) * 8, y: e.clientY + (Math.random() - 0.5) * 8,
    size: Math.random() * 4.5 + 1.5, color: sparkleColors[Math.floor(Math.random() * sparkleColors.length)],
    vx: (Math.random() - 0.5) * 2.2, vy: (Math.random() - 0.5) * 2.2 - 0.8, a: 1, decay: Math.random() * 0.025 + 0.015
  });
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx; p.y += p.vy; p.a -= p.decay; p.size *= 0.96;
    if (p.a <= 0 || p.size <= 0.3) { particles.splice(i, 1); continue; }
    const r = p.size * 1.6;
    ctx.save();
    ctx.globalAlpha = p.a; ctx.fillStyle = p.color; ctx.shadowBlur = 10; ctx.shadowColor = p.color;
    ctx.beginPath();
    ctx.moveTo(p.x, p.y - r);
    ctx.quadraticCurveTo(p.x, p.y, p.x + r, p.y);
    ctx.quadraticCurveTo(p.x, p.y, p.x, p.y + r);
    ctx.quadraticCurveTo(p.x, p.y, p.x - r, p.y);
    ctx.quadraticCurveTo(p.x, p.y, p.x, p.y - r);
    ctx.fill();
    ctx.restore();
  }
  requestAnimationFrame(animate);
}
animate();