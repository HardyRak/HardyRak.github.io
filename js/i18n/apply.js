let currentLang = 'fr';

function toggleLang() {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  applyTranslations();
}

function applyTranslations() {
  const t = translations[currentLang];
  const set = (id, text) => { const el = document.getElementById(id); if(el) el.textContent = text; };
  const setHTML = (id, val) => { const el = document.getElementById(id); if(el) el.innerHTML = val; };
  const setAttr = (id, attr, val) => { const el = document.getElementById(id); if(el) el[attr] = val; };

  set('langBtn', t.lang_btn);
  const navLinks = document.querySelectorAll('.nav-links a');
  const navKeys = ['nav_home','nav_about','nav_skills','nav_projects','nav_experience','nav_certs','nav_contact'];
  navLinks.forEach((link, i) => { if(navKeys[i]) link.textContent = t[navKeys[i]]; });

  set('hero-tag', t.hero_tag); set('hero-title', t.hero_title); set('hero-desc', t.hero_desc);
  set('hero-cta1', t.hero_cta1); set('hero-cta2', t.hero_cta2); set('hero-cv', t.hero_cv);
  const stats = document.querySelectorAll('.stat-label');
  ['stat1','stat2','stat3','stat4','stat5'].forEach((k,i) => { if(stats[i]) stats[i].textContent = t[k]; });

  set('about-label', t.about_label); set('about-title', t.about_title);
  setHTML('about-p1', t.about_p1); setHTML('about-p2', t.about_p2); setHTML('about-p3', t.about_p3);
  set('about-card1-title', t.about_card1_title); set('about-card1-desc', t.about_card1_desc);
  set('about-card2-title', t.about_card2_title); set('about-card2-desc', t.about_card2_desc);
  set('about-card3-title', t.about_card3_title); set('about-card3-desc', t.about_card3_desc);

  set('skills-label', t.skills_label); set('skills-title', t.skills_title);
  set('projects-label', t.projects_label); set('projects-title', t.projects_title);
  set('qolee-badge', t.qolee_badge);
  set('qolee-company', t.qolee_company);
  set('qolee-desc', t.qolee_desc);
  set('proj1-desc', t.proj1_desc); set('proj2-desc', t.proj2_desc); set('proj3-desc', t.proj3_desc);
  document.querySelectorAll('.project-link').forEach(l => l.textContent = t.proj_link);

  set('exp-label', t.exp_label); set('exp-title', t.exp_title);
  set('exp1-title', t.exp1_title); set('exp1-date', t.exp1_date);
  setHTML('exp1-b1', t.exp1_b1); setHTML('exp1-b2', t.exp1_b2);
  setHTML('exp1-b3', t.exp1_b3); setHTML('exp1-b4', t.exp1_b4);
  set('exp2-title', t.exp2_title); set('exp2-date', t.exp2_date);
  setHTML('exp2-b1', t.exp2_b1); setHTML('exp2-b2', t.exp2_b2); setHTML('exp2-b3', t.exp2_b3);

  set('cert-label', t.cert_label); set('cert-title', t.cert_title);
  document.querySelectorAll('.cert-link').forEach(l => l.textContent = t.cert_verify);

  set('contact-label', t.contact_label); setHTML('contact-title', t.contact_title);
  set('contact-desc', t.contact_desc);
  set('form-name', t.form_name); set('form-email-label', t.form_email);
  set('form-subject-label', t.form_subject);
  setAttr('form-subject-input', 'placeholder', t.form_subject_ph);
  set('form-message-label', t.form_message);
  setAttr('form-message-input', 'placeholder', t.form_message_ph);
  const sendBtn = document.getElementById('form-send-btn');
  if(sendBtn) { const sp = sendBtn.querySelector('span'); if(sp) sp.textContent = t.form_send; }
  set('footer-text', t.footer);

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const themeBtn = document.getElementById('themeBtn');
  if(themeBtn) themeBtn.innerHTML = isDark
    ? '<span><img class="ui-icon" src="assets/icons/sun.svg" alt="" aria-hidden="true"></span> ' + t.theme_light
    : '<span><img class="ui-icon" src="assets/icons/moon.svg" alt="" aria-hidden="true"></span> ' + t.theme_dark;
}

window.addEventListener('load', function() {
  const langBtn = document.getElementById('langBtn');
  if(langBtn) langBtn.onclick = toggleLang;
});
