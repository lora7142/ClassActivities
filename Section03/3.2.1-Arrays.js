// create an Array using an Array literal
const originalArray = [2, 4, 6, 8, 10];

// access the 1st item in the Array
console.log(originalArray[0]);

// access the last item in the Array
console.log(originalArray[4]);

// print the length of the Array
console.log(originalArray.length);

// use the length property to access the last item in the Array
console.log(originalArray[originalArray.length - 1]);

// with for...of, loop over the Array, modify the value and add to a different Array
const secondArray = [];
let index = 0;
for (let number of originalArray) {
  secondArray[index] = number + 10;
  index++;
  console.log(secondArray);
}
