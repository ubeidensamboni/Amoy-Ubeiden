document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.querySelector('.invitation-envelope');
  envelope.addEventListener('click', () => {
    envelope.classList.toggle('opened');
  });
});
