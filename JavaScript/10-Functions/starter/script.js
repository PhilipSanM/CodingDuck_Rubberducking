'use strict';

const bookings = [];
//B efore ES6 passing default values
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  //   numPassengers ||= 1;
  //   price ||= 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123'); // undefinedfor numPassenger //undefined for price

createBooking('LH123', 2, 800);
createBooking('LH123', 5); //price = 995
