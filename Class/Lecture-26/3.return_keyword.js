function sum(a, b){
  console.log('hi\n');
  return a + b;
  console.log('hi\n'); // ignored because it is after the return statement
  console.log('hi');
}

console.log(sum(10, 5));