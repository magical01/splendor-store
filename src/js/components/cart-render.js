import vars from '../_vars';


document.addEventListener('DOMContentLoaded', () => {

  // const cartPageList = document?.querySelector('.cart-page__list');
  // const cartContentList = document?.querySelector('.cart-content__list');
  let images = document?.querySelectorAll('.cart-product__image picture img')
  let title = document?.querySelectorAll('.cart-product__title');
  let color = document?.querySelectorAll('.cart-product__color span')
  let price = document?.querySelectorAll('.cart-product__price')
  let count = document?.querySelectorAll('.stepper__input')

  const renderCart = (img, title, color, price, count) => {
    return `
    <li class="order__item">
      <button class="order__delete cart-page__delete btn-reset">
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.7">
            <path d="M1.00218 0.728165L18.4712 17.4984" stroke="#272727" />
            <path d="M17.5859 0.501587L0.99854 17.4984" stroke="#272727" />
          </g>
        </svg>
      </button>
      <div class="order__image cart-page__image">
        <picture>
          <source srcset="${img}.avif" type="image/avif">
          <source srcset="${img}.webp" type="image/webp">
          <img loading="lazy" src="${img}.png" class="order__picture" width="" height="" alt="">
        </picture>
      </div>
      <div class="order__description order-text cart-page__description cart-text">
        <h5 class="order-text__title cart-text__title">${title}</h5>
        <p class="order-text__descr cart-text__title">Id congue tellus neque fermentum mi leo lorem</p>
      </div>
      <span style="background-color: ${color}" class="order__color choice-color__item choice-color__item--orange cart-page__color"></span>
      <span class="order__price card-info__price cart-page__price">${price}</span>
      <div class="cart-page__stepper stepper">
        <button class="stepper__btn stepper__btn--minus btn-reset" aria-label="minus">-</button>
        <input class="stepper__input input-reset" type="text" min="1" max="999" maxlength="3" value="${count}">
        <button class="stepper__btn stepper__btn--plus btn-reset" aria-label="plus">+</button>
      </div>
      <span class="cart-page__total card-info__price">300</span>
    </li>
      `
  }

  Array.from(vars.cartProdictList.children).forEach((elem, i) => {

    const pathImage = (img) => {
      let index = img.indexOf('.');
      return img.substring(0, index)
    }

    vars.cartPageList?.insertAdjacentHTML('afterbegin', renderCart(pathImage(images[i].getAttribute('src')), title[i].textContent, color[i].dataset.color, price[i].textContent, count[i].value))
  });



});



