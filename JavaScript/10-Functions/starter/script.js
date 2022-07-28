'use strict';

// //==================================================================
// //=============== DEFAULT PARAMETERS ===============================
// //==================================================================

// const bookings = [];
// //B efore ES6 passing default values
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //ES5
//   //   numPassengers ||= 1;
//   //   price ||= 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123'); // undefinedfor numPassenger //undefined for price

// createBooking('LH123', 2, 800);
// createBooking('LH123', 5); //price = 995
// //==================================================================
// //=============== PASSING VALUE/REFERENCE ==========================
// //==================================================================

// const flight = 'LH234';
// const jonas = {
//   name: 'Felipe Sna',
//   passprt: 231241412,
// };

// const checkIn = function (flightNum, passenger) {
//   (flightNum = 'LH999'), (passenger.name = 'Mr.' + passenger.name);
//   if (passenger.name === 231241412) {
//     console.log('CHECK IN');
//   } else {
//     console.log('Wrong pssport');
//   }
// };
// checkIn(flight, jonas);
// console.log(flight); //LH234
// console.log(jonas); // Changed the passenger.name.

// //Passing primitive types to a function the value is copied, but by passing
// // an object to a function, will happen in the originall

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000);

// };

// newPassport(jonas);
// checkIn(flight,jonas);

//==================================================================
//=============== FIRST CLASS FUCNTIONS   ==========================
//==================================================================
//helping us to write higher order functions in practice

//JS see that functions are values, another type of object
//There are also methods in functions

//Higher order funcitions:
//   Recives a function as an argument like addEventListener functions
//   A function that return a new function

// //==================================================================
// //=============== FUNCTIONS ACCEPTING CALLBACKFUNCTIONS  ===========
// //==================================================================

// const orderWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };
// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original str: ${str}`);
//   console.log(`Transforme string: ${fn(str)}`);
//   //name property of functions
//   console.log(`Transformed by: ${fn.name}`); // return the name of the function
// };
// //NOTE:Pasing the value
// let str = 'JavaScript or nothing!';
// transformer(str, upperFirstWord);
// // Transforme string: JAVASCRIPT or nothing!
// // script.js:92 Transformed by: upperFirstWord
// // script.js:89 Original str: JavaScript or nothing!
// //Again
// transformer(str, orderWord);
// // Transforme string: javascriptornothing!
// // Transformed by: orderWord

// //JS uses callback all the time
// const high5 = function () {
//   console.log('👋');
// };

// document.body.addEventListener('click', high5); //when you click the body

// ['Felipe', 'Carlos'].forEach(high5); //Two hands

// //ABSTRACTION

// // //==================================================================
// // //=============== FUNCTIONS RETURNING FUNCTIONS ====================
// // //==================================================================

// //Closure
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// //Is like if you name that function as:
// // function (name) {
// //   console.log(`Hey ${name}`);
// // };
// greeterHey('Felipe');
// greeterHey('Carlo');

// //also this work
// greet('Helo')('Philip');

// //Simple with an arrow function returning another arrow funciton
// const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

// greetArrow('Helo')('Philip');

// // //==================================================================
// // //=============== CALL AND APPLY METHODS ====================
// // //==================================================================

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: functuin(){}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({
//       flight: `${this.iataCode}${flightNum}`,
//       name: `${name}`,
//       flightNum,
//     });
//   },
// };

// lufthansa.book(238, 'Philip');
// lufthansa.book(245, 'Johan');
// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };
// const book = lufthansa.book;

// //NOTE: THIS LINE DOESN'T WORK:
// // book(23, 'Felix');

// //CALL METHOD
// book.call(eurowings, 23, 'Felix');
// console.log(eurowings);

// //we call the call method that calls the book function in eurowings lihe 'this'
// book.call(lufthansa, 55, 'FelixLuft'); // pointnig to lufthansa as 'this'
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };
// //You call and insert the data
// book.call(swiss, 565, 'Mari curie');

// //APPLY METHOD

// //the same but this take an array of arguments not values
// //Is better to use call
// const flightData = [898, 'Georgio loreno'];

// book.apply(swiss, flightData);
// book.call(lufthansa, ...flightData);

// //Bind Method
// //Returns a new function, with the new keyword ej:
// const bookEW = book.bind(eurowings);

// bookEW(56, 'Steven');
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// //For defaul parametters like
// const bookEWD = book.bind(eurowings, 23);
// //So it only needs the name
// bookEWD('Sheldoon copo');

// //Objects together with eventListeners
// lufthansa.planes = 30;
// lufthansa.buyPlane = function () {
//   //this is calling the event listener
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// //Because bind returns a function and we need a function, but before that this
// // points to the eventLisstener, but now it points to the
// // object

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// //You need the tax because we want to know if that is 23%, but the first parameter is this, but you dont care

// const addVAT = addTax.bind(null, 0.23);
// //The orden of the arguments is important xd
// console.log(addVAT(23));

// //Thats the same as:
// const addTaxes = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const taxVat = addTaxes(0.23);
// console.log(taxVat(23));

// //==================================================================
// //===================== CODING CHALLENGE #1 ========================
// //==================================================================

// /*
// Let's build a simple poll app!

// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

// Here are your tasks:

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)

//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

// HINT: Use many of the tools you learned about in this and the last section 😉

// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

// GOOD LUCK 😀
// */

// // const poll = {
// //   question: 'What is your favourite programming language?',
// //   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
// //   // This generates [0, 0, 0, 0]. More in the next section 😃
// //   answers: new Array(4).fill(0),
// //   registerNewAnswer: function () {
// //     const answerUser = Number(
// //       prompt(
// //         `${this.question}\n${this.options.join('\n')}\n (Write option number)`
// //       )
// //     );
// //     answerUser >= 0 && answerUser < 4
// //       ? this.answers[answerUser]++
// //       : console.log('Thats not a correct value try again');
// //     this.displayResults(this.answers);
// //   },
// //   displayResults: function (type) {
// //     console.log(`Poll results are: ${type}`);
// //   },
// // };

// // document
// //   .querySelector('.poll')
// //   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// // poll.displayResults([5, 2, 3]);
// // poll.displayResults([1, 5, 3, 9, 6, 1]);
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // Get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);

//     // Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       // Poll results are 13, 2, 4, 1
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// // [5, 2, 3]
// // [1, 5, 3, 9, 6, 1]

// // //==================================================================
// // //======= INMEDIATELY Invoked function EXPRESSIONS========================
// // //==================================================================
// // IIFE

// //A function that desappeared once it is called

// (function () {
//   console.log('This function will be deleted');
// })();
// // You can call it when you put the () in the function to think JS that is an expresion
// //and you call it with the () at the end

// //Arrow IIFE
// (() => console.log('This function will be deleted'))();

// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }
// // console.log(isPrivate);
// // console.log(notPrivate);

// //Is like a block

// // //==================================================================
// // //======= CLOSURES ========================
// // //==================================================================

// // //A closures happens automatically
// // const secureBooking = function () {
// //   let passengerCount = 0;

// //   return function () {
// //     passengerCount++;
// //     console.log(`${passengerCount} passengers`);
// //   };
// // };

// // const booker = secureBooking();
// // //So now booker is a function
// // //secureBooking has gone away, for now

// // booker();
// // booker();
// // booker();

// // const seconBooker = secureBooking();
// // seconBooker();
// // booker(0);

// // // CLOSURE is the conexion betwen the variable passengerCount because was created
// // // in the function, the variable enviroment was gone, but thanks to the closure, that variable of the function exists

// // //The closure has priority over the scope chain

// // // THE CLOSER IS THE CLOSED-OVER VARIABLE NEVIORMENT OF THE EXECUTION CONTEXT IN WICH A FUNCTION WAS CREATED, EVEN AFTER THAT EXECUTION CONTEXT IS GONE

// // // A CLOSURE GIVES A FUNCTION ACCESS TO ALL THE VARIABLES OF ITS PARENT FUNCTION,
// // // EVEN AFTER THAT PARENT FUNCTION HAS RETURNED. THE FUNCTION KEEPS A REFERENCE TO ITS OUTER SCOPE
// // // WICH PRESERVES THE SCOPE CHAIN THROUGHOUT TIME.

// // console.dir(booker);
// let f = 0;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// g();
// f(); //46
// f(); //46
// //f variable was defined in the global, but it was redifined in the function
// // even that g() has finished.

// const h = function () {
//   const b = 77;
//   f = function () {
//     console.log(b * 2);
//   };
// };
// h();
// f(); //154
// // it was redifined
// //but now the closure is b not a
// console.dir(f);

// //TIMER

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);

// //==================================================================
// //===================== CODING CHALLENGE #2 ========================
// //==================================================================

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
