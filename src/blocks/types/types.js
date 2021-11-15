const allTypes = document.querySelectorAll('.types__list-item');
const typesShowMoreButton = document.querySelector('.types__show-more');

import { desktop } from '../brands/brands';
import { tablet } from '../brands/brands';

let visibleItemsDesktop = 4;
let visibleItemsTablet = 3;

if (desktop.matches) {
  for (let i = visibleItemsDesktop; i < allTypes.length; i++) {
    allTypes[i].classList.add('hidden');
  }
} else if (tablet.matches) {
  for (let i = visibleItemsTablet; i < allTypes.length; i++) {
    allTypes[i].classList.add('hidden');
  }
}

let hiddensTypes = document.querySelectorAll('.types__list > .hidden');

const typesToggle = () => {
  hiddensTypes.forEach(function (item, i, hiddensTypes) {
    if (hiddensTypes[i].classList.contains('hidden')) {
      typesShowMoreButton.textContent = 'Скрыть';
    } else {
      typesShowMoreButton.textContent = 'Показать все';
    }
    hiddensTypes[i].classList.toggle('hidden');
  });
  typesShowMoreButton.classList.toggle('brands__hidden-more');
};

typesShowMoreButton.addEventListener('click', typesToggle);
