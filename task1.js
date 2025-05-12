// Array Filtering/Mapping: task1.js (filter females, map names)

const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 22, gender: "male" },
  { name: "Diana", age: 28, gender: "female" },
  { name: "Ethan", age: 35, gender: "male" },
];

// This function will filter out all female from the array
const getMaleNames = (arr) => {
  const remainingPeople = arr.filter((obj) => obj.gender !== "female");
  return remainingPeople.map((obj) => obj.name);
};

const result = getMaleNames(people);
console.log(result);
