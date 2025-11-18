// profiles.js — tiny fun effect
document.querySelectorAll('.profile-card-link').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transform = 'scale(1.08)';
  });
  link.addEventListener('mouseleave', () => {
    link.style.transform = 'scale(1)';
  });
});