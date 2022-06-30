// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = 23;
// console.log("helps");
// //NOTE: BUG FIXME OK
// console.log("asf");
// console.log(`afsf`);
// console.log("asd");

// PROBLEM 1:
// // We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const calcTempAmplitud = function (array) {
//   let max = array[0];
//   let min = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] !== "number") continue;
//     if (array[i] < min) min = array[i];
//     if (array[i] > max) max = array[i];
//   }
//   console.log(max);
//   console.log(min);
//   return max - min;
// };

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const amplitude = calcTempAmplitud(temperatures);
// console.log(amplitude);

// // PROBLEM 2:
// // Function should now receive 2 arrays of temps

// const calcTempAmplitud2 = function (arrayA, arrayB) {
//   let max = arrayA[0];
//   let min = arrayA[0];
//   for (let i = 0; i < arrayA.length; i++) {
//     if (typeof arrayA[i] !== "number") continue;
//     if (arrayA[i] < min) min = arrayA[i];
//     if (arrayA[i] > max) max = arrayA[i];
//   }
//   for (let i = 0; i < arrayB.length; i++) {
//     if (typeof arrayB[i] !== "number") continue;
//     if (arrayB[i] < min) min = arrayB[i];
//     if (arrayB[i] > max) max = arrayB[i];
//   }
//   console.log(max);
//   console.log(min);
//   return max - min;
// };

// const temperaturesB = [3, 29, -6, -1, "error", 9, -25, 17, 15, 14, 9, 5];
// const amplitude2 = calcTempAmplitud2(temperatures, temperaturesB);
// console.log(amplitude2);

// //This is a talk between an AI and a human:.
// //IA.- I am the speaker.
// //Me.- Hola como estas?
// //IA.- Bien, gracias.
// //Me.- Puedes verme por mi camara?
// //IA.- Si, gracias.
// //Me.- Noooomames, te voy a demandar si me dejas sin chamba.
// //IA.-

// const measureKelvin = function () {
//   const measurment = {
//     type: "temperature",
//     unit: "celsius",
//     value: Number(prompt("What is the temperature in celsius?")),
//   };
//   console.log(measurment.value);
//   const kelvin = measurment.value + 273.15;
//   return kelvin;
// };

// console.log(measureKelvin());

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

function printForecast(arr) {
  let string = "chale...";
  for (let i = 0; i < arr.length; i++) {
    string += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log(string);
}

printForecast([17, 21, 23]);
