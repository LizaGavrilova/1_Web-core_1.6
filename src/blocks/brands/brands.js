export const tablet = window.matchMedia('(min-width: 768px)');
export const desktop = window.matchMedia('(min-width: 1366px)');

const allBrands = document.querySelector('.brands__content').querySelectorAll('.brands__list-item');
const brandsShowMoreButton = document.querySelector('.brands__show-more');

let visibleItemsDesktop = 8;
let visibleItemsTablet = 6;

if (desktop.matches) {
  for (let i = visibleItemsDesktop; i < allBrands.length; i++) {
    allBrands[i].classList.add('hidden');
  }
} else if (tablet.matches) {
  for (let i = visibleItemsTablet; i < allBrands.length; i++) {
    allBrands[i].classList.add('hidden');
  }
}

//Измененеие ширины экрана
window.addEventListener('resize', function () {
  if (desktop.matches) {
    if (brandsShowMoreButton.textContent == 'Показать все') {
      for (let i = 0; i < allBrands.length; i++) {
        allBrands[i].classList.remove('hidden');
      }
      for (let i = visibleItemsDesktop; i < allBrands.length; i++) {
        allBrands[i].classList.add('hidden');
      }
    } else if (
      desktop.matches &&
      brandsShowMoreButton.textContent == 'Скрыть'
    ) {
      for (let i = 0; i < allBrands.length; i++) {
        allBrands[i].classList.remove('hidden');
      }
    }
  } else if (tablet.matches) {
    if (brandsShowMoreButton.textContent == 'Показать все') {
      for (let i = visibleItemsTablet; i < allBrands.length; i++) {
        allBrands[i].classList.add('hidden');
      }
    } else if (brandsShowMoreButton.textContent == 'Скрыть') {
      for (let i = 0; i < allBrands.length; i++) {
        allBrands[i].classList.remove('hidden');
      }
    }
  }
});

brandsShowMoreButton.addEventListener('click', function () {
  if (brandsShowMoreButton.textContent == 'Показать все') {
    brandsShowMoreButton.textContent = 'Скрыть';
    brandsShowMoreButton.classList.toggle('brands__hidden-more');
    for (let i = 0; i < allBrands.length; i++) {
      allBrands[i].classList.remove('hidden');
    }
  } else if (brandsShowMoreButton.textContent == 'Скрыть') {
    brandsShowMoreButton.textContent = 'Показать все';
    brandsShowMoreButton.classList.toggle('brands__hidden-more');
    if (desktop.matches) {
      for (let i = visibleItemsDesktop; i < allBrands.length; i++) {
        allBrands[i].classList.add('hidden');
      }
    } else if (tablet.matches) {
      for (let i = visibleItemsTablet; i < allBrands.length; i++) {
        allBrands[i].classList.add('hidden');
      }
    }
  }
});
