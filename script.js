const addButton = document.getElementById('add');
const taskInput = document.getElementById('todo-input');
let todoItems = document.getElementById('todo-items');

const clearButton = document.getElementById('clear');

function clearAll() {
    todoItems.remove();
}
clearButton.addEventListener('click', clearAll);


taskInput.addEventListener('keyup', () => {
    if (taskInput.value == "") {
        addButton.disabled = true;
        addButton.style.backgroundColor = '#9393ff';
    } else {
        addButton.disabled = false;
        addButton.style.backgroundColor = '#3e3eff';
    }
})

addButton.addEventListener('click', () => {

    if (taskInput.value.trim() != 0) {
        let newTodo = document.createElement('div');
        newTodo.classList.add('todo-card');
        newTodo.innerHTML = `
        <input type="checkbox" style="width: 1rem; height: 1rem; cursor: pointer;">
        <p style="font-size: 1rem; text-align: center;" > ${taskInput.value} </p>  
        `
        todoItems.appendChild(newTodo);
        taskInput.value = '';
        addButton.disabled = true;
        addButton.style.backgroundColor = '#9393ff';

    }

});

// todoItems.addEventListener('click', (e) => {
//     if (e.target.addEventListener.classList.contains('delete')) {
//         e.targetp.parentNode.remove();
//     }
// })