const lists = `
                <li>Our Challenge Done</li>
                <li>Our Challenge is Ongoing</li>
                <li>Our Challenge is Coming</li>
                <li>Our Challenge has Ended</li>
                 <li>A new Challenge will begin soon</li>
                <li>Our Challenge has Ended</li>
                 <li>A new Challenge will begin soon</li>
                <li>Our Challenge has Ended</li>
                 <li>A new Challenge will begin soon</li>
                <li>Our Challenge has Ended</li>
                 <li>A new Challenge will begin soon</li>
                <li>Our Challenge has Ended</li>
                 <li>A new Challenge will begin soon</li>
                `;

// // console.log(lists);
// const ulEl = document.querySelector("ul");
// // console.log(ulEl);

// ulEl.innerHTML = lists;
// ulEl.classList.add("listItems");

// console.log(document.body);

// const listItems = document.querySelectorAll("li");
// console.log(listItems);

// // for-of-loop
// // for (const item of listItems) {
// //   item.style.backgroundColor = "red";
// // }

// for (let i = 0; i <= listItems.length - 1; i++) {
//   //   listItems[i].style.backgroundColor = "red";
//   if (i % 2 === 0) {
//     listItems[i].style.backgroundColor = "red";
//   } else {
//     listItems[i].style.backgroundColor = "cyan";
//   }
// }

// // listItems[0].style.backgroundColor = "red";
// // listItems[1].style.backgroundColor = "blue";
// // listItems[2].style.backgroundColor = "cyan";
// // listItems[3].style.backgroundColor = "yellow";
// // listItems[4].style.backgroundColor = "red";

// const reactHeader = document.querySelector(".react");
// console.log(reactHeader);

// // const reactHeader2 = document.querySelectorAll("h2");
// // console.log(reactHeader2[1]);
// reactHeader.textContent = "React and Next Challenge";

// // Creating An Element
// const para = document.createElement("p"); // created paragrapgh tag
// console.log(para);

// para.textContent = "Creating HTML element DOM";
// para.classList.add("paragraph");

// const body = document.body;
// body.appendChild(para);
// // document.body.append(para);

// // Second Example
// const image = document.createElement("img");
// image.setAttribute(
//   "src",
//   "https://img.freepik.com/premium-photo/medium-shot-family-retro-style_52683-115524.jpg"
// );

// image.alt = "A picture";

// console.log(image);

// body.append(image);

let text = "Click the button below";
// text.toLowerCase();
console.log(text);

const toggleMessage = function () {
  let note = document.querySelector("#note");
  // note = note.textContent.toLowerCase();

  // console.log("Here");
  if (note.textContent == text) {
    console.log("Same");
    note.textContent = "Message Toggled!";
  } else {
    note.textContent = "Click the button";
  }
};

//////
// let greetBtn = document.querySelector(".greenBtn");
// console.log(greetBtn);

// greetBtn.addEventListener("mouseover", function () {
//   alert("Good PM Everyone!");

//   let para = document.createElement("p");
//   console.log(para);

//   para.textContent = "Button was clicked!";

//   document.body.append(para);
// });

// Light and Dark Mode
// Assignment
let toogleBtn = document.querySelector(".night-mode");
console.log(toogleBtn);

// toogleBtn.addEventListener("click", function () {
//   let body = document.body;

//   if (
//     body.classList.contains("light-mode") ||
//     body.classList.contains("blue-mode")
//   ) {
//     body.classList.remove("light-mode");
//     body.classList.remove("blue-mode");
//     body.classList.add("dark-mode");
//   } else if (
//     body.classList.contains("dark-mode") ||
//     body.classList.contains("blue-mode")
//   ) {
//     body.classList.remove("dark-mode");
//     body.classList.remove("blue-mode");
//     body.classList.add("light-mode");
//   } else {
//     body.classList.remove("light-mode");
//     body.classList.remove("dark-mode");
//     body.classList.add("blue-mode");
//   }
// });

// .toogle
toogleBtn.addEventListener("click", function (e) {
  console.log(e.target);
  let body = document.body;
  body.classList.toggle("dark-mode");
});

// const frm = document.querySelector("#myForm");

// document.querySelector("#myForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//   console.log("My form has been submitted");
// });

const frm = document.querySelector("#myForm");
const nameInput = document.querySelector("#nameInput");
const messagePara = document.querySelector("#message");

frm.addEventListener("submit", function (event) {
  event.preventDefault();

  const textMessage = nameInput.value;
  // console.log(nameInput.value);
  messagePara.textContent = textMessage; // Inputted the text message inside the paragraph

  nameInput.value = ""; // resetting the input to empty
});
