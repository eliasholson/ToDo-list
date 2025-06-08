const taskInput = document.querySelector("#taskinput");
const taskButton = document.querySelector("#taskbutton");
const list = document.querySelector("#list");


function saveTasks() {
  const tasks = [];
  document.querySelectorAll("li").forEach(li => {
    tasks.push({
      text: li.firstChild.textContent,
      completed: li.classList.contains("completed")
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => {
    const listItem = document.createElement("li");
    const textSpan = document.createElement("span");
textSpan.textContent = task.text;
listItem.appendChild(textSpan);
    if (task.completed) {
      listItem.classList.add("completed");
    }

    listItem.addEventListener("click", function() {
      listItem.classList.toggle("completed");
      saveTasks();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "-";
    deleteButton.style.marginLeft = "10px";
    deleteButton.classList.add("deletebutton");

    deleteButton.addEventListener("click", function() {
      list.removeChild(listItem);
      saveTasks();
    });

    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
  });
}



taskButton.addEventListener("click", function() {
const text = taskInput.value.trim();
if (text !== "") {
const listItem = document.createElement("li");
const textSpan = document.createElement("span");
textSpan.textContent = text;
listItem.appendChild(textSpan);
listItem.addEventListener("click", function() {
listItem.classList.toggle("completed");
saveTasks();
});


const deleteButton = document.createElement("button");
deleteButton.textContent = "-";
deleteButton.style.marginLeft = "10px";
deleteButton.classList.add("deletebutton");


deleteButton.addEventListener("click", function() {
list.removeChild(listItem);
saveTasks();
});


listItem.appendChild(deleteButton);
list.appendChild(listItem);
taskInput.value = "";
saveTasks();
}});


taskInput.addEventListener("keydown", function(tneve) {
if(tneve.key === "Enter") {
taskButton.click();}});

loadTasks();