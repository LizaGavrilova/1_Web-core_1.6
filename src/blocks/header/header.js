const menuButton = document.querySelector('.header__burger');
const callBackButton = document.querySelector('.header__call');
const feedBackButton = document.querySelector('.header__chat');

export const menu = document.querySelector('.menu');
export const callBack = document.querySelector('.callback');
export const feedBack = document.querySelector('.feedback');

export const blurArea = document.querySelector('.blur-area');
const bodyScroll = document.querySelector('body');

const allTabsElements = document.querySelectorAll(
  'button, a, input, textarea, span, .swiper-pagination-bullet'
);

const callbackTabsElements = document.querySelectorAll(
  '.callback__form-input, .callback__text-link, .callback__button-send, .callback__button'
);

const feedbackTabsElements = document.querySelectorAll(
  '.feedback__form-input, .feedback__form-message, .feedback__text-link, .feedback__button-send, .feedback__button'
);

const menuTabsElements = document.querySelectorAll(
  '.menu__list-item-link, .menu__header-button-close, .menu__header-button-group, .menu__header-button-search, .menu__button, .menu__contacts-mail, .menu__contacts-number, .menu__language-button'
);

const noTabs = () => {
  for (let i = 0; i < allTabsElements.length; i++) {
    allTabsElements[i].setAttribute('tabindex', '-1');
  }
};

export const returnTabs = () => {
  for (let i = 0; i < allTabsElements.length; i++) {
    allTabsElements[i].setAttribute('tabindex', '0');
  }
};

const addTabsPopup = (popup) => {
  for (let i = 0; i < popup.length; i++) {
    popup[i].setAttribute('tabindex', '0');
  }
};

const blurContent = () => {
  blurArea.classList.add('blur');
  bodyScroll.classList.add('no-scroll');
};

export const closeBlur = () => {
  blurArea.classList.remove('blur');
  bodyScroll.classList.remove('no-scroll');
};

const openMenu = function () {
  menu.classList.add('menu--open');
  blurContent();
  noTabs();
  addTabsPopup(menuTabsElements);
};

export const openCallBack = function () {
  callBack.classList.add('callback--open');
  blurContent();
  noTabs();
  addTabsPopup(callbackTabsElements);
};

export const openFeedBack = function () {
  feedBack.classList.add('feedback--open');
  blurContent();
  noTabs();
  addTabsPopup(feedbackTabsElements);
};

menuButton.addEventListener('click', openMenu);
callBackButton.addEventListener('click', openCallBack);
feedBackButton.addEventListener('click', openFeedBack);
