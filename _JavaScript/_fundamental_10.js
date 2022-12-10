///////////////////////////////////
//    Truthy and Falsy Values    //
///////////////////////////////////

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Amir")); //empty string is falsy value but this isn't empty string
console.log(Boolean({}));
console.log(Boolean(""));

// type conversion ☝
//convert one type to another manually

//********************************************************/

// type coercion 👇
//convert one type to another automatically

const money = 100;
// const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
