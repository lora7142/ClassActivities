// Write a function that outputs your favorite drink, you must use a parameter for the name
function favoriteDrink(drink) {
  console.log("My favorite drink is " + drink + ".");
}

favoriteDrink("Dr. Pepper");

// Write a function that outputs your favorite pizza toppings and returns your favorite pizza brand
// Hint: use a rest parameter

function favoritePizza(brand, ...toppings) {
  console.log("My favorite pizza toppings are " + toppings + ".");
  return brand;
}
const favPizzaBrand = favoritePizza("Little Caesars", "onion", " sausage");

console.log(favPizzaBrand);

// Write a function that multiplies two numbers... set the defaults to one.
function multiplyTwo(num1 = 1, num2 = 1) {
  let total = num1 * num2;
  console.log(total);
}

multiplyTwo(2, 4);
