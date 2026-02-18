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
