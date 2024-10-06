// Global execution content
console.log(a); // undefined
const a = 10;
b();
console.log(a);

function b(){
  console.log(c);
  var c = 20;
  console.log(c);
}

// a: undefined b: function
// a: 10, b: function c: undefined
// c: 20