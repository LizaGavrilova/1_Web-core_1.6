const feedBackButton = document.querySelector('.feedback__button');

import { feedBack } from '../header/header';
import { closeBlur } from '../header/header';
import { returnTabs } from '../header/header';
import { blurArea } from '../header/header';

const closeFeedBack = function () {
  feedBack.classList.remove('feedback--open');
  closeBlur();
  returnTabs();
};

feedBackButton.addEventListener('click', closeFeedBack);
blurArea.addEventListener('click', closeFeedBack);
