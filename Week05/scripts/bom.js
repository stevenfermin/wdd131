let button = document.querySelector('button');
let input = document.querySelector('#favchap');
let list = document.querySelector('#list');

let chaptersList = getChapterList() || [];

chaptersList.forEach(chapter => {
    showList(chapter);
});

button.addEventListener('click', () =>{
    if (input.value.trim() != '') {
        showList(input.value);
        chaptersList.push(input.value);
        setChaptersList();
        input.value = '';
        input.focus();
    }
});

function showList(content) {
    
    let li = document.createElement('li'); //Creating a li element
    let deletebutton = document.createElement('button');
    li.textContent = content; // note the use of the displayList parameter 'item'
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
        input.focus(); // set the focus back to the input
  });
}

function setChaptersList(){
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersList));
}

function getChapterList(){
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length -1);
    chaptersList = chaptersList.filter(content => content !== chapter);
    setChaptersList();
};

