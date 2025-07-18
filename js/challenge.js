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

// console.log(lists);
const ulEl = document.querySelector("ul");
console.log(ulEl);

ulEl.innerHTML = lists;
ulEl.classList.add("listItems");

const listItems = document.querySelectorAll("li");
console.log(listItems);

// for (const item of listItems) {
//   item.style.backgroundColor = "red";
// }

for (let i = 0; i <= listItems.length - 1; i++) {
  //   listItems[i].style.backgroundColor = "red";
  if (i % 2 === 0) {
    listItems[i].style.backgroundColor = "red";
  } else {
    listItems[i].style.backgroundColor = "cyan";
  }
}

// listItems[0].style.backgroundColor = "red";
// listItems[1].style.backgroundColor = "blue";
// listItems[2].style.backgroundColor = "cyan";
// listItems[3].style.backgroundColor = "yellow";
// listItems[4].style.backgroundColor = "red";
