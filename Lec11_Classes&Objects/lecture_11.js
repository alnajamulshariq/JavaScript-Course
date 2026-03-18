// Classes & Objects 

const student = {
    fullName: "shariq najam",
    marks: 96.5,
    printMarks: function () {
        console.log("marks = ", this.marks);
    }
}

const employee = {
    empTax() {
        console.log("Tax rate is 10%");
    }
}

const emp1 = {
    salary: 10000
}
const emp2 = {
    salary: 20000
}
const emp3 = {
    salary: 30000
}
// creating prototype 
emp1.__proto__ = employee;
emp2.__proto__ = employee;
emp3.__proto__ = employee;



// Classes 

class ToyotaCar {
    start() {
        console.log("start");
    };

    stop() {
        console.log("stop");
    }

    setBrand(brand) {
        this.brand = brand;
    }
}

let fortuner = new ToyotaCar("Fortuner");
fortuner.setBrand("Fortuner");
console.log(fortuner);

let lexus = new ToyotaCar("Lexus");
lexus.setBrand("Lexus");
console.log(lexus);

// Classes with constructor 
class SuzukiCar {
    constructor(brand, mileage) {
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
}

let alto = new SuzukiCar("Alto", 5000);
console.log(alto);
let cultus = new SuzukiCar("Cultus", 9000);
console.log(cultus);

// Inheritance Classes 
class Parent {
    hello() {
        console.log("hello");
    }
}
class Child extends Parent { };
let myObj = new Child();


class Person {
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
    work() {
        console.log("do nothing");
    }
}

class Engineer extends Person {
    work() {
        console.log("solve problems, build something");
    }
}

class Doctor extends Person {
    work() {
        console.log("treat patients");
    }
}

let shariqObj = new Engineer;

