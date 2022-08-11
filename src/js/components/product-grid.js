const column = document?.querySelector('.catalog-product__column');
const row = document?.querySelector('.catalog-product__row');

column?.addEventListener('click', (e) => {
  document.querySelector('.catalog-product__list').classList.remove('product-row');
});

row?.addEventListener('click', (e) => {
  document.querySelector('.catalog-product__list').classList.add('product-row');
});
