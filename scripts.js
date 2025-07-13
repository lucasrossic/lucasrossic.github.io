window.addEventListener('scroll', function () {
  const wrapper = document.querySelector('.topnav-wrapper');

  if (window.scrollY > 50) {
    wrapper.classList.add('scrolled');
  } else {
    wrapper.classList.remove('scrolled');
  }
});


const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});