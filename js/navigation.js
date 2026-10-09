
// Theme toggle
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  const burger = document.getElementById('navBurger');
  const open = links.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
  burger.innerHTML = open ? "<svg class=\"ui-icon\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><use href=\"#icon-x\"></use></svg>" : "<svg class=\"ui-icon\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><use href=\"#icon-menu\"></use></svg>";
}
// Ferme le menu quand on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => {
  const links = document.querySelector('.nav-links');
  if (links.classList.contains('open')) toggleMenu();
}));

function toggleTheme() {
  const html = document.documentElement;
  const btn = document.getElementById('themeBtn');
  const icon = document.getElementById('themeIcon');
  if (html.getAttribute('data-theme') === 'dark') {
    html.setAttribute('data-theme', 'light');
    
    btn.innerHTML = "<span id=\"themeIcon\"><svg class=\"ui-icon\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><use href=\"#icon-moon\"></use></svg></span> Mode sombre";
  } else {
    html.setAttribute('data-theme', 'dark');
    
    btn.innerHTML = "<span id=\"themeIcon\"><svg class=\"ui-icon\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><use href=\"#icon-sun\"></use></svg></span> Mode clair";
  }
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Animate skill bars
      const fills = entry.target.querySelectorAll('.skill-fill');
      fills.forEach(fill => fill.classList.add('animated'));
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Also animate skill bars when skills section is visible
const skillsSection = document.getElementById('skills');
if (skillsSection) {
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.skill-fill').forEach(fill => {
          fill.classList.add('animated');
        });
      }
    });
  }, { threshold: 0.2 });
  skillObserver.observe(skillsSection);
}

// EmailJS init
emailjs.init("amG3GlmGlvEj6X9gz");

// Contact form
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('form-send-btn');
  const msg = document.getElementById('formMsg');
  const form = e.target;

  const templateParams = {
    name: form.querySelector('input[type="text"]').value,
    email: form.querySelector('input[type="email"]').value,
    title: form.querySelectorAll('input[type="text"]')[1]?.value || 'Contact Portfolio',
    message: form.querySelector('textarea').value
  };

  btn.innerHTML = '<span>Envoi en cours...</span>';
  btn.disabled = true;
  msg.style.display = 'none';

  emailjs.send("service_i4k4w4j", "template_p3k0jd2", templateParams)
    .then(() => {
      btn.innerHTML = '<span>✓ Message envoyé !</span>';
      msg.style.display = 'block';
      msg.style.color = 'var(--teal)';
      msg.textContent = '// Merci ! Je vous répondrai dans les plus brefs délais.';
      form.reset();
      setTimeout(() => {
        btn.innerHTML = '<span>Envoyer le message</span> <span>→</span>';
        btn.disabled = false;
        msg.style.display = 'none';
      }, 5000);
    }, (error) => {
      btn.innerHTML = '<span>Envoyer le message</span> <span>→</span>';
      btn.disabled = false;
      msg.style.display = 'block';
      msg.style.color = 'var(--accent)';
      msg.textContent = '// Erreur : ' + (error.text || 'Veuillez réessayer.');
    });
}

// Active nav link on scroll
const sections = document.querySelectorAll('section[id], div[id], [id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) current = section.id;
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === '#' + current ? 'var(--teal)' : '';
  });
});
