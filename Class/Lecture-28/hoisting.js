/* 
Hoisting: Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution. 
*/

function printName(names, num){
  for(let i = 1; i <= num; i++){
    names();
  }
}
printName(myName, 20);

let myName = function names() {
  console.log('Kanav');
};
names();