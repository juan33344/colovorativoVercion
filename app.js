const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const taskSummary = document.getElementById('task-summary');
const clearCompletedButton = document.getElementById('clear-completed');

const STORAGE_KEY = 'tareas-colaborativas';
let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = '';
  renderSummary();

  if (tasks.length === 0) {
    const emptyMessage = document.createElement('li');
    emptyMessage.textContent = 'No hay tareas aún. Agrega la primera tarea.';
    emptyMessage.style.color = '#6b7280';
    taskList.appendChild(emptyMessage);
    return;
  }

  tasks.forEach((task, index) => {
    const item = document.createElement('li');
    item.className = `task-item ${task.completed ? 'completed' : ''}`;

    const text = document.createElement('p');
    text.className = 'task-text';
    text.textContent = task.text;

    const actions = document.createElement('div');
    actions.className = 'task-actions';

    const completeButton = document.createElement('button');
    completeButton.className = 'complete-btn';
    completeButton.textContent = task.completed ? 'Desmarcar' : 'Completar';
    completeButton.addEventListener('click', () => toggleTask(index));

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => deleteTask(index));

    actions.appendChild(completeButton);
    actions.appendChild(deleteButton);
    item.appendChild(text);
    item.appendChild(actions);
    taskList.appendChild(item);
  });
}

function addTask(text) {
  tasks.push({ text, completed: false });
  saveTasks();
  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function clearCompletedTasks() {
  tasks = tasks.filter((task) => !task.completed);
  saveTasks();
  renderTasks();
}

function renderSummary() {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;

  if (total === 0) {
    taskSummary.textContent = 'Aún no has agregado tareas.';
    return;
  }

  taskSummary.textContent = `Total: ${total} tarea(s). Completadas: ${completed}.`;
}

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = taskInput.value.trim();

  if (text === '') {
    return;
  }

  addTask(text);
  taskInput.value = '';
});

clearCompletedButton.addEventListener('click', () => {
  clearCompletedTasks();
});

renderTasks();
