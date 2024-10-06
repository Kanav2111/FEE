// lexical:
function outerfunc(){
  let a = 10;
  // console.log(c); // not defined
  function innerfunc(){
    let b = 20;
    let c = a + b;
    console.log(c);
  }
  innerfunc();
  console.log(c); // not defined
}
outerfunc();


// 3. block
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
// }
// console.log(a);
// console.log(b);
// console.log(c);


// 2. functions
// let sum = 20;

// function myfunc(a, b){
//   let sum = a + b; 
//   console.log(sum);
// }
// myfunc(10, 20);
// console.log(sum);


// 1. global 
// let a = 10;
// var b = 20;
// const c = 30;

// function myfunc(){
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// myfunc();
// console.log(a);
// console.log(b);