import Swiper, { Navigation, Scrollbar } from 'swiper';

Swiper.use([Navigation, Scrollbar]);


const mySlider = new Swiper('.slider-block', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.slider-block__navigation'
  }
});

const sliderItems = document.querySelectorAll('.card-slider__thumb');

sliderItems.forEach((elem, index) => {
  elem.setAttribute('data-index', index);

  elem.addEventListener('click', (e) => {
    const index = parseInt(e.currentTarget.dataset.index);

    mySlider.slideTo(index);
  });
});


