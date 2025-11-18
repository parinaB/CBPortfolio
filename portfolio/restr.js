// restraining.js
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const name = decodeURIComponent(params.get('name') || "My Beloved Stalker");

  document.getElementById('stalkerName').textContent = name;
  document.getElementById('stalkerName2').textContent = name;
});

