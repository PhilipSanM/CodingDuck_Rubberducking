'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// // ==================================================================
// // ====================== SIMPLE ARRAY METHODS ======================
// // ==================================================================

// //Methods are functions that we can call on objects.

// // SLICE
// let arr = [...'abcde']; // ['a', 'b', 'c', 'd', 'e' ];
// // Slice, take a part of an array
// console.log(arr.slice(2)); // ['c', 'd', 'e']
// // index at index 2
// console.log(...arr.slice(2)); // c d e
// console.log(arr.slice(2, 4)); // ['c', 'd']
// console.log(arr.slice(-2)); // ['d', 'e']
// console.log(arr.slice(-1)); // ['e']
// console.log(arr.slice(1, -2)); // ['b', 'c']
// console.log(arr.slice(1, -2)); // ['b', 'c']
// // shadow copy remember
// console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']

// //SPLICE
// //The diference that it mutate thats array look then with the originall
// console.log(arr.splice(2)); // ['c', 'd', 'e']
// console.log(arr); // ['a', 'b']
// //splice delete the part extracted
// arr = [...'abcde']; // ['a', 'b', 'c', 'd', 'e' ];
// // console.log(arr.splice(-1)); // ['e']
// arr.splice(-1); // ['e']
// console.log(arr); // ['a', 'b', 'c', 'd']
// arr = ['a', 'b', 'c', 'd', 'e']; // [...'abcde'];
// arr.splice(1, 2); // takes 'b' and 'c'
// console.log(arr); // ['a', 'd', 'e']

// // REVERSE
// //This also mutate the array and make it reverse.
// arr = [...'abcde'];
// let arr2 = [...'jihgjf'];
// console.log(arr2.reverse()); //['f', 'j', 'g', 'h', 'i', 'j']
// console.log(arr2); // ['f', 'j', 'g', 'h', 'i', 'j']

// // CONCAT
// //This doesn't mutate the original arry
// const letters = arr.concat(arr2);
// console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'j', 'g', 'h', 'i', 'j']
// console.log([...arr, ...arr2]); // ['a', 'b', 'c', 'd', 'e', 'f', 'j', 'g', 'h', 'i', 'j']

// // JOIN
// //This doesn't mutate the array
// //Joining all the elements of the array but with the '-'
// console.log(letters.join('-')); // a-b-c-d-e-f-j-g-h-i-j
// console.log(letters.join(' - ')); // a - b - c - d - e - f - j - g - h - i - j

// // // ==================================================================
// // // ====================== AT METHOD ES6======================
// // // ==================================================================

// const arr = [23, 11, 64];
// //If we want to take one element fo the array we usually...
// console.log(arr[0]); //23

// //But with at method
// //Array at position 0
// console.log(arr.at(0)); //23
// //The particulary of the at method is
// //supose we want the las position of the array we usually
// console.log(arr[arr.length - 1]);
// // or we can do it with slice for getting the last element
// console.log(arr.slice(-1)); // [64]
// console.log(arr.slice(-1)[0]); // 64
// //with at method
// console.log(arr.at(-1)); //64
// //So that is cointing from the left sice of the array

// console.log('Felix'.at(0)); //F

// // // ==================================================================
// // // ====================== F O R  E A C H ============================
// // // ==================================================================

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }
// console.log('===== FOR EACH =====');
// //Doing the same with for each method in an easier way
// // it needs a function
// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// });
// //The for each method calls the function, because it loop over the array
// // and for each iterations
// // The current element is recive as an argument

// // 0: function(200)
// // 1: function(450)
// // 2: function(400)
// // ...

// //Another example

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movment: ${i + 1} You deposited ${movement}`);
//   } else {
//     console.log(`Movment: ${i + 1} You withdrew ${Math.abs(movement)}`);
//   }
// }
// // FOR EACH
// console.log('==== FOR EACH ====');
// //The order really is important that is stablish in index
// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movment: ${index + 1} You deposited ${movement}`);
//   } else {
//     console.log(`Movment: ${index + 1} You withdrew ${Math.abs(movement)}`);
//   }
//   // console.log(array); // that's just the array
// });
// // YOU CAN NOT BREAKOUT A FOR EACH LOOP, IT ALWAYS LOOP TO THE ENTIRE ARRAY
// // -_-

// // ==================================================================
// // =================== FOR EACH WITH MAPS AND SETS ==================
// // ==================================================================

// //Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// // this also have 3 parametters
// // current value, key and the map
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //Set

// const concurrenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'MX', 'MX']);

// console.log(concurrenciesUnique);

// //The key is the same as the value
// concurrenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });
// //The key and value is the same lmao, but there are also 3 parametters

// concurrenciesUnique.forEach(function (value, _, map) {
//   console.log(`${_}: ${value}`);
// });
// //We can add a _ because is innecesari

// // // ==================================================================
// // // =================== BANKIST APP ==================================
// // // ==================================================================

// //Display all the movments
// const displayMovments = function (movements) {
//   // we can clean that part of the html with
//   // inner gives you the html of that class, but that will be clean ''
//   containerMovements.innerHTML = '';
//   //.textContent = 0;
//   movements.forEach(function (mov, i) {
//     const type = mov > 0 ? 'deposit' : 'withdrawal';
//     //Thats just creating an html array with that mehtod
//     const html = `
//     <div class="movements__row">
//       <div class="movements__type movements__type--${type}">${
//       i + 1
//     } ${type}</div>
//       <div class="movements__value">${mov}</div>
//     </div>
//     `;
//     // Now that we make the html we will insert the html with a method
//     containerMovements.insertAdjacentHTML('afterbegin', html);
//     // The fisrt parametter is the position wehre to atach
//     // All the variables are in the top of the JS
//   });
// };

// displayMovments(account1.movements);

// ==================================================================
// =================== CODING CHALLENGE #1 ==========================
// ==================================================================

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const checkDogs = function (dogsJulia, dogsKate) {
  const copy = dogsJulia.slice(1, 4);
  copy.concat(dogsKate).forEach(function (age, index, array) {
    age > 5
      ? console.log(
          `Dog number ${index + 1} is an adult, and is ${age} years old`
        )
      : console.log(`Dog number ${index + 1} is still a puppy 🐶`);
  });
  console.log(dogsJulia, copy);
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
