import Swiper, { Navigation, Scrollbar } from 'swiper';

Swiper.use([Navigation, Scrollbar]);

const swiperProduct = new Swiper('.product-slider', {
  loop: true,
  slidesPerView: '5',
  spaceBetween: 30,
  scrollbar: {
    el: '.product-slider__scroll',
    draggable: true,
  },
  navigation: {
    nextEl: '.slider-btn-next',
    prevEl: '.slider-btn-prev'
  },
  breakpoints: {
    // when window width is >= 320px
    // 320: {
    //   slidesPerView: 2,
    //   spaceBetween: 20
    // },
    // // when window width is >= 480px
    // 480: {
    //   slidesPerView: 3,
    //   spaceBetween: 30
    // },
    // when window width is >= 640px
    318: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    430: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1500: {
      slidesPerView: 5,
      spaceBetween: 30
    }
  }

});
