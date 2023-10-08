console.log("Hello world");

let name = "kartik";
let age = 18;
console.log("My nam is : " + name);

const interestRate = 0.5;

let person = {
  //object litteral
  name: "kartik",
  age: 30,
};
//dot notaion
person.name = "jhon";
//Bracket Notation
person["name"] = "ajay";
console.log(person);

let colors = ["red", "blue"];
colors[2] = "green";
console.log(colors);
console.log(colors.length);

function greetings(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

greetings("kartik", "goel");

function square(number) {
  return number * number;
}
console.log(square(6));

// String primitive
const message = "hello";

// String object
const another = String("hi");

if (age >= 18) {
  console.log("Eligible for voting");
} else {
  console.log("not eligible for voting");
}

let hour = 10;

if (hour >= 6 && hour < 12) {
  console.log("Good Moring");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good evening");
}

for (let i = 0; i < 5; i++) {
  console.log("i am loop execution number ", i);
}

//factory function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1);
console.log(circle1.draw());

const circle2 = createCircle(2);
console.log(circle2);
console.log(circle2.draw());

//constructor function

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(1);

//getter and setters

const Person = {
  firstName: "kartik",
  lastName: "goel",
  get fullName() {
    return `${Person.firstName} ${Person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
Person.fullName = "KARTIK GOEL";
console.log(Person);

//value types and reference types

let x = 10;
let y = x;

x = 20; //y remains 10

let a = {
  value: 20,
};
let b = a;

a.value = 10;
//now b is also 10

let number = 10;
function increase(number) {
  number++;
}

increase(number);
console.log(number); //it remians same does not increase

let obj = { value: 10 };
function increase1(obj) {
  obj.value++;
}

increase1(obj);
console.log(obj); //now the value isUpdated
