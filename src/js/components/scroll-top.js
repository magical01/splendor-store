const scrollUp = document.querySelector('.footer__scroll-top');

scrollUp.addEventListener('click', () => {

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
