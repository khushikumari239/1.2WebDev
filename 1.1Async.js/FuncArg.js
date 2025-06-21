// Write a calculator program that adds, subtracts, multiplies, divides two arguments.

//🌼 Approach #1
// Calling the respective function

// function sum(a, b) {
//   return a + b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function divide(a, b) {
//   return a / b;
// }

// function doOperation(a, b, op) {
//   return op(a, b)
// }

// const ans = doOperation (1 , 2 , divide);
// console.log (ans);


// 🌹Approach #2
// Passing in what needs to be done as an argument

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function doOperation(a, b, op) {

    // a=1
    // b = 2
    // op = sum
  return op(a, b);  //sum (1,2); 
}

console.log(doOperation(1, 2, sum))