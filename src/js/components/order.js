import * as newCartModule from "./../functions/new-cart.js";
const totalAmountElement = document?.querySelector(
  "body > div > div > main > section > div > div > div.cart-page__amount.cart-amount > span"
);

let totalPrice = 0;

// order.js
window.removeCartItemOrder = (id) => {
  id = Number(id);
  let grouppedItems = newCartModule.getGrouppedItems();
  // get all links to another objects of object with obj.id == id
  let links =
    grouppedItems[grouppedItems.map((item) => item.id).indexOf(id)]
      .linkToCartItem;
  // remove each element with id == link
  for (let link of links) {
    newCartModule.removeItem(link);
  }
  // re-render cart
  renderOrder();
};

// order.js
window.plusCartItemOrder = (id, plusOne) => {
  [id, plusOne] = [Number(id), Boolean(plusOne)];
  let itemCount = newCartModule.getCountOfItemWithId(id);
  // +1 to item (duplicate)
  if (plusOne) {
    if (itemCount >= 99) return;
    newCartModule.duplicateItem(id);
  }
  // -1 to item (remove)
  else {
    newCartModule.removeItem(id);
  }
  // re-render
  renderOrder();
};

// cart component (order.js)
const renderOrder = () => {
  // if (document.location.pathname != '/cart.html' && document.location.pathname != '/order.html') return;
  if (document.location.pathname != '/splendor-store/cart.html' && document.location.pathname != '/splendor-store/order.html') return;


  let orderContainer = document.querySelector("#orderList");
  let html = "";
  // max count of items in cart
  let itemsCounter = 0;
  // const itemsLimit = 2;
  // output
  let uniqueItems = newCartModule.getGrouppedItems();
  for (let item of uniqueItems) {
    // if (itemsCounter >= itemsLimit) break;
    // add item
    html += generateOrderProduct(item.icon, item.title, item.cost, item.id, item.color, item.size, item?.dataset?.dataColor || "#BE9364", item.itemCount, item.description);
    itemsCounter++;
  }
  // total amount
  totalAmountElement.innerHTML = newCartModule.calculateCartPrice();
  // orders
  orderContainer.innerHTML = html;
};

// product component
const generateOrderProduct = ( img, title, price, id, nameColor, size, dataColor, count, description) => {
  const priceTotal = price * count;
  const colorChoice = ["black", "orange", "gray"][
    ["Black", "Gold", "Grey"].indexOf(nameColor)
  ];
  return `

    <li class="order__item">
      <button class="order__delete cart-page__delete btn-reset" onclick="removeCartItemOrder('${id}');" aria-label="Delete product">
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
          <img loading="lazy" src="${img}.png" class="order__picture" width="" height="" alt="${title}">
        </picture>
      </div>
      <div class="order__wrapper cart-page__wrapper">
        <div class="order__description order-text cart-page__description cart-text">
        <h5 class="order-text__title cart-text__title">${title}</h5>
        <p class="order-text__descr cart-text__title">${description}</p>
        </div>
        <span class="order__color choice-color__item choice-color__item--${colorChoice} cart-page__color"></span>
        <span class="order__price card-info__price cart-page__price">${price}</span>
        <div class="order__delete-wrapper--mobile">
          <button class="order__delete cart-page__delete btn-reset" onclick="removeCartItemOrder('${id}');" aria-label="Delete product">
          Delete
          <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7">
              <path d="M1.00218 0.728165L18.4712 17.4984" stroke="#272727" />
              <path d="M17.5859 0.501587L0.99854 17.4984" stroke="#272727" />
            </g>
          </svg>
          </button>
        </div>
        <div class="cart-page__stepper stepper">
          <button class="stepper__btn stepper__btn--minus btn-reset" aria-label="minus" onclick="plusCartItemOrder('${id}', false);">-</button>
          <input class="stepper__input input-reset" type="text" min="1" max="999" maxlength="3" value="${count}">
          <button class="stepper__btn stepper__btn--plus btn-reset" aria-label="plus" onclick="plusCartItemOrder('${id}', true);">+</button>
        </div>
        <span class="cart-page__total card-info__price">${priceTotal}</span>

      </div>
    </li>

  `;
};

const initialState = () => {
  renderOrder();
};

initialState();
