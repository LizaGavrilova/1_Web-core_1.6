const tablet = window.matchMedia('(min-width: 768px)');

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
