const closeButton = document.querySelector('.menu__header-button-close');
const menuCallBack = document.querySelector('#menu__callback-button');
const menuFeedBack = document.querySelector('#menu__feedback-button');

import { menu } from '../header/header';
import { openCallBack } from '../header/header';
import { openFeedBack } from '../header/header';
import { closeBlur } from '../header/header';
import { returnTabs } from '../header/header';
import { blurArea } from '../header/header';

const closeMenu = function () {
  menu.classList.remove('menu--open');
  closeBlur();
  returnTabs();
};

closeButton.addEventListener('click', closeMenu);

menuCallBack.addEventListener('click', () => {
  closeMenu();
  openCallBack();
});

menuFeedBack.addEventListener('click', () => {
  closeMenu();
  openFeedBack();
});

blurArea.addEventListener('click', closeMenu);

const menuNavigation = document.querySelectorAll('.menu__list-item');

for (let i = 0; i < menuNavigation.length; i++) {
  menuNavigation[i].addEventListener('click', function () {
    // for (let i = 0; menuNavigation.length; i++) {
    //   menuNavigation[i].classList.remove('active-link');
    // }
    menu.querySelector('.active-link').classList.remove('active-link');
    menuNavigation[i].classList.add('active-link');
  });
}

const menuLanguage = document.querySelectorAll('.menu__language-button');

for (let i = 0; i < menuLanguage.length; i++) {
  menuLanguage[i].addEventListener('click', function () {
    menu.querySelector('.active-language').classList.remove('active-language');
    menuLanguage[i].classList.add('active-language');
  });
}
