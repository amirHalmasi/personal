//////////////////////////////////////
//  Type Conversion and Coercion    //
//////////////////////////////////////
// type conversion
//convert one type to another manually
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN); //nan is an invalid number

console.log(String(23), 23);

// type coercion
//convert one type to another automatically
console.log("I am " + 23 + " years old");
//same as below
// console.log("I am " + String(23) + " years old");
console.log("23" - "10" - 3);
// minus convert string to number bot plus convert number to string
console.log("23" / "2");

let n = "1" + 1; // plus convert the number to string so output is-> '11'
n = n - 1; // minus convert the string to number
console.log(n); //outPut = ?
console.log(typeof n);

n = 2 + 3 + 4 + "5"; //"95"
console.log(n); //outPut = ?
console.log(typeof n);

n = "10" + "4" + "3" - 2 + "5";
// last plus convert it to  String "15"
console.log(n); //outPut = ?
console.log(typeof n);
