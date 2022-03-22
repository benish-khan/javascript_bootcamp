// LECTURE: Values and Variables and Data Types
let country = "USA";
let continent = "N.America";
let population = 330000000;

let isIsland = false;
let language = "english";

console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);
// LECTURE: let, const and var
console.log(language);

//population = 50000000; //uncaught type error: assignment to const var not allowed.
// Lecture Basic Operators
let splitCountry = population / 2;
console.log(splitCountry);
newPopulation = population + 1;
console.log(newPopulation);
let finland = 6000000;
console.log(finland > population);
let avgPop = 33000000;
console.log(population > avgPop);

const description =
  country +
  " is in " +
  continent +
  " ,and its " +
  population +
  " million people speak " +
  language;

console.log(description);
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
// Test Data for Mark and John
const marksBMI = massMark / heightMark ** 2 / (heightMark * heightMark);
console.log(marksBMI);
const johnsBMI = massJohn / heightJohn ** 2 / (heightJohn * heightJohn);
console.log(johnsBMI);
const markHigherBMI = marksBMI > johnsBMI;
console.log(markHigherBMI);
