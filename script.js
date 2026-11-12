const education = [
  { dot: 'bg-rose-glow', chip: 'bg-rose-deep/30 text-rose-soft border-rose-glow/30', sub: 'text-rose-glow', date: '2023 — Present (4th Year)', school: 'La Consolacion University Philippines (LCUP)', level: 'Bachelor of Science in Information Technology (BSIT)', note: 'Currently completing 4th-year capstone development, advanced web applications, user interface research, and campus-wide software solutions.' },
  { dot: 'bg-moss-500', chip: 'bg-moss-800/60 text-moss-300 border-moss-500/30', sub: 'text-moss-300', date: 'Graduated June 2023', school: 'Assumpta Academy, Bulacan, Inc.', level: 'Senior High School (STEM)', note: 'Strengthened academic foundations, computer literacy, and team collaboration.' },
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
  { title: 'Campus Lost and Found System', img: 'images/project-lostfound.jpg', badge: 'Capstone', hover: 'text-moss-300', badgeColor: 'text-moss-300 border-moss-500/30', foot: '🎓 LCUP Community', category: 'Capstone Project', tags: ['PHP', 'MySQL', 'LCUP Portal'], desc: 'A campus-friendly system designed to help the LCUP community report, search for, and manage lost and found belongings.' },
  { title: 'Student Attendance Monitoring', img: 'images/project-attendance.jpg', badge: 'App Dev', hover: 'text-pink-300', badgeColor: 'text-pink-300 border-pink-500/30', foot: '📋 Records Manager', category: 'Desktop Application', tags: ['Kotlin/Java', 'Database', 'Desktop App'], desc: 'A simple application that allows professors to monitor student attendance and manage attendance records efficiently.' },
  { title: 'Café Website Design – Figma', img: 'images/project-cafe.jpg', badge: 'Figma UI/UX', hover: 'text-amber-300', badgeColor: 'text-amber-300 border-amber-500/30', foot: '📐 Design Concept', category: 'Figma Prototype', tags: ['Figma', 'UI/UX', 'Wireframing'], desc: 'A conceptual coffee shop website design focused on creating an appealing layout and user-friendly interface.' }
];

const certs = [
  { img: 'images/cert-mos.jpg', issuer: 'Microsoft Certified', color: 'text-rose-glow', title: 'MOS: Excel Associate (Office 2019)', desc: 'Fundamental understanding of Excel: cell formatting, references, formulas, and workbook organization.' },
  { img: 'images/cert-html-css.jpg', issuer: 'TestDome', color: 'text-emerald-400', title: 'HTML/CSS Certification', desc: 'Evaluated through work-sample testing to verify real-world markup and styling skills.' },
  { img: 'images/cert-security.jpg', issuer: 'CloudSwyft & Microsoft', color: 'text-sky-400', title: 'Enterprise Security', desc: 'Completed in partnership with LCUP Center for Lifelong Learning, exploring enterprise protection principles.' },
  { img: 'images/cert-csharp.jpg', issuer: 'freeCodeCamp & Microsoft', color: 'text-pink-300', title: 'Foundational C# Certification', desc: 'Verifies syntax logic, variables, conditionals, and object-oriented C# patterns.' }
];

const badges = [
  { img: 'images/badge-iot.jpg', issuer: 'Cisco Academy', color: 'text-moss-300', title: 'Introduction to IoT', desc: 'Digital transformation & connected device systems.', date: 'Issued Dec 06, 2025' },
  { img: 'images/badge-mos.jpg', issuer: 'Microsoft', color: 'text-rose-glow', title: 'Excel Associate 2019', desc: 'Formulas, tables, data modeling & workbooks.', date: 'Issued May 21, 2024' }
];

const seminars = [
  { img: 'images/seminar-kadakareer.jpg', tag: 'Career Webinar', date: 'Sept 16, 2026', title: 'KadaKareer Pace Level Up V.7.1', org: '', desc: 'Active participation in professional IT upskilling, mentorship, and career roadmap formulation.' },
  { img: 'images/seminar-ethical-hacking.jpg', tag: 'Tech & Ethics', date: 'Feb 2, 2024', title: 'Ethical Hacking: Juggling Technology and Morality', org: 'JPSSITE - LCUP', desc: 'Explored ethical dimensions of cybersecurity, vulnerability disclosure, and IT responsibilities.' }
];

const contacts = [
  { icon: 'fa-phone', label: 'Contact Number', text: '09761770306', href: 'tel:09761770306' },
  { icon: 'fa-graduation-cap', label: 'Educational Email', text: 'zofiaelisse.tan@email.lcup.edu.ph', href: 'mailto:zofiaelisse.tan@email.lcup.edu.ph' },
  { icon: 'fa-envelope', label: 'Personal Email', text: 'zeftan0130@gmail.com', href: 'mailto:zeftan0130@gmail.com' },
  { icon: 'fa-location-dot', label: 'Location & University', text: 'Malolos Bulacan, Philippines (LCUP)' }
];

const $ = (id) => document.getElementById(id);

$('education').innerHTML = education.map((e, index) => `
  <div class="relative pl-6 group">
    <div class="education-marker absolute -left-[19px] top-1 w-3.5 h-3.5 rounded-full ${e.dot} border-2 border-twilight group-hover:scale-125 transition" style="--education-delay: ${index * 450}ms"></div>
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
  $('detail-skills-list').innerHTML = c.skills.map(([name, desc, level], index) => `
    <div class="skill-detail-item p-4 rounded-2xl bg-twilight/90 border border-twilight-border hover:border-rose-glow/40 transition flex flex-col justify-between" style="--skill-delay: ${index * 110}ms">
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

document.querySelectorAll('.flower-bloom').forEach(flower => {
  flower.addEventListener('click', () => {
    flower.classList.remove('is-blooming');
    void flower.offsetWidth;
    flower.classList.add('is-blooming');
  });
  flower.addEventListener('animationend', () => flower.classList.remove('is-blooming'));
});

const cornerVine = `<svg viewBox="0 0 140 140" fill="none" class="absolute top-0 left-0 w-28 h-28 z-20 pointer-events-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"><path d="M-4 12 C18 6, 44 14, 52 35 C58 52, 42 70, 36 88 C30 106, 40 120, 48 138" stroke="#3e5c38" stroke-width="3" stroke-linecap="round"/><path d="M22 20 Q34 6 50 14 Q38 30 22 20 Z" fill="#2e522b" stroke="#5f9964"/><path d="M50 34 Q68 28 66 46 Q48 52 50 34 Z" fill="#43723d" stroke="#7ec279"/><path d="M38 60 Q20 54 26 72 Q44 74 38 60 Z" fill="#2d4a2b" stroke="#5a8c56"/><path d="M34 88 Q48 80 54 96 Q38 106 34 88 Z" fill="#3f6b39" stroke="#71ad6a"/><circle cx="22" cy="20" r="2.5" fill="#ff7eb3"/></svg>`;

$('project-grid').innerHTML = projects.map((p, i) => `
  <article class="arch-card bg-twilight-card border border-twilight-border overflow-hidden flex flex-col group cursor-pointer" data-project="${i}" tabindex="0" role="button" aria-label="Preview ${p.title}">
    <div class="h-48 relative overflow-hidden bg-zinc-900 border-b border-twilight-border">
      <img src="${p.img}" alt="${p.title} preview" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
      <div class="absolute inset-0 bg-gradient-to-t from-twilight-card via-transparent to-transparent opacity-70"></div>
      <div class="absolute inset-1.5 border border-moss-500/30 rounded-t-[3.8rem] pointer-events-none"></div>
      ${cornerVine}
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

const certificateGrid = $('cert-grid');
certificateGrid.innerHTML = `
  <div class="certificate-gallery">
    <div class="certificate-gallery-frame">
      <div id="certificate-viewport" class="certificate-viewport" role="region" aria-label="Certification gallery. Scroll vertically or use the arrow keys to browse." tabindex="0">
        ${certs.map((c, index) => `
          <article class="certificate-slide bg-gradient-to-b from-[#18131d] to-twilight-card border border-twilight-border rounded-3xl">
            <div class="certificate-artwork">
              <button type="button" data-image-preview class="cursor-zoom-in" aria-label="View ${c.title} certificate full size">
                <img src="${c.img}" alt="${c.title} certificate">
              </button>
            </div>
            <div class="certificate-information">
              <span class="text-[10px] font-semibold ${c.color} uppercase tracking-wider">${c.issuer}</span>
              <h4 class="font-fairytale text-xl text-white font-bold mt-2">${c.title}</h4>
              <p class="text-parchment-muted text-sm mt-3 leading-relaxed">${c.desc}</p>
              <span class="certificate-exhibit-label">CERTIFICATION EXHIBIT ${String(index + 1).padStart(2, '0')}</span>
            </div>
          </article>`).join('')}
      </div>
      <div class="certificate-navigation">
        <button type="button" id="certificate-previous" class="certificate-arrow" aria-label="Previous certificate">
          <i class="fa-solid fa-arrow-up" aria-hidden="true"></i>
        </button>
        <span id="certificate-position" class="certificate-position" aria-live="polite" aria-atomic="true"></span>
        <button type="button" id="certificate-next" class="certificate-arrow" aria-label="Next certificate">
          <i class="fa-solid fa-arrow-down" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <p class="certificate-gallery-hint"><i class="fa-solid fa-arrows-up-down" aria-hidden="true"></i> Scroll or use the arrows to explore</p>
  </div>`;

const certificateViewport = $('certificate-viewport');
const certificateSlides = certificateViewport.querySelectorAll('.certificate-slide');
const certificatePrevious = $('certificate-previous');
const certificateNext = $('certificate-next');
const certificatePosition = $('certificate-position');
function updateCertificateNavigation() {
  const index = Math.min(certificateSlides.length - 1, Math.round(certificateViewport.scrollTop / certificateViewport.clientHeight));
  certificatePosition.textContent = `${String(index + 1).padStart(2, '0')} / ${String(certificateSlides.length).padStart(2, '0')}`;
  certificatePrevious.disabled = index === 0;
  certificateNext.disabled = index === certificateSlides.length - 1;
}
function moveCertificate(direction) {
  const currentIndex = Math.round(certificateViewport.scrollTop / certificateViewport.clientHeight);
  const nextIndex = Math.max(0, Math.min(certificateSlides.length - 1, currentIndex + direction));
  certificateViewport.scrollTo({
    top: nextIndex * certificateViewport.clientHeight,
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
  });
}
certificatePrevious.addEventListener('click', () => moveCertificate(-1));
certificateNext.addEventListener('click', () => moveCertificate(1));
certificateViewport.addEventListener('scroll', updateCertificateNavigation);
certificateViewport.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
    e.preventDefault();
    moveCertificate(e.key === 'ArrowDown' ? 1 : -1);
  }
});
updateCertificateNavigation();

$('badge-list').innerHTML = badges.map((b, index) => `
  <div class="achievement-float p-4 rounded-2xl bg-twilight border border-twilight-border flex items-center gap-4 group hover:border-rose-glow/50 transition" style="--achievement-delay: ${(index + certs.length) * 350}ms">
    <button type="button" data-image-preview class="w-16 h-16 rounded-xl shrink-0 overflow-hidden" aria-label="View ${b.title} badge full size">
      <img src="${b.img}" alt="${b.title} badge" class="w-full h-full rounded-xl object-cover bg-black border border-twilight-border">
    </button>
    <div><span class="text-[10px] ${b.color} font-semibold uppercase tracking-wider">${b.issuer}</span>
    <h4 class="font-fairytale text-xs text-white font-bold mt-0.5">${b.title}</h4>
    <p class="text-[11px] text-parchment-muted mt-1">${b.desc}</p><span class="text-[10px] text-zinc-500">${b.date}</span></div>
  </div>`).join('');

$('seminar-list').innerHTML = seminars.map((s, index) => `
  <div class="achievement-float p-4 rounded-2xl bg-twilight border border-twilight-border flex flex-col sm:flex-row items-center gap-4 hover:border-rose-glow/40 transition" style="--achievement-delay: ${(index + certs.length + badges.length) * 350}ms">
    <button type="button" data-image-preview class="w-full sm:w-28 h-20 rounded-xl shrink-0 overflow-hidden" aria-label="View ${s.title} image full size">
      <img src="${s.img}" alt="${s.title} certificate" class="w-full h-full rounded-xl object-cover bg-black border border-zinc-800">
    </button>
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

const modal = $('project-modal');
const imageModal = $('image-modal');
const imageModalImg = $('image-modal-img');
let imagePreviewTrigger = null;
let previousBodyOverflow = '';
function openImagePreview(trigger) {
  const image = trigger.querySelector('img');
  if (!image) return;

  imagePreviewTrigger = trigger;
  previousBodyOverflow = document.body.style.overflow;
  imageModalImg.src = image.src;
  imageModalImg.alt = image.alt;
  $('image-modal-title').textContent = image.alt;
  imageModal.classList.replace('hidden', 'flex');
  document.body.style.overflow = 'hidden';
  $('image-modal-close').focus();
}
function closeImagePreview() {
  if (imageModal.classList.contains('hidden')) return;

  imageModal.classList.replace('flex', 'hidden');
  imageModalImg.removeAttribute('src');
  imageModalImg.alt = '';
  document.body.style.overflow = previousBodyOverflow;
  if (imagePreviewTrigger) imagePreviewTrigger.focus();
  imagePreviewTrigger = null;
}
document.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-image-preview]');
  if (trigger) openImagePreview(trigger);
});
imageModal.addEventListener('click', (e) => { if (e.target === imageModal) closeImagePreview(); });
$('image-modal-close').addEventListener('click', closeImagePreview);
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
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (!imageModal.classList.contains('hidden')) closeImagePreview();
    else closeProject();
  }
});

const themeToggle = $('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
function setTheme(isLight) {
  document.body.classList.toggle('light-mode', isLight);
  themeToggle.setAttribute('aria-pressed', String(isLight));
  themeToggle.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} mode`);
  themeToggle.title = `Switch to ${isLight ? 'dark' : 'light'} mode`;
  themeIcon.classList.toggle('fa-sun', !isLight);
  themeIcon.classList.toggle('fa-moon', isLight);
}
setTheme(localStorage.getItem('portfolio-theme') === 'light');
themeToggle.addEventListener('click', () => {
  const isLight = !document.body.classList.contains('light-mode');
  localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
  setTheme(isLight);
});

const menu = $('mobile-menu'), menuBtn = $('menu-btn');
menuBtn.addEventListener('click', () => {
  const open = menu.classList.toggle('hidden') === false;
  menuBtn.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { menu.classList.add('hidden'); menuBtn.setAttribute('aria-expanded', false); }));

$('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const body = `${$('f-message').value}\n\nFrom: ${$('f-name').value} (${$('f-email').value})`;
  window.location.href = `mailto:zeftan0130@gmail.com?subject=${encodeURIComponent($('f-subject').value)}&body=${encodeURIComponent(body)}`;
});

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

const vineSVG = `
<svg viewBox="0 0 160 800" fill="none" class="w-full h-auto">
  <path d="M 20 0 Q 60 180 30 350 T 70 650 Q 40 750 20 800" stroke="transparent" stroke-width="28" stroke-linecap="round"/>
  <path d="M 20 0 Q 60 180 30 350 T 70 650 Q 40 750 20 800" stroke="#2a452a" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M 20 0 Q 60 180 30 350 T 70 650 Q 40 750 20 800" stroke="#4e7b51" stroke-width="2" stroke-dasharray="12 4" stroke-linecap="round"/>
  <g fill="#365e38" stroke="#5f9964" stroke-width="1.2">
    <path d="M35 80 C65 60, 85 90, 75 110 C65 125, 40 115, 35 80 Z"/>
    <path d="M25 180 C0 160, -10 200, 10 215 C25 220, 30 195, 25 180 Z"/>
    <path d="M42 280 C80 260, 95 300, 75 320 C55 335, 40 305, 42 280 Z"/>
    <path d="M30 410 C-5 400, 0 450, 20 460 C40 465, 45 430, 30 410 Z"/>
    <path d="M55 520 C95 500, 110 550, 85 570 C65 580, 50 550, 55 520 Z"/>
    <path d="M48 640 C15 630, 20 685, 45 690 C70 690, 65 655, 48 640 Z"/>
  </g>
  <circle cx="75" cy="110" r="5" fill="#ff7eb3"/><circle cx="10" cy="215" r="4.5" fill="#ffd1e3"/>
  <circle cx="75" cy="320" r="6" fill="#c93774"/><circle cx="85" cy="570" r="5.5" fill="#ff7eb3"/>
</svg>`;

const canDrag = matchMedia('(min-width: 768px) and (pointer: fine)').matches;

function createVine(side) {
  const flip = side === 'right', sx = flip ? -1 : 1;
  const el = document.createElement('div');
  el.className = `vine vine-${side}`;
  el.innerHTML = vineSVG;
  document.body.appendChild(el);

  const set = (tx, ty, visualRot) =>
    el.style.transform = `translate(${tx}px, ${ty}px) scaleX(${sx}) rotate(${visualRot * sx}deg)`;
  set(0, 0, 0);
  if (!canDrag) return;

  let drag = null;
  addEventListener('mousemove', (e) => {
    if (drag) return;
    const range = 280;
    const dist = flip ? e.clientX - (innerWidth - range) : range - e.clientX;
    const f = Math.max(0, Math.min(1, dist / range));
    set((flip ? -1 : 1) * f * 14, 0, (flip ? -1 : 1) * f * 8);
  });
  el.addEventListener('pointerdown', (e) => {
    drag = { x: e.clientX, y: e.clientY };
    el.setPointerCapture(e.pointerId);
    el.classList.add('dragging');
    e.preventDefault();
  });
  el.addEventListener('pointermove', (e) => {
    if (!drag) return;
    const dx = Math.max(-160, Math.min(160, e.clientX - drag.x));
    const dy = Math.max(-120, Math.min(120, e.clientY - drag.y));
    set(dx, dy, dx * 0.1);
  });
  const release = () => { if (!drag) return; drag = null; el.classList.remove('dragging'); set(0, 0, 0); };
  el.addEventListener('pointerup', release);
  el.addEventListener('pointercancel', release);
}
createVine('left');
createVine('right');

const revealTargets = document.querySelectorAll(
  'main > section:not(#home), footer, #education > div, #skill-tabs > button, #project-grid > article, #cert-grid > div, #badge-list > div, #seminar-list > div, #contact-list > div'
);

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });

  revealTargets.forEach((target, index) => {
    target.classList.add('scroll-reveal');
    target.style.setProperty('--reveal-delay', `${(index % 4) * 80}ms`);
    revealObserver.observe(target);
  });
} else {
  revealTargets.forEach(target => target.classList.add('is-visible'));
}