let button = document.querySelector('button');
let input = document.querySelector('#favchap');
let list = document.querySelector('ul');

const liList = document.createElement('li');
const deletebutton = document.createElement('button');

liList.textContent = input.value;
deletebutton.textContent = '❌';

liList.append(deletebutton);
list.append(liList);