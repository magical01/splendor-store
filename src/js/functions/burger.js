import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

(function(){
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');
  const logo = document?.querySelector('.header__logo');
  const heroCatalogTitle = document?.querySelector('.hero-catalog__title');
  const crumbsList = document?.querySelector('.hero-catalog__breadcrumbs-list');
  const blur = document?.querySelector('.overlay');
  const confirmGroup = document?.querySelectorAll('.confirm__group');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('menu--active');
    blur?.classList.toggle('overlay--active');
    logo?.classList.toggle('hide');
    heroCatalogTitle?.classList.toggle('hide');
    crumbsList?.classList.toggle('hide');
    confirmGroup?.forEach(elem => {
      elem?.classList.toggle('hide');
    });

    if (menu?.classList.contains('menu--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      disableScroll();
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      enableScroll();
    }
  });

  blur?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--active');
    blur?.classList.remove('overlay--active');
    logo?.classList.remove('hide')
    heroCatalogTitle?.classList.remove('hide');
    crumbsList?.classList.remove('hide');
    confirmGroup?.forEach(elem => {
      elem?.classList.remove('hide');
    });
    enableScroll();
  });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('menu--active');
      blur?.classList.remove('overlay--active');
      logo?.classList.remove('hide');
      heroCatalogTitle?.classList.remove('hide');
      crumbsList?.classList.remove('hide');
      confirmGroup?.forEach(elem => {
        elem?.classList.remove('hide');
      });
      enableScroll();
    });
  });
})();
