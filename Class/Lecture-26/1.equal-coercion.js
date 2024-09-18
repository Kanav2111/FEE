console.log(); // undefined

console.log(1 == 1); // true

console.log(1 == '1'); // true 

console.log(1 == true); // true

console.log("" == 1); // false

console.log([] == ""); // true

// what is equal coercion?
// 1. == is a comparison operator that compares two values for equality, but it does not require the two values to be of the same type.
// 2. If the two values are of different types, JavaScript will attempt to convert them to the same type before making the comparison.
// 3. This process is known as type coercion.