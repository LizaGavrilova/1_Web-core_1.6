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

typesShowMoreButton.addEventListener('click', function () {
  if (typesShowMoreButton.classList.contains('expand')) {
    typesShowMoreButton.textContent = 'Скрыть';

    typesShowMoreButton.classList.remove('expand');
    typesShowMoreButton.classList.add('hide');
    for (let i = 0; i < allTypes.length; i++) {
      allTypes[i].classList.remove('hidden');
    }
  } else if (typesShowMoreButton.classList.contains('hide')) {
    typesShowMoreButton.textContent = 'Показать все';

    typesShowMoreButton.classList.remove('hide');
    typesShowMoreButton.classList.add('expand');
    if (desktop.matches) {
      for (let i = visibleItemsDesktop; i < allTypes.length; i++) {
        allTypes[i].classList.add('hidden');
      }
    } else if (tablet.matches) {
      for (let i = visibleItemsTablet; i < allTypes.length; i++) {
        allTypes[i].classList.add('hidden');
      }
    }
  }
});
