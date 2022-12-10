////////////////////////////////////
//      Coding Challenge #2       //
////////////////////////////////////
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
// const marksWeights = 78;
// const marksHeight = 1.69;
// const johnsWeights = 92;
// const jhonsHeight = 1.95;

const marksWeights = 95;
const marksHeight = 1.88;
const johnsWeights = 85;
const jhonsHeight = 1.76;

let BMImark = marksWeights / marksHeight ** 2;
let BMIjohn = johnsWeights / (jhonsHeight * jhonsHeight);

console.log(`Mark's BMI is ⛄: ${BMImark}`);

const johnsBmiText = "John's BMI is ⛄: " + BMIjohn;
console.log(johnsBmiText);
if (BMImark > BMIjohn) {
  console.log(`Mark's BMI (${BMImark}) is higher 📈 than John's (${BMIjohn})!`);
} else {
  console.log("Jhon's BMI " + BMIjohn + " is higher 📈 than John's" + BMIjohn);
}
