// create a constant variable called "name" that references a string
const name = "Lora";

// create a re-assignable variable called "favoriteSong" that references a string
let favoriteSong = "Take me Back to Eden";

// create a re-assignable variable called "wage" that references a number
let wage = 10000;

// create a variable called "age" that references a number, should it be re-assignable?
let age = 43;

// create a variable called "onlyChild" that references a boolean
const onlyChild = true;

// create a variable called "satisfied" that references a boolean
let satisfied = false;

// print the types of two variables that reference two different data types (typeof)
console.log(typeof favoriteSong);
console.log(typeof onlyChild);

// create a variable called "favoriteThing" that references ANY primitive value
let favoriteThing = "music";

// print the data type of "favoriteThing"
console.log(typeof favoriteThing);

// You heard a new song that became your favorite.
// Reassign the variable "favoriteSong"
favoriteSong = "Did my Time";
let favoriteBand = "Korn";

// You no longer like the type of data stored in "favoriteThing"
// Reassign "favoriteThing" to a different primitive data type and print its type
favoriteThing = "pickle ball";

// Happy Birthday!
// Reassign "age" to a new value
age = 25;

// You got a big raise at work.
// Reassign "wage" to a new value
wage = 1000000;

// Your raise changed your job satisfaction.
// Assign "satisfied" to true
satisfied = true;
console.log("The value of statisfied is now " + satisfied + ".");

// use "console.log()" and "+" to print a sentence that includes two of the above variables
console.log(
  "I, " +
    name +
    ", got a raise and now I make $" +
    wage +
    " and I am " +
    age +
    " years old and my favorite song currently is " +
    favoriteSong +
    " by " +
    favoriteBand +
    "."
);
