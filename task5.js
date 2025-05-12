// Array Reduction: task5.js (sum even numbers with reduce)

const numbers = [5, 10, 15, 20, 25];

// This function calculate the sum of all even numbers in the array
const sumEvenNumbers = (arr) =>
  arr.reduce((total, value) => (value % 2 === 0 ? total + value : total), 0);

const result = sumEvenNumbers(numbers);
console.log(result);
