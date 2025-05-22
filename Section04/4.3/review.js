const { constrainedMemory } = require("process");

const data = [
  "Jan",
  "Jna",
  "Feb",
  "Mar",
  "Apr",
  "banana",
  "orange",
  "grape",
  1,
  2,
  3,
  4,
  5,
  "a",
  "b",
  "c",
  "d",
  "Oct",
  "Nov"
];
// remove the misspelling of Jna and replace it with full spelling of January
// data.splice(1, 1, "January");

// using negative numbers, remove last 2 values of array (4, 5)
// data.splice(-8, 2);

// use indexof and splice to replace Feb and Mar with Q1 and Q2
// let i = data.indexOf("Feb");
// data.splice(i, 2, "Q1", "Q2");

// remove all numbers and put into new array
// const newArray = data.splice(8, 5);
// console.log(newArray);
// console.log(data);

// use splice and add pear before banana
// data.splice(5, 0, "pear");
// console.log(data);

// methods to use:
// join
// toLowercase
// reverse (array)
// split

// create a function that returns true if it's a palindrome using upper or lower case (mostly string methods and 1 array method)
function isPalindrome(word) {
  let cleaned = word.toLowerCase();
  const reversed = cleaned
    .split("")
    .reverse()
    .join("");
  if (reversed === cleaned) {
    return true;
  }
  return false;
}
console.log(isPalindrome("Racecar"));
