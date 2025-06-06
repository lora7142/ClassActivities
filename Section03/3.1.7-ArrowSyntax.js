const { time } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// refactor the functions below into arrow syntax
// function myNumberFunction() {
// return ((2 ** 2 + 3) % 4) * 14;
// }

const myNumberFunction = () => ((2 ** 2 + 3) % 4) * 14;
console.log(myNumberFunction());

// function greet(name) {
// return `Hello, ${name}`;
// }

const greet = name => `Hello, ${name}`;
console.log(greet("Lora"));

// const timeOfDayGreet = function(name, timeOfDay) {
// return `Hello, ${name}, good ${timeOfDay}`;
// };

const timeOfDay = (name, timeOfDay) => `Hello, ${name}, good ${timeOfDay}`;
console.log(timeOfDay("Jane", "night"));

// function tripleAndHalf(num) {
// let triple = num * 3;
// return triple / 2;
// }

const tripleAndHalf = num => {
  let triple = num * 3;
  return triple / 2;
};
console.log(tripleAndHalf(4));

// function sumTwoNumbers(num1, num2) {
// let sum = num1 + num2;
// console.log(`The sum of your numbers is ${sum}.`);
// return sum;
// }

const sumTwoNumbers = (num1, num2) => {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
};

console.log(sumTwoNumbers(6, 5));
