import Swiper, { Navigation, Scrollbar } from 'swiper';

Swiper.use([Navigation, Scrollbar]);

const swiperProduct = new Swiper('.product-slider', {
  loop: true,
  slidesPerView: '5',
  spaceBetween: 20,
  scrollbar: {
    el: '.product-slider__scroll',
    draggable: true,
  },
  navigation: {
    nextEl: '.slider-btn-next',
    prevEl: '.slider-btn-prev'
  }
});
