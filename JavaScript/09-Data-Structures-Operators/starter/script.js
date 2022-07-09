'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  // A function that recives an object with default values
  orderDelivery: function ({
    starterIndex = 0,
    adress = 'No one',
    time = '24:00',
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} will be delivered to ${adress} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: '23:00',
  adress: 'San Lucas',
  mainIndex: 2,
  starterIndex: 4,
});

// //======================================================
// //========= D E S T R U C T U R I N G  A R R A Y S =====
// //======================================================
//
// //There are some ways to copy info from an array like
// const array = [2, 43, 56];
// const a = array[0];
// const b = array[1];
// const c = array[2];

// //OR like
// const [x, y, z] = array;
// console.log(x, y, z);
// console.log(array);
// //tHATS Destructuring the array

// //NOW LETS TALK ABOUT THE OBJECT
// let [first, second] = restaurant.categories;
// console.log(first, second);

// //For a third element :

// const [primary, , third] = restaurant.categories;
// console.log(primary, third);

// //Making a swith with two variables
// //You should use a temporary
// // TIRCK WITH Destructuring
// [first, second] = [second, first];
// console.log(first, second);

// console.log(restaurant.order(2, 0));
// const [sarter, main] = restaurant.order(2, 0);
// console.log(sarter, main);

// //Array inside an array:

// const nested = [2, 5, [2, 5]];
// const [i, , j] = nested;
// console.log(i, j);
// //Destructuring an array with an array xd

// const [q, w, [r, t]] = nested;
// console.log(q, w, r, t);

// //Also you can read the elemente of an array with
// const [f, n, m] = [4, 6];
// console.log(f, n, m);

// //======================================================
// //========= D E S T R U C T U R I N G  O B J E C T S ===
// //======================================================
// NOTE: BUG FIXME OK
//{} for objects an [] for aarays
//But you have to use the name of the object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
//if you want to change the name is with :
const { name: nameres, openingHours: hours, categories: pizzas } = restaurant;
console.log(nameres, hours, pizzas);

//Or if you work with default values lije
// const { menu = [], starterMenu: menuS = [] } = restaurant; //This give you undefined for menu
// console.log(menu, menuS);

const { menu = [], starterMenu: menuS = [] } = restaurant; //This give you [] for menu
console.log(menu, menuS);

//NOTE: For overwrite a variable is betwen () because:

let a = 12;
let b = 343;
const obj = {
  a: 23,
  b: 2,
  c: 4,
};
({ a, b } = obj);
console.log(a, b);

//An object inside an object so ...
//Nested objects

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

const {
  fri: { open: z, close: x },
} = openingHours;
console.log(z, x);
