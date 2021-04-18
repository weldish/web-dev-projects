
getFromLocalStorage();

const input = document.getElementById('input'); // to get the value of the input

const todos = document.getElementById('todos');  // to append a list to the ul list (create a collection of lists)

const todos_lists = [];


document.getElementById('form').addEventListener('submit', function (evt) {
    evt.preventDefault();
    const inputText = input.value;

    if (inputText) {
        addToList(inputText);
    }

});


function addToLocalStorage(todo_text) {

    todos_lists.push(todo_text);  // adding the list_text to the array of strings

    localStorage.setItem("todoLists", JSON.stringify(todos_lists));
}


function getFromLocalStorage() {

    const listed_return = JSON.parse(localStorage.getItem("names"));
    if (listed_return) {
        for (i = 0; i < listed_return.length; i++) {
            addToList(listed_return(i));
        };
    };


}


function addToList(inputed) {
    const listElement = document.createElement('li');  // create a li element 

    listElement.textContent = inputed;      // add the entered todo list text content to the li element

    todos.append(listElement);  // append each todolist

    addToLocalStorage(inputed);    // add to the local storage

    input.value = ""; // get ridding of the inputted text after it is submitted
}