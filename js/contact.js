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