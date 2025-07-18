// const database = [
//   {
//     username: "Karl",
//     password: "secret",
//     newsFeed: "Secondly, let’s look at the very basic way this can operate.",
//   },
//   {
//     username: "Sarah",
//     password: "secret2",
//     newsFeed: "Lorem loermf bhdsfbs",
//   },
//   {
//     username: "david",
//     password: "secret3",
//     newsFeed: "This is a different user",
//   },
// ];

// let usernamePrompt = prompt("Enter your username: ");
// let passwordPrompt = prompt("Enter your password: ");

// console.log(database[0]);

// function signIn(user, pwd) {
//   const username = database[0].username;
//   const password = database[0].password;
//   const newsFeed = database[0].newsFeed;
//   //   console.log(database[0].username);
//   if (user === username && pwd === password) {
//     // return newsFeed;
//     console.log(newsFeed);
//   }
// }
// console.log(signIn(usernamePrompt, passwordPrompt));

// let usernamePrompt = prompt("Enter your username: ");
// let passwordPrompt = prompt("Enter your password: ");

// function signIn() {
//   if (
//     usernamePrompt === database[0].username &&
//     passwordPrompt === database[0].password
//   ) {
//     // return newsFeed;
//     console.log(database[0].newsFeed);
//   } else if (
//     usernamePrompt === database[1].username &&
//     passwordPrompt === database[1].password
//   ) {
//     console.log(database[1].newsFeed);
//   } else if (
//     usernamePrompt === database[2].username &&
//     passwordPrompt === database[2].password
//   ) {
//     console.log(database[2].newsFeed);
//   } else {
//     console.log("Invalid username or password");
//   }
// }

// let usernamePrompt = prompt("Enter your username: ");
// let passwordPrompt = prompt("Enter your password: ");

// function signIn() {
//   let isFound = [];
//   // let num = 0;

//   for (let i = 0; i <= database.length - 1; i++) {
//     if (
//       usernamePrompt === database[i].username &&
//       passwordPrompt === database[i].password
//     ) {
//       // console.log(database[i].newsFeed);
//       isFound.push(database[i].newsFeed);
//       // num = num + i;
//     }
//   }
//   // if (num === 0 || num > 0) {
//   //   console.log(database[num].newsFeed);
//   // } else {
//   //   console.log("Invalid username or password");
//   // }

//   console.log(isFound);

//   if (isFound.length > 0) {
//     console.log(isFound.join(" "));
//   }
// }
// signIn();

// Question 2
// const database2 = [
//   {
//     username: "Alice",
//     password: "apple123",
//     cart: ["Apples", "Bananas", "Oranges"],
//   },
//   {
//     username: "Bob",
//     password: "bread456",
//     cart: ["Milk", "Bread", "Eggs"],
//   },
//   {
//     username: "Chika",
//     password: "chips789",
//     cart: ["Chips", "Juice", "Cookies"],
//   },
// ];

// Higher Order Functions
// forEach()
// map()
// find()
