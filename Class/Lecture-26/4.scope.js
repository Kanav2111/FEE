// scope

// 1. Global Scope
// 2. Function Scope
// 3. Block Scope


// Global Scope : by default all the variables are declared in the global scope.
// let a = 'global scope';
// var b = 'global scope';
// const c = 'global scope';

// function scopeGlobal(){
//   console.log('\n');
//   console.log('inside function');
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log('\n');
// }

// scopeGlobal();
// console.log('outside function');
// console.log(a);
// console.log(b);
// console.log(c);
// console.log('\n');


// Function Scope : variables declared inside a function are in the function scope.

let sum = 50; // global scope
function calcSum(a, b){
  let c = a + b; // function scope
  console.log(c);
  console.log(sum);
}

calcSum(10, 5);
// console.log(c); // ReferenceError: c is not defined