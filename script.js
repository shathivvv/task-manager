let tasks = [
    {
        name : "Read a book",
        completed : false,
    },
    {
        name : "Build a project",
        completed : true,
    },
    {
        name : "Attend class",
        completed : false,
    }
];

function renderTasks() {
    const taskList = document.getElementById("task-list"); //finds ul
    taskList.innerHTML = ""; //clears the ul before rendering
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const taskItem = document.createElement("li");// creates a new li element
        const completeButton = document.createElement("button"); //creates a new button element
        const deleteButton = document.createElement("button"); //creates a new button element
        deleteButton.textContent = "Delete";
        completeButton.textContent = task.completed ? "Mark Incomplete" : "Mark Complete";
        completeButton.addEventListener("click", function() { //adds an event listener to the button
            task.completed = !task.completed; //toggles the completed status of the task
            renderTasks(); //re-renders the task list to reflect the change
        });

        deleteButton.addEventListener("click", function() { //adds an event listener to the button
            tasks.splice(i, 1); //removes the task from the tasks array
            renderTasks(); //re-renders the task list to reflect the change
        });
        taskItem.textContent = task.name + " - " + (task.completed ? " (Completed)" : "(Incomplete)");// task.name is the text content of the li
        taskItem.appendChild(completeButton); //appendChild() adds the button to the li
        taskItem.appendChild(deleteButton); //appendChild() adds the delete button to the li
        taskList.appendChild(taskItem); //appendChild() adds item to webpage
    }
}

renderTasks(); //calls the function to render tasks on page load

function addTask() {
    const taskInput = document.getElementById("task-input"); //finds the input field
    const taskName = taskInput.value.trim(); // removes whitespace from the beginning and end of the input value
    if (taskName === "") {
        alert("Please enter a task name."); //informs the user that they need to enter a task name if the input is empty
        return; //stops the function from executing further if the input is empty
    }
    tasks.push({ //adds a new task to the tasks array
        name: taskName,
        completed: false,
    });
    taskInput.value = ""; //clears the input field after adding the task
    renderTasks(); //re-renders the task list to include the new task
}

document.getElementById("add-task-btn").addEventListener("click", addTask); //adds an event listener to the "Add Task" button that calls the addTask function when clicked