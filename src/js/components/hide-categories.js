import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';


const filters = document?.querySelectorAll('.choice-categories__item');
const view = document?.querySelector('.choice-view');
const color = document?.querySelectorAll('.choice-color__item');
const style = document?.querySelectorAll('.choice-style__item');
const input = document?.querySelectorAll('.choice-size__input');
const filtersIcon = document?.querySelector('.catalog-product__filters');
const filtersClose = document?.querySelector('.filtes-mobile__close');
const filtersLeft = document.querySelector('.filters__left');

filtersIcon?.addEventListener('click', () => {
  filtersLeft?.classList.add('filters__left--open');
  disableScroll();
});

filtersClose?.addEventListener('click', () => {
  filtersLeft?.classList.remove('filters__left--open');
  enableScroll();
});



filters.forEach(elem => {
  elem?.addEventListener('click', (e) => {
    elem.children[1].classList.toggle('choice-categories__icon--active')
  });
});

view?.addEventListener('click', (e) => {
  if (e.target == document.querySelector('.choice-view__title')) {
    document.querySelector('.choice-view__title').classList.toggle('choice-view__title--active')
    document.querySelector('.choice-view__btn').classList.toggle('choice-view__btn--active');
  }
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

input.forEach(elem => {
  elem?.addEventListener('focusin', (e) => {
    if (e.currentTarget.closest('.choice-size__item')) {
      let target = e.currentTarget.closest('.choice-size__item');
      target.classList.add('choice-size__item--active');
    }
  });

  elem?.addEventListener('focusout', (e) => {
    if (e.currentTarget.closest('.choice-size__item')) {
      let target = e.currentTarget.closest('.choice-size__item');
      target.classList.remove('choice-size__item--active');
    }
  });
});
