'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShoModal = document.querySelectorAll('.show-modal');
console.log(btnShoModal);

// M A N I P U L A T I O N  O F  C L A S S E S .
for (let i = 0; i < btnShoModal.length; i++)
  btnShoModal[i].addEventListener('click', function () {
    console.log('button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

//Dot is for selector not passing a name of a class

// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// YOU USE FUNCTION LIKE THIS
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//HANDLE KEY EXC
//KEYBOARD EVENTS

document.addEventListener('keydown', function (key) {
  console.log(key.key);
  if (key.key === 'Escape') {
    // closeModal();
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
