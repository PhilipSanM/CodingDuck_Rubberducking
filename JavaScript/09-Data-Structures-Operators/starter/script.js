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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngridient, ...othersIngridients) {
    console.log(mainIngridient, othersIngridients);
  },
};

restaurant.orderDelivery({
  time: '23:00',
  adress: 'San Lucas',
  mainIndex: 2,
  starterIndex: 4,
});

const rest1 = {
  name: 'Fasfuu',
  numGests: 20,
};

const rest2 = {
  name: 'Picazzo',
  owner: 'Giovanni Los Santos',
};
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

// // //======================================================
// // //========= D E S T R U C T U R I N G  O B J E C T S ===
// // //======================================================
// // NOTE: BUG FIXME OK
// //{} for objects an [] for aarays
// //But you have to use the name of the object
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// //if you want to change the name is with :
// const { name: nameres, openingHours: hours, categories: pizzas } = restaurant;
// console.log(nameres, hours, pizzas);

// //Or if you work with default values lije
// // const { menu = [], starterMenu: menuS = [] } = restaurant; //This give you undefined for menu
// // console.log(menu, menuS);

// const { menu = [], starterMenu: menuS = [] } = restaurant; //This give you [] for menu
// console.log(menu, menuS);

// //NOTE: For overwrite a variable is betwen () because:

// let a = 12;
// let b = 343;
// const obj = {
//   a: 23,
//   b: 2,
//   c: 4,
// };
// ({ a, b } = obj);
// console.log(a, b);

// //An object inside an object so ...
// //Nested objects

// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// const {
//   fri: { open: z, close: x },
// } = openingHours;
// console.log(z, x);

// // //======================================================
// // //========= S P R E A D  O P E R A T O T (...) ===
// // //======================================================

// const arr = [7, 8, 9];
// //Elements with aarrays
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// //nOW With the (...)
// //Takes all the elements out of the array
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// //NOTE: all the elements individually

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Cookies'];
// //This is building a neww array not modifing the restaurants array
// console.log(...newMenu);
// //Thats so powerfull
// //(...) takes all the values :)

// //Shalow copies
// const mainMenuCopy = [...restaurant.mainMenu];

// //Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// //Iterables are all but not objects
// const string = 'pipe';
// const letters = [...string, ' ', 's.'];
// //We use the (...) when making a new array or passing values to a function
// //All teh individual elementes
// console.log(letters); //['p', 'i', 'p', 'e', ' ', 's.']

// //Example with passing the values into a functon

// // const ingredientes = [
// //   prompt("Let's make pasta with:"),
// //   prompt("Let's make pasta with:"),
// //   prompt("Let's make pasta with:"),
// // ];
// // console.log(ingredientes);
// // //With (...) :) amazing
// // restaurant.orderPasta(...ingredientes);

// //Also work with objects even there are not iterables
// //With OBJECTS
// //Thats a copy with new info for restaurants.
// const newRestaurant = { founding: 1990, ...restaurant, founder: 'Me' };
// console.log(newRestaurant);

// //======================================================
// //======== P A T T E R N S  &  P A R A M E T T E R S ===
// //======================================================

//rEST PAck elements into an array
const arr = [1, 2, 3];

//Rest because is in left, the rest of values
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);
//With objects
const [pizza, risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherfood);

//It also work in objects but that info is collected into a new object

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// In functions:
//REST PARAMETERS
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
  console.log(numbers);
};
add(3, 5, 6);
add(53, 12, 46, 13);
console.log('=-------------');
const x = [23, 4, 56];
add(...x);

restaurant.orderPizza('Mushrooms', 'milk', 'chocolate');
//That was for unsuse parametters
// //======================================================
// //======== L O G I C A L  O P E R A T O R S ===
// //======================================================

// &&  ||
//Short-circuiting
//Use ANU data type, return ANY data Type
//Return the firs truthy value
console.log(3 || 'Jonas'); //3
console.log('' || 'Jonas'); //jonas
console.log(true || 0); // true
console.log(undefined || null); //null

//For this, this is evaluating if that exists
const guest1 = restaurant.numGests ? restaurant.numGests : 10;
console.log(guest1);
//The same like
const guest2 = restaurant.numGests || 23;
console.log(guest2); // falsy value so: 23
console.log(`-----------AND---------`);

//ShortCircuit when the first value is falsy and return that value xd
console.log(0 && 'Me'); // 0
console.log(7 && 'Jonas'); //Jonas
console.log('Hello' && 23 && null && 'jonas'); // null

//Checking if that exist
if (restaurant.orderPizza) {
  restaurant.orderPizza('NANA', 'AYURA');
}
//WITH &&
restaurant.orderPizza && restaurant.orderPizza('NANA', 'AYURA');
//Or return the fisrt truly value or the last value is all is falsy
//And reurn the first that is falsy, or the last if all is true

// //======================================================
// //======== NULLLISH ===
// //======================================================
//Works like the OR operator but gives you the nullish value
// Nullish only work with null and undefine

const guesCorrect2 = 0 ?? 10;
console.log(guesCorrect2);

// //======================================================
// //======== Logical Assignment Operators ================
// //======================================================
