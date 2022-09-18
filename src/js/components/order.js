import * as newCartModule from "./../functions/new-cart.js";
const orderContainer = document?.querySelector("#orderList");
const totalAmountElement = document?.querySelector(
  "body > div > div > main > section > div > div > div.cart-page__amount.cart-amount > span"
);

let totalPrice = 0;

// cart component
const renderOrder = () => {
  let orderContainer = document.querySelector("#orderList");
  let html = "";
  // max count of items in cart
  let itemsCounter = 0;
  const itemsLimit = 2;
  // output
  let uniqueItems = newCartModule.getGrouppedItems();
  for (let item of uniqueItems) {
    if (itemsCounter >= itemsLimit) break;
    // add item
    html += generateOrderProduct(
      item.icon,
      item.title,
      item.cost,
      item.linkToCartItem,
      item.color,
      item.size,
      item?.dataset?.dataColor || "#BE9364",
      item.count,
      item.description
    );
    itemsCounter++;
  }
  // total amount
  totalAmountElement.innerHTML = newCartModule.calculateCartPrice();
  // orders
  orderContainer.innerHTML = html;
};

// product component
const generateOrderProduct = (
  img,
  title,
  price,
  id,
  nameColor,
  size,
  dataColor,
  count,
  description
) => {
  const priceTotal = price * count;
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
        <p class="order-text__descr cart-text__title">${description}</p>
      </div>
      <span class="order__color choice-color__item choice-color__item--orange cart-page__color"></span>
      <span class="order__price card-info__price cart-page__price">${price}</span>
      <div class="cart-page__stepper stepper">
        <button class="stepper__btn stepper__btn--minus btn-reset" aria-label="minus">-</button>
        <input class="stepper__input input-reset" type="text" min="1" max="999" maxlength="3" value="${count}">
        <button class="stepper__btn stepper__btn--plus btn-reset" aria-label="plus">+</button>
      </div>
      <span class="cart-page__total card-info__price">${priceTotal}</span>
    </li>

  `;
};

const initialState = () => {
  renderOrder();
};

initialState();
