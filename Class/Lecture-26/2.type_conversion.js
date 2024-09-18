console.log(10 + 2); // 12

console.log(10 + "2"); // 102

console.log(typeof (10 + '2'));  // string  // explanation: 10 is a number and '2' is a string, so when we add a number to a string, it will convert the number to a string and concatenate it with the string.

console.log(10 - '2'); // 8 // explanation: 10 is a number and '2' is a string, so when we subtract a string from a number, it will convert the string to a number and subtract it from the number.


console.log(10 + 'A'); // 10A // explanation: 10 is a number and 'A' is a string, so when we add a number to a string, it will convert the number to a string and concatenate it with the string.

console.log(10 - 'A'); // NaN // explanation: 10 is a number and 'A' is a string, so when we subtract a string from a number, it will convert the string to a number and subtract it from the number.

console.log(10 + '2' - 'A'); // NaN // explanation: 10 is a number and '2' is a string, so when we add a number to a string, it will convert the number to a string and concatenate it with the string. Then, when we subtract a string from a number, it will convert the string to a number and subtract it from the number.

console.log(10 - '2' + 'A'); // 8A // explanation: 10 is a number and '2' is a string, so when we subtract a string from a number, it will convert the string to a number and subtract it from the number. Then, when we add a number to a string, it will convert the number to a string and concatenate it with the string.
console.log('\n');


// Type Conversion
let a = '20';

let c = Number(a);

let d = parseInt(a);
console.log(typeof a);
console.log(typeof c);
console.log(typeof d);