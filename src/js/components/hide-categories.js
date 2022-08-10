const filters = document?.querySelectorAll('.choice-categories__item');
const view = document?.querySelector('.choice-view__title');
const color = document?.querySelectorAll('.choice-color__item');
const style = document?.querySelectorAll('.choice-style__item');

filters.forEach(elem => {
  elem?.addEventListener('click', (e) => {
    elem.children[1].classList.toggle('choice-categories__btn--active')
  });
});

view?.addEventListener('click', () => {
  view.classList.toggle('choice-view__title--active');
});

color.forEach(elem => {
  elem?.addEventListener('click', () => {
    elem.classList.toggle('choice-color__item--active')
  });
});

style.forEach(elem => {
  elem?.addEventListener('click', () => {
    elem.classList.toggle('choice-style__item--active')
  });
});
