const column = document?.querySelector('.catalog-product__column');
const row = document?.querySelector('.catalog-product__row');

column?.addEventListener('click', (e) => {
  document.querySelector('.catalog-product__list').classList.remove('product-row');
  column.classList.add('catalog-product__column--active');
  row.classList.remove('catalog-product__row--active');
});

row?.addEventListener('click', (e) => {
  document.querySelector('.catalog-product__list').classList.add('product-row');
  column.classList.remove('catalog-product__column--active');
  row.classList.add('catalog-product__row--active');
});
