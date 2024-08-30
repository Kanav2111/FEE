// 1. Trim Method

let txt = '     Kanav Kumar    ';
console.log(txt.trim());

// 2. toUpperCase() and toLowerCase() Method

let txt1 = 'Kanav Kumar';
let txt2 = 'KANAV KUMAR';
console.log(txt1.toUpperCase());
console.log(txt2.toLowerCase());

// 3. indexOf() Method

let msg = "Meet me!";
console.log(msg.indexOf('M'));

// 4. slice(start, end-1) Method

let str = "Meet me";
console.log(str.slice(2));
console.log(str.slice(2, 6));
console.log(str.slice(-2));

// 5. replace() Method

let msg1 = "I love moon";
console.log(msg1.replace('moon', 'you'));

// 6. repeat() Method

let msg2 = "I love you";
console.log(msg2.repeat(3));

// 7. method chaining
let msg3 = "Hey there!";
let trimedVal = msg3.trim();
console.log(msg.trim().toLowerCase());
console.log(msg.trim().toUpperCase());

// 8. string template literals

let firstName = "Kanav";
let lastName = "Kumar";
// console.log(`My name is ${firstName} ${lastName}`);
console.log(`Mr. ${firstName} ${lastName}`);

let str1 = "my name"
str1['y'] - 'x'
console.log(str1)