////////////////////////////////////
//      Operator Precedence       //
////////////////////////////////////
//more information here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
const now = 2037;
const ageAmir = now - 2000;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
// (= precedence is 2) but (- precedence is 14) so ( - ) is first calculated
console.log(x, y);

const averageAge = (ageAmir + ageSarah) / 2;
console.log(ageAmir, ageSarah, averageAge);
