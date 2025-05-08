// Follow the steps below to create a **while** loop that TOTALS the numbers from 1 to 100

// 1) create a variable to represent the current number
let x = 1;
// 2) create a variable to represent the current total
let total = 0;
// 3) write a while loop that sums the numbers from 1 to 100
while (x <= 100) {
  total += x;
  x++;
}
console.log(total);
// create a variable outside of the while loop
// inside the while loop, we keep track of it and re-assign it until the condition becomes false

// Now using the same variables you created in steps 1 and 2, create a **for** loops that TOTALS the numbers from 1 to 100

// 1) write a for loop that sums the numbers from 1 to 100
//let t = 0;
for (x = 1; x <= 100; x++) {
  total += x;
}
console.log(total);
