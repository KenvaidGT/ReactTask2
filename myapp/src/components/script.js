// ---- PROFILE PAGE ----
const helloBtn = document.getElementById('hello-btn');
const colorBtn = document.getElementById('color-btn');
const timeBtn = document.getElementById('time-btn');
const heading = document.getElementById('main-heading');
const timeOutput = document.getElementById('time-output');
let next = -1;

if (helloBtn) {
  helloBtn.addEventListener('click', () => alert('Hello, [Timur]!'));
}

if (colorBtn) {
  const colors = ['crimson', 'Tomato', 'DodgerBlue', 'MediumSeaGreen', 'Gold', 'DeepPink'];
  colorBtn.addEventListener('click', () => {
    if (next >= colors.length-1){
      next = -1;
    }
    next = next + 1;
    document.body.style.backgroundColor = colors[next];
  });
}

if (timeBtn) {
  timeBtn.addEventListener('click', () => {
    const now = new Date();
    timeOutput.textContent = `Current time: ${now.toLocaleString()}`;
  });
}

// ---- TO-DO LIST ----
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

if (addBtn) {
  function addTodo() {
    const text = todoInput.value.trim();
    if (!text) return;
    const li = document.createElement('li');
    li.className = 'todo-item';

    const span = document.createElement('span');
    span.textContent = text;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
      li.classList.toggle('done', checkbox.checked);
    });

    const remove = document.createElement('button');
    remove.textContent = '✕';
    remove.addEventListener('click', () => li.remove());

    li.append(checkbox, span, remove);
    todoList.appendChild(li);
    todoInput.value = '';
  }

  addBtn.addEventListener('click', addTodo);
  todoInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') addTodo();
  });
}

// ---- HOBBIES PAGE ----
const shuffleBtn = document.getElementById('shuffle-btn');
const hobbyListDynamic = document.getElementById('hobby-list-dynamic');
const hobbies = ['Photography', 'Cycling', 'Gaming', 'Cooking', 'Reading'];

function renderHobbies() {
  if (!hobbyListDynamic) return;
  hobbyListDynamic.innerHTML = '';
  hobbies.forEach(h => {
    const li = document.createElement('li');
    li.textContent = h;
    hobbyListDynamic.appendChild(li);
  });
}

if (shuffleBtn) {
  shuffleBtn.addEventListener('click', () => {
    hobbies.sort(() => Math.random() - 0.5);
    renderHobbies();
  });
  renderHobbies();
}