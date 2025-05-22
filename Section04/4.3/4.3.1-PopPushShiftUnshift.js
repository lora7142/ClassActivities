const { constrainedMemory } = require("process");

const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let lastItem = nums.pop();
console.log(lastItem);
let secondLastItem = nums.pop();
console.log(secondLastItem);
// remove each of the first two items with shift(), saving each item to a variable
let firstItem = nums.shift();
console.log(firstItem);
let secondItem = nums.shift();
console.log(secondItem);
// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.unshift(lastItem, secondLastItem);
nums.push(secondItem, firstItem);
console.log(nums);
