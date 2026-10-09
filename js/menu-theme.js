
// Theme toggle
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  const burger = document.getElementById('navBurger');
  const open = links.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
  burger.innerHTML = open ? "<span class=\"ui-icon\" style=\"--icon:url('assets/icons/x.svg')\" aria-hidden=\"true\"></span>" : "<span class=\"ui-icon\" style=\"--icon:url('assets/icons/menu.svg')\" aria-hidden=\"true\"></span>";
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
    
    btn.innerHTML = "<span id=\"themeIcon\"><span class=\"ui-icon\" style=\"--icon:url('assets/icons/moon.svg')\" aria-hidden=\"true\"></span></span> Mode sombre";
  } else {
    html.setAttribute('data-theme', 'dark');
    
    btn.innerHTML = "<span id=\"themeIcon\"><span class=\"ui-icon\" style=\"--icon:url('assets/icons/sun.svg')\" aria-hidden=\"true\"></span></span> Mode clair";
  }
}
