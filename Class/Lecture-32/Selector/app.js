// selectors

// 1. getElementById
var a = document.getElementById('heading');

a.style.color = 'red';
a.style.backgroundColor = 'yellow';
a.style.padding = '20px';
a.style.border = '2px solid black';

// 2. getElementsByClass
var b = document.getElementsByClassName('list');

console.log(b[0]);
console.log(b[1]);
for(let lists of b){
  lists.style.fontWeight = "bold";
  lists.style.color = "purple";
  lists.style.fontSize = "20px";
}

// 3. getElementsByName
var e = document.getElementsByName('Batman');
console.log(e);

// 4. getElementsByTagName
var c = document.getElementsByTagName('h2');
c[0].style.textDecoration = "line-through";


// 5. querySelectorAll
var d = document.querySelectorAll('li:nth');
console.log(d);
