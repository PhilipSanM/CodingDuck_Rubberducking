'use strict';
// //=======================================================
// //======== L E A R N I N G  H O W   T O   A C C E S S ===
// //=======================================================
// console.log(document.querySelector('.message').textContent);
// //You select a number with that estructure
// document.querySelector('.message').textContent = 'Correct Number';
// //And also you can manipulate it with that estructure
// console.log(document.querySelector('.message').textContent);

// //Lets manipulate the number
// console.log(document.querySelector('.number').textContent);
// document.querySelector('.number').textContent = '50';

// //And lets play with the input

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = '50';

// //=======================================================
// //======== E V E N T S  ===
// //=======================================================
// selecting when you push the bootton
//Method addEventListener as the second argument is the function that will be executed
//The first argument is the event that you want to listen
// document.querySelector('.check').addEventListener('click', function () {
//   //Lets copy the value of the input in the console log
//   console.log(document.querySelector('.guess').value);
//   document.querySelector('.message').textContent = 'Correct Number';
// });

// //Thats  a function expresion like
// const x = function () {
//   console.log(23);
// };

//Wee defina the function there, will only call when
//the event happend

//LETS BUILD THEPAGE NOW
//Lets define the secrect number

const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(number);
document.querySelector('.check').addEventListener('click', function () {
  // w E ADD THE NUMBER INTO A VARIABLE
  const guess = Number(document.querySelector('.guess').value);
  //Its a number so...
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'Pls insert a number';
  } else if (guess === number) {
    document.querySelector('.number').textContent = number;
    document.querySelector('.message').textContent = 'Correct Number Congrats';
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST';
      document.querySelector('.score').textContent = 0;
    }
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'YOU LOST';
    }
  }
});
