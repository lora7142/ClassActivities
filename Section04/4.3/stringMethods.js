let stringPractice = "this is a string for practice.";

let stringB = "wow this is a super long string that has a lot of letters.";

let stringC = "one two three four five six seven eight nine ten";

console.log(stringPractice.toUpperCase());
console.log(stringPractice.toLowerCase());
console.log(stringB.indexOf("wow"));
console.log(stringB.lastIndexOf("a"));
console.log(stringC.includes("three"));
console.log(stringB.includes("a"));
console.log(stringC.trim());
console.log(stringB.replace("a", "A"));
console.log(stringPractice.concat(stringB, stringC));
console.log(stringC.split("/"));

let str1 = "Hello Partner!";
let str2 = "Welcome to the party!";
let str3 = "We are going to have serious fun!!!";

let newString = str1.concat(str2, str3);
console.log(newString);

//  "Hello Partner! Welcome to the party! We are going to have serious fun!!!"
