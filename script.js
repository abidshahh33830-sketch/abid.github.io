let tasks = [];

function addTask() {
    let input = document.getElementById("taskInput");

    if (input.value === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push(input.value);
    input.value = "";
    showTasks();
}

function showTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        list.innerHTML += `
            <li>
                <span>${task}</span>
                <button onclick="deleteTask(${index})">Delete</button>
            </li>
        `;
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    showTasks();
}
