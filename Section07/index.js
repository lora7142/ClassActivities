// write a function
// function sum2Integers(num1, num2) {
//    sum the 2 numbers
//   let sum = num1 + num2;
//    if equal then multiply sum by 3
//   if (num1 === num2) {
//     sum = sum * 3;
//      OR
//      sum*= 3;
//   }
//   return total
//   return sum;
// }

// console.log(sum2Integers(10, 20));

// -Write a function
// function isPalindrome(word) {
//   let cleaned = word.toLowerCase().replaceAll(" ", "");
//   const reversed = cleaned
//     .split("")
//     .reverse()
//     .join("");
//   //  determine if the string is the same forwards and backwards
//   if (reversed === cleaned) {
//     //  return a true if that is correct
//     return true;
//   }
//   //  false if it is not correct
//   return false;
// }
// console.log(isPalindrome("rac ecar "));
// print out the response to the screen

// isPalindrome('racecar') // --> true
// isPalindrome('table') // --> false

//  Q4
// Write a function
function countVowels(word) {
  let count = 0;
  // let splitWord = word.split("");
  const vowels = "aeiouAEIOU";
  // Count the number of vowels in a string

  for (let x of word) {
    if (vowels.includes(x)) {
      count++;
      console.log(x);
    }
  }
  // Return the number of vowels
  return count;
  // print the value to screen
}

console.log(countVowels("Lora"));
// countVowels('hello') // --> 2
// countVowels('why') // --> 0

// Q2
// let array1 = [100, 2, 3, 400, 5, 10];

// function highestNumber(array) {
// let highest = array[0];
// for (let i = 1; i < array.length; i++) {
//   if (array[i] > highest) {
//     highest = array[i];
//   }
// }
// return highest;
// }
// console.log(highestNumber(array1));

// Q3
// function myRandomNumber() {
//   const num = Math.floor(Math.random() * 11);

//   if (num > 5) {
//     console.log(`${num}, is greater than five!`);
//   }
//   if (num < 5) {
//     console.log(`${num}, less than five!`);
//   }
//   if (num === 5) {
//     console.log(`the number is 5`);
//   }
// }

// myRandomNumber();
