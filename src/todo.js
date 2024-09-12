const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add Task Event
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;
    localStorage.setItem("text",taskText)

    // Add click event to toggle completion
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    // Add double-click event to remove task
    li.addEventListener("dblclick", () => {
      taskList.removeChild(li);
    });

    taskList.appendChild(li);
    taskInput.value=""
  }
});

// Optional: Add task on Enter key press
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTaskBtn.click();
  }
});
