// contact.js — handles the contact form
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = this.elements.name.value.trim() || "Anonymous Professional";

  alert(`Thank you, ${name}!\n\nYour message has been sent to Chandler Bing (a.k.a Parina Bhardwaj).\n\nHe will definitely not panic and will reply within 3–5 business days.\n\nCould he BE any more professional?`);

  this.reset();
});