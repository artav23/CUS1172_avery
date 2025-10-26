// Task array to store tasks
const tasks = [];

// Form and task list DOM elements
const form = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

// Event listener to handle form submission
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('task-title').value.trim();
  const priority = document.getElementById('task-priority').value;
  const status = document.querySelector('input[name="status"]:checked').value;

  // Create new task object
  const newTask = {
    title,
    priority,
    status
  };

  // Add task to the array
  tasks.push(newTask);

  // Update the task list in the DOM
  renderTasks();

  // Clear form fields
  form.reset();
});

// Render tasks in the DOM
function renderTasks() {
  taskList.innerHTML = ''; // Clear current list
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.classList.add(task.priority + '-priority');
    
    // Mark task as completed with strikethrough if necessary
    if (task.status === 'completed') {
      li.classList.add('completed');
    }

    // Task content
    li.innerHTML = `
      <span>${task.title} - <strong>${task.priority}</strong> - ${task.status}</span>
      <div>
        <button onclick="markComplete(${index})">Mark as Complete</button>
        <button onclick="removeTask(${index})">Remove</button>
      </div>
    `;
    
    taskList.appendChild(li);
  });
}

// Remove task from the array and DOM
function removeTask(index) {
  tasks.splice(index, 1); // Remove from the array
  renderTasks(); // Re-render task list
}

// Mark task as completed (strikethrough effect)
function markComplete(index) {
  tasks[index].status = 'completed'; // Update task status
  renderTasks(); // Re-render task list
}
