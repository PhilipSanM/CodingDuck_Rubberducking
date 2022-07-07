'use strict';
//Selecting an ID
const score0El = document.querySelector('#score--0');
//Or U can do this and is a litle more fast
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Init
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // Displaying dice
  diceEl.classList.remove('hidden');
  //For the image: You can doit with if but is better like this
  diceEl.src = `dice-${dice}.png`;
  //   console.log(dice);
  //   console.log(typeof dice);
  //   console.log(`dice-${dice}.png`);
  //   console.log(typeof `dice-${dice}.png`);
  // Check for rolled 1
  if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    currentScore = 0;
    current0El.textContent = 0;
    //
  }
});
