"use strict";
//STRICT MODE this is gonna be the first line
// //Instroduce bugs and visible errors

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// //If you have an error, strictmode shows you where is and what happend
// let const = 24;

// const interface = 'Audio';
//
////==============================
////==== F U N C T I O N S =======
////==============================

// function logger(){
// 	console.log('Hellos again');
// }

// //Calling function
// logger();
// logger(45);
// //Function with parametters and return somethign
// function fruitProcessor(apples, oranges){
// 	console.log(apples,oranges);
// 	const juice = `Juice with ${apples} apples and ${oranges} oranges`;
// 	return juice;
// }
// //You can make a variable to print
// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);
// //Or just call the function and will show you what it return
// console.log(fruitProcessor(5,0));

// const appleOrangeJuice = fruitProcessor(3,5);
// console.log(appleOrangeJuice);

// // ---DECLARATION AND OPERATIONS----
// //{/* <>There are two ways to make a function */}

// //FUNCTION DECLARATION
// function calcPhilip(birthDay) {
// 	return 2022 - birthDay;
// }

// const age1 = calcPhilip(2003);
// console.log(age1);

// //FUNCTION EXPRESSION
// const calcAge2 = function (birthDay) {
// 	// body...
// 	return 2022 - birthDay;
// }

// const age2 = calcPhilip(2003);
// console.log(age2);

// //THIS WORK too
// //FUNCTION DECLARATION

// const age3 = calcPhilip(2003);
// function calcPhilip(birthDay) {
// 	return 2022 - birthDay;
// }
// console.log(age3);
// //BUT THIS NO
// //FUNCTION EXPRESSION
// // const age4 = calcPhilip(2003);
// // const calcAge2 = function (birthDay) {
// // 	// body...
// // 	return 2022 - birthDay;
// // }

// // console.log(age4);
// //Calling something before defining

// //-- ARROW FUNCTION --
// // <>Like an arrow that you can insert a funciton
// function expresion
// const calcAge2 = function (birthDay) {
// 	// body...
// 	return 2022 - birthDay;
// }
// //Arrow function
// const calcAge3 = birthDay => 2022 - birthDay;

// const age3 = calcAge3(2003);
// console.log(age3)

// const yearUntilRetirment = (birthDay, firstName) => {
// 	const age = 2022 - birthDay;
// 	const retirment = 65 - age;
// 	return `${firstName} retires in ${retirment} years`;
// }

// console.log(yearUntilRetirment(2003, 'Felipe'));
// console.log(yearUntilRetirment(1997, 'Bob'));

// //==============================================
// //==== FUNCTIONS CALLING OTHER FUNCTIONS =======
// //==============================================

// function cutFruitPieces(fruit) {
// 	// body...
// 	return fruit * 4;
// }

// function fruitProcessor(apples, oranges){
// 	// console.log(apples,oranges);
// 	const applesPieces = cutFruitPieces(apples);
// 	const orangesPieces = cutFruitPieces(oranges);

// 	const juice = `Juice with ${applesPieces} pieces of apple and ${orangesPieces} pieces of oranges`;
// 	return juice;
// }

// console.log(fruitProcessor(2,3));

// ///////////////////////////////////////
// // Reviewing Functions
// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// }

// const yearsUntilRetirement = function (birthYeah, firstName) {
//   const age = calcAge(birthYeah);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return -1;
//   }
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

// // =======================================================
// // =========== CODING CHALLENGE #1 =======================
// // =======================================================

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
// 4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
// 5. Ignore draws this time.

// TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// HINT: To calculate average of 3 values, add them all together and divide by 3
// HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

// GOOD LUCK 😀

// const calcAverage = (socore1,score2,score3) =>{
// 	return (socore1+score2+score3)/3;
// }

// function checkWinner(avgDolphin,avgKoalas) {
// 	// body...
// 	if (avgKoalas >= 2*avgDolphin){
// 		console.log(`Koalas win (${avgKoalas} vs. ${avgDolphin})`);
// 		return 0;
// 	}else if(avgDolphin >= 2*avgKoalas){
// 		console.log(`Dolphins win (${avgDolphin} vs. ${avgKoalas})`);
// 		return 0;
// 	}
// 	else{
// 		console.log(`No one win`);
// 		return 0;
// 	}
// }

// const avgDolphin = calcAverage(85,54,41);
// const avgKoalas = calcAverage(23,34,27);
// console.log(avgDolphin,avgKoalas);
// checkWinner(avgDolphin,avgKoalas);

// // =======================================================
// // =========== A R R A Y S =======================
// // =======================================================

// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// }
// // <>You can have the array like this
// const friend1 = 'Carlos';
// const friends = ['Felipe', 'Diego', 'Luz'];
// console.log(friends);
// console.log(friends[2]);

// //This is another way to make an array:
// const years = new Array(1900, 2012, 2003);
// console.log(years);
// console.log(years[2]);

// //Propietis with arrays:
// 	//ARRAYS length
// console.log(years.length); //3
// console.log(years.length - 1); //2
// //Changing the value
// console.log(friends);
// friends[2] = 'Eth';
// console.log(friends);

// //With many variables
// const firstName = 'Pipe';
// //Array with an array
// const jonas = [firstName, 'Lalo', 2003-2022, friends];
// console.log(jonas);
// console.log(jonas.length);

// const yearA = new Array(1990,1290,23,213,2003);

// //And you can use it with functions

// const age1 = calcAge(yearA[0]);
// const age2 = calcAge(yearA[3]);
// const age3 = calcAge(yearA[2]);

// console.log(age3,age2,age1);
// //Or you can start with an array and finish with another arrray

// const ages = [calcAge(yearA[0]),calcAge(yearA[2]),calcAge(yearA[3])]
// console.log(ages);

// // // =======================================================
// // // =========== ARRAY METHODS =======================
// // // =======================================================
// const friends = ["Felipe", "Diego", "Luz"];

// // //psuh method for Adding elements
// // friends.push('Elias');
// // //Includes another variable at the end, it return something
// // console.log(friends);

// //Check the lenght of the array
// // const newLength = friends.push("Elias");
// const newLength = [...friends];
// newLength.push("LAL");

// //Includes another variable at the end, it return something
// console.log(friends);
// console.log("//////");
// console.log(newLength);
// //Adding in fornt
// friends.unshift("Johan");
// console.log("sdsdds");
// console.log(friends);

// //Remove elements:
// friends.pop();
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// //Removing in front
// friends.shift();
// console.log(friends);

// //Position of the element
// console.log(friends.indexOf("Diego"));
// console.log(friends.indexOf("Bob")); //gives u -1 because is not in the array
// //For a boolean
// console.log(friends.includes("Diego"));
// console.log(friends.includes("Bob")); //gives u -1 because is not in the array
// //Remember coarsion so if you do
// friends.push(23);
// console.log(friends.includes("23")); //FALSE 23 is not equal to '23'

// if (friends.includes("Diego")) console.log("There is some Diego");

// // =======================================================
// // =========== CODING CHALLENGE #2 =======================
// // =======================================================

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// function calcTip(bill){
// 	if(50<= bill <= 300){
// 		return bill* 0.15;
// 	}else
// 		return bill* 0.20;
// }

// const bills = new Array(125,555,44);
// const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// console.log(bills);
// console.log(tips);
// //BONUS
// const total = [tips[0]+bills[0],tips[1]+bills[1],tips[2]+bills[2]]
// console.log(total);

// // =======================================================
// // =========== O B J E C T S =======================
// // =======================================================
// //The orden imports alot
// const jonasArray = [
// 	'Jonas',
// 	'Sanch',
// 	2003,
// 	'Professor'
// ];
// //You cant give them a name, so for that, we are going to use objedts
// //Simples way to create an object :) enjoy it
// //You have a name
// const jonas = {
// 	firstName: 'Jonas',
// 	lastName: 'Sanchez',
// 	job: 'Professor',
// 	friends: ['Felipe', 'Diego', 'Luz'],
// 	age: 12
// }

// //How to enter into an object
// // *U use a property name as it appears in the object
// console.log(jonas);
// console.log(jonas.lastName);
// //or brakets notation
// console.log(jonas['lastName']);
// //That you use when:
// //When you have to use it
// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);
// //HEY YOU CAN USE THAT LIKE
// const interestedIn = prompt('What do you want to know about Jonas? firstName, lastName, age');
// console.log(jonas[interestedIn]);

// //If that property is not in the objtect you will fine undefined
// if(jonas[interestedIn]){
// 	console.log(jonas[interestedIn]);
// } else{
// 	const interestedIn = prompt('What do you want to know about Jonas? firstName, lastName, age');
// }

// //YOU CAN ADD INFORMATION LIKE

// jonas.location = "California";
// jonas['twitter'] = '@Philipsanm_';
// console.log(jonas.twitter);
// console.log(jonas);
// // Challenge
// // "Jonas is a 46-year old teacher, and he has a driver's license"
// // console.log(jonas.getSummary());
// // "Jonas has 3 friends, and his best friend is called Michael"
// console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best frien is called ${jonas.friends[0]}`);

// // =======================================================
// // =========== O B J E C T S  M E T H O D S ==============
// // =======================================================
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Sanchez",
//   job: "Professor",
//   birthYear: 2003,
//   friends: ["Felipe", "Diego", "Luz"],
//   age: 12,
//   hasDriverLicense: true,
//   calcAge: function (birthYear) {
//     // body...
//     return 2022 - birthYear;
//   },
// };
//A function value :)))
//Here you need a property of the object not a function, u need a method
// const calcAge = function (birthday) {
// 	// body...
// 	return 2022-birthday;
// }

// console.log(jonas.calcAge(2003));
// //OR
// console.log(jonas["calcAge"](2003));

// //AND you have birthyear in jonas object so lets dons repeat, you dont need it
// console.log(jonas.calcAge(jonas.birthYear));
// //OR
// console.log(jonas["calcAge"](jonas.birthYear));

// // SO LETS USE THE ONE INSIDE THE OBJECT
// // with "this"
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Sanchez",
//   job: "Professor",
// //   birthYear: 2003,
// //   friends: ["Felipe", "Diego", "Luz"],
// //   age: 12,
// //   hasDriverLicense: true,
// //   calcAge: function () {
// //     // body...
// //     return 2022 - this.birthYear;
// //   },
// // };
// // // A function value :)))
// // // Here you need a property of the object not a function, u need a method
// // const calcAge = function (birthday) {
// //   // body...
// //   return 2022 - birthday;
// // };

// // console.log(jonas.calcAge());
// // console.log(jonas["calcAge"]());

// // console.log(jonas.calcAge());
// // console.log(jonas["calcAge"]());

// // You can creat a property whit this like:
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Sanchez",
//   job: "Professor",
//   birthYear: 2003,
//   friends: ["Felipe", "Diego", "Luz"],

//   hasDriverLicense: true,
//   calcAge: function () {
//     // body...
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
// };
// //A function value :)))
// //Here you need a property of the object not a function, u need a method
// // const calcAge = function (birthday) {
// // 	// body...
// // 	return 2022-birthday;
// // }

// console.log(jonas.calcAge());
// console.log(jonas["calcAge"]());

// console.log(jonas.age);
// console.log(jonas["age"]);
// console.log(jonas);
// // Challenge;
// // ("Jonas is a 46-year old teacher, and he has a driver's license");
// // const jonas = {
// // 	firstName: 'Jonas',
// // 	lastName: 'Sanchez',
// // 	job: 'Professor',
// // 	birthYear: 2003,
// // 	friends: ['Felipe', 'Diego', 'Luz'],

// // 	hasDriverLicense: true,
// // 	calcAge: function () {
// // 		// body...
// // 		this.age = 2022-this.birthYear;
// // 		return this.age;
// // 	},

// // 	// getSummary: function () {
// // 	// 	// body...
// // 	// 	if(this.hasDriverLicense){
// // 	// 		return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has a driver's license`;

// // 	// 	}else {
// // 	// 		return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has not driver's license`;

// // 	// 	}
// // 	// }
// // 	getSummary: function () {
// //     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`
// //   	}

// // };
// console.log(jonas.getSummary());

// // =======================================================
// // =========== CODING CHALLENGE #3 =======================
// // =======================================================

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
// const mark = {
// 	fullName: 'Mark Miller',
// 	mass: 78,
// 	height: 1.69,
// 	calcBMI: function () {
// 		// body...
// 		this.bmi = this.mass/this.height**2;
// 		return this.bmi;
// 	}
// };
// const john = {
// 	fullName: 'John Smith',
// 	mass: 92,
// 	height: 1.95,
// 	calcBMI: function () {
// 		// body...
// 		this.bmi = this.mass/this.height**2;
// 		return this.bmi;
// 	}
// };

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi,john.bmi);
// if (mark.bmi > john.bmi) {
//   console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
// } else if (john.bmi > mark.bmi) {
//   console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
// }

// // =======================================================
// // =========== FOR LOOOP =======================
// // =======================================================
// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');
// // Loop:
// for (let rep = 1; rep <= 30; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// //---- FOR AND ARRAYS------
// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven']
// ];

// for (let i = 1; i < 5; i++) {
//   console.log(jonas[i]);
// };

// const jonas2 = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true
// ];

// for (let i = 0; i < jonas2.length; i++) {
//   console.log(jonas2[i], typeof jonas2[i]);
// }

// //Lets make another array with the typs
// //making an empty array
// const types = [];

// const jonas3 = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true
// ];

// for (let i = 0; i < jonas3.length; i++) {
//   console.log(jonas3[i], typeof jonas3[i]);
//   //Filling an array;
//   // types[i] = typeof jonas3[i];
//   types.push(typeof jonas3[i]);
// }

// console.log(types);
// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// // continue and break
// console.log('--- ONLY STRINGS ---')
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== 'string') continue;

//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log('--- BREAK WITH NUMBER ---')
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === 'number') break;

//   console.log(jonas[i], typeof jonas[i]);
// }

// // Looping Backwards and Loops in Loops
// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true
// ];

// // 0, 1, ..., 4
// // 4, 3, ..., 0

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------- Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//   }
// }

// // The while Loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
//   rep++;
// }

// let random = Math.trunc(Math.random() * 6) + 1;

// while (random !== 6) {
//   console.log(`You rolled a ${random}`);
//   random = Math.trunc(Math.random() * 6) + 1;
//   (random === 6)? console.log('Loop is about to end...',random): console.log(random);
// }

// // =======================================================
// // =========== CODING CHALLENGE #4 =======================
// // =======================================================
/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

function calcTip(bill) {
  return 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}

console.log(bills, tips, totals);

//BONUS
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));
