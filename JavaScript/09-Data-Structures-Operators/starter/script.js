'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

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
// console.log(...menu);
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

// // //======================================================
// // //======== P A T T E R N S  &  P A R A M E T T E R S ===
// // //======================================================

// //rEST PAck elements into an array
// const arr = [1, 2, 3];

// //Rest because is in left, the rest of values
// const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, others);
// //With objects
// const [pizza, risotto, ...otherfood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherfood);

// //It also work in objects but that info is collected into a new object

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// // In functions:
// //REST PARAMETERS
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
//   console.log(numbers);
// };
// add(3, 5, 6);
// add(53, 12, 46, 13);
// console.log('=-------------');
// const x = [23, 4, 56];
// add(...x);

// restaurant.orderPizza('Mushrooms', 'milk', 'chocolate');
// //That was for unsuse parametters
// // //======================================================
// // //======== L O G I C A L  O P E R A T O R S ===
// // //======================================================

// // &&  ||
// //Short-circuiting
// //Use ANU data type, return ANY data Type
// //Return the firs truthy value
// console.log(3 || 'Jonas'); //3
// console.log('' || 'Jonas'); //jonas
// console.log(true || 0); // true
// console.log(undefined || null); //null

// //For this, this is evaluating if that exists
// const guest1 = restaurant.numGests ? restaurant.numGests : 10;
// console.log(guest1);
// //The same like
// const guest2 = restaurant.numGests || 23;
// console.log(guest2); // falsy value so: 23
// console.log(`-----------AND---------`);

// //ShortCircuit when the first value is falsy and return that value xd
// console.log(0 && 'Me'); // 0
// console.log(7 && 'Jonas'); //Jonas
// console.log('Hello' && 23 && null && 'jonas'); // null

// //Checking if that exist
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('NANA', 'AYURA');
// }
// //WITH &&
// restaurant.orderPizza && restaurant.orderPizza('NANA', 'AYURA');
// //Or return the fisrt truly value or the last value is all is falsy
// //And reurn the first that is falsy, or the last if all is true

// // //======================================================
// // //======== NULLLISH ===
// // //======================================================
// //Works like the OR operator but gives you the nullish value
// // Nullish only work with null and undefine

// const guesCorrect2 = 0 ?? 10;
// console.log(guesCorrect2);

// // //======================================================
// // //======== Logical Assignment Operators ================
// // //======================================================
// // rest2.numGests = rest2.numGests || 10;
// // rest1.numGests = rest1.numGests || 10;
// // console.log(rest1, rest2);

// //Another way to do that is:
// console.log(rest1, rest2);
// rest2.numGests ||= 10;
// rest1.numGests ||= 10;
// console.log(rest1, rest2);
// //BUT IF NUM.GEST IS 0 it will be replaceable to 10
// //For null or undefined
// rest2.numGests ??= 10;
// rest1.numGests ??= 10;
// console.log(rest1, rest2);

// //Replacing to anonimus
// rest2.owner = rest2.owner && '<ANONYMUS>'; //CHANGING THE VALUE
// rest1.owner = rest1.owner && '<ANONYMUS>'; //putts an undefine, because rest1.owner doesnt exist so, now exist with undefined

// console.log(rest1, rest2);
// // // //======================================================
// // // //======== CODDING CHALLENGE #1 ========================
// // // //======================================================
// /*
// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// GOOD LUCK 😀
// */

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];

// // const [players1, players2] = game.players;
// // console.log(players1, players2);

// console.log(players1);
// const allPlayers = [...game.players];
// console.log(allPlayers);

// let [gk, ...fieldPlayers] = [...players1];
// console.log(gk, fieldPlayers);

// let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// let { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
// printGoals(...players1);

// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// // 7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');
// // // // //======================================================
// // // // //======== THE  FOR-OF  LOOP ========================
// // // // //======================================================
// //Array of menu
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);
// //Each element logg one by one:
// // Focaccia
// // Bruschetta
// // arlic Bread
// // Caprese Salad
// // Pizza
// //Pasta
// //  Risotto
// // Thats a nice level of abstraccion
// console.log(menu);
// console.log(menu.entries());
// //entries is an array with arrays inside
// for (const item of menu.entries()) {
//   console.log(item);
// }

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }
// //Other way
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
// 1: Focaccia
// 2: Bruschetta
//  3: Garlic Bread
// 4: Caprese Salad
//5: Pizza
//  6: Pasta
//  7: Risotto

// //======================================================
// // //======== Object Literals  ========================
// //======================================================

// //ES6 enhanced Literals
const weekdays = ['thu', 'fri', 'sat'];

const openingHours = {
  [weekdays[0]]: {
    open: 12,
    close: 22,
  },
  [weekdays[1]]: {
    open: 11,
    close: 23,
  },
  [weekdays[2]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// const restaurantOther = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   //NOTE: ES6 for propertys, we make an onbject and then we introduced
//   // into anotehr object
//   // openingHours: openingHours,
//   openingHours,

//   // A function that recives an object with default values

//   //NOTE: Functions like:
//   orderDelivery({ starterIndex = 0, adress = 'No one', time = '24:00' }) {
//     console.log(
//       `Order Received! ${this.starterMenu[starterIndex]} will be delivered to ${adress} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Pasta with ${ing1}, ${ing2} and ${ing3}`);
//   },

//   orderPizza: function (mainIngridient, ...othersIngridients) {
//     console.log(mainIngridient, othersIngridients);
//   },
// };

// // //======================================================
// // // //======== Optional Chaining  =======================
// // //======================================================

// //For checking if properties exist
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);
// //ES6 is more easier that

// console.log(restaurant.openingHours.mon?.open);
// //Only if restaurant.openingHours.mon exist, then it will gice you open
// //If not undefined will be return
// console.log(restaurant.openingHours.fri?.open);
// // console.log(restaurant.openingHours.mon.open?); This is an error, because mon dosent exist and open dosent exist too

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }
// // 0 is a falsy value so wee use the nullish ??

// // In Methods
// //The you pass the values to test
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// // const users = [];

// console.log(users[0]?.name ?? 'User array empty');

// //Is the same to write this
// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

// //So it checks if the value of the left exist

// // //======================================================
// // //=========== Looping Objects:  ========================
// // //======================================================

// //Property NAMES
// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // //Property VALUES
// // const values = Object.values(openingHours);
// // console.log(values);
// // console.log(values[0].close);

// //Entire Object
// const entries = Object.entries(openingHours);
// console.log(entries);
// //With structuring
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

// // //======================================================
// // //========= CODING CHALLENGE #2 ========================
// // //======================================================

// /*
// Let's continue with our football betting app!

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

// GOOD LUCK 😀
// */

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// console.log(Object.entries(game.scored));
// console.log(game.scored.entries());
// for (const [goal, player] of Object.entries(game.scored)) {
//   console.log(`Goal ${Number(goal) + 1}: ${player}`);
// }

// // // 1.
// // for (const [i, player] of game.scored.entries())
// //   console.log(`Goal ${i + 1}: ${player}`);
// let sum = 0;
// console.log(Object.values(game.odds));
// for (const value of Object.values(game.odds)) {
//   sum += value;
// }
// sum = sum / Object.values(game.odds).length;

// console.log(sum);
// // 2.
// // const odds = Object.values(game.odds);
// // let average = 0;
// // for (const odd of odds) average += odd;
// // average /= odds.length;
// // console.log(average);

// // console.log(Object.entries(game.odds));

// for (const [team, odd] of Object.entries(game.odds)) {
//   console.log(
//     `Odd of${game[team] ? ' victory' : ''} ${game[team] ?? 'draw'}: ${odd}`
//   );
// }
// // 3.
// // for (const [team, odd] of Object.entries(game.odds)) {
// //   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
// //   console.log(`Odd of ${teamStr} ${odd}`);
// // }

// // // //======================================================
// // // //=========  S  E  T  S   ==============================
// // // //======================================================

// //A collection of unique values (no duplicates), iterables

// const orderSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
// console.log(orderSet);
// //Iterable
// console.log(new Set('pipe')); // 'p' 'i' 'e'
// //Empty Set
// console.log(new Set());
// //Size of a set
// console.log(orderSet.size);
// //comparing
// console.log(orderSet.has('bread'));
// console.log(orderSet.has('Pizza'));
// orderSet.add('Pan');
// orderSet.add('Pan');
// console.log(orderSet);
// orderSet.delete('Risotto');
// console.log(orderSet);
// //This desn't work, there is no way to get out data of a set
// console.log(openingHours[0]); //this doesn't work //undefined
// //But you can cls
// // orderSet.clear();
// // console.log(orderSet);

// for (const order of orderSet) console.log(order);

// //  Example

// const staff = ['Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffUnique = new Set(staff);
// console.log(staff);
// console.log(staffUnique);

// //Conversion A set into an array, because we want an array[] not a set {}
// // ...
// //So powerful LMAO
// const staffUniqueArray = [...new Set(staff)];
// console.log(staffUniqueArray);
// console.log(new Set(['Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);
// console.log(new Set('pipePassa por mi casa').size);
// console.log(new Set('pipePassa por mi casa'));

// // // //======================================================
// // // //=========  M  A  P  S   ==============================
// // // //======================================================

// //Map values to keys like an object, but you can have any type of key like other maps
// // not only strings like an object

// const rest = new Map();
// rest.set('name', 'Classico Italina');
// rest.set(1, 'Firenze Italy');
// // Set not only upadates the map, but it also returns the map
// console.log(rest.set(2, 'Lisbon, Portugal'));
// console.log(rest);
// //So now that it returns us the map, we can allows us to change the method like this

// rest
//   .set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are Open')
//   .set(false, 'we are closed');

// //We use get to see the value

// console.log(rest.get('name'));
// console.log(rest.get(true));
// //So you can have keys for every type
// const time = 24;
// console.log(rest.get('name'));
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('Categories'));
// console.log(rest);

// // rest.clear();
// //An array as a key
// rest.set([1, 2], 'test');
// console.log(rest);
// console.log(rest.get([1, 2])); //undefined this doesn't work
// //Because there are not the same element in the heap

// //this works because is the same element
// let arr = [1, 2];
// rest.set(arr, 'test');
// console.log(rest);
// console.log(rest.get(arr));

// //A crazy function with html
// rest.set(document.querySelector('h1'), 'header');
// console.log(rest);

// // //======================================================
// // // //=========  MAPS ITERATION ============================
// // // //======================================================
// //Implementing a quiz, passing an array
// const question = new Map([
//   ['question', 'What is the best programing lanugaje?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   [true, 'Correct!!'],
//   [false, 'Try again'],
//   ['correct', 3],
// ]);
// console.log(question);

// //It seems like the entries of an object
// console.log(Object.entries(openingHours));

// // Convert Object to mao
// //ObJECT --->  MAP
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // I T E R A T I O N
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`${key}.- ${value}`);
//   }
// }
// // const answer = Number(prompt("'What's the answer?"));
// const answer = 3;

// if (answer === 3) console.log(question.get(true));
// else console.log(question.get(false));

// console.log(question.get(answer === question.get('correct')));

// // MAP----> Array
// console.log('----');
// console.log(question);
// console.log(...question);
// console.log(...hoursMap);
// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());

// const variable = [...question];
// console.log(variable[0][0]);

//======================================================
//======== WICH DATA STRUCTURE TO USE? =================
//======================================================

// // //======================================================
// // //======== CODING CHALLENGE #3 =========================
// // //======================================================
// /*
// Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

// GOOD LUCK 😀
// */

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
// // console.log(gameEvents.values());
// // const eventsSet = new Set(gameEvents.values());
// // console.log(eventsSet);
// //Set to array
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// //2
// gameEvents.delete(64);
// console.log(gameEvents);
// let sum = 0;
// for (const time of gameEvents.keys()) {
//   sum += time;
// }
// console.log(`An event happened, on average, every ${sum / 90} minutes`);
// //3
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// for (const [time, event] of gameEvents.entries()) {
//   console.log(
//     `${time <= 45 ? '[FIRST HALF] ' : '[SECOND HALF] '} ${time}: ${event}`
//   );
// }
// console.log(gameEvents.entries());
// console.log(gameEvents);
// for (const [time, event] of gameEvents) {
//   console.log(
//     `${time <= 45 ? '[FIRST HALF] ' : '[SECOND HALF] '} ${time}: ${event}`
//   );
// }

// // // //======================================================
// // // //========= WORKING WITH STRINGS =======================
// // // //======================================================
// const airplane = 'AEROMEXICO y AEROBUS';
// const plane = 'FF28';
// console.log(airplane[0]); //A
// console.log(airplane[1]); // E
// console.log('sVxd2'[1]); // V
// console.log(airplane.length);
// console.log(airplane.indexOf('M')); // 4, WHERE that letter is
// console.log(airplane.indexOf('Z')); // -1 error
// console.log(airplane.indexOf('XICO')); //6
// console.log(airplane.lastIndexOf('O')); //9
// console.log(airplane.indexOf('O')); //3
// console.log(airplane.indexOf('A')); //0

// //Index is usfull when the slice metoth
// //The position where the abstraccion starts
// console.log(airplane.slice(3)); //OMEXICO Y AEROBUS
// //We also can insert when to start and end
// console.log(airplane.slice(3, 5)); //OM

// console.log(airplane.slice(airplane.indexOf('A'), airplane.indexOf(' '))); // AEROMEXICO
// // and from the end

// console.log(airplane.slice(-2)); //US
// console.log(airplane.slice(1, -2)); //EROMEXICO y AEROB
// console.log(airplane.slice(-2,1)); //
// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
//   else console.log('You got lucky 😎');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// //  P A R T 2
// //Uppercase and lowercase
// console.log(airplane.toLowerCase());
// console.log(airplane.toUpperCase());
// const passenger = 'FelIpE';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// //comparing emails
// const email = 'felix@gmail.com';
// const loginEmail = '  Felix@GMAil.com  \n';

// const lowerEmail = email.toLowerCase();
// const trimEmail = lowerEmail.trim();
// console.log(trimEmail);

// //Also this wokrs
// const normalizeEmal = email.toLowerCase().trim();
// console.log(normalizeEmal, normalizeEmal === email);

// //Replacing parts of strings
// const priceGB = '298,42E';
// const pricceUS = priceGB.replace('E', '$').replace(',', '.');
// console.log(pricceUS);
// // Replace creates a new string
// const announcement = 'All passenger to door 23, boarding door 23';
// console.log(announcement.replace('door', 'gate')); //Just one door not all
// // All passenger to gate 23, boarding door 23
// console.log(announcement.replaceAll('door', 'gate')); // all

// //With regular expresionss
// console.log(announcement.replaceAll(/door/g, 'gate'));

// //Booleans
// //FF28
// console.log(plane.includes('FF'));
// console.log(plane.includes('FF3'));
// console.log(plane.includes('F8'));
// console.log(plane.includes('8'));

// console.log(plane.startsWith('F') && plane.endsWith('8'));
// // Practice exercise
// //NOTE: All in lowerCase for using
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();

//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// //  P A R T 3
// //SPLIT and join METHOD

// console.log('A+very+nice+string'.split('+'));

// const [firstName, lastName] = 'Felipe Sanchez'.split(' ');
// console.log(firstName, lastName.toLowerCase());
// //For split an array
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };
// capitalizeName('Jessica ann smith davis');

// // Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+')); //+++++++++++Go to gate 23!

// console.log('Jonas'.padEnd(25, '+')); //Jonas++++++++++++++++++++
// //size of 25
// console.log(message.padStart(25, '+').padEnd(27, '+')); //+++++++++++Go to gate 23!++

// //Look we use this in the credit card :v
// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(214353124135131215));
// console.log(maskCreditCard('35135657667'));

// //Repeat metthod
// const messageA = 'bad weather... All Departures Delayed...';
// console.log(messageA.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
// };
// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

// // //======================================================
// // //========= CODING CHALLENGE #4 =======================
// // //======================================================
/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const info = document.querySelector('textarea').value;
  let i = 0;
  for (const data of info.split('\n')) {
    const dataLower = data.trim().toLowerCase();
    const [first, second] = dataLower.split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(++i)}`);
  }
});
// // // //======================================================
// // // //========= PROBLEM ====================================b
// // // //======================================================

// // 🔴 Delayed Departure from FAO to TXL (11h25)
// //              Arrival from BRU to FAO (11h45)
// //   🔴 Delayed Arrival from HEL to FAO (12h05)
// //            Departure from FAO to LIS (12h30)
// // const flights =
// // '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// console.log(flights.split('+'));
// const strFlights = flights.split('+');
// for (const fly of strFlights) {
//   const [type, from, to, time] = fly.split(';');
//   console.log(
//     `${type.includes('Delayed') ? '🔴' : ''}${type.replaceAll(
//       '_',
//       ' '
//     )} from ${from.slice(0, 3).toUpperCase()} to ${to
//       .slice(0, 3)
//       .toUpperCase()} (${time.replace(':', 'h')})

//   `.padStart(36)
//   );
// }
