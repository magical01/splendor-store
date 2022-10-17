import Swiper, { Navigation, Scrollbar } from 'swiper';

Swiper.use([Navigation, Scrollbar]);


const mySlider = new Swiper('.slider-block', {
  slidesPerView: 1,
});

const sliderItems = document.querySelectorAll('.card-slider__thumb');

sliderItems.forEach((elem, index) => {
  elem.setAttribute('data-index', index);

  elem.addEventListener('click', (e) => {
    const index = parseInt(e.currentTarget.dataset.index);

    mySlider.slideTo(index);
  });
});


