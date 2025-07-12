const addBtn = document.getElementById("add-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <span>✔️ ${taskText}</span>
    <i class="fas fa-times"></i>
  `;

  taskList.appendChild(li);
  taskInput.value = "";

  li.querySelector("i").addEventListener("click", () => {
    li.remove();
  });
});

