//Synchronus programming line by line sequence mein kaam karti hai
//jaise pehle one print ho ga phir two aur phir three
// console.log("one");
// console.log("two");
// console.log("three");

//jab k Asynchronus is k baraks aisi programmins hoti hai jis mein jo kaam waqt le raha ho us ko baad mein karti hai aur baqi code pehle chala deti hai

// function hello() {
//   console.log("hello");
// }

//setTimeout(hello, 2000); //setTimeout 2 seconds baad hello function ko invoke kare ga

//hum alag se function na banana pare to arrow function bhi use kar sakte hain

//neeche asynchronus ki misaal de raha hun yani one, two, three, four, five print ho ga
//aur phir 2 second baad hello func invoke ho ga yani four, five ko 2 second nahi rukna pare ga

// console.log("one");
// console.log("two");
// console.log("three");

// setTimeout(() => {
//   console.log("hello");
// }, 2000);

// console.log("four");
// console.log("five");

//Callback kisi function ka Arguement hota hai yani jab bhi hum kisi function mein koi dusra
// function call kar dete hain us ko hum callback kehte hain

// function sum(a, b) {
//   console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//   sumCallback(a, b);
// }

// calculator(1, 2, sum);

// //callback ko aasani se samajhte hain
// const hello = () => {
//     console.log("hello")
// }
// setTimeout(hello, 3000)// hello yahan callback function hai.

//callback hell Callback Hell JavaScript mein us situation ko kehte hain jab tum bohat zyada nested (andar andar) callbacks likh dete ho, aur code samajhna mushkil ho jata hai.
//for example:

// setTimeout(() => {
//     console.log("Step 1");

//     setTimeout(() => {
//         console.log("Step 2");

//         setTimeout(() => {
//             console.log("Step 3");
//         }, 1000);

//     }, 1000);

// }, 1000);

//Callback hell ki problem ko solve karne k liye humare pas ata hai promises
//PROMISES
// Promise JavaScript mein ek aisa object hai jo kehta hai:

// “Main abhi result nahi de raha, lekin future mein ya to de dunga (success) ya error de dunga.”

// 🔹 Example soch lo:

// Online order 📦

// Abhi wait → Pending

// Deliver ho gaya → Resolved

// Cancel ho gaya → Rejected

// 🔥 One-line yaad rakhna:

// Promise = future ka result (success ya fail)

// let promise = new Promise((resolve, reject)=>{
//     console.log("I am a Promise");
//     resolve("success");
// })
//Promise ki 3 states hoti hain pending, fulfilled, rejected

// let myPromise = new Promise((resolve, reject) => {
//   let kaamHoGaya = true;

//   if (kaamHoGaya) {
//     resolve("Success ✅");
//   } else {
//     reject("Fail ❌");
//   }
// });

// myPromise
//   .then((result) => console.log(result)) // agar success hua
//   .catch((error) => console.log(error)); // agar error aya

// Samajh lo simple mein:

// resolve() → kaam ho gaya ✔

// reject() → kaam fail ❌

// .then() → success handle karta hai

// .catch() → error handle karta hai

// 🔥 Short line

// Promise = “kaam hoga… ya fail hoga (future mein)”

// Promise Chain kya hota hai?

// Promise chaining ka matlab hai:

// ek ke baad ek multiple .then() use karna, taake har step previous result par depend kare

// 🔹 Simple Definition

// Promise chain = jab hum promises ko line mein jor dete hain (one after another)

// 🔹 Code Example
// new Promise((resolve, reject) => {
//     resolve(10);
// })
// .then(result => {
//     console.log(result); // 10
//     return result * 2;
// })
// .then(result => {
//     console.log(result); // 20
//     return result * 2;
// })
// .then(result => {
//     console.log(result); // 40
// });
// 🔹 Samajh lo easy tareeke se:

// Pehla .then() → result deta hai

// Doosra .then() → us result ko use karta hai

// Teesra .then() → next step

// 👉 Sab ek chain ki tarah connected hote hain

// 🔥 One-line yaad rakhna:

// Promise chain = ek ke baad ek promises chalana, bina nested code ke (clean tareeke se)

// async / await kya hota hai?

// async/await ek aisa tareeqa hai jisse hum asynchronous (future wale) kaam ko bilkul normal (synchronous) code ki tarah likh sakte hain

// 👉 Yani code seedha seedha upar se neeche chalta hai (no chaining, no nesting)

// 🔹 Simple Definition (yaad rakhna)

// async/await = promises ko asaan aur clean tareeke se likhne ka tareeqa

// 🔹 Code Example
// function kaamKaro() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Kaam ho gaya ✅");
//         }, 1000);
//     });
// }

// async function run() {
//     let result = await kaamKaro();
//     console.log(result);
// }

// run();
// 🔹 Samajh lo easy tareeke se:

// async → function ko promise bana deta hai

// await → wait karta hai jab tak result na aa jaye

// 👉 Matlab:
// "ruk jao jab tak kaam complete na ho jaye"

// 🔥 Compare karo (mind blown 🤯)

// ❌ Promise chain:

// kaamKaro()
// .then(res => console.log(res));

// ✔ async/await:

// let res = await kaamKaro();
// console.log(res);

// 👉 Same kaam… lekin async/await zyada clean 🔥

// 🔥 Final one-line

// async/await = promises ko simple aur readable banane ka best tareeqa

//Async Await Practice

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Weather Data");
//       resolve("200 sucess");
//     }, 2000);
//   });
// }

// async function getWeatherData() {
//   await api();
//   await api();
// }







// IIFE kya hota hai?

// IIFE (Immediately Invoked Function Expression) ek aisa function hota hai jo banate hi turant run ho jata hai

// 👉 Yani:
// “function likha aur usi waqt chala bhi diya”

// 🔹 Simple Definition

// IIFE = function jo define hote hi turant execute ho jaye

// 🔹 Code Example
// (function () {
//     console.log("Hello bhai 👋");
// })();
// 🔹 Arrow Function IIFE
// (() => {
//     console.log("Arrow IIFE 🚀");
// })();
// 🔹 Samajh lo easy tareeke se:

// (function(){}) → function banaya

// () → turant call kar diya

// 👉 Is liye naam hai Immediately Invoked

// 🔥 Use kahan hota hai?

// Jab tumhein ek baar hi function chalana ho

// Aur global variables ko pollute na karna ho

// 🔥 One-line yaad rakhna:

// IIFE = function jo likhte hi turant run ho jata hai (ek hi baar ke liye)