

// accesing elements

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const tasklist = document.getElementById("tasklist");

// Event Listeners: Adding a new task

addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    // check if the input is not empty

    if(taskText === ''){
        alert('please enter a task!');
        return;
    }

    // create a new list item

    const listItem = document.createElement("li");

    // create a span to hold the task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // create a delete button

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.color = 'red';
    deleteButton.style.marginLeft = '100px';

    // event listener: deleting a task

    deleteButton.addEventListener('click', () => {
        tasklist.removeChild(listItem);
    })

    // append task test and delete button to the list

    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);

    // append the list item to the task list

    tasklist.appendChild(listItem);

    // clear the input field

    taskInput.value = '';
});
