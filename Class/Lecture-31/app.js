const person1 = {
  name: "Kanav",
  age: 25,
  designation: "Software Engineer",
};

console.log(person1);

const person2 = Object.create(person1);
const person3 = Object.create(person2);
console.log(person2);
console.log(person3.name);
person2.name = "vivek";
console.log(person2);
console.log(person3.name);

// __proto__ (dunder proto)

console.log(person3.__proto__ == person1);
console.log(person1.__proto__ == Object.prototype);
console.log(person3.__proto__ == Object.prototype);
console.log(Object.prototype.__proto__);

console.log(person3);
console.log(person3.hasOwnProperty("name"));
console.log(person2.hasOwnProperty("name"));
console.log(person1.hasOwnProperty("name"));

const num = 10;
console.log(num.__proto__ == Number.prototype);

const arr = [1, 2, 3, 4];
console.log(arr.__proto__ == Array.prototype);
