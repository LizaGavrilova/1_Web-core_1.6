/* eslint-disable prettier/prettier */
const mainNavigation = document.querySelectorAll('.main__navigation-link');
const main = document.querySelector('.main');

for (let i = 0; i < mainNavigation.length; i++) {
  mainNavigation[i].addEventListener('click', function () {
    main.querySelector('.main__navigation-link_active').classList.remove('main__navigation-link_active');
    mainNavigation[i].classList.add('main__navigation-link_active');
  });
}
