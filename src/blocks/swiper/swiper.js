import { tablet } from '../brands/brands';

var swiper = undefined;

if (tablet.matches === false) {
  swiper = new Swiper('.mySwiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
  });
}

window.addEventListener('resize', function () {
  if (tablet.matches === false) {
    swiper = new Swiper('.mySwiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 'auto',
      spaceBetween: 16,
    });
  } else if (tablet.matches && swiper != undefined) {
    swiper.destroy();
  }
});
