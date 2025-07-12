window.addEventListener('scroll', function () {
  const wrapper = document.querySelector('.topnav-wrapper');

  if (window.scrollY > 50) {
    wrapper.classList.add('scrolled');
  } else {
    wrapper.classList.remove('scrolled');
  }
});