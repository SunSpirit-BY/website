'use strict';
let But = document.querySelector('button');
let Par = document.querySelector('.p2')
But.onclick = function() {
console.log('Кнопка нажата!');
But.classList.remove('b1');
But.classList.add('button2');
Par.textContent='Стильно';
}