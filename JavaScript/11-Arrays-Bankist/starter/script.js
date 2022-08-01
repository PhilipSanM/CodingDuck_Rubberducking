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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

// // ==================================================================
// // =================== BANKIST APP ==================================
// // ==================================================================

//Display all the movments
const displayMovments = function (movements) {
  // we can clean that part of the html with
  // inner gives you the html of that class, but that will be clean ''
  containerMovements.innerHTML = '';
  //.textContent = 0;
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    //Thats just creating an html array with that mehtod
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
    `;
    // Now that we make the html we will insert the html with a method
    containerMovements.insertAdjacentHTML('afterbegin', html);
    // The fisrt parametter is the position wehre to atach
    // All the variables are in the top of the JS
  });
};

displayMovments(account1.movements);
//Here we just want the value not something being returned
const createUserNames = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `${balance}€`;
};

calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((interest, i, arr) => {
      return interest >= 1;
    })
    .reduce((acc, interest) => acc + interest, 0);

  labelSumInterest.textContent = `${Math.abs(interest)}€`;
};
calcDisplaySummary(account1.movements);

// // ==================================================================
// // =================== CODING CHALLENGE #1 ==========================
// // ==================================================================

// /*
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

// 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
// 4. Run the function for both test datasets

// HINT: Use tools from all lectures in this section so far 😉

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// GOOD LUCK 😀
// */

// const checkDogs = function (dogsJulia, dogsKate) {
//   const copy = dogsJulia.slice(1, 4);
//   copy.concat(dogsKate).forEach(function (age, index, array) {
//     age > 5
//       ? console.log(
//           `Dog number ${index + 1} is an adult, and is ${age} years old`
//         )
//       : console.log(`Dog number ${index + 1} is still a puppy 🐶`);
//   });
//   console.log(dogsJulia, copy);
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// // // // ==================================================================
// // // // =================== DATA TRANSFORMATION: MAP, FILTER,REDUCE ======
// // ==================================================================
// //Map
// //is like a for each method, for loop over an array
// // it creates a new array, but in each operation it can map de values
// // into a new array
// // more usefull than the for each function
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// //lets pass the values into euro,  EUR - USD
// // map needs a dunction
// const movmentsUSD = movements.map(function (move) {
//   return move * eurToUsd;
// });
// console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movmentsUSD); //[220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]
// // This doesn't mutate the array
// // Is the same like

// const movementsUSDfor = [];
// for (const move of movements) {
//   movementsUSDfor.push(move * eurToUsd);
// }
// console.log(movementsUSDfor); // [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]

// //We can make it a little cleaner like just one line of code
// const movmentsUSDArrow = movements.map(move => move * eurToUsd);
// console.log(movmentsUSDArrow); // [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]

// //Map method also have acces to the three parametters
// const movmentesDescription = movements.map((move, i, array) => {
//   // if (move > 0) {
//   //   return `You deposited ${move}`;
//   // } else {
//   //   return `You withdrew ${Math.abs(move)}`;
//   // }
//   return `Movement ${i + 1}:You ${
//     move > 0 ? 'deposited' : 'withdrew'
//   } ${Math.abs(move)}`;
// });
// console.log(movmentesDescription);
// // 0: "Movement 1:You deposited 200"
// // 1: "Movement 2:You deposited 450"
// // 2: "Movement 3:You withdrew 400"
// // 3: "Movement 4:You deposited 3000"
// // 4: "Movement 5:You withdrew 650"
// // 5: "Movement 6:You withdrew 130"
// // 6: "Movement 7:You deposited 70"
// // 7: "Movement 8:You deposited 1300"

// // //  Filter
// // // Filter the elements of an array and make a new filter array
// const deposit = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]
// console.log(deposit); // [200, 450, 3000, 70, 1300]
// const depositFor = [];
// for (const mov of movements) mov > 0 && depositFor.push(mov);
// console.log(depositFor); // [200, 450, 3000, 70, 1300]

// const withdrawals = movements.filter(function (move) {
//   return move < 0;
// });
// console.log(withdrawals);

// const withdrawalsFor = [];
// for (const move of movements) move < 0 && withdrawalsFor.push(move);
// console.log(withdrawalsFor);

// // //  Reduce
// // // reduce all the elements of an array into one single value
// // //
// //This is the parammeters
// //accumulator is a snowball
// const balance = movements.reduce(function (accumulator, current, index, array) {
//   console.log(`Iteration ${index}: ${accumulator}`);
//   return accumulator + current;
// }, 0);
// //That 0 is the inicial value of the accumulator
// // if u change it, it will be change the accumulator
// // with for
// let balance2 = 0;
// for (const move of movements) balance2 += move;
// console.log(balance2);

// console.log(balance);

// const balance3 = movements.reduce((acc, curr) => acc + curr, 100);
// console.log(balance3);

// // You can use it, to obtain the max or min value

// const max = movements.reduce((acc, curr) => {
//   // if (acc > curr) return acc;
//   // else return curr;
//   return acc > curr ? acc : curr;
// }, movements[0]);
// console.log(max);
// // imagine that allthe values are negative, so if you use 0 that will be an error

// // // ==================================================================
// // // =================== COMPUTING USERNAMES ==========================
// // // ==================================================================

// const user = 'Steven Thomas Williams'; // stw
// // Or just in one line of code
// // const userLower = user.toLowerCase();
// // let username = '';
// // for (const name of userLower.split(' ')) {
// //   username += name[0];
// // }
// // console.log(username);
// const username = user
//   .toLowerCase()
//   .split(' ')
//   .map(name => name[0])
//   .join('');
// console.log(username); //stw

// //Now lets make that a function above in the bankist app
// // createUserNames(accounts);

// // // ==================================================================
// // // =================== CODING CHALLENGE #2 ==========================
// // // ==================================================================

// /*
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// GOOD LUCK 😀
// */

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(function (dogAge) {
//     return dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4;
//   });
//   const dogsExcluded = humanAge.filter(age => age > 18);
//   const average =
//     dogsExcluded.reduce((acc, curr, i, array) => acc + curr, 0) /
//     dogsExcluded.length;
//   console.log(average);
// };

// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// // // // ==================================================================
// // // // ============== MAGIC OF CHAINING METHODS =========================
// // // // ==================================================================
// const eurToUsd = 1.1;
// //Take all the depostis
// // PIPELINE
// // const totalDepositUSD = movements
// //   .filter(move => move > 0)
// //   .map(move => move * eurToUsd)
// //   .reduce((acc, move) => acc + move, 0);
// // console.log(totalDepositUSD);

// // if there is an error on the value
// // ypu can log the array in any function like
// const totalDepositUSD = movements
//   .filter(move => move > 0)
//   .map((move, i, arr) => {
//     console.log(arr);
//     return move;
//   })
//   .map(move => move * eurToUsd)
//   .reduce((acc, move) => acc + move, 0);
// console.log(totalDepositUSD);

// ==================================================================
// =================== CODING CHALLENGE #3 ==========================
// ==================================================================

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = ages =>
  ages
    .map(dogAge => {
      return dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4;
    })
    .filter(age => age > 18)
    .reduce((acc, curr, i, array) => acc + curr / array.length, 0);

console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
