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
