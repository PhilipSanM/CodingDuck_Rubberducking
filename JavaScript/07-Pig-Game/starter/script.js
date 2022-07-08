'use strict';
//Selecting an ID
const score0El = document.querySelector('#score--0');
//Or U can do this and is a litle more fast
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Init
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');

// const scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true;

// const swithcPlayer = function () {
//   currentScore = 0;
//   document.getElementById(`current--${activePlayer}`).textContent = 0;

//   //swith to next player
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   //toggle add if is not therr, and remove if it is there
//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
//   //Hold botton
// };

// //Rolling dice functionality
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     //Generating a random dice roll
//     const dice = Math.trunc(Math.random() * 6) + 1;
//     // Displaying dice
//     diceEl.classList.remove('hidden');
//     //For the image: You can doit with if but is better like this
//     diceEl.src = `dice-${dice}.png`;
//     //   console.log(dice);
//     //   console.log(typeof dice);
//     //   console.log(`dice-${dice}.png`);
//     //   console.log(typeof `dice-${dice}.png`);
//     // Check for rolled 1
//     if (dice !== 1) {
//       currentScore += dice;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore;
//     } else {
//       swithcPlayer();
//     }
//   }
// });

// btnHold.addEventListener('click', function () {
//   if (playing) {
//     // 1.- adding value to the array
//     scores[activePlayer] += currentScore;
//     // showing
//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];

//     if (scores[activePlayer] >= 10) {
//       playing = false;
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--active');

//       diceEl.classList.add('hidden');
//     } else {
//       swithcPlayer();
//     }
//     //When a player wins of 100 points
//   }
// });

// btnNew.addEventListener('click', function () {
//   scores[0] = scores[1] = 0;
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;
//   document.getElementById(`score--0`).textContent = 0;
//   document.getElementById(`score--1`).textContent = 0;
//   document.getElementById(`current--0`).textContent = 0;
//   document.getElementById(`current--1`).textContent = 0;
//   document.querySelector('.player--0').classList.remove('player--winner');
//   document.querySelector('.player--1').classList.remove('player--winner');
//   diceEl.classList.remove('hidden');
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');
//   //JavaScript: dosent add if there is already there
// });

// You can make it with a init function like

//Declaring functions
let scores, playing, currentScore, activePlayer;
// Init

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  diceEl.classList.remove('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  //JavaScript: dosent add if there is already there
};

//main
init();

const swithcPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  //swith to next player
  activePlayer = activePlayer === 0 ? 1 : 0;
  //toggle add if is not therr, and remove if it is there
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  //Hold botton
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
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
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      swithcPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1.- adding value to the array
    scores[activePlayer] += currentScore;
    // showing
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      diceEl.classList.add('hidden');
    } else {
      swithcPlayer();
    }
    //When a player wins of 100 points
  }
});

btnNew.addEventListener('click', init);
