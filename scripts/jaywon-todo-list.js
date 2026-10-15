const todoList = [{
    name: 'make dishes',
    dueDate: '2026-10-15',
    completed: false
    }];


renderTodoList();

function renderTodoList () {
let todoListHtml = '';

for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    
    let status = 'Not completed';

    if (todoObject.completed === true) {
        status = 'Completed';
    };

    const html = `
    <P>${name} ${dueDate} ${status}
    <button onclick="
    todoList.splice (${i}, 1);
    renderTodoList();
    ">Delete</button>

    <button onclick="
        todoList[${i}].completed = true;
        renderTodoList();
    ">Complete</button>

    </p>`;
    todoListHtml += html

}

document.querySelector('.js-todo-list')
.innerHTML = todoListHtml;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input')
    const dueDate = dateInputElement.value;
    console.log(todoList);
    inputElement.value = '';
    renderTodoList();

    if (name === '') {
        document.querySelector('.js-empty')
        .innerHTML = 'You did not enter a task';

    } else {
        todoList.push({
            name: name,
            dueDate: dueDate,
            completed: false
        });
        document.querySelector('.js-empty')
        .innerHTML = '';
        inputElement.value = '';
        dateInputElement.value = '';
        renderTodoList();
    }
};
