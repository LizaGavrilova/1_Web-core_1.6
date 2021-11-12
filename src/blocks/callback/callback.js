const callBackButton = document.querySelector('.callback__button');

import { callBack } from '../header/header';
import { closeBlur } from '../header/header';
import { returnTabs } from '../header/header';
import { blurArea } from '../header/header';

const closeCallBack = function () {
  callBack.classList.remove('callback--open');
  closeBlur();
  returnTabs();
};

callBackButton.addEventListener('click', closeCallBack);
blurArea.addEventListener('click', closeCallBack);
