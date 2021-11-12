export const tablet = window.matchMedia('(min-width: 768px)');
export const desktop = window.matchMedia('(min-width: 1120px)');

const allBrands = document.querySelectorAll('.brands__list-item');
const brandsShowMoreButton = document.querySelector('.brands__show-more');
const brandsShowMoreImage = document.querySelector('.brands__show-more-image');

// const hiddenBrands = function (items) {
//   for (let i = items; i < allBrands.length; i++) {
//     allBrands[i].classList.add('hidden');
//   }
// };

// if (tablet) {
//   hiddenBrands(8);
// } else if (desktop) {
//   hiddenBrands(6);
// }
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

brandsShowMoreButton.addEventListener('click', function () {
  if (brandsShowMoreButton.classList.contains('expand')) {
    brandsShowMoreButton.textContent = 'Скрыть';
    brandsShowMoreImage.src = '../../assets/img/back.svg';
    brandsShowMoreButton.classList.remove('expand');
    brandsShowMoreButton.classList.add('hide');
    for (let i = 0; i < allBrands.length; i++) {
      allBrands[i].classList.remove('hidden');
    }
  } else if (brandsShowMoreButton.classList.contains('hide')) {
    brandsShowMoreButton.textContent = 'Показать все';
    brandsShowMoreImage.src = '../../assets/img/expand.svg';
    brandsShowMoreButton.classList.remove('hide');
    brandsShowMoreButton.classList.add('expand');
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
