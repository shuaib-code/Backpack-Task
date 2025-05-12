// Function Composition: task3.js (compose square, double, add5)

const square = (x) => x ** 2;
const double = (x) => x * 2;
const add5 = (x) => x + 5;

// This function compose square, double and add5
const composedFn = (x) => add5(double(square(x)));

const result = composedFn(2);
console.log(result);
