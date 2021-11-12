export const tablet = window.matchMedia('(min-width: 768px)');
export const desktop = window.matchMedia('(min-width: 1120px)');

const allBrands = document.querySelectorAll('.brands__list-item');
const brandsShowMoreButton = document.querySelector('.brands__show-more');
// const brandsShowMoreImage = document.querySelector('.brands__show-more-image');

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

// brandsShowMoreButton.addEventListener('click', function () {
//   if (brandsShowMoreButton.classList.contains('expand')) {
//     brandsShowMoreButton.textContent = 'Скрыть';
//     console.log(brandsShowMoreImage.classList);
//     brandsShowMoreImage.classList.remove('brands__show-more-image');
//     console.log(brandsShowMoreImage.classList);
//     brandsShowMoreImage.classList.add('brands__show-more-image-rotate');
//     console.log(brandsShowMoreImage.classList);
//     brandsShowMoreButton.classList.remove('expand');
//     brandsShowMoreButton.classList.add('hide');
//     for (let i = 0; i < allBrands.length; i++) {
//       allBrands[i].classList.remove('hidden');
//     }
//   } else if (brandsShowMoreButton.classList.contains('hide')) {
//     brandsShowMoreButton.textContent = 'Показать все';
//     brandsShowMoreImage.src = 'assets/img/expand.svg';
//     brandsShowMoreButton.classList.remove('hide');
//     brandsShowMoreButton.classList.add('expand');
//     if (desktop.matches) {
//       for (let i = visibleItemsDesktop; i < allBrands.length; i++) {
//         allBrands[i].classList.add('hidden');
//       }
//     } else if (tablet.matches) {
//       for (let i = visibleItemsTablet; i < allBrands.length; i++) {
//         allBrands[i].classList.add('hidden');
//       }
//     }
//   }
// });

let hiddensBrands = document.querySelectorAll('.brands__list > .hidden');

const brandsToggle = () => {
  hiddensBrands.forEach(function (item, i, hiddensBrands) {
    if (hiddensBrands[i].classList.contains('hidden')) {
      brandsShowMoreButton.textContent = 'Скрыть';
    } else {
      brandsShowMoreButton.textContent = 'Показать ещё';
    }
    hiddensBrands[i].classList.toggle('hidden');
  });
  brandsShowMoreButton.classList.toggle('brands__hidden-more');
};

brandsShowMoreButton.addEventListener('click', brandsToggle);
