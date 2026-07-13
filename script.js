/* ==========================================================================
   Md. Sabbir Chowdury — Portfolio
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  hideLoader();
  runTypingEffect();
  renderProjects();
  setupScrollspy();
  setupRevealOnScroll();
  setupFooterStatusBar();
});

/* ---------------------------------- */
/* Loader                              */
/* ---------------------------------- */

function hideLoader() {
  const loader = document.querySelector('.loader');
  if (!loader) return;
  const inner = loader.querySelector('div');
  if (inner) inner.textContent = '$ portfolio --ready';
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('loader-hidden'), 400);
  });
  // fallback in case 'load' already fired
  setTimeout(() => loader.classList.add('loader-hidden'), 1500);
}

/* ---------------------------------- */
/* Typing effect                       */
/* ---------------------------------- */

function runTypingEffect() {
  const el = document.getElementById('typing');
  if (!el) return;

  const roles = [
    'Full Stack Developer',
    'Problem Solver',
    'Open Source Enthusiast',
    'C++ & Python Programmer'
  ];

  const cursor = document.createElement('span');
  cursor.className = 'cursor';

  const textNode = document.createElement('span');
  el.appendChild(textNode);
  el.appendChild(cursor);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    textNode.textContent = roles[0];
    return;
  }

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const TYPE_SPEED = 70;
  const DELETE_SPEED = 40;
  const HOLD_TIME = 1400;

  function tick() {
    const current = roles[roleIndex];

    if (!deleting) {
      charIndex++;
      textNode.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, HOLD_TIME);
        return;
      }
      setTimeout(tick, TYPE_SPEED);
    } else {
      charIndex--;
      textNode.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
      setTimeout(tick, DELETE_SPEED);
    }
  }

  setTimeout(tick, 500);
}

/* ---------------------------------- */
/* Projects                            */
/* ---------------------------------- */
/* Replace this data with your real projects — name, description, tags,
   and links. Set "live" or "code" to null to hide that link. */

const projects = [
  {
    name: 'ecommerce-platform.app',
    description: 'A full-featured online store with cart, checkout, and an admin dashboard for managing inventory and orders.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    live: '#',
    code: 'https://github.com/scsabbir'
  },
  {
    name: 'task-manager.app',
    description: 'A collaborative task management tool with JWT authentication, boards, and real-time status updates.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    live: '#',
    code: 'https://github.com/scsabbir'
  },
  {
    name: 'weather-dashboard.py',
    description: 'A weather forecast dashboard powered by a Flask API, with a clean vanilla JS frontend and 5-day outlook.',
    tags: ['Python', 'Flask', 'JavaScript', 'REST API'],
    live: '#',
    code: 'https://github.com/scsabbir'
  },
  {
    name: 'library-system.cpp',
    description: 'A console-based library management system with file-based storage for book records, checkouts, and returns.',
    tags: ['C++', 'DSA', 'File I/O'],
    live: null,
    code: 'https://github.com/scsabbir'
  }
];

function renderProjects() {
  const container = document.getElementById('project-container');
  if (!container) return;

  container.innerHTML = projects.map(project => `
    <article class="project-card reveal">
      <h3 class="file-name">${escapeHTML(project.name)}</h3>
      <p class="desc">${escapeHTML(project.description)}</p>
      <div class="tags">
        ${project.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join('')}
      </div>
      <div class="links">
        ${project.live ? `<a href="${project.live}" target="_blank" rel="noopener">Live</a>` : ''}
        ${project.code ? `<a href="${project.code}" target="_blank" rel="noopener">Code</a>` : ''}
      </div>
    </article>
  `).join('');

  // newly injected cards need to be observed for the reveal animation
  document.querySelectorAll('#project-container .reveal').forEach(el => revealObserver.observe(el));
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* ---------------------------------- */
/* Scrollspy — highlights active tab   */
/* ---------------------------------- */

function setupScrollspy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a');

  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active-tab', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  sections.forEach(section => spy.observe(section));
}

/* ---------------------------------- */
/* Reveal on scroll                    */
/* ---------------------------------- */

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

function setupRevealOnScroll() {
  const targets = document.querySelectorAll(
    '.about-card, #skills .card, #contact .card, .stats > div'
  );
  targets.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
}

/* ---------------------------------- */
/* Footer status bar                   */
/* ---------------------------------- */

function setupFooterStatusBar() {
  const footer = document.querySelector('footer');
  if (!footer) return;

  const branch = document.createElement('p');
  branch.className = 'status-item';
  branch.textContent = 'main';
  footer.prepend(branch);

  const clock = document.createElement('p');
  clock.className = 'clock-item';
  footer.appendChild(clock);

  function updateClock() {
    const time = new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Dhaka'
    }).format(new Date());
    clock.textContent = `${time} GMT+6`;
  }

  updateClock();
  setInterval(updateClock, 30000);
}