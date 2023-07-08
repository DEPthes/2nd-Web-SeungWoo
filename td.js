const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const categorySelect = document.getElementById("category-select");
const todoList = document.getElementById("todo-list");
const categoryFilter = document.getElementById("category-filter");

const TODOS_KEY = "todos";
let todos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  saveTodos();
  paintTodos();
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const todoText = todoInput.value.trim();
  const selectedCategory = categorySelect.value;
  if (todoText === "" || selectedCategory === "") return;

  const newTodo = {
    id: Date.now(),
    text: todoText,
    category: selectedCategory,
  };

  todos.push(newTodo);
  saveTodos();
  paintTodos();

  todoInput.value = "";
  categorySelect.selectedIndex = 0;
}

function paintTodos() {
  todoList.innerHTML = "";
  const filteredCategory = categoryFilter.value;
  const filteredTodos = filteredCategory
    ? todos.filter((todo) => todo.category === filteredCategory)
    : todos;

  filteredTodos.forEach((todo) => {
    const li = document.createElement("li");
    li.dataset.id = todo.id;

    const span = document.createElement("span");
    span.innerText = todo.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", () => {
      deleteTodo(todo.id);
    });

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
  });
}

function handleCategoryFilterChange() {
  paintTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);
categoryFilter.addEventListener("change", handleCategoryFilterChange);

// Check if there are saved todos in localStorage
const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  todos = JSON.parse(savedTodos);
  paintTodos();
}