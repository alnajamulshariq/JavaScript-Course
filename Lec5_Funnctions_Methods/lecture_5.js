// Simple Function
function myFunction() {
    console.log("Shariq Najam");
    console.log("We Are Learning JS :)");
}

myFunction();

// Parameterize Function

function greet(msg, msg2, msg3) {
    console.log(msg, msg2, msg3);
}
greet("Hello Shariq how are you have a nice day keep learning", 100, "yahan 3 parameters pass kar diye");

// let sum with function 

function sum(a, b) {
    console.log(a + b);
}
sum(50, 60);


// return value in function 

function sum2(x, y) {
    add = x + y;
    return add;
}
console.log(sum2(100, 200));

// ARROW FUNCTION 
let arrowSum = (a, b) => {
    return a + b;
}
console.log(arrowSum(55, 45));

// Multiplication with arrow function

const arrowMult = (a, b) => {
    return a * b;
}
console.log(arrowMult(5, 6));


// LET'S PRACTICE 
// Q-1: Create a function using "function" keyword that takes a string as an arguement & returns the number 
// of vowels in the string
function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            count++;
        }

    }
    console.log(count);
}
countVowels("shariqnajam");

// now we use for-of loop for the above task because for-of loop is helping in string 
function countVow(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);
}
countVow("aeiou");

// Q-2: Create an Arrow Function to perform a same task 

const arrowCountVowels = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            count++;
        }

    }
    console.log(count);
}

arrowCountVowels("muhammadshariq");


//                                  forEach Loop in Arrays

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach(function printVal(val) {
    console.log(val);
});

// for each with arrow function 
let arr2 = ["apple", "banana", "mango", "grapes", "watermelon"];
arr2.forEach(val => {
    console.log(val);
});


// Q-3: For a given array of numbers, print the square of each value using forEach loop.

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr3.forEach(val => {
    console.log(val * val);
});

// here we pass a function in a parameter of for-each.
let arr4 = [11, 12, 13, 14, 15];

let num = (sqr) => {
    return console.log(sqr * sqr);
}

arr4.forEach(num);

//                                          MAP METHOD
// map() create a new array with the results of some operation. The value its callback returns are used to
// form new array
// arr.map(callbackFnx(value, index, array))

let arr5 = [2, 4, 6, 8, 10, 12, 14];
arr5.map((val) => {
    console.log(val);
});



let salary = [100, 150, 200, 250, 300];

let newSalary = salary.map((val) => {
    return val * val
})
console.log(newSalary);



//                                          FILTER METHOD
// filter() create a new array of elements that give true for a condition/filter.

// let newArr = arr.filter((val)=>{
//    return value %2 === 0;
// });

let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenArr = arr6.filter((val) => {
    return val % 2 === 0;
});
console.log(evenArr);



//                                          REDUCE METHOD
// reduce() performs some operations & reduce the array to a single value. It returns that single value.

let arr7 = [1, 2, 3, 4, 5];

let redArr = arr7.reduce((previous, current) => {
    return previous + current;
})

console.log(redArr);



let arr8 = [22, 15, 17, 9, 13, 7, 3, 10];
let redArr2 = arr8.reduce((prev, curr) => {
    //is line ka matlab hai agar prev curr se bara hai to prev return kar do nahi to curr return kar do.
    // return prev > curr ? prev : curr;
    if (prev > curr) {
        return prev
    }
    else {
        return curr;
    }
})
console.log(redArr2);


// Let's Practice:
// Q-4: We are given array of marks of students. filter out of the marks of students that score 90+.
// [87,93,64,99,86]

let stdMarks = [87, 93, 64, 99, 86];
const filterMarks = stdMarks.filter((val) => {
    return val > 90;
})
console.log(filterMarks);

// Q-5: Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to (calculate products) => (factorial eg: 1*2*3*4*5) of all numbers in the array.



// prompt ko uncomment kar k code chala sakte hain 

// let n = prompt("please enater a number");
let arr9 = [];
for (let i = 1; i <= n; i++) {

    arr9[i - 1] = i;
}
console.log(arr9);


let redArr3 = arr9.reduce((pre, cur) => {
    return pre + cur;
})
console.log(redArr3);



let factorial = arr9.reduce((pre, cur) => {
    return pre * cur;
})
console.log(factorial);
