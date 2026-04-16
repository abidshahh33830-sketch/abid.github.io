alert("JavaScript working!");

let tasks = [];

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value;

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push(taskValue);
    taskInput.value = "";
    showTasks();
}

function showTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task) => {
        let li = document.createElement("li");
        li.innerHTML = task;
        taskList.appendChild(li);
    });
}
