window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelectorAll('nav a');

  if (toggle) {
    toggle.addEventListener('click', () => {
      header.classList.toggle('open');
    });
  }

  navLinks.forEach(a => a.addEventListener('click', () => {
    header.classList.remove('open');
  }));
});
