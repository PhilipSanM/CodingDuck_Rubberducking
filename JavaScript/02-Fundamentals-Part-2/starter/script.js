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
//function expresion
const calcAge2 = function (birthDay) {
	// body...
	return 2022 - birthDay;
}
//Arrow function
const calcAge3 = birthDay => 2022 - birthDay;

const age3 = calcAge3(2003);
console.log(age3)

const yearUntilRetirment = (birthDay, firstName) => {
	const age = 2022 - birthDay;
	const retirment = 65 - age;
	return `${firstName} retires in ${retirment} years`;
}

console.log(yearUntilRetirment(2003, 'Felipe'));
console.log(yearUntilRetirment(1997, 'Bob'));
