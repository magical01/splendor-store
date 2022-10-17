import * as newCartModule from "./../functions/new-cart.js";

const cartClose = document?.querySelectorAll(".cart-content__close");
const basket = document?.querySelectorAll(".basket");
const cartOverlay = document?.querySelector(".cart-overlay");
const body = document?.querySelector(".page__body");
const headerMain = document?.querySelector(".header-main");
const hero = document?.querySelector(".hero");
const cartProdictList = document?.querySelector(".cart-content__list");
const addCart = document?.querySelector(".card-info__cart");
const basketQuantity = document?.querySelectorAll(".basket__quantity");
const fullPrice = document?.querySelector(".cart-content__fullprice");
const btnsAddCart = document?.querySelectorAll(".product-slider__to-cart");
let totalPrice = 0;
let randomId = 0;


// remove group of items from cart
window.removeCartItem = (id) => {
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
  renderCart();
};

// +1 or -1 to selected item in cart (stepper)
window.plusCartItem = (id, plusOne) => {
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
  renderCart();
};

// print full cart of the cost
const printFullPrice = () => {
  fullPrice.textContent = `${totalPrice}`;
};


const renderItemCount = () => {
  if (cartProdictList.children.length <= 2) {
    document.querySelector('.cart-content__count').style.display = 'none'
  } else {
    document.querySelector('.cart-content__count').style.display = 'block'
    document.querySelector('.cart-content__count').textContent = `+ ${cartProdictList.children.length - 2}`
  }
}

// cart component
const renderCart = () => {
  let html = "";
  // max count of items in cart
  let itemsCounter = 0;
  const itemsLimit = 10;
  // output
  // let listeners = [];
  let uniqueItems = newCartModule.getGrouppedItems();
  for (let item of uniqueItems) {
    if (itemsCounter >= itemsLimit) break;
    // add item
    html += generateCartProduct(
      item.icon,
      item.title,
      item.cost,
      item.id,
      item.color,
      item.size,
      item?.dataset?.dataColor || "#BE9364",
      item.itemCount
    );

    itemsCounter++;
  }
  cartProdictList.innerHTML = html;
  renderItemCount();
  countSumm();
  printQuantity();
  printFullPrice();
};

// quantity component
const printQuantity = () => {
  let length = newCartModule.getItems().length;
  basketQuantity.forEach((elem) => {
    elem.textContent = length;
  });
  if (length > 0) {
    basket.forEach((elem) => {
      elem.classList.add("basket--active");
    });
    document.querySelector(".cart-content__main").classList.remove("cart-content__main--hide");
    document.querySelector(".cart-empty").classList.add("cart-content__empty--hide");
  } else {
    basket.forEach((elem) => {
      elem.classList.remove("basket--active");
    });
    document.querySelector(".cart-content__main").classList.add("cart-content__main--hide");
    document.querySelector(".cart-empty").classList.remove("cart-content__empty--hide");
  }
};

// product component
const generateCartProduct = (img, title, price, id, nameColor, size, dataColor, count) => {
  return `

    <li class="cart-content__item">
      <article class="cart-content__product cart-product" data-id="${id}">
        <div class="cart-product__image">
          <picture>
            <source srcset="${img}.avif" type="image/avif">
            <source srcset="${img}.webp" type="image/webp">
            <img loading="lazy" src="${img}.png" class="cart-product__picture" width="84" height="160" alt="">
          </picture>
        </div>
        <div class="cart-product__text">
          <div class="cart-product__top">
            <h4 class="cart-product__title">${title}</h4>
            <div class="cart-product__select custom-select">
              <div class="cart-product__color cart-product__color--gold custom-select__top">
                <span style="color: ${dataColor}" data-color="${dataColor}">${nameColor}</span>
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.3371 1.16917L10.168 10.3383L0.998797 1.16917" stroke="${dataColor}" stroke-linecap="round" />
                </svg>
              </div>
              <div class="custom-select__dropdown">
                <ul class="custom-select__list list-reset">
                  <li class="custom-select__item custom-select__item--black" data-color="#272727">Black</li>
                  <li class="custom-select__item custom-select__item--gold" data-color="#BE9364">Gold</li>
                  <li class="custom-select__item custom-select__item--grey" data-color="#D2E2D7">Grey</li>
                </ul>
              </div>
            </div>
            <button class="cart-product__delete btn-reset" aria-label="Remove from cart" onclick="removeCartItem('${id}')">
              Delete
              <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.7">
                  <path d="M1.00218 0.728165L18.4712 17.4984" stroke="#272727" />
                  <path d="M17.5859 0.501587L0.99854 17.4984" stroke="#272727" />
                </g>
              </svg>
            </button>
          </div>
          <span class="cart-product__size">${size}</span>
          <div class="cart-product__bottom">
            <div class="cart-product__stepper stepper">
              <button class="stepper__btn stepper__btn--minus btn-reset" aria-label="minus" onclick="plusCartItem('${id}', false);">-</button>
              <input class="stepper__input input-reset" type="text" min="1" max="99" maxlength="2" value="${count}">
              <button class="stepper__btn stepper__btn--plus btn-reset" aria-label="plus" onclick="plusCartItem('${id}', true);">+</button>
            </div>
            <span class="cart-product__price card-info__price">${price}</span>
          </div>
        </div>
      </article>
    </li>

  `;
};


document.querySelector(".card__container")?.setAttribute("data-id", randomId++);

const countSumm = () => {
  totalPrice = newCartModule.calculateCartPrice();
};

const initialState = () => {
  renderCart();
};

initialState();


// add item to cart (card-product.html)
addCart?.addEventListener("click", (e) => {
  let self = e.currentTarget;
  let parent = self.closest(".card__container");
  let img = parent?.querySelector(".card-slider__thumb picture img").getAttribute("src");
  img = img.split(".");
  img.pop();
  img = img.join(".");

  let selectorColor = parent?.querySelector(".card-info__color--active");
  if (selectorColor == null) {
    document?.querySelector(".card-color").classList.add("card-color--active");

    document?.querySelector(".card-color__close")?.addEventListener("click", (e) => {
        if (e.target.closest(".card-color__close")) {
          document?.querySelector(".card-color").classList.remove("card-color--active");
        }
      });
    return;
  }

  // size selected ?
  let size = null;
  let indexRadio = null;
  let selectSize = parent?.querySelectorAll(".card-info__label");
  let checkedSize = [];
  selectSize.forEach((elem, i) => {
    checkedSize.push(elem.querySelector(".card-info__radio").checked);
    checkedSize.forEach((el, index) => {
      if (el == true) {
        indexRadio = index;
      }
    });
    size = selectSize[indexRadio]?.textContent;
  });
  if (size == undefined) {
    document?.querySelector(".card-size").classList.add("card-size--active");

    document?.querySelector(".card-size__close")?.addEventListener("click", (e) => {
        if (e.target.closest(".card-size__close")) {
          document?.querySelector(".card-size").classList.remove("card-size--active");
        }
      });
    return;
  }

  const datasetColorOptions = ["#272727", "#BE9364", "#D2E2D7"];
  const colorNameOptions = ["Black", "Gold", "Grey"];
  const selectedColorName = selectorColor.dataset.name;
  const selectedColorCode = datasetColorOptions[colorNameOptions.indexOf(selectedColorName)] || "#272727";

  // add product to cart
  let product = newCartModule.createItem({
    id: Math.trunc(Math.random() * 9999999999),
    icon: img,
    size: size.trim(),
    sizeOptions: ["10'' * 30''", "20'' * 50''"],
    color: selectorColor.dataset.name,
    colorOptions: colorNameOptions,
    dataset: {
      dataColor: selectedColorCode,
      dataColorOptions: datasetColorOptions,
    },
  });
  newCartModule.addItem(product);

  renderCart();

});

//
btnsAddCart.forEach((elem) => {
  elem?.addEventListener("click", (e) => {
    const parent = elem.closest(".product-slider__card");
    // set id
    let id = Math.trunc(Math.random() * 999);
    parent.setAttribute("data-id", id);
    let img = parent?.querySelector(".product-slider__image picture img").getAttribute("src");
    img = img.split(".");
    img.pop();
    img = img.join(".");
    let title = parent?.querySelector(".product-slider__title").textContent.trim();
    let price = +parent?.querySelector(".product-slider__newprice").textContent;
    // add product to cart
    let product = newCartModule.createItem({
      id: id,
      title: title,
      cost: price,
      icon: img,
      size: "10'' * 30''",
      sizeOptions: ["10'' * 30''", "20'' * 50''"],
      color: "Black",
      colorOptions: ["Black", "Gold", "Grey"],
      dataset: {
        dataColor: "#272727",
        dataColorOptions: ["#272727", "#BE9364", "#D2E2D7"],
      },
    });
    newCartModule.addItem(product);
    renderCart();
  });


});

const calcScroll = () => {
  let div = document.createElement("div");

  div.style.width = "50px";
  div.style.height = "50px";
  div.style.overflowY = "scroll";
  div.style.visibility = "hidden";

  document.body.appendChild(div);

  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();

  return scrollWidth;
};

const scroll = calcScroll();

basket.forEach((elem) => {
  elem?.addEventListener("click", (e) => {
    e.preventDefault();
    cartOverlay.classList.add("cart-overlay--visible");
    body.classList.add("stop-scroll");
    body.style.marginRight = `${scroll}px`;

    if (headerMain) {
      headerMain.style.position = "relative";
    }

    if (hero) {
      hero.style.top = "-80px";
    }
  });
});

cartClose.forEach((elem) => {
  elem?.addEventListener("click", (e) => {
    cartOverlay.classList.remove("cart-overlay--visible");
    body.classList.remove("stop-scroll");
    body.style.marginRight = `0px`;
    if (headerMain) {
      headerMain.style.position = "absolute";
    }

    if (hero) {
      hero.style.top = "0px";
    }
  });
});

cartOverlay?.addEventListener("click", (e) => {
  if (e.target === document.querySelector(".cart-overlay--visible")) {
    cartOverlay.classList.remove("cart-overlay--visible");
    body.classList.remove("stop-scroll");
    body.style.marginRight = `0px`;
    if (headerMain) {
      headerMain.style.position = "absolute";
    }

    if (hero) {
      hero.style.top = "0px";
    }
  }
});

