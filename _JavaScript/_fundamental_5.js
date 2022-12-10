////////////////////////////////////
//         Basic Operators        //
//         Math operators         //
////////////////////////////////////
const now = 2037;
const ageAmir = now - 1991;
const ageSarah = now - 2018;
console.log(ageAmir, ageSarah);

console.log(ageAmir * 2, ageAmir / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Amirhossein";
const lastName = "Almasi";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x /= 5; // x = x * 4 = 100
x++; // x = x + 1 => output=101
x--; // x = x - 1 => output=100
x--; // x = x - 1 => output=99

console.log(x);

//////////////////////////
// Comparison operators //
//////////////////////////

console.log(ageAmir > ageSarah); // >, <, >=, <=
// ageAmir is 46 and ageSarah is 19 so result: true

console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
