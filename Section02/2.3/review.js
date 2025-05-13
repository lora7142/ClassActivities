//const user = "Charlie";
//const day = "Friday";

//console.log(`"hello" ${user}", today is "${day}."`);

//build a string 1 2 3 4 5 concat and log after loop
//let m = "";
//for (let x = 1; x <= 5; x++) {
//m += x;
//}
//console.log(m);

// Write a short program that prints each number from 1 to 100 on a new line.

// For each multiple of 3, print "Fizz" instead of the number.

// For each multiple of 5, print "Buzz" instead of the number.

// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

// for (let x = 1; x <= 100; x++) {
//   if (x % 3 === 0 && !(x % 5 === 0)) {
//     console.log("Fizz");
//   }
//   if (x % 5 === 0 && !(x % 3 === 0)) {
//     console.log("Buzz");
//   }
//   if (x % 3 === 0 && x % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (!(x % 3 === 0) && !(x % 5 === 0)) {
//     console.log(x);
//   }
// }

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
