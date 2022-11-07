const header = document.querySelector('.header');
const headerOffset = header.offsetHeight;
const offset = 1000;
const section = document.querySelector('section');

window.addEventListener('scroll', (e) => {
  let scrollDistance = window.scrollY;

  if (scrollDistance >= offset) {
    header.classList.add('header--fixed');
    section.style.marginTop = `${headerOffset}px`;
  } else {
    header.classList.remove('header--fixed');
    section.style.marginTop = null;
  }
});
