let button = document.querySelector('button');
let input = document.querySelector('#favchap');
let list = document.querySelector('ul');

const liList = document.createElement('li'); //Creating a li element
const deletebutton = document.createElement('button'); //Creating a delete button

liList.textContent = input.value;
deletebutton.textContent = '❌';

liList.append(deletebutton);
list.append(liList);