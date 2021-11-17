const allTypes = document.querySelector('.types__content').querySelectorAll('.types__list-item');
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

//Измененеие ширины экрана
window.addEventListener('resize', function () {
  if (desktop.matches) {
    if (typesShowMoreButton.textContent == 'Показать все') {
      for (let i = 0; i < allTypes.length; i++) {
        allTypes[i].classList.remove('hidden');
      }
      for (let i = visibleItemsDesktop; i < allTypes.length; i++) {
        allTypes[i].classList.add('hidden');
      }
    } else if (desktop.matches && typesShowMoreButton.textContent == 'Скрыть') {
      for (let i = 0; i < allTypes.length; i++) {
        allTypes[i].classList.remove('hidden');
      }
    }
  } else if (tablet.matches) {
    if (typesShowMoreButton.textContent == 'Показать все') {
      for (let i = visibleItemsTablet; i < allTypes.length; i++) {
        allTypes[i].classList.add('hidden');
      }
    } else if (typesShowMoreButton.textContent == 'Скрыть') {
      for (let i = 0; i < allTypes.length; i++) {
        allTypes[i].classList.remove('hidden');
      }
    }
  }
});

typesShowMoreButton.addEventListener('click', function () {
  if (typesShowMoreButton.textContent == 'Показать все') {
    typesShowMoreButton.textContent = 'Скрыть';
    typesShowMoreButton.classList.toggle('brands__hidden-more');
    for (let i = 0; i < allTypes.length; i++) {
      allTypes[i].classList.remove('hidden');
    }
  } else if (typesShowMoreButton.textContent == 'Скрыть') {
    typesShowMoreButton.textContent = 'Показать все';
    typesShowMoreButton.classList.toggle('brands__hidden-more');
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
