// Arrays
let marks = [89, 85, 79, 75, 73];
marks[2] = 25;
console.log(marks);

let superHeroes = ["thor", "superman", "loki", "ironman", "hulk"];
for (let i = 0; i < superHeroes.length; i++) {
  console.log(superHeroes[i]);
}

// for-of loop in array
let cities = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];
for (let city of cities) {
  console.log(city);
}

// Practice Question
// Q-1: For a given array with marks of students -> [95, 97, 44, 37, 76, 60]
// Find the average marks of the entire class

let stdMarks = [95, 97, 44, 37, 76, 60];
let sum = 0;
for (let i = 0; i < stdMarks.length; i++) {
  //sum = sum + stdMarks[i] or
  // sum += stdMarks[i]
  sum += stdMarks[i];
  console.log(sum);
}

let avg = sum / stdMarks.length;
console.log(`avg of stdMarks is ${avg}`);

// Practice Question
// Q-2: For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let items = [250, 645, 300, 900, 50];

for (let i = 0; i < items.length; i++) {
  let offer = items[i] / 10;
  items[i] = items[i] - offer;
  console.log(`value after offer = ${items[i]}`);
}

// Array Method:
// Push(): add to end
// Pop(): delete from end & return
// toString(): converts array to string
// concat(): joins multiple array & return result
// unshift(): add to start
// shift(): delete from start & return
// slice(): returns a piece of the array -> slice(startIdx, endIdx)
// splice(): change original array (add, remove, replace) -> splice(startIdx, delCount, newElem)

let foodItems = ["atta", "rice", "lentils", "oil", "ghee"];
//Push() Method
foodItems.push("sugar", "salt", "oats");
console.log(foodItems);
//Pop() Method
foodItems.pop();
console.log(foodItems);
//toString Method
console.log(foodItems.toString());
// concat() Method
let marvelHeroes = ["thor", "ironman", "hulk"];
let dcHeroes = ["superman", "batman"];
let heroes = marvelHeroes.concat(dcHeroes);
console.log(heroes);
// unshift() Method
dcHeroes.unshift("joker");
console.log(dcHeroes);
// shift() Method
dcHeroes.shift();
console.log(dcHeroes);
// slice() Method
let fruits = ["apple", "banana", "grapes", "orange", "watermelon", "mango"];
console.log(fruits.slice(1, 5));
// splice() Method
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.splice(1, 0, 105, 106);
console.log(numbers);

// Practice Question
// Q-3: Create an array to store companies "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
// a- Remove the first company from the array
// b- Remove Uber & Add Ola in its place
// c- Add Amazon at the end

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// remove the first company from the array
companies.shift();
console.log(companies);
// remove uber & add ola in its place
companies.splice(1, 1, "Ola");
console.log(companies);
// add amazon at the end
companies.push("Amazon");
console.log(companies);
