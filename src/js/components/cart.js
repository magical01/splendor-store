const addCart = document?.querySelector('.card-info__cart');
const favoritesToCart = document?.querySelectorAll('.order__to-cart')
const cartList = document?.querySelector('.cart-page__list');
const basket = document?.querySelectorAll('.basket');
const basketQuantity = document?.querySelectorAll('.basket__quantity');
const cartProductTotal = document?.querySelector('.cart-page__total');
const cartAmountTotal = document?.querySelector('.cart-amount__total');
const radioBtns = document?.querySelector('.card-info__radiobuttons');
let price = 0;


const randomId = () => {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const priceWithoutSpaces = (str) => {
	return str.replace(/\s/g, '');
};

const normalPrice = (str) => {
	return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

const generateCartProduct = (img, title, descr, price, id, color) => {
  return `
    <li class="order__item" data-id="${id}">
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
      <p class="order-text__descr cart-text__title">${descr}</p>
    </div>
    <span class="order__color choice-color__item choice-color__item--orange cart-page__color">${color}</span>
    <span class="order__price card-info__price cart-page__price">${price}</span>
    <div class="cart-page__stepper stepper">
      <button class="stepper__btn stepper__btn--minus btn-reset" aria-label="minus">-</button>
      <input class="stepper__input input-reset" type="text" min="1" max="999" maxlength="3" value="1">
      <button class="stepper__btn stepper__btn--plus btn-reset" aria-label="plus">+</button>
    </div>
    <span class="cart-page__total card-info__price">300</span>
  </li>
  `
}

const plusFullPrice = (currentPrice) => {
  return price += currentPrice;
}

const minusFullPrice = (currentPrice) => {
  return price -= currentPrice;
}

// const printFullPrice = () => {
//   cartAmountTotal.textContent = price;
// }

const printQuantity = () => {
  let length = cartList?.children.length;
  basketQuantity.textContent = length;
  length > 0 ? basket.classList.add('basket--active') : basket.classList.remove('basket--active')
}

addCart?.closest('.card__container').setAttribute('data-id', randomId());
addCart?.addEventListener('click', (e) => {
  let self = e.currentTarget;
  let parent = self.closest('.card__container');
  let id = parent.dataset.id;
  let img = parent.querySelector('.card-slider__thumb picture img').getAttribute('src');
  let title = parent.querySelector('.card-info__title').textContent;
  let price = parent.querySelector('.card-info__price').textContent;
  let descr = parent.querySelector('.card-info__descr').textContent;
  let color = parent.querySelector('.card-info__color--active');

  if (!color) {
    alert("Выберите, пожалуйста, цвет лампы :)")
  } else {
    color = color.dataset.color
  }

  const pathImage = (img) => {
    let index = img.indexOf('.');
    return img.substring(0, index);
  }

  plusFullPrice(price);
  console.log(color)
  // printFullPrice();
  cartList?.insertAdjacentHTML('afterbegin', generateCartProduct(pathImage(img), title, descr, price, id, color));
  printQuantity();

});


