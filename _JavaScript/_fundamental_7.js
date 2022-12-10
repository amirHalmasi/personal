////////////////////////////////////
// Strings and Template Literals
const firstName = "Amir";
const job = "teacher";
const birthYear = 2000;
const year = 2022;

const amir =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(amir);

const amirNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(amirNew);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String
multiple
lines`);
