let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("hello shariq");
}

let inc = document.querySelector("#inc");
let count = 0;
inc.onclick = () => {

    count++;
    console.log(count);
}

let dec = document.querySelector("#dec");
dec.onclick = () => {

    if (count > 0) {
        count--;
        console.log(count);
    }

}

let cls = document.querySelector("#cls");
cls.onclick = () => {
    count = 0;
    console.log(count);
}

let btn2 = document.querySelector("#btn2");
btn2.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log("the event value on X axis is " + evt.clientX);
    console.log("the event value on Y axis is " + evt.clientY);
}

btn2.onmouseover = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log("the event value on X axis is " + evt.clientX);
    console.log("the event value on Y axis is " + evt.clientY);
}


let btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log("the event value on X axis is " + evt.clientX);
    console.log("the event value on Y axis is " + evt.clientY);
})

btn3.addEventListener("click", () => {
    console.log("hello shariq");
})

let btn4 = document.querySelector("#btn4");

btn4.addEventListener("click", () => {
    console.log("button was clicked  handler-1");
})

btn4.addEventListener("click", () => {
    console.log("button was clicked  handler-2");
})

const handler3 = () => {
    console.log("button was clicked  handler-3");
}

btn4.addEventListener("click", handler3);
btn4.removeEventListener("click", handler3);

btn4.addEventListener("click", () => {
    console.log("button was clicked  handler-4");
})



// Let's Practice:
// Q- Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.

let dlMode = document.querySelector("#dlMode");
let mode = 0;
dlMode.addEventListener("click", () => {
    if (mode === 0) {
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
        mode = 1;
    }
    else {
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
        mode = 0;
    }
})


let btnMode = document.querySelector("#mode");
let bodyMode = "light";
btnMode.addEventListener("click", () => {
    if (bodyMode === "light") {
        bodyMode = "dark";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    }
    else {
        bodyMode = "light";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
})