import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let swiper = null;

const initSwiper = () => {
  if (window.innerWidth < 1440 && !swiper) {
    swiper = new Swiper('.how-swiper', {
      modules: [Navigation, Pagination],

      slidesPerView: 1,
      spaceBetween: 16,
      loop: true,

      navigation: {
        nextEl: '.how-next',
        prevEl: '.how-prev',
      },

      pagination: {
        el: '.how-pagination',
        clickable: true,
      },
    });
  }

  if (window.innerWidth >= 1440 && swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
};

initSwiper();

window.addEventListener('resize', initSwiper);