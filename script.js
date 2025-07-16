/*
JS Class 1

// alert("How was class today?");

// console.log("Temitope is my Friend");

// console.log(40 + 8 + 23 - 10);

// console.log(5 ** 5);

// alert("I want this instead");

// console.log("Adams");
// console.log(55);
// console.log(55 - 20);
// console.log(true);
// console.log(false);

// console.log("Temitope is my Friend");

// Declaring a variable
const PI = 3.142;
// let GRAVITY = 9.81;

let num1 = 50; // this is a number data type
let first_name = "Adams"; // this is a string value
let last_name = "Abdul";
let firstNamePerson = "Kareema";
let first_name_person = "Kareema";
let $num_1 = 20;

let year2020 = "Covid Year";
let year_2023 = "Election Year";
let $num2 = 34;

let firstName = "Kwame";
let lastName = "Mensah";
let country = "Ghana";
let city = "Kumasi";
let age = 50;
let isMarried = true; // boolean value

console.log(firstName); // This is my first name
console.log(lastName);
console.log(country);
console.log(city);
console.log(age);
console.log(isMarried);

console.log(firstName, lastName, country, city, age, isMarried);

let gravity = 9.81; // this is a const variable for gravity
const boilingPoint = 100;
console.log(gravity, boilingPoint, PI);

// COMMENT

// Single Line
// Multi-line
// third line

*/

/*
// let, const and Data types
// Let
let age = 20; // declaring a variable
// console.log(age);

age = 21; // reassigning a variable or mutating a variable
console.log(age);

let noOfChildren; // empty variable

noOfChildren = 5;
// console.log(noOfChildren);

let fruit = "Mango";
// console.log(fruit);

fruit = "Apple";
// console.log(fruit);

// Const
const city = "Nairobi";
// console.log(city);

const yearOfBirth = 2000;
const pi = 3.142;

// Var
var course = "javascript";
course = "python";
// console.log(course);

// var firstName = "Alice";
// var firstName = "Bob";

// console.log(firstName);

// Data types
// Primitive
// Number

// Strings
const empty = "";
console.log(empty);

const a = "A";
const b = "JavaScript is an 'amazing' language";
// console.log(b);
// below esc key
const c = `We can also create a string using a backtick`;
console.log(c);

const d = "5";
console.log(d);

// Booleans
const yes = true;
const no = false;
console.log(yes);

console.log(3 > 2);
console.log(3 > 10);

// Undefined
let lastName;
console.log(lastName);

lastName = "Isaac";
console.log(lastName);

// Null
let emptyValue = null;
console.log(emptyValue);

// Non-Primitive or Object

// array
const listOfFruits = [
  "mango",
  "apple",
  "grapes",
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
];
console.log(listOfFruits);

// object
const myObject = {
  firstName: "Annionting", // string
  LastName: "Chidi", // string
  age: 20, // number
  gender: "female", // string
  isMarried: false, // boolean
  hobbies: ["music", "football", "reading"],
};
console.log(myObject);

console.log(typeof "victor"); // string
console.log(typeof 90); // number
console.log(typeof true); // boolean
console.log(typeof null); // null or undefined
console.log(typeof undefined); // undefined
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof (2 > 4)); // booloean

// control structure
// if () {}

*/

/*
// Operators
// 1. Arithmetic Operator
let a = 10;
let b = 5;
let c = a + b;
console.log(c);

const sellingPrice = 700;
const costPrice = 500;
const profitValue = sellingPrice - costPrice;
console.log(profitValue);

// calculating the area of a circle
// Pi * radius * radius
const PI = 3.14;
let radius = 100;
const areaOfCircle = PI * radius * radius;
console.log(areaOfCircle);

console.log(c, profitValue, areaOfCircle);

let x = 5;
let y = 3;
let z = 10;
console.log(z / x);
console.log(x % y);
console.log(z % x);

// String Concatenation
let word = "Hello World";
let word_1 = "Hello";
let word_2 = "World";
console.log(word);
console.log(word_1 + " " + word_2);

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName);

console.log("My " + "name is" + " " + fullName + ".");

// 2. Assignment Operator
let d = 2 + 5 + 8 - 2;
// console.log("First: ", d); // 13

d += 10; // d = d(13) + 10
// console.log("Second: ", d); // 23

d -= 5; // d = d(23) - 5
// console.log("Third: ", d);

let e = 3;
// console.log(e);

e = e + 2; // e += 2
// console.log(e);

let f = 10;
// console.log(f);

// f = f + 20;
f += 20;
// console.log(f);

let g = 2;
// console.log(g);

// g = g * 10;
g *= 10;
// console.log(g);

// 3.  Comparison Operators
const ageAdult = 18;
let ageJohn = 20;
let ageBisi = 22;
let ageBoolean = ageJohn < ageBisi; // true
// console.log(ageBoolean);

// console.log(ageJohn >= ageAdult); // 18 is inclusive
// console.log(ageJohn > 18);

ageBisi = 18;
// console.log(ageBisi <= 18); // true

// equality
// == (2)
// === (3)
// ! NOT
// let q = 3;
// let p = "3";

// console.log(3 == "3"); // loose equality  true
// console.log(q === p); // strict equality  false

// loose equality
// console.log(10 == 10); // true
// console.log(10 === 10); // true

// console.log(2 == 3); // false
// console.log(0 == 0); // true
// console.log(0 == false); // true
// console.log(0 == ""); // true
// console.log(1 == true); // true

// console.log("Hello" == "World"); // false
// console.log("Hello" == "Hello"); // true
// console.log(2 == "2"); // true

// strict equality
// console.log(10 === 10); // true
// console.log(2 === 3); // false
// console.log("Hello" === "World"); // false
// console.log("Hello" === "Hello"); // true
// console.log(2 === "2"); // false
// console.log(0 === 0);
// console.log(0 === false);
// console.log(0 === ""); // false
// console.log(1 === true); // false

// not equal to
// != loose not equal to
// console.log(2 != 3);
// console.log("Hello" != "World");
// console.log(2 != "2");
// console.log(1 != true); // false

// !== strict not equal to
// console.log(2 !== 3);
// console.log("Hello" !== "World");
// console.log(2 !== "2"); // true
// console.log(1 !== true); // true

// function ordinary(val) {
//   if (0 === "") {
//     // true
//     console.log("This is real!");
//   }
// }
// ordinary();

// we use ! for the opposite
console.log(!(3 > 4));

console.log(word_1);
console.log(word_1.length);

console.log("I am Sherif");
console.log("I am Sherif".length);
*/

/*
// 4. Logical Operator
// && AND  ampersand
// || OR   pipe
// !  NOT  exclamation

// comparison operator  &&  comparison operator

// && AND
let personAge_1 = 20;
let booleanValue = personAge_1 == 18 && personAge_1 > 30;

// true and true  = true
// false and true = false
// true and false = false
// false and false = false

if (booleanValue) {
  console.log("Old");
}

//  ||  OR gate
// let personAge_2 = 30;

if ("hello" == 3 || 10 == 5) {
  console.log("Old");
}

if (10 == 1 || 5 == 1) {
  console.log("YES");
}
// true or true = true
// false or true = true
// true or false = true
// false or false = false

//  !  NOT gate
if (!false) {
  console.log("YES");
}

console.log(5 == 5 && !(5 == 5));

// Unary Operator
// ++ increment
// post increment & pre increment
let countInc = 1;
// count = count + 1;

countInc++; // 2
console.log(countInc); // 2

++countInc; // + 1 = 3
console.log(countInc); // 3

// -- decrement
let countDec = 2;
// countDec = countDec - 1;
countDec--;
// console.log(countDec);

let count = 10;
count++;
// count = count + 1

++count; // count = count + 1
console.log(count); // 11

count--; // count = count - 1
console.log(count);

// Ternary Operator
// condition ? val1 : val2

let age = 18;

age < 10 ? console.log("Adult") : console.log("Minor");

// Strings and Template Literals
const firstName = "Kwame";
const lastName = "Mensah";
const country = "Ghana";
const city = "Kumasi";
const birthYear = 2005;
const thisYear = 2025;
const isMarried = true;
const job = "footballer";

const aboutKwame = "I am" + " " + firstName + " " + lastName;
console.log(aboutKwame);

// ${}
const aboutMensah = `I
 am ${firstName} ${lastName}, a ${thisYear - birthYear}years old ${job}`;
console.log(aboutMensah);

console.log(
  `We can use the 
  backtick to write any 
  length of string we want to. yhjkfbsdbcjascbdsgacashcvasjdhaxvz`
);
*/

/*
// Control Structures
// 1. Conditionals
// a. if statement

let num = 3;

if (num > 0) {
  // true
  console.log(num, "code 1");
}

// truthy
// if (" ") {
//   // truthy
//   console.log(num + " is a positive number", "code 2");
// }

// if ({}) {
//   // truthy   {}  []
//   console.log(num + " is a positive number", "empty array");
// }

////// falsy

// if ("") {
//   // falsy
//   console.log(num + " is a positive number", "code 2");
// }

if (false) {
  console.log(num + " is a positive number", "code 2");
}

if (0) {
  // falsy
  console.log(num + " is a positive number", "code 2");
}

if (null) {
  // falsy
  console.log(num + " is a positive number", "code 2");
}

if (undefined) {
  // falsy
  console.log(num + " is a positive number", "code 2");
}

// b. if-else statement

let isRaining = true;

if (isRaining) {
  console.log("Remember to take your coat");
} else {
  console.log("You have a nice day!");
}

const age = 17;
const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log("You can have a driver's license");
// } else {
//   console.log("You are still a Minor");
// }

// const x = isOldEnough - 18;

if (isOldEnough) {
  console.log("You can have a driver's license");
} else {
  console.log(
    `You cannot have a driver's license yet. You still have ${
      18 - age
    } year(s) left.`
  );
}

// const birthYear = 2001;
// let baby;
// console.log(baby);

// if (birthYear >= 2008) {
//   baby = "Gen Z";
//   console.log(`You are a ${baby} baby`);
// } else {
//   baby = "Millennial";
//   console.log(`You are a ${baby} baby`);
// }

// console.log(baby);

const birthYear = 2000;
let baby;
// console.log(baby); // undefined

if (birthYear >= 2008) {
  baby = "Gen-Z";
  console.log(`You are a ${baby} baby`);
} else {
  baby = "Millennial";
  console.log(`You are a ${baby} baby`);
}
console.log(baby);

// c. else-if statement
// let score = prompt("Enter a number: ");
let score = 67;
// posible conditions
// 1. 0 - 39 --> F
// 2. 40 - 49 --> D
// 3. 50 - 59 --> C
// 4. 60 - 69 --> B
// 5. 70 - 100 --> A

if (score >= 0 && score <= 39) {
  console.log("Grade: F");
} else if (score >= 40 && score <= 49) {
  console.log("Grade D");
} else if (score >= 50 && score <= 59) {
  console.log("Grade C");
} else if (score >= 60 && score <= 69) {
  console.log("Grade B");
} else if (score >= 70 && score <= 100) {
  console.log("Grade A");
} else {
  console.log("Invalid input");
}

// let a = prompt("Enter a number: ");
// let b = prompt("Enter another number: ");

let c = a * b;
console.log(c);
*/

/**
 * Use the BMI example from Challenge #A, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉
 */

/**
 * 
 * There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).
3. Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
 */

/*
let teamDolphins1 = 97;
let teamDolphins2 = 112;
let teamDolphins3 = 113;

const aveteamDolphins = (teamDolphins1 + teamDolphins2 + teamDolphins3) / 3;

console.log(aveteamDolphins);

let teamKoalas1 = 109;
let teamKoalas2 = 95;
let teamKoalas3 = 123;

const aveTeamKoalas = (teamKoalas1 + teamKoalas2 + teamKoalas3) / 3;
console.log(aveTeamKoalas);

// T.A > T.B
// T.B > T.A
// T.A == T.B

// if (aveteamDolphins > aveTeamKoalas) {
//   console.log(`Dolphins Win`);
// }

// if (aveTeamKoalas > aveteamDolphins) {
//   console.log(`Koalas Win`);
// }

// if (aveteamDolphins == aveTeamKoalas) {
//   console.log(`They have the same average score`);
// }

if (aveteamDolphins > aveTeamKoalas && aveteamDolphins >= 100) {
  console.log(`Dolphins Win and Dolphin has ${aveteamDolphins}`);
} else if (aveTeamKoalas > aveteamDolphins && aveTeamKoalas >= 100) {
  console.log(`Koalas Win and Koala has ${aveTeamKoalas}`);
} else if (
  aveteamDolphins == aveTeamKoalas &&
  aveteamDolphins > 100 &&
  aveTeamKoalas > 100
) {
  console.log(`They both have the same average score`);
} else {
  console.log(`No team wins the trophy. Rematch!`);
}

// Mark's BMI (28.3) is higher than John's (23.9)!
console.log(
  `Mark's BMI ${aveteamDolphins} is higher than John's ${aveTeamKoalas}`
);

// What are the Arithmetic operators: - * + /
// What are the Comparisons: > < ==(loose) ===(strict) <= >= != !==
// What are the Logical operators: ||(OR) &&(AND) !(NOT)

let fname = "Jane";
const age = 20;
let isStudent = true;

console.log(typeof fname); // string
console.log(typeof age); // number
console.log(typeof isStudent); // boolean

let x = "hello";
let y = 42;
let z = null;
let a;
let isCool = false;

console.log(typeof z); // object
console.log(typeof a); // undefined
*/

/*
// let fName = prompt("Enter your name: ");

// if (fName === "Billy" || fName === "Ann") {
//   console.log("Welcome!");
// } else {
//   console.log("Access denied");
// }

// let fName = prompt("Enter your name: ");
// let ageInput = prompt("Enter your age");
// let age = Number(ageInput); //Number()  //.trim()

// if (isNaN(age)) {
//   console.log(`Please input a valid number`);
// } else if (age >= 18) {
//   console.log(`Welcome to the movie site ${fName}`);
// } else {
//   console.log(`Not up to the age`);
// }

// if (age >= 18) {
//   console.log(`Welcome to the movie site ${fName}`);
// } else {
//   console.log(`Not up to the age`);
// }

// Question 1: Age Comparison
// Declare a variable myAge and assign it a number.
// Ask the user for their age using prompt() and compare it with myAge.
// Output who is older and by how many years.
// Bonus:
// Can you detect if the input is not a number?
// What if someone enters nothing as a name?

// let myAge = 20;
// let userAge = prompt("Enter you age: ");
// let userAgeInput = Number(userAge);

// if (isNaN(userAgeInput)) {
//   // false
//   console.log("Age must be a number");
// } else if (myAge > userAgeInput) {
//   console.log(`i am older than you with ${myAge - userAgeInput}years`);
// } else if (myAge < userAgeInput) {
//   console.log(`you are older than I with ${userAgeInput - myAge}years`);
// } else {
//   console.log("We are age mates");
// }

// myAge > userAgeInput
//   ? console.log(`i am older than you with ${myAge - userAgeInput}years`)
//   : console.log(`you are older than I with ${userAgeInput - myAge}years`);

// Question 3: Even or Odd Number
// Ask the user to enter a number.
// Check if the number is even or odd using the modulus (%) operator.
// Display the result accordingly.
// Write a script that checks if a number is even or odd.

// let number = prompt("Enter a number: ");

// if (number % 2 === 0) {
//   console.log(number + " is an even number");
// } else {
//   console.log(number + " is an odd number");
// }

// Question 4: Determine the Season
// Create a variable called month and assign it a string value representing a month (e.g., "October").
// Write a script to determine and display the season based on the month.
// Seasons:
// 	•	Autumn: September, October, November
// 	•	Winter: December, January, February
// 	•	Spring: March, April, May
// 	•	Summer: June, July, August

// let month = prompt("Enter a month: ");
// let capitalOfMonth = month.toLowerCase().trim();

// if (
//   capitalOfMonth == "december" ||
//   capitalOfMonth == "january" ||
//   capitalOfMonth == "febuary"
// ) {
//   console.log(`${capitalOfMonth} is in winter`);
// } else if (
//   capitalOfMonth == "march" ||
//   capitalOfMonth == "april" ||
//   capitalOfMonth == "may"
// ) {
//   console.log(`${capitalOfMonth} is in spring`);
// } else {
// }

// toUpperCase()
*/

/*
// Switch Statement

let weather = "Rainy";

//possible cases
// cloudy
// rainy
// windy
// sunny

switch (weather) {
  case "cloudy":
    console.log("It might be cold, take you jacket with you.");
    break;

  case "rainy":
    console.log("You need a rain coat.");
    break;

  case "windy":
    console.log("It is going to be windy today.");
    break;

  case "sunny":
    console.log("It is going to be a hot day.");
    break;

  default:
    console.log("Just a normal day!");
}

let day = "saturday";
// monday
// tuesday
// wednesday
// thursday
// friday
// saturday
// sunday

switch (day) {
  case "monday":
    console.log("Today is " + day.toUpperCase());
    break;

  case "tuesday":
    console.log("Today is " + day.toUpperCase());
    break;

  case "wednesday":
    console.log("Today is " + day.toUpperCase());
    break;

  case "thursday":
    console.log("Today is " + day.toUpperCase());
    break;

  case "friday":
    console.log("Today is " + day.toUpperCase());
    break;

  case "saturday":
    console.log("Thank God it is weekend");
    break;

  case "sunday":
    console.log("Thank God it is weekend");
    break;

  default:
    console.log("Input a valid day of the week");
}

let num = "p";
// positive
// negative
// zero

// switch (true) {
//   case num > 0:
//     console.log("Number is a positive number");
//     break;

//   case num === 0:
//     console.log("Number is zero");
//     break;

//   case num < 0:
//     console.log("Number is a negative number");
//     break;

//   default:
//     console.log("Please input a valid number!");
// }

// == equivalent

// if (num > 0) {
//   console.log("Number is a positive number");
// } else if (num === 0) {
//   console.log("Number is zero");
// } else if (num < 0) {
//   console.log("Number is a negative number");
// } else {
//   console.log("Please input a valid number!");
// }

// Ternary
let isRaining = false;

isRaining ? console.log("It is raining") : console.log("It is NOT raining");

// num > 0
//   ? console.log("Number is a positive number")
//   : num === 0
//   ? console.log("Number is zero")
//   : num < 0
//   ? console.log("Number is a negative number")
//   : console.log("Please input a valid number!");

// LOOPS
// Print out number 0 - 100 with the console.log() function
// console.log(0);
// console.log(1);
// console.log(2);

// for loop
// initializiation
// condition
// increment / decrement

// increasing
// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }
// Print out number 1 - 5 with the console.log() function
// for (let i = 1; i <= 5; i++) {
//   console.log(`Number: ${i} 90`);
// }

// Count down from 10 - 0
// for (let j = 10; j >= 5; j--) {
//   console.log(`Number: ${j} `);
// }

// 0 * 0 = 0
// 1 * 1 = 1
// 2 * 2 = 4
// 3 * 3 = 9
// 4 * 4 = 16
// 5 * 5 = 25

// for (let i = 0; i <= 5; i++) {
//   console.log(`${i} * ${i} = ${i * i}`);
// }

for (let i = 0; i <= 5; i = i + 2) {
  console.log(`Number: ${i}`);
  console.log("Helo a");
}
*/

// while loop
// increasing
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let i = 0;
// while (i <= 10) {
//   console.log(i, "Helooooo!");
//   // step size
//   i++;
// }

// let j = 10;
// while (j > 0) {
//   console.log(j, "Nah!");
//   j--;
// }

// Do while loop
// increasing
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let i = 0;
// do {
//   console.log(i, "Helooooo!");

//   i = i + 2;
// } while (i <= 10);

// // the Do-while must run atleast ones.

// Break
// let random = 9;

// for (let i = 0; i <= 10; i++) {
//   if (i === random) {
//     break;
//   }
//   console.log(i);
// }

// Continue   ... skip
// for (let j = 0; j <= 10; j++) {
//   if (j === 6 || j === 8) {
//     continue;
//   }
//   console.log(j);
// }

// dom

// return (isLoggedIn ? <Dashboard /> : <Login />);

// Write a loop that makes the following pattern using console.log():
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######

// let tree = "";
// for (let i = 1; i <= 10; i++) {
//   // counter
//   tree = tree + "#"; // 1 #  tree += "#"
//   console.log(tree);
// }

// for (let i = 1; i <= 10; i++) {
//   // counter
//   // 1 #  tree += "#"
//   console.log(i, "tree");
// }

/*
// Object  - Arrays [ordered] and Objects {}

// Arrays


let fruit1 = "apple";
let fruit2 = "banana";
let fruit3 = "orange";
// console.log(fruit2);

// arrayOfFruits
let fruit = ["apple", "banana", "orange", "grape", "apple"];
// 0 - apple
// 1 - banana
// 2 - orange

// .length

// console.log(fruit);
// console.log("Number of fruit", fruit.length);
// console.log(fruit[0]); // fruit at 1
// console.log(fruit[1]); // fruit at 2
// // console.log(fruit[2]);
// // console.log(fruit[3]);
// console.log(fruit[4]);

// console.log("Hel   lo".length);

// last element in an array
// console.log(fruit[fruit.length - 1]);
// console.log(fruit[fruit.length - 1]);

// Modifying an Array
console.log(fruit[0]);

fruit[0] = "lemon";
console.log(fruit);
console.log(fruit[0]);

fruit[2] = 30;
console.log(fruit);
console.log(fruit[2]);

//  arrayOfNums
// let arrayOfNums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// console.log(arrayOfNums);
// console.log(arrayOfNums[4]);
// console.log("Number of integers: ", arrayOfNums.length);

// console.log(arrayOfNums[9]);
// let lastIndex = arrayOfNums.length - 1;
// // console.log(lastIndex);
// console.log(arrayOfNums[lastIndex]);
*/

/*
// Common Array Methods

// Create Array of Countries
// Array of string
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
console.log(countries);
console.log(countries[3]);

// Array of mixed data types
const arr = [
  "Martins", // string
  25, // number
  true, // boolean
  { county: "Finland", city: "Helsinki" }, // obj
  ["HTML", "CSS", "JS", "REACT"], // array
];
console.log(arr);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[4][2]); // JS

// 1. Adding Items into an Array
// .push() & .unshift()
const nums = [1, 2, 3];
// console.log(nums);

nums.push(4);
// console.log(nums);

nums.push(5, 6);
// console.log(nums);

nums.unshift(0);
// console.log(nums);

nums.unshift("to begin");
console.log(nums);

// 2. Removing Items from an Array
// .pop() & .shift()

// nums.pop();
// console.log(nums);

// nums.pop();
// console.log(nums);

// nums.shift();
// console.log(nums);

// nums.shift();
// console.log(nums);

// 3. Reversing an Array
// nums.reverse();
// console.log(nums);

// nums.reverse();
// console.log(nums);

// 4. concatenating Array
// const firstList = [1, 2, 3];
// const secondList = [4, 5, 6];

// console.log(firstList);
// console.log(secondList);

// const thirdList = firstList.concat(secondList);
// const fourthList = secondList.concat(firstList);
// console.log(thirdList);
// console.log(fourthList);

// 5. Searching for Items in an Array
// .indexOf()
// console.log(nums.indexOf("to begin"));
// console.log(nums.indexOf(2));
// console.log(nums.indexOf("array"));
// console.log(nums.indexOf("10"));

// if (nums.indexOf(2) === -1) {
//   console.log("value does not exist");
// } else {
//   console.log("Value exists");
// }

// // Using a Ternary Operator
// nums.indexOf(2) === -1
//   ? console.log("value does not exist")
//   : console.log("Value exists");

// 6. Joining Items in an Array
// .join()
// const names = ["Martins", "Samuel", "Abdul", "Brook"];
// console.log(names);

// const namesString = names.join();
// console.log(namesString);

// console.log(names.join(" "));
// console.log(names.join(", "));
// console.log(names.join(" # "));

// 7. Changing a string to an Array
// .split()
let js = "javascript";
console.log(js);
let jsCap = js.toUpperCase();
console.log(jsCap);

let jsCapArr = jsCap.split(); // ['JAVASCRIPT']
// console.log(jsCapArr);

// console.log(jsCap.split("")); // ['J', 'A', 'V', 'A', 'S', 'C', 'R', 'I', 'P', 'T']

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// console.log(companiesString.split());
// console.log(companiesString.split(" "));

const companiesStringArr = companiesString.split(", ");
// console.log(companiesStringArr);

// // 8. Slicing an Array
// // .slice()
// const companiesStringArrNew = companiesStringArr.slice();
// console.log(companiesStringArrNew);

// const companiesArrCut = companiesStringArrNew.slice(1, 3);
// console.log(companiesArrCut);

// For loop with an Array
const numbers = [1, 2, 3, 4, 5, 6, 7];
numbers[7];

for (let i = 0; i <= 10; i++) {
  console.log(numbers[i]);
}

for (let i = 0; i <= 10; i++) {
  console.log(companiesStringArr[i]);
}

// Exercises: Level 1
// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]

// const mernStack = ['MongoDB', 'Express', 'React', 'Node']
// Iterate 0 to 10 using for loop, do the same using while and do while loop
// Iterate 10 to 0 using for loop, do the same using while and do while loop
// Iterate 0 to n using for loop
// Write a loop that makes the following pattern using console.log():
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######
// Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

*/

/*
// For loop with an Array
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// numbers[7];

// for (let i = 0; i <= numbers.length - 1; i++) {
//   console.log(numbers[i]);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(companiesStringArr[i]);
// }

// const names = ["Martins", "Samuel", "Abdul", "Brook"];

// console.log(names.length); // 4
// for (let i = 0; i <= names.length - 1; i++) {
//   console.log(names[i]);
// }

// sum of all items in an array
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// let sum = 0; // 1, 3, 6, 10
// // console.log(sum);

// for (let i = 0; i <= numbers.length - 1; i++) {
//   sum = sum + numbers[i];
//   // console.log(sum);
// }
// console.log(sum); //  28

// const numbers = [1, 2, 3, 4, 5];
// let newArr = [];
// let mulNum = 0;

// for (let i = 0; i <= numbers.length - 1; i++) {
//   mulNum = numbers[i] * numbers[i];
//   newArr.push(mulNum);
//   console.log(newArr);
// }

const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];

// let newArCountries = [];
// // let strCou = "";

// for (let i = 0; i <= countries.length - 1; i++) {
//   // strCou = countries[i].toUpperCase();
//   // newArCountries.push(strCou);

//   newArCountries.push(countries[i].toUpperCase());
// }
// console.log(newArCountries.reverse());

// for (let i = 0; i <= countries.length - 1; i++) {
//   console.log(countries[i]);
// }

// for-of-loop

// for (let country of countries) {
//   console.log(country);
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// for (num of numbers) {
//   console.log(num);
// }

// const courseName = "JAVASCRIPT";
// for (letter of courseName) {
//   console.log(letter);
// }

const numbers = [5, 2, 30, 4, 50, 62, 7];
let sum = 0; // 1, 3, 6, 10
// console.log(sum);

for (let num of numbers) {
  sum = sum + num;
}
console.log(sum);

// for (let num of numbers) {
//   sum = sum + num;
// }
// console.log(sum);

// for (let i = 0; i <= numbers.length - 1; i++) {
//   sum = sum + numbers[i];
//   // console.log(sum);
// }
// console.log(sum); //  28

// Objects

const person1 = {
  name: "Alice", // key-name & value-"Alice"
  age: 25,
  isStudent: true,
};

// console.log(person1);
// console.log(person1.name);
// console.log(person1.age);

// person1.location = "Lagos";
// console.log(person1.location);

// const arrayOfData = [
//   {
//     name: "Alice",
//     age: 25,
//     isStudent: true,
//   },
//   {
//     name: "Moh",
//     age: 20,
//     isStudent: true,
//   },
//   {
//     name: "Jeff",
//     age: 35,
//     isStudent: true,
//   },
// ];

const person2 = {
  firstName: "Mark",
  lastName: "Abel",
  "parents name": "Biodun",
  age: 20,
  isMarried: false,
  country: "Nigeria",
  skills: ["HTML", "CSS", "JS"],
  address: {
    city: "Lagos",
    street: "Owo",
    zipcode: 10001,
  },
};

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.skills);
console.log(person2.skills[1]);
console.log(person2.skills[2]);
console.log(person2.address);
console.log(person2.address.street);

person2.age = 21;
console.log(person2.age);
console.log(person2);

person2.title = "student";

// Bracket Notation
console.log(person2.firstName);
console.log(person2["firstName"]);

console.log(person2["parents name"]);

*/

/*
// Functions

function myLog() {
  console.log("I fhfbhf hgfsduyadsjfbdshyfsd hbudfhsc hbdf");
}
myLog();

// const anythig = "I fhfbhf hgfsduyadsjfbdshyfsd hbudfhsc hbdf";

// alert();
// prompt();
// console.log("FUnction");

// console object

// function greet() {
//   console.log("Hello and Welcome to Class Today");
// }
// greet();

// Return Values

// function addTwoNumbers() {
//   // console.log("Anything"); /// this level
//   let a = 3;
//   let b = 5;

//   let total = a + b;
//   return total;
// }
// // addTwoNumbers();
// console.log(addTwoNumbers());

// function greet() {
//   let grt = "Hello and Welcome to Class Today";
//   return grt;
// }
// console.log(greet());

// Function Declaration
// function greet() {
//   return "Hello, Welcome";
// }
// console.log(greet());

// Function Expression
// const sayHi = function () {
//   return "Hi there";
// };
// console.log(sayHi());

// const greet = function () {
//   console.log("Hello and Welcome to Class Today");
// };
// greet();

// Arrow functions
// () => {};

// const greet2 = () => {
//   // console.log("Here");
//   return "Hello, You are welcome";
// };
// console.log(greet2());

// const arrowFunc = () => {
//   console.log("This is an arrow function");
// };
// arrowFunc();
// console.log(arrowFunc());

// Anonymous functions  self invoke function (IIEF)
// (function() {})
// (function () {
//   console.log("This is an anonymous function");
// })();

// Function without Parameter
// A function which makes a number square
function square() {
  let num = 12;
  let sqr = num * num;
  return sqr;
}
console.log(square());

// A function which prints out a person’s full name
// function printFullName() {
//   let firstName = "Tobi";
//   let lastName = "Tope";
//   let fullName = firstName + " " + lastName;
//   // let fullName = `${firstName} ${lastName}`;
//   return fullName;
// }
// console.log(printFullName());

// // Function with Parameter
// function greetUser(name) {
//   // parameter
//   return `Hello, ${name}`;
// }
// console.log(greetUser("Alabi")); // arguments

// // refactoring
// function square(num) {
//   let sqr = num * num;
//   return sqr;
// }
// console.log(square(70));
// console.log(square(20));
// console.log(greetUser("Vic"));
// console.log(square(1000));

// console.log(greetUser("Amoto"));
// console.log(greetUser("John"));

// Area of a Circle
// Math functions......
// Math.random()
// Math.PI
// Math.ceil()
// Math.trunc()
// Math.floor()

function areaOfCircle(r) {
  // PI * r * r
  // r ** 2  === r * r
  // console.log(Math.PI);
  // let result = Math.PI * r * r;
  let result = Math.PI * r ** 2;
  return Math.ceil(result);
}
console.log(areaOfCircle(2));
console.log(areaOfCircle(3));
console.log(areaOfCircle(4));

// Functions with more parameters and an array
function printFullName(firstName, lastName, age) {
  let fullName = `${lastName} ${firstName}`;
  return fullName;
}
console.log(printFullName("Tope", "Alabi"));
*/

// Function that sums all items of an array
// const numbers = [1, 2, 3, 4, 5];

// function sumOfArray(array) {
//   let sum = 0;
//   for (let i = 0; i <= array.length - 1; i++) {
//     sum = sum + array[i];
//   }
//   // console.log(sum);
//   return sum;
// }
// console.log(sumOfArray(numbers)); // 15
// console.log(sumOfArray([2, 4, 5, 6, 7, 8, 9, 90]));

// // functions with default parameters
// function printFullName(firstName, lastName, age = 20) {
//   let fullName = `I am ${lastName} ${firstName} and I am ${age} years old`;
//   return fullName;
// }
// console.log(printFullName("Tope", "Alabi", 35));

// function greetUser(name = "User") {
//   console.log("Hello,  " + name + ". Welcome to today’s class");
// }
// greetUser("Tope");

// function calcBirthAge(birthYear, currentYear = 2025) {
//   let age = currentYear - birthYear;
//   return age;
// }
// console.log(calcBirthAge(2000));

// Scope and Hoisting

// Global Scope
// let globalScope = "I am global";

// const sum = 90 + 70;
// console.log(sum);
// console.log(globalScope);

// function showGlobal() {
//   console.log(globalScope);
// }
// showGlobal();

// Local Scope
// let sum = 0;
// function showGlobal() {
//   sum = 90 + 70;
//   console.log(sum);
// }
// console.log(sum);
// showGlobal();

// function myFunction() {
//   let localVar = "I'm local";
//   console.log(localVar);
// }
// myFunction();

// console.log(localVar);

// Hoisting
// let globalScope = "I am global";
// console.log(globalScope);

// const global = "I am global";
// console.log(globalScope);

// Example
// Greet Based on Time
// function greetUser(name, hr) {
//   if (hr >= 6 && hr < 12) {
//     return `Good morning ${name}`;
//   } else if (hr >= 12 && hr < 17) {
//     return `Good afternoon ${name}`;
//   } else if (hr >= 17 && hr < 24) {
//     return `Good evening ${name}`;
//   } else {
//     return "";
//   }
// }
// console.log(greetUser("Karl", 23));

// function greetUser(hour) {
//   if (hour < 12) {
//     return "Good morning!";
//   } else if (hour < 18) {
//     return "Good afternoon!";
//   } else {
//     return "Good evening!";
//   }
// }
// console.log(greetUser(10));

// closure

// const day = now.getDay();
// console.log(day);

// const month = now.getMonth();
// console.log(month);
// console.log(new Date("2020-03-09"));

// function greetByTime(name) {
//   const now = new Date();
//   // console.log(now);
//   const hour = now.getHours();
//   // console.log(hour);

//   if (hour >= 6 && hour < 12) {
//     return `Good morning ${name}`;
//   } else if (hour >= 12 && hour < 17) {
//     return `Good afternoon ${name}`;
//   } else if (hour >= 17 && hour < 24) {
//     return `Good evening ${name}`;
//   } else {
//     return "It is midnight";
//   }
// }
// console.log(greetByTime("Bisi"));

// DOM - Document Object Model

// DOM Element Selectors
// .getElementsByTagName()
// const header = document.getElementsByTagName("h1");
// console.log(header);
// console.log(header[0]);

// // .getElementById()
// const title = document.getElementById("first-title");
// console.log(title);
// console.log(document.getElementById("second-title"));

// // .getElementByClassName()
// const titles = document.getElementsByClassName("title");
// console.log(titles[2]);

// // .querySelector()
// const intro = document.querySelector(".intro");
// console.log(intro);

// const titleHead = document.querySelector(".title");
// console.log(titleHead);

// console.log(document.querySelector("#second-title"));

// console.log(document.querySelector("p"));

// .querySelectorAll()
// console.log(document.querySelectorAll("#second-title")[0]);
