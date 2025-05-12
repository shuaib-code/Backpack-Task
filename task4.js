// Sorting Objects: task4.js (sort cars by year)

const cars = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Ford", model: "Focus", year: 2012 },
  { make: "Tesla", model: "Model 3", year: 2021 },
  { make: "Hyundai", model: "Elantra", year: 2019 },
];

// This function sort the array of cars by the year of manufacture in ascending order
const sortByAscending = (arr) =>
  arr.sort((car1, car2) => car1.year - car2.year);

const result = sortByAscending(cars);
console.log(result);
