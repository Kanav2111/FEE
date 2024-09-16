// Variables

// var a = 10;
// var a = 15;
// console.log(a);

// let b = 20;
// let b = 25;
// console.log(b);

// const c = 30;
// console.log(c);

// Variable Rules
// Variable names are case-sensitive; “a” & “A” are different.
// Only letters, digits, underscore( _ ) and $ is allowed. White
// space are not allowed.
// Only a letter, underscore( _ ) or $ should be 1st character.
// Variables names should be meaningful.
// Variables names should be camelCase.
// Variables names should not be reserved keywords.
// reserved keywords : https://www.w3schools.com/js/js_reserved.asp


// Data Types in JS
// What are Data Types? : Data types are the classification or categorization of data items. It represents the kind of value that tells what operations can be performed on a particular data.

// Primitive Types: They store a single value.
// Ex- Number, String, Boolean, Undefined, Null, BigInt,

// Non-Primitive Types: They can store collections of data
// Ex- Symbol, Objects.

// var a = 10;
// var str = 'Kanav';
// var isTrue = true;
// var x;
// var y = null;
// var bigInt = 1234567890123456789012345678901234567890n;

// console.log(a);
// console.log("a is : " + typeof(a) + "\n");
// console.log(str);
// console.log("str is : " + typeof(str) + "\n");
// console.log(isTrue);
// console.log("isTrue is : " + typeof(isTrue) + "\n");
// console.log(x);
// console.log("x is : " + typeof(x) + "\n");
// console.log(y);
// console.log("y is : " + typeof(y) + "\n");
// console.log(bigInt);
// console.log("bigInt is : " + typeof(bigInt) + "\n");

// var arr = [1, 2, 3, 4, 5];
// console.log(typeof(arr));


// Operators in JS

// Arithmetic Operators
// +, -, *, /, %, ++, --

// var a, b;
// a = 10;
// b = 20;

// console.log("a + b = " + (a + b));
// console.log("a - b = " + (a - b));
// console.log("a * b = " + (a * b));
// console.log("a / b = " + (a / b));
// console.log("a % b = " + (a % b));


// Assignment Operators
// =, +=, -=, *=, /=, %=

// var a = 10;
// var b = 20;

// // a = a + b;
// a += b;
// a -= b;
// a *= b;
// a /= b;
// a %= b;

// console.log("a = a + b : " + a);
// console.log("a += b : " + a);
// console.log("a -= b : " + a);
// console.log("a *= b : " + a);
// console.log("a /= b : " + a);
// console.log("a %= b : " + a);


// Comparison Operators
// ==, ===, !=, !==, >, <, >=, <=

// Logical Operators
// &&, ||, !

// Increment/Decrement Operators
// ++, --

// Conditional (Ternary) Operator
// ? :

// Bitwise Operators
// &, |, ^, ~, <<, >>


// Conditional Statements
// 1. if

// if(condition){
//     // code
// }

// 2. if-else

// if(condition){
//     // code
// } else {
//     // code
// }

// 3. if-else-if

// if(condition){
//     // code
// } else if (condition){
//     // code
// } else {

// }


// Loops in JS
// 1. for loop

// Syntax:
// for(initialization; condition; increment/decrement){
//     // code
// }

// eg:
// for(var i = 1; i <= 5; i++){
//   console.log(i);
// }

// 2. while loop

// Syntax:
// while(condition){
//     // code
// }

// eg:
// var i = 1;
// while(i <= 5){
//   console.log(i);
//   i++;
// }

// 3. do-while loop

// Syntax:
// do{
//     // code
// } while(condition);

// eg:

// var i = 1;
// do{
//   console.log(i);
//   i++;
// }
// while(i <= 5);

// Differences between while and do-while loop
// The while loop checks the condition before the loop executes.
// The do-while loop executes the loop once before checking the condition.

// eg in real world scenario of while and do-while loop : 

// Imagine a login system where the user has to input a correct password. If the password is incorrect, the system will keep asking until it is correct.

// Imagine a program that always shows a menu of options to a user at least once, and continues to display it as long as the user doesn’t select the option to exit.

// Arrays
// Arrays are used to store multiple values in a single variable.
// They are a special type of object and can hold various datatypes, including numbers, strings, and even other arrays.

// Syntax:
// var array_name = [value1, value2, value3, ....];

// eg:
// var arr = [1, 2, 3, 4, 5];
// console.log(arr);

// Accessing array elements
// console.log(arr[0]);

// Changing array elements
// arr[0] = 55;
// console.log(arr);

// Operations on arrays
// 1. length : returns the length of the array

// console.log(arr.length);

// 2. push() : adds an element at the end of the array

// arr.push(6);
// console.log(arr);

// 3. pop() : removes the last element of the array
// let arr=[1,2,3,4,5];
// console.log(arr.pop());
// arr.pop(1);
// console.log(arr);

// 4. concat() : joins two or more arrays

// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];
// console.log(arr1.concat(arr2));

// 5. shift() : removes the first element from the array

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits);

// 6. unshift() : adds an element at the beginning of the array

// fruits.unshift("Kiwi");
// console.log(fruits);

// 7. splice() : adds/removes elements from an array
// Syntax: array.splice(index, how-many, item1, ....., itemX)

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// fruits.splice(2, 1, "Lemon", "Kiwi");
// console.log(fruits);

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.splice(1, 2));

// 8. slice() : returns the selected elements in an array, as a new array object
// Syntax: array.slice(start, end-1)

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.slice(1, 3));

// 9. indexOf() : returns the index of the first occurrence of a specified value in an array

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.indexOf("Apple"));

// 10. filter() : creates a new array with all elements that pass the test implemented by the provided function

// let numbers = [1, 2, 3, 4, 5];
// let evenNumbers = numbers.filter(function(number){
//   return number % 2 == 0;
// });
// console.log(evenNumbers);

// 11. sort() : sorts the elements of an array

// let numbers = [1, 3, 2, 5, 4];
// numbers.sort();
// console.log(numbers);

// 12. reverse() : reverses the elements of an array

// let numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers);

// 13. concat() : joins two or more arrays

// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];
// let a = arr2.concat(arr1);
// console.log(a);

// 15. mutable and immutable arrays : array is mutable in JS

// let arr1 = [1, 2, 3, 4];
// let arr2 = arr1;
// arr2.push(5);
// console.log(arr1);

// 16. multidimensional arrays

// let arr = [1, 2, 3, [4, 5, 6], 7, 8, 9];
// console.log(arr[3][1]);

// 17. array methods

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.toString());
// console.log(arr.join(' - '));
// console.log(arr.includes(3));

// 18. array iteration methods

// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function(element){
//   console.log(element);
// });

// Maximum in an array using for loop
// let arr = [1, 2, 3, 4, 5];
// let max = arr[0];
// for(let i = 1; i < arr.length; i++){
//   if(arr[i] > max){
//     max = arr[i];
//   }
// }
// console.log(max);


// Strings in JS
// Strings are used to store text.
// Strings must be inside quotes.
// You can use single or double quotes.
// Strings are immutable.

// var str = 'Kanav';
// console.log(str);

// str[0] = 'A';
// console.log(str);

// Operations on strings
// 1. length : returns the length of the string

// var str = 'hello';
// console.log(str.length);

// 2. indexOf() : returns the index of the first occurrence of a specified value in a string

// var str = 'Welcome to JS';
// console.log(str.indexOf('JS'));

// 3. uppercase and lowercase

// var str = 'welcome to my world';
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// 4. trim
// let name =  '    Kanav Kumar    ';
// console.log(name.trim());

// 5. repeat 
// let txt = 'Bye';
// console.log(txt.repeat(5));

// 6. string literals
// let firstname = 'Kanav';
// let lastname = 'Kumar';
// console.log(`Mr. ${firstname} ${lastname}`);

// let str1 = 'myname';
// str1['y'] - 'x';
// console.log(str1);

// 7. replace 
// let msg = 'I love stars';
// console.log(msg.replace('stars', 'you'));

// 8. slice
// let text = 'This is my destiny';
// console.log(text.slice(8, 10));