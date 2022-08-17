// const cardSliderThumbs = document?.querySelector('.card-slider__thumbs');
// const sliderImg = document?.querySelector('.card-slider__main picture img');
// const sliderImgAvif = document?.querySelector('.card-slider__main picture source');

// cardSliderThumbs?.addEventListener('click', (e) => {
//   if (e.target.classList.contains('card-slider__thumb')) {
//     let src = e.target.querySelector('picture img').getAttribute('src');

//     function changeSrc(src) {
//       dot = src.indexOf('.')
//       return src.substring(0, dot) + '.avif';
//     }

//     sliderImg.setAttribute('src', src);
//     sliderImgAvif.setAttribute('srcset', changeSrc(src));
//   }
// });

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


