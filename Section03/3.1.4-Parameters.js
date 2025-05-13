// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function putParametersTogether(param1, param2, ...myRestParam) {
  console.log(param1, param2);
  return param1 + param2;
}
putParametersTogether(3, 5);
putParametersTogether("3", "5");

// invoke the function and pass in two numbers

// invoke the function and pass in more than two numbers
putParametersTogether(3, 5, 7);
// invoke the function and pass in only one number
putParametersTogether(3);
// change the function to set default values for the parameters
putParametersTogether((param1 = 3), (param2 = 5));
// again, invoke the function and pass in only one number
putParametersTogether((param1 = 3));
// Rest Operator
// add a rest operator to the function's parameters
putParametersTogether(3, 5, 7, 9, 11);
// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers
