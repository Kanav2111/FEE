/*
•⁠  ⁠create a array with a name cart with products (name,price, qty).
Calculate the price of the all the product that we have added in the cart.
*/

const cart = [
  { id: 1, name: "iphone 16", price: 164000, qty: 1 },
  { id: 2, name: "iphone 15", price: 84000, qty: 2 },
];

// Syntax: array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

const totalPrice = cart.reduce(function (price, item) {
  return price + item.price * item.qty;
}, 0);
console.log(totalPrice);


/*
•⁠  ⁠write a function to filter out all the perfect square from given list
of number:

eg: [1,2,3,4,5,6,7,8,9,10,11,16,18,20,36,40,49];
ans: [1,4,9,16,36,49]
*/

const numbers = [1,2,3,4,5,6,7,8,9,10,11,16,18,20,36,40,49];

const perfectSquares = numbers.filter(number => {
  const sqrt = Math.sqrt(number);
  return sqrt === Math.floor(sqrt);
});

console.log(perfectSquares);


/*
•⁠  ⁠user = ['Amit', 'Ajay','Mukesh'];

Rewards = 1-10 Rs (random)
listofUser = [
 {id:1, name: 'Amit', reward:7 etc},
{id:2, name: 'Ajay', reward:5 etc},
{id:3, name: Deepak',reward:5 etc},
]
*/

const users = ["Amit", "Ajay", "Mukesh"];

function getUserWithRandomRewards(users) {
  return users.map(function (user, idx) {
    return {
      id: idx + 1,
      name: user,
      rewards: Math.floor(Math.random() * 10 + 1),
    };
  });
}

const userList = getUserWithRandomRewards(users);
console.log(users);
console.log(userList);


/*
•⁠  ⁠Find the veg menu list:
*/
const menu = [
  "Kadai Paneer",
  "Dal Makhni",
  "Masala Dosa",
  "Chicken Soup",
  "Chicken Butter Masala",
  "Veg Chowmein",
  "Egg Curry",
  "Egg Maggie",
  "Chicken Fry",
  "Chicken Biryani",
  "Khichdi",
  "Handi Paneer",
  "Onion Paratha",
  "Garlic Naan",
  "Onion Pizza",
  "Garlic Bread",
  "Onion Rings",
  "Chilli Paneer",
];


function isVeg(food) {
  if (
    food.toLowerCase().includes("chicken") ||
    food.toLowerCase().includes("egg")
  ) {
    return false;
  }
  return true;
}
const vegMenu = menu.filter(isVeg);
console.log(vegMenu);


// What does filter method do?
// Filter method is used to filter out the elements from an array based on a condition.

// Repeat function, that pushes data into an object , name , id, designation. pass them as a function parameter. Create object first

function repeat(name, id, designation) {
  const obj = {
    name,
    id,
    designation,
  };
  return obj;
}

console.log(repeat("John", 1, "Software Engineer"));





