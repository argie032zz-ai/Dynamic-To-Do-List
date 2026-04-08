const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((taskText) => addTaskToDOM(taskText));
}

function addTaskToDOM(taskText) {
  const listItem = document.createElement("li");
  listItem.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    //AKOY GA ADD ALANGAN SAB UG IKAW
    if (typeof soundManager !== 'undefined') {
      soundManager.playDeleteSound();
    }
    //NAA PA SA UBOS
    taskList.removeChild(listItem);
    removeTaskFromStorage(taskText);
  });
  deleteButton.classList.add("deleteButton");
 
  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);
}
function removeTaskFromStorage(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((task) => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

addTaskButton.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (task !== "") {
    //KANI SAB AKOY GA ADD
    if (typeof soundManager !== 'undefined') {
      soundManager.playSuccessSound();
    }
    //DIRI RANG LAST
    addTaskToDOM(task);

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";
  }
});

loadTasks();