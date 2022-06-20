

// //=======================================================
// //=========== V A  L U E S & V A R I A B L E S ==========
// //=======================================================

// //Variable name convention
// // let is for making variables
// let js = "amazing";

// if (js=="amazing")
//     alert("Javascript is FUN!");
// //Values are the smallest unit of information on javascript
// console.log(40+8+23-10);
// //console.log is used to show something in the console html


// //We make a variable Firstname with the name "Jonas"
// let firstName = "Jonas";
// let secondName= "Santiago";
// //So we can print it on the console
// //To use the console, just click on developer tools on the navegator
// console.log(firstName);

// /*
//     <>camelCase:(if u have more than one word) write the first word in lower and the second in upper
//     <>You can't use a special keyword of javascript
//     <>you can use letter, dollar sign, and number but not at the begin of the variable
//     <>You can't use an uppercase letter at the begining (because the convention)
//     <> constant will be written in all uppercase
//     <> the value should be easy to understand by reading the variable

// */

// // My personal information ASSIGNEMENT:
// let country = "Mexico";
// let continent = "America";
// let population = "45M";
// console.log(country);
// console.log(continent);
// console.log(population);


// //=======================================================
// //=========== D A T A  T Y P E S ========================
// //=======================================================
// //JvS is executed from the top to the bottom
// //NUMBER
// let age=18;
// //String, in qoutes, with one or two are the same
// let firstNameA = 'Felix';
// //BOOL
// let fullAge = true;
// console.log(false);

// //typeof - show the type of the variable
// console.log(typeof fullAge);


// //When you want to change the value of a variable
// //first declare thevariable and then declare it without let
// console.log(age);
// age = 'GG!';
// console.log(age);

// //there exists also undefined variables if you just:
// let undefinedVariable;
// console.log(undefinedVariable);
// console.log(typeof undefinedVariable);

// undefinedVariable=1999;
// console.log(typeof undefinedVariable);

// // =======================================================
// // =========== D E C L A R E D  V A R I A B L E S ========
// // =======================================================

// //You can delcared with let, and also empty variables
// let age =30;
// age =21;

// //variables that can not be change with constant, and can't also be empty variables
// const birthYear=2003;
// //prior to ES6 we use var instead of let

// var job='student';
// job='IBMengineer';

// //You can also declared a variable without let, var or constant
// globalVariable=34;
// console.log(globalVariable);
// //it works, but isnot a variable that you can use

// // =======================================================
// // =========== B A S I C  O P E R A T O R S ==============
// // =======================================================
// const now = 2022;
// const ageMe = now-2003;
// const ageEli = 2022-1998;

// console.log(ageMe,ageEli);
// console.log(ageMe+5, ageEli/10, 2**3)
// //2**3 means 2 to the power of 3, like 2*2*2

// const firstName='Felipe';
// const lastName='Sanchez';
// console.log(firstName+" "+ lastName);
// console.log(firstName+' '+ lastName);

// let x=10+5;
// x += 10; //means x= x+10
// x *= 4; //means x= x*4
// x++;// x=x+1
// x--;// x= x-1
// console.log(x);

// // Comparison operators
// console.log(ageMe>ageEli);// <=,>=, <,>
// console.log(ageMe>=18);

// const isFullAge = ageMe>=18;
// console.log(isFullAge);

// //it can also make mathematics operation in orden to obtain the solution like
// console.log(ageMe+5 <= ageEli-1);
// //two many variables
// let w,y;
// w=y=25-10-5;
// console.log(w,y);



// // =======================================================
// // =========== CODING CHALLENGE #1 =======================
// // =======================================================


//// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

//// 1. Store Mark's and John's mass and height in variables
//// 2. Calculate both their BMIs using the formula (you can even implement both versions)
//// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

//// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
//// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

//// GOOD LUCK 😀

// const markMass = 78, johnMass= 92, markHeigh=1.69, johnHeigh=1.95;
// const markBmi= markMass/markHeigh**2;
// const johnBmi= johnMass/johnHeigh**2;
// const markHigherBMI= markBmi>johnBmi;
// console.log('MarkBMI is:', markBmi,'John BMI is:', johnBmi,'\nMarkBMI is higher than John?=', markHigherBMI);

// // =======================================================
// // =========== S T R I N G S  &  T E M P L A T E =========
// // =======================================================

// const firstName='Felipe';
// const job= 'student';
// const birthYear='2003';
// const year =2022;

// const felipe= "I'm "+ firstName + ', a '+ (year- birthYear )+ ' year old ' + job+ '!' ;

// console.log(felipe);

// //Time to use a template literal, a template string use
// // this ----> `` to make the template ando use ${}to call the function

// const felipeNew= `I'm ${firstName}, a ${year-birthYear} year old ${job}!`;
// console.log(felipeNew);

// //Multiple lines with string(
// console.log('String with \n\
// multiple \n\
// lines');

// // You can also use the `` instead of the \n\ for multiple lines
// console.log(`String with
// multiple
// lines`);

// // =======================================================
// // =========== T A K I N G  D E C I S I O N S  IF/ELSE ===
// // =======================================================

// const age = 15;
// const isOldEnough = age>=18;
// if(isOldEnough){
// 	console.log("Sarah can start driving license");
// }else{
// 	const yearsLeft =18 -age;
// 	console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
// }

// const birthYear = 2003;
// let century;
// if(birthYear<=2000){
// 	century=20;
// }else{
// 	century=21;
// }

// console.log(century);


// // =======================================================
// // =========== CODING CHALLENGE #2 =======================
// // =======================================================


// /*
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// HINT: Use an if/else statement 😉

// GOOD LUCK 😀
// */

// const markMass = 78, johnMass= 92, markHeigh=1.69, johnHeigh=1.95;
// const markBmi= markMass/markHeigh**2;
// const johnBmi= johnMass/johnHeigh**2;
// const markHigherBMI= markBmi>johnBmi;
// if(markHigherBMI){
// 	console.log("Mark's BMI is higher than John's BMI\n");
// 	console.log(`Mark's BMI ${markBmi} is higher than John's ${johnBmi}!`)

// }else{
// 	console.log("John's BMI is higher than Mark's!\n");
// 	console.log(`John's BMI ${johnBmi} is higher than Mark's ${markBmi}!`)

// }


// // =======================================================
// // =========== TYPE CONVERSION AND COERCION ==============
// // =======================================================

// //Type conversion is when we manually convert from one type to another.
// //Coercion is when javascript converts that

// const inputYear = '2003';
// //this is not going to work because its an string
// console.log(inputYear + 18);
// //we can convert ir
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear)+18);

// //make this to see what happend
// console.log(Number('Felix'));
// //NaN means not a number, but thats a number NaN gg

// console.log(String(23),23);
// //You can covert to bool, number and string

// //type coercion
// console.log('Iam '+18+ ' years old');
// console.log('Iam '+String(18)+ ' years old');
// console.log('23'-'10'-3);

// //look
// let n = '1'+1; //11
// n = n-1;
// console.log(n);

// n= 2+3+4+'5'//95
// n= '10'-'4'-'3'-2+'5';//15
// console.log(n);


// // =======================================================
// // =========== TRUTHY AND FALSY VALUES ===================
// // =======================================================

// //FALSY are not exactly false, but become false when we try to convert them to a boolean

// //Falsy values:   0,'',undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// let money=500;
// if(money)
// 	console.log("Nice");
// else
// 	console.log("Go for a job");

// money=0;
// if(money)
// 	console.log("Nice");
// else
// 	console.log("Get a job");

// let notDefined;

// if(notDefined)
// 	console.log("is defined");
// else
// 	console.log("you never defined it so is false");

// // =======================================================
// // =========== EQUALITY OPERATORS == vs === ===================
// // =======================================================

// const age = '18';
// //const age = 18;
// // =:
// 	//This mean exactly =
// // ==:
// 	//This made COarcion, it means U can write
// 	// '18' == 18;
// 	// And will give you true even '18' is string and 18 a number
// // ===:
// 	//This mean exactly that like:
// 	// '18' === 18; wil give u false
// 	//because is not a string
// if(age === 18)
// 	console.log('You just became an adult');
// if(age == 18)
// 	console.log('You just became an adult');

// //You can use better ===  because is better to prevent BUGS

// // PROMP

// const favourite = prompt("Whats your favorite number?");

// console.log(favourite);
// console.log(typeof(favourite));
// //This give u a string

// if(favourite == 18){ //TRUE
// 	console.log('With "favorite number"');
// }

// if(favourite === 18){ //FALSE because is string
// 	console.log('This line will not work');
// }

// const hasDriversLicence = true; //A
// const hasGoodVision = true;//B

// console.log(hasDriversLicence && hasGoodVision);

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if (hasDriversLicense && hasGoodVision) {
// //   console.log('Sarah is able to drive!');
// // } else {
// //   console.log('Someone else should drive...');
// // }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }


// // // =======================================================
// // // =========== CODING CHALLENGE #3 =======================
// // // =======================================================


// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

// 3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

// TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// GOOD LUCK 😀


// // const scoreDolphins = (96 + 108 + 89) / 3;
// // const scoreKoalas = (88 + 91 + 110) / 3;

// // if (scoreKoalas > scoreDolphins) {
// // 	console.log('Team Koalas win!!');
// // } else if (scoreKoalas < scoreDolphins) {
// // 	console.log('Team Dolphins win!!');
// // }else{
// // 	console.log('There is a draw');
// // }

// //BONUS 1
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;

// if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
// 	console.log('Team Koalas win!!');
// } else if (scoreKoalas < scoreDolphins && scoreDolphins >= 100) {
// 	console.log('Team Dolphins win!!');
// }else if (scoreKoalas === scoreDolphins && scoreDolphins >= 100 && scoreKoalas >= 100) {
// 	console.log('There is a draw')
// }else{
// 	console.log("No one wins");
// }


// // =======================================================
// // =========== SWITCH STATMENT ===========================
// // =======================================================

// const day = 'saturday';
// switch(day) {
// 	case 'monday': // day === 'monday'
// 		console.log('Plan course strcuture');
// 		console.log('Go fot it');
// 		break;
// 	case 'tuesday':
// 		console.log('make my video');
// 		break;
// 	case 'thursday':
// 		console.log('IDK');
// 		break;
// 	case 'friday':
// 		console.log('lol');
// 		break;
// 	//Twise
// 	case 'saturday':
// 	case 'sunday':
// 		console.log('bro free days');
// 		break;
// 	default:
// 		console.log("error that's not a day");	
// 		break;
// }
// //this is the same

// if (day === 'monday') {
// 	console.log('Plan course strcuture');
// 	console.log('Go fot it');
// } else if (day === 'tuesday') {
//   console.log('Prepare theory videos');
// } else if (day === 'thursday') {
//   console.log('IDK');
// } else if (day === 'friday') {
//   console.log('lol');
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log('Enjoy the weekend :D');
// } else {
//   console.log('Not a valid day!');
// }

// // // =======================================================
// // // =========== STATMENT & EXPRESIONS =====================
// // // =======================================================

// //EXPRESION produce a value
// //STATMENT sentence that translate into actions

// if (23 > 10) {
//   const str = '23 is bigger';
// }

// const me = 'Jonas';
// console.log(`I'm ${2037 - 1991} years old ${me}`);
// //me is an expression, and that years is also an expresion but
// //U can not write a statmente like:
// 	// const me = 'Jonas';
// //in that {} because is an statment


// // =======================================================
// // =========== TERNARY CONDITIONAL ========================
// // =======================================================
const age = 18;

age >= 18 ? console.log('I wanna drink my beer'):
console.log('Just watter little boy');

//CONDITION, IF part, and else part

//A VALUE NEEDS AN EXPRESION SO U CAN DO THIS

const drink = age >= 18 ? 'wine': 'water';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);
//OR u can put that, because is an expresion, or u can make it a value
console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
console.log(`I like to drink ${drink}`);
