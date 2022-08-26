const cartClose = document?.querySelector('.cart-content__close');
const basket = document?.querySelectorAll('.basket');
const cartOverlay = document?.querySelector('.cart-overlay');
const cartContent = document?.querySelector('.cart-content');
const body = document?.querySelector('.page__body');
const headerMain = document?.querySelector('.header-main');
const hero = document?.querySelector('.hero');
const cartIcon = document?.querySelectorAll('.cart-icon');
const cartProdictList = document?.querySelector('.cart-content__list');
const addCart = document?.querySelector('.card-info__cart');
const basketQuantity = document?.querySelectorAll('.basket__quantity');
const fullPrice = document?.querySelector('.cart-content__fullprice');
const btnsAddCart = document?.querySelectorAll('.product-slider__to-cart');
let totalPrice = 0;

const randomId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const priceWithoutSpaces = (str) => {
  return str.replace(/\s/g, '');
};

const normalPrice = (str) => {
  return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

const plusFullPrice = (currentPrice) => {
  return totalPrice += currentPrice;
}

const minusFullPrice = (currentPrice) => {
  return totalPrice -= currentPrice;
}

const printFullPrice = () => {
  fullPrice.textContent = `${totalPrice}`;
}

const printQuantity = () => {
  let length = cartProdictList.children.length;
  basketQuantity.forEach(elem => {
    elem.textContent = length;
  });
  if (length > 0) {
    basket.forEach(elem => {
      elem.classList.add('basket--active');
    });
    document.querySelector('.cart-empty').classList.add('cart-content__empty--hide');
  } else {
    basket.forEach(elem => {
      elem.classList.remove('basket--active');
    });
    document.querySelector('.cart-empty').classList.remove('cart-content__empty--hide');
  }
}

const generateCartProduct = (img, title, price, id, nameColor, size) => {
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
                <span>${nameColor}</span>
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.3371 1.16917L10.168 10.3383L0.998797 1.16917" stroke="#BE9364" stroke-linecap="round" />
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
            <button class="cart-product__delete btn-reset" aria-label="Remove from cart">
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
              <button class="stepper__btn stepper__btn--minus btn-reset" aria-label="minus">-</button>
              <input class="stepper__input input-reset" type="text" min="1" max="999" value="1">
              <button class="stepper__btn stepper__btn--plus btn-reset" aria-label="plus">+</button>
            </div>
            <span class="cart-product__price card-info__price">${price}</span>
          </div>
        </div>
      </article>
    </li>

  `
}

const generateProduct = (img, title, price, id, color = 'Gold', size = "10'' * 30''") => {
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
                <span>${color}</span>
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.3371 1.16917L10.168 10.3383L0.998797 1.16917" stroke="#BE9364" stroke-linecap="round" />
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
            <button class="cart-product__delete btn-reset" aria-label="Remove from cart">
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
              <button class="stepper__btn stepper__btn--minus btn-reset" aria-label="minus">-</button>
              <input class="stepper__input input-reset" type="text" min="1" max="999" value="1">
              <button class="stepper__btn stepper__btn--plus btn-reset" aria-label="plus">+</button>
            </div>
            <span class="cart-product__price card-info__price">${price}</span>
          </div>
        </div>
      </article>
    </li>

  `
}

document.querySelector('.card__container')?.setAttribute('data-id', randomId());

const deleteProducts = (productParent) => {
  let id = productParent.querySelector('.cart-product').dataset.id;
  let currentPrice = productParent?.querySelector('.card-info__price').textContent;
  minusFullPrice(currentPrice);
  printFullPrice();
  productParent.remove();
  printQuantity();
}

addCart?.addEventListener('click', (e) => {
  let self = e.currentTarget;
  let parent = self.closest('.card__container');
  let id = parent?.dataset.id;
  let img = parent?.querySelector('.card-slider__thumb picture img').getAttribute('src');
  let title = parent?.querySelector('.card-info__title').textContent;
  let price = +parent?.querySelector('.card-info__price').textContent;
  let selectorColor = parent?.querySelector('.card-info__color--active');
  let nameColor = selectorColor?.dataset.name;
  let selectSize = parent?.querySelectorAll('.card-info__label');
  let size = null;
  let indexRadio = null;

  if (selectorColor == null) {
    alert("Choose a color, please");
    return;
  }
  let checkedSize = [];

  selectSize.forEach((elem, i) => {
    checkedSize.push(elem.querySelector('.card-info__radio').checked);
    checkedSize.forEach((el, index) => {
      if (el == true) {
        indexRadio = index;
      }
    })
    size = selectSize[indexRadio]?.textContent;
  });

  if (size == undefined) {
    alert("Choose a size, please");
    return;
  }

  const pathImage = (img) => {
    let index = img.indexOf('.');
    return img.substring(0, index);
  }

  plusFullPrice(price);
  console.log(totalPrice)
  printFullPrice();
  cartProdictList.insertAdjacentHTML('afterbegin', generateCartProduct(pathImage(img), title, price, id, nameColor, size))
  printQuantity();
});

btnsAddCart.forEach(elem => {
  elem.closest('.product-slider__card')?.setAttribute('data-id', randomId());
  elem?.addEventListener('click', (e) => {
    let self = e.currentTarget;
    let parent = self.closest('.product-slider__card');
    let id = parent?.dataset.id;
    let img = parent?.querySelector('.product-slider__image picture img').getAttribute('src');
    let title = parent?.querySelector('.product-slider__title').textContent;
    let price = +parent?.querySelector('.product-slider__newprice').textContent;
    let color = 'Gold';
    let size = "10'' * 30''";

    const pathImage = (img) => {
      let index = img.indexOf('.');
      return img.substring(0, index);
    }

    plusFullPrice(price);
    console.log(totalPrice)
    printFullPrice();
    cartProdictList.insertAdjacentHTML('afterbegin', generateCartProduct(pathImage(img), title, price, id, color, size))
    printQuantity();
  });
});

cartProdictList.addEventListener('click', (e) => {
  if (e.target.classList.contains('cart-product__delete')) {
    deleteProducts(e.target.closest('.cart-content__item'));
  }

  if (e.target === document.querySelector('.cart-product__delete svg')) {
    deleteProducts(e.target.closest('.cart-content__item'));
  }
});

const calcScroll = () => {
  let div = document.createElement('div');

  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';

  document.body.appendChild(div);

  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();

  return scrollWidth;
}

const scroll = calcScroll();

basket.forEach(elem => {
  elem?.addEventListener('click', (e) => {
    e.preventDefault();
    cartOverlay.classList.add('cart-overlay--visible');
    body.classList.add('stop-scroll');
    body.style.marginRight = `${scroll}px`;

    if (headerMain) {
      headerMain.style.position = 'relative';
    }

    if (hero) {
      hero.style.top = '-80px'
    }
  });
});

cartClose?.addEventListener('click', (e) => {
  cartOverlay.classList.remove('cart-overlay--visible');
  body.classList.remove('stop-scroll');
  body.style.marginRight = `0px`;
  if (headerMain) {
    headerMain.style.position = 'absolute';
  }

  if (hero) {
    hero.style.top = '0px';
  }
});

cartOverlay?.addEventListener('click', (e) => {
  if (e.target === document.querySelector('.cart-overlay--visible')) {
    cartOverlay.classList.remove('cart-overlay--visible');
    body.classList.remove('stop-scroll');
    body.style.marginRight = `0px`;
    if (headerMain) {
      headerMain.style.position = 'absolute';
    }

    if (hero) {
      hero.style.top = '0px';
    }
  }
});

cartIcon.forEach(elem => {
  elem?.addEventListener('click', (e) => {
    body.classList.remove('stop-scroll');
    body.style.marginRight = `0px`;
    cartOverlay.classList.remove('cart-overlay--visible');
  });
});




