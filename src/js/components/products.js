
document.addEventListener('DOMContentLoaded', () => {


  if (document.location.pathname == '/splendor-store/catalog.html') {
    const productsList = document?.querySelector('.catalog-product__list');
    const btnMore = document?.querySelector('.catalog-product__btn-more');
    let countProducts = 10;
    let dataLength = '';

    if (window.innerWidth <= 924) {
      const fetchComments = (count = 10) => {
        fetch('products.json')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          dataLength = data.length;
          productsList.innerHTML = '';

          for (let i = 0; i < data.length; i++) {
            if (i < count) {
              productsList.innerHTML += `
              <li class="catalog-product__item ${data[i].selector ? data[i].selector : ""}">
                <a class="catalog-product__link" href="card-product.html">
                  <div class="catalog-product__image">
                    <picture>
                      <source srcset="img/${data[i].image}.avif" type="image/avif">
                      <source srcset="img/${data[i].image}.webp" type="image/webp">
                      <img loading="lazy" src="img/${data[i].image}.png" class="image" width="236" height="367" alt="${data[i].title}">
                    </picture>
                  </div>
                  <div class="catalog-product__content">
                    <div class="catalog-product__group">
                      <h4 class="catalog-product__title">${data[i].title}</h4>
                      <span class="catalog-product__price">${data[i].price}</span>
                    </div>
                    <div class="catalog-product__custom product-custom">
                      <div class="product-custom__top">
                        <span class="catalog-product__size">${data[i].size}</span>
                      </div>
                      <div class="product-custom__bottom">
                        <button class="product-custom__cart btn-reset">
                          <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M13.9918 15.8223L12.9625 4.63274C12.9344 4.32716 12.6721 4.0931 12.3578 4.0931H10.2352V3.15859C10.2352 1.41694 8.78378 0 6.99972 0C5.21578 0 3.7645 1.41694 3.7645 3.15859V4.0931H1.64045C1.3262 4.0931 1.06385 4.32716 1.03575 4.63274L0.00242897 15.8664C-0.0127944 16.0321 0.0440327 16.1964 0.159066 16.3192C0.274093 16.442 0.436725 16.512 0.607125 16.512H13.3912C13.3917 16.512 13.3923 16.512 13.3929 16.512C13.7282 16.512 14 16.2466 14 15.9193C13.9999 15.8863 13.9972 15.8539 13.9918 15.8223ZM4.97874 3.15859C4.97874 2.07053 5.88536 1.18533 6.99984 1.18533C8.11437 1.18533 9.02105 2.07053 9.02105 3.15859V4.0931H4.97874V3.15859ZM1.27124 15.3267L2.19552 5.27842H3.7645V6.33824C3.7645 6.6656 4.03625 6.93092 4.3716 6.93092C4.707 6.93092 4.97874 6.6656 4.97874 6.33824V5.27842H9.02105V6.33824C9.02105 6.6656 9.29279 6.93092 9.62819 6.93092C9.96359 6.93092 10.2353 6.6656 10.2353 6.33824V5.27842H11.8029L12.7271 15.3267H1.27124Z"
                              fill="white" />
                          </svg>
                        </button>
                        <button class="product-custom__favorites btn-reset">
                          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M13.6613 3.21782C13.4441 2.64284 13.1309 2.12179 12.7392 1.68385C12.3472 1.2446 11.8851 0.895536 11.3779 0.655638C10.852 0.405891 10.288 0.278056 9.71847 0.279554C8.91954 0.279554 8.14005 0.529659 7.46266 1.00208C7.3006 1.11509 7.14665 1.23922 7.0008 1.37446C6.85495 1.23922 6.701 1.11509 6.53894 1.00208C5.86155 0.529659 5.08206 0.279554 4.28313 0.279554C3.70783 0.279554 3.15036 0.405533 2.62368 0.655638C2.11483 0.89648 1.65621 1.24292 1.26241 1.68385C0.870233 2.12129 0.556949 2.64247 0.340317 3.21782C0.115059 3.81622 0 4.45168 0 5.10565C0 5.72258 0.110198 6.36544 0.328973 7.01942C0.512096 7.56595 0.774626 8.13285 1.11008 8.70531C1.64162 9.61125 2.37249 10.5561 3.28 11.5139C4.78388 13.1016 6.27317 14.1984 6.33637 14.2428L6.72045 14.5244C6.8906 14.6485 7.10938 14.6485 7.27954 14.5244L7.66361 14.2428C7.72681 14.1965 9.21448 13.1016 10.72 11.5139C11.6275 10.5561 12.3584 9.61125 12.8899 8.70531C13.2254 8.13285 13.4895 7.56595 13.671 7.01942C13.8898 6.36544 14 5.72258 14 5.10565C14.0016 4.45168 13.8865 3.81622 13.6613 3.21782ZM7.0008 13.059C7.0008 13.059 1.23162 8.83314 1.23162 5.10565C1.23162 3.21782 2.59775 1.68755 4.28313 1.68755C5.46776 1.68755 6.49519 2.44342 7.0008 3.54759C7.50641 2.44342 8.53385 1.68755 9.71847 1.68755C11.4039 1.68755 12.77 3.21782 12.77 5.10565C12.77 8.83314 7.0008 13.059 7.0008 13.059Z"
                              fill="#272727" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div class="catalog-product__mobile-content mobile-content">
                      <p class="mobile-content__descr">Id congue tellus neque fermentum mi leo loremId congue tellus neque fermentum mi leo lorem</p>
                      <div class="mobile-content__buttons">
                        <button class="mobile-content__basket btn-reset">
                          Add to basket
                        </button>
                        <button class="mobile-content__favorites btn-reset">
                          <svg class="">
                            <use xlink:href="img/sprite.svg#favorites"></use>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              `
            }
          }
        });
      }

      fetchComments(countProducts);

      btnMore?.addEventListener('click', () => {
        countProducts = countProducts + 4;

        fetchComments(countProducts);

        if (countProducts >= dataLength) {
          btnMore.style.display = 'none';
        } else {
          btnMore.style.display = 'block';
        }
      });
    }
  }

});
