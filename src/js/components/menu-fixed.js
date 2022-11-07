const menuFixed = document?.querySelector('.menu-fixed');
const height = 600;
const heightCart = 900;

window?.addEventListener('scroll', (e) => {
  let scrollDistance = window.scrollY;


  if (scrollDistance >= height) {
    menuFixed?.classList.add('menu-fixed--active')
  } else {
    menuFixed?.classList.remove('menu-fixed--active')
  }
});
