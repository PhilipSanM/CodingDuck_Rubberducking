'use strict';
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
//==============================
//==== F U N C T I O N S =======
//==============================

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
// <>There are two ways to make a function

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

// -- ARROW FUNCTION --
// // <>Like an arrow that you can insert a funciton
//function expresion
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
// const friends = ['Felipe', 'Diego', 'Luz'];

// // //psuh method for Adding elements
// // friends.push('Elias');
// // //Includes another variable at the end, it return something
// // console.log(friends);

// //Check the lenght of the array
// const newLength = friends.push('Elias');
// //Includes another variable at the end, it return something
// console.log(friends);
// console.log(newLength);
// //Adding in fornt
// friends.unshift('Johan');
// console.log(friends);

// //Remove elements:
// friends.pop();
// const popped = friends.pop()
// console.log(friends);
// console.log(popped);

// //Removing in front
// friends.shift();
// console.log(friends);

// //Position of the element
// console.log(friends.indexOf('Diego'));
// console.log(friends.indexOf('Bob')); //gives u -1 because is not in the array
// //For a boolean
// console.log(friends.includes('Diego'));
// console.log(friends.includes('Bob')); //gives u -1 because is not in the array
// //Remember coarsion so if you do
// friends.push(23);
// console.log(friends.includes('23')); //FALSE 23 is not equal to '23'

// if(friends.includes('Diego'))
// 	console.log('There is some Diego');

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


function calcTip(bill){
	if(50<= bill <= 300){
		return bill* 0.15;
	}else
		return bill* 0.20;
}

const bills = new Array(125,555,44);
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
console.log(bills);
console.log(tips);
//BONUS
const total = [tips[0]+bills[0],tips[1]+bills[1],tips[2]+bills[2]]
console.log(total);