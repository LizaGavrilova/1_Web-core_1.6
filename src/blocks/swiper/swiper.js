import { tablet } from '../brands/brands';

if (tablet.matches === false) {
  let swiper = new Swiper('.mySwiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
  });
}
