/*
// function add(a, b){
//     return a + b;
// }

// let sum = 0;
// let a = 10;
// let b = 20;

// sum = add(a, b);

// console.log('Sum of a and b : ', add(a, b));
// console.log('Sum of a and b : ', add(a, 10));

// Another way

// 1. function declaration
function add(a, b){
  // a, b are parameters of function add
  let ans = a + b;
  console.log('Sum is :', ans);
}
// function call
add(10, 20);
*/


// 2. default parameters
function multiply(a, b = 5){
  let ans = a * b;
  console.log(ans);
}

// multiply(10); // NaN
multiply(5);
multiply(5, 3);
