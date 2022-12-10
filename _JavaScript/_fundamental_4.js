//////////////////////////////////
//       let, const and var     //
//////////////////////////////////
//let can be change inside program
let age = 30;
age = 31;

//const cant be change inside program
const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";

lastName = "Almasi";
//this☝ is bad way always declare variable
console.log(lastName);
// diffrent between var and let
//1️⃣
console.log("******************************************");
console.log("var");
console.log("let isn't blocl scope");
var amirAge = 20;
console.log(amirAge);
{
  var amirAge = 50;
}
console.log(amirAge);
console.log("******************************************");
console.log("let");
console.log("let is blocl scope");
let rezaAge = 20;
console.log(rezaAge);
{
  let rezaAge = 50;
}
console.log(rezaAge);
//2️⃣
var amirJob = "programmer";
var amirJob = "programmer";
//wrong
// let amirBJob = "programmer";
//  //let cant redeclare by using let again
// let amirBJob = "student";
//right
let amirCJob = "programmer";
amirCJob = "student";
