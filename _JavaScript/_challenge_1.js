////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

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
console.log("BMImark" + ": " + BMImark);
console.log("BMIjohn" + ": " + BMIjohn);
console.log("Is Mark's BMI higher? " + "It's " + (BMImark > BMIjohn));
