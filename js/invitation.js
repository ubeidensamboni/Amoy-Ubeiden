document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.querySelector('.invitation-envelope');
  envelope.addEventListener('click', () => {
    envelope.classList.toggle('opened');
  });
});

function openMainSite() {
  const overlay = document.getElementById('invitation-overlay');
  if (overlay) {
    overlay.style.display = 'none';
  }
}
