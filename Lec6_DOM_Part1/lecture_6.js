//                                      DOM Manipulation

// 1- Selecting with ID:
// document.getElementById("myId");

// 2- Selecting with CLASS:
// document.getElementsByClassName("myClass");

// 3- Selecting with TAG:
// document.getElementsByTagName("p");

// 4- Query Selector:
//  i- document.querySelector("myId / myClass / tag");
//    its returns first element
// ii- document.querySelectorAll("myId / myClass / tag");
//    its returns a NodeList

// Let's Try to get Elements by above methods

// 1- Selecting with ID:
// document.getElementById("myId");
let titleName = document.getElementById("nameTitle");
console.dir(titleName);
console.log(titleName);

// 2- Selecting with CLASS:
// document.getElementsByClassName("myClass");
let headings = document.getElementsByClassName("jsDom");
console.dir(headings);
console.log(headings);

// 3- Selecting with TAG:
// document.getElementsByTagName("p");
let getTags = document.getElementsByTagName("p");
console.dir(getTags);
console.log(getTags);

// 4- Query Selector:
//  i- document.querySelector("myId / myClass / tag");
//    its returns first element

let firstEl = document.querySelector("p");
console.dir(firstEl);
console.log(firstEl);

// 4- Query Selector:
// ii- document.querySelectorAll("myId / myClass / tag");
//    its returns a NodeList

let allEl = document.querySelectorAll("p");
console.dir(allEl);
console.log(allEl);

let btn = document.querySelector("#btn");
console.dir(btn);
console.log(btn);

let parent = document.querySelector(".outer");
let allChildren = parent.children;
for (let i = 0; i < allChildren.length; i++) {
  allChildren[i].style.color = "blue";
}
parent.firstElementChild.style.backgroundColor = "red";
parent.lastElementChild.style.backgroundColor = "yellow";

// DOM Manipulation Properties:
//  i- tagName: returns tag for element nodes
// ii- innerText: returns the text content of the element and all its children
//iii- innerHTML: returns the plain text or HTML contents in the element
// iv- textContent: returns textual content even for hidden elements

let div = document.querySelector(".div");

// Let's Practice
// Q-1: Create a h2 heading element with text "Hello JavaScript". Append "from Apna College Students" to
//      this text using JS.

let h2 = document.querySelector(".h2");
h2.innerText = h2.innerText + " from Apna College Students";

// Q-2:Create 3 divs with common class name -"box". Access them & add some unique text to each of them

// let divBox = document.querySelectorAll(".box");
// let index = 1;
// for (const div of divBox) {
//     div.innerText = `this is our ${index} unique div box`
//     index++;
//
// }

let divBox = document.querySelectorAll(".box");
for (let index = 0; index <= 3; index++) {
  divBox[index].innerText = `This is our ${index + 1} unique div box`;
}

for (let index = 1; index <= 10; index++) {
  document.write(index + "<br>");
}
