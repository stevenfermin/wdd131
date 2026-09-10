let button = document.querySelector('button');
let input = document.querySelector('#favchap');
let list = document.querySelector('#list');

button.addEventListener('click', function(){
    if (input.value.trim() != "") {
        const li = document.createElement('li'); //Creating a li element
        li.textContent = input.value;

        const deletebutton = document.createElement('button'); //Creating a delete button
        deletebutton.textContent = '❌';
        deletebutton.addEventListener('click', function(){
            window.alert("Deleted");
            list.removeChild(li);
            input.focus();
        });

        li.appendChild(deletebutton);
        list.appendChild(li);

        input.value = "";
    }
    input.focus();
});

