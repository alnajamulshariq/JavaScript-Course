// Arithmetic Operators

let a = 10;
let b = 2;

console.log("a = ", a, "& b = ", b);

console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
// modulus shows the remainder 
console.log("a % b = ", a % b);
// Exponentiation is use as power 
console.log("a ** b = ", a ** b);
// Unary Operator => post inc/dec firstly run code then change value but pre inc/dec firstly value change then print
console.log("a+1 or a++", a++);
console.log(a);
console.log("a+1 or ++a", ++a);
// decrement operator same as it is as increment operator 
console.log(a + 4);

// Comparison Operator ( ==, ===, !=, !==, >, >=, <, <= )
console.log(a == b);
console.log(a != b);
let c = 5;
let d = "5";
console.log(c == d);
console.log(c === d);
console.log(c !== d);
console.log(a >= b);

// Logical Opearators ( &&, ||, ! )

console.log("10>2 && 2<10", a > b && b < a);
console.log("10>2 && 2>10", a > b && b > a);

console.log("10>2 || 2<10", a > b || b < a);
console.log("10>2 || 2>10", a > b || b > a);
console.log("!(10>2)", !(a > b));
console.log("!(2>10)", !(b > a));

// Conditional Statements 
// To implement some condition in the code 
// i- if statement 

let age = 16;

if (age > 18) {
    console.log("You Can Vote");
};

if (age < 18) {
    console.log("You Can Not Vote");
};

// ii- if-else statement 

if (age > 18) {
    console.log("You can drink");
}
else {
    console.log("You Can Not Drink");
}

let num = 3;

if (num % 2 === 0) {
    console.log("even number");
}
else {
    console.log("odd number");
}

// iii- else-if statement 

let citizenAge = 40;
if (citizenAge < 18) {
    console.log("you are minor");
}
else if (citizenAge <= 60) {
    console.log("you are adult");
} else {
    console.log("you are senior citizen");
}

// ternary operator 
let yourAge = 18;
let result = yourAge >= 18 ? "adult" : "not adult";
console.log(result);

// practice 
// q-1: Get user to input a number using prompt. check if the number multiple of 5 or not 

// let checkNum = prompt("please enter your number");
// if (checkNum % 5 === 0) {
//     console.log("its a multiple of 5");
// }
// else {
//     console.log("its not a multiple of 5");
// }

// q-2: Write a code which can give grades to students according to their scores:
// 90-100, A1
// 80-89, A
// 70-79, B 
// 60-69, C 
// 50-59, D
// 0-49, F 

// let grade = parseInt(prompt("please enter your Number"));
// if (grade >= 90 && grade <= 100) {
//     console.log("A1");
// }
// else if (grade >= 80 && grade <= 89) {
//     console.log("A");
// }
// else if (grade >= 70 && grade <= 79) {
//     console.log("B");
// }
// else if (grade >= 60 && grade <= 69) {
//     console.log("C");
// }
// else if (grade >= 50 && grade <= 59) {
//     console.log("D");
// }
// else if (grade <= 49) {
//     console.log("F");
// }
// else {
//     console.log("invalid number");
// }