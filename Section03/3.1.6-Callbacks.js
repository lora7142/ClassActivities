const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// "regular" functions
function greet(name) {
  return `Hello ${name}!`;
}

function welcome(name) {
  return `${name}, welcome!`;
}

function informAboutSale(name) {
  return `${name}, we're having a sale!`;
}

// function that takes a callback function as an argument
function getNameAndShowMessage(callback) {
  rl.question("Please enter your name: ", name => {
    console.log(callback(name));
    rl.close(); // Close after one input
  });
}

// pass each "regular" function into getAndShowMessage as a callback function
// getNameAndShowMessage(greet);
// getNameAndShowMessage(welcome);
// getNameAndShowMessage(informAboutSale);
