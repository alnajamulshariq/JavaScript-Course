// to get the attribute 
let p = document.querySelector("#para");
let nameAtt = p.getAttribute("name");
console.log(nameAtt);

// to set the attribute 
let newNameAtt = p.setAttribute("name", "newPara");
console.log(newNameAtt);

// to style the element node.style
let div = document.querySelector(".box");
div.style.backgroundColor = "purple";
div.style.color = "black";

// create elements with DOM

// add element in the end of node (inside)
let btn = document.createElement("button");
btn.innerText = "Click Me!";
div.append(btn);

// add element in the start of node (inside)
let newPara = document.createElement("p");
newPara.innerText = "this is our new para";
div.prepend(newPara);

// add element before the node (outside)
let newList = document.createElement("ul");
newList.innerHTML = "<li>apple</li><li>mango</li><li>banana</li>"
div.before(newList);

// add element after the node (outside)
let newDiv = document.createElement("div");
newDiv.innerText = "this is our new div";
div.after(newDiv);

// to delete an element
newPara.remove();


// appendChild Method
let parentEl = document.querySelector("#parent");
let newEl = document.createElement("p");
newEl.innerText = "this is our child paragraph";
parentEl.appendChild(newEl);

// removeChild Method
let parentElement = document.querySelector(".parentElement");
let childElement = document.querySelector(".childElement");
parentElement.removeChild(childElement);




// Let's Practice 
// Q-1: Create a new button element. Give it a text "Click Me!", background color of red & text color of white.
//      insert the button as the first element inside the body tag.

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
document.querySelector("body").prepend(newBtn);

//Q-2: Create a <p> tag in html, give it a class & some styling.
//     Now Create a new class in CSS and try to append this class to the <p> element
//     Did you notice, how you overwrite the class name when you add a new one.
//     Solve this problem using classList.

let cont = document.querySelector(".content");
cont.classList.add("contOverRight");