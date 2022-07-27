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

// //==================================================================
// //=============== FUNCTIONS RETURNING FUNCTIONS ====================
// //==================================================================

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
