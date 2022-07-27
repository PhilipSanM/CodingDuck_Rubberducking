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

const orderWord = function (str) {
  return str.replace(/ /g, ' ').toLowerCase();
};

const upperFirstWord = function (str) {};
