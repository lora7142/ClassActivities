// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let day = "Tuesday";
let date = 6;
let spring = true;
let month;
let year = null;

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof day);
console.log(typeof date);
console.log(typeof spring);
console.log(typeof month);
console.log(typeof year);

// create a variable that references a template literal
// inside the template literal, use two of the above variables
let response = `"The month hasn't really started yet since it's only ${day} the ${date}th."`;
console.log(response);

// re-assign the value of the variable that references "null"
year = 2025;

// print the value and its type
console.log("The value is " + year + " and the type is " + typeof year + ".");

// print a variable that causes a ReferenceError
console.log("The variable (month) with a reference error is " + month);

// alter the previous line to no longer cause a ReferenceError
month = "May";
console.log("Month is now " + month + ".");
