////////////////////////////////////
// Equality Operators: == vs. ===

const age = "18";
// const age = 18;
// const age = 19;
if (age === 18) console.log("You just became an adult :D (strict)"); //it's better to use

if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number?")); //prompt output is a String and we convert it to number with Number() method
console.log(favourite);
console.log(typeof favourite);

// if (favourite == 23) { // '23' == 23

if (favourite === 23) {
  // 22 === 23 -> FALSE
  console.log("Cool! 23 is an amzaing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");

console.log(12 == "12"); // convert string to number
console.log(12 === "12");
console.log(12 === 13);
console.log(12 == 12);
console.log(12 === 12);
