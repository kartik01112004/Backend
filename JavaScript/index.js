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

function greetings(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

greetings("kartik", "goel");

function square(number) {
  return number * number;
}
console.log(square(6));
