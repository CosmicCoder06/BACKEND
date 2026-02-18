console.log("Script loaded");

async function fetchTodos() {
  const res = await fetch("/api/todos");
  const todos = await res.json();

  const list = document.getElementById("todoList");
  list.innerHTML = "";

  todos.forEach(todo => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span class="${todo.done ? "done" : ""}">
        ${todo.task}
      </span>
      <div class="actions">
        <button onclick="markDone(${todo.id})">✓</button>
        <button onclick="deleteTodo(${todo.id})">✕</button>
      </div>
    `;

    list.appendChild(li);
  });
}

async function addTodo() {
  const input = document.getElementById("taskInput");
  if (!input.value.trim()) return;

  await fetch("/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task: input.value })
  });

  input.value = "";
  fetchTodos();
}

async function markDone(id) {
  await fetch(`/api/todos/${id}`, { method: "PUT" });
  fetchTodos();
}

async function deleteTodo(id) {
  await fetch(`/api/todos/${id}`, { method: "DELETE" });
  fetchTodos();
}

fetchTodos();
document.getElementById("addBtn").addEventListener("click", addTodo);
