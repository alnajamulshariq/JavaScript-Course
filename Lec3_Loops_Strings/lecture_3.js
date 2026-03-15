// for loop
for (let i = 1; i <= 10; i++) {
    console.log("shariq najam");
}

// while loop
let j = 1;
while (j <= 5) {
    console.log("muhammad shariq");
    j++;
}

// do-while loop
let k = 20;
do {
    console.log("najam ansari");
    k++;
}
while (k <= 10);

// for-of loop
let str = "ShariqNajam";
for (let l of str) {
    console.log(l);
}

// agar humen string ka size pata karna hai to
let str2 = "JavaScript";
let size = 0;
for (let m of str2) {
    console.log(m);
    size++;
}
console.log(size);

// for-in loop
// for-in loop k liye sab se pehlay hum object bana lete hain

let student = {
    stdName: "shariq najam",
    age: 26,
    gpa: 3.5,
    isFollow: true
};

for (let n in student) {
    console.log(n, student[n]);
}

// let practice
// Q-1: Print all even numbers from 0 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Q-2: Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enter correct value.

// let rightNum = 38;
// let userNum = parseInt(prompt("Please Enter A Correct Game Number"));

// while (userNum !== rightNum) {
//     userNum = parseInt(prompt("You Enter A wrong Number Please Try Again"));
// }
// alert("Cogratulations You Enter A Right Number");

// Strings in JavaScript

// create string
let str3 = "m shariq najam";

// string length
console.log(str3.length);
console.log(str3[2]);

// another way to declare a string
let sentence = `shariq najam ansari`;
console.log(sentence);

// Template Literals
let obj = {
    item: "pen",
    price: 25,
    color: "blue"
}

console.log(`this is our ${obj.item} its cost is ${obj.price} rupees and its color is ${obj.color}`);

// Escape Characters
console.log("Shariq\nNajam");
console.log("Shariq\tNajam");

let str4 = "chala ja bruce li k";

// uppercase method in string
str4 = str4.toLocaleUpperCase();
console.log(str4);

// lowercase method in string
str4 = str4.toLowerCase();
console.log(str4);

// trim method in string
let myName = "      Muhammad Shariq Najam Ansari    ";
console.log(myName); //without trim method
console.log(myName.trim());

// slice method in string
let slcMethod = "abcdefghij";
console.log(slcMethod.slice(1, 4));

// concat method in string
let sent1 = "what is your name?";
let sent2 = "my name is shariq najam";
let result = sent1 + sent2;
console.log(result);

// replace method in string

let repWord = "Hello";
console.log(repWord.replace("H", "Y"));

// charAt method in string

let chAt = "Aptech";
console.log(chAt.charAt(3));

// Let Practice
// Q-3: Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the full name length.

let fullName = prompt("enter your full name without any spaces");
let userName = ("@" + fullName + fullName.length);
console.log(userName);


