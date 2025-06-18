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

// == (2)
// === (3)

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
