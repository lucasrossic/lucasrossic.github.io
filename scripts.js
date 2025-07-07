// Oculta la top-bar y hace que la navbar suba suavemente al hacer scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  const topBar = document.querySelector('.top-bar');

  const hasScrolled = window.scrollY > 50;

  topBar.classList.toggle('hidden', hasScrolled);
  navbar.classList.toggle('scrolled', hasScrolled);
});