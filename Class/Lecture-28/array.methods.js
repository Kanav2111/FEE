// Array methods: map, filter, reduce and sort

// 1. map : 
// A) turn the array values to uppercase and print a new array
let arr = ['kanav', 'tushar', 'yashvi', 'sonam'];
// function capital(names){
//   return arr.toUpperCase();
// }
// console.log(arr.map(capital));

let uppercase = arr.map(function(names){
  return names.toUpperCase();
});
console.log(uppercase);

// B) cube of number
// let num = [1, 2, 3, 4, 5];
// function cube(num) {
//   return num ** 3;
// }
// console.log(num.map(cube));

// ------------------------------------------------filter------------------------------------------------

// 2. filter 

const num = [1, 2, 34, 53, 24, 56];
// function isEven(num){
//   if(num % 2 === 0){
//     return true;
//   }
//   return false;
// }
// const evenNum = num.filter(isEven);
const evenNum = num.filter(function(num){
  if(num % 2 === 0){
    return true;
  }
  return false;
});

console.log(evenNum);