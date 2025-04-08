fullName = "shariq najam";
console.log(fullName);
age = 26;
console.log(age);
price = 99.99;
console.log(price);
x = null;
console.log(x);
y = undefined;
console.log(undefined);
isFollow = true;
console.log(isFollow);

// let, const & var 

// var: it can be redeclared & updated. A global scope variable.
// let: it cannot be redeclared but can be updated. A block scope variable.
// const: it can not be redeclared or updated. A block scope variable.

var price = 89;
var price = 99;
var price = 90;

console.log(price);


let myAge = 12;
myAge = 15;
myAge = 25;
console.log(myAge);


// datatypes in js 

// Number, String, Boolean, Undefined, Null, Bigint, Symbol 

// Primitive (7), Non-Primitive (Object => Arrays , Functions) 

let items = 7;
console.log(items + " datatype " + typeof items);

let myName = "Shariq Najam";
console.log(myName + " datatype " + typeof myName);

let power = true;
console.log(power + " datatype " + typeof power);

let a;
console.log(a + " datatype " + typeof a);

let b = null;
console.log(b + " datatype " + typeof b);

let c = BigInt("123");
console.log(c);
console.log(typeof c);

let d = Symbol("hello!");
console.log(d);
console.log(typeof d);


const student = {
    stdName: "Shariq Najam",
    age: 26,
    gpa: 3.5,
    isPass: true
};
console.log(student);
console.log(typeof student);

console.log(student.age);
console.log(student["age"]);

// if we want to increase age of a student so we have to use this method 

student["age"] = student["age"] + 1;

console.log(student["age"]);