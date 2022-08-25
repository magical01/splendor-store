import Swiper, { Navigation, Scrollbar } from 'swiper';

Swiper.use([Navigation, Scrollbar]);

const swiperCart = new Swiper('.cart-slider', {
  loop: true,
  slidesPerView: '4',
  spaceBetween: 18,
  scrollbar: {
    el: '.cart-slider__scroll',
    draggable: true,
  },
  navigation: {
    nextEl: '.cart-btn-next',
    prevEl: '.cart-btn-prev'
  }
});
