let counter1 = document.getElementById('count');
let counter2 = document.getElementById('count2');
let add = document.getElementById('like');
let sub = document.getElementById('Unlike');

 let count = 0;
 add.addEventListener('click', () => {
     count++;
     counter1.innerHTML = count;
 })
 let count2 = 0;
 sub.addEventListener('click', () => {
     count2++;
     counter2.innerHTML = count2;
 })