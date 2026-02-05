const express = require("express");
const path = require("path");

const {
  addTodo,
  listTodos,
  markDone,
  deleteTodo
} = require("./todos");

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());
app.use(express.static("public"));

/* -------- API ROUTES -------- */

// get all todos
app.get("/api/todos", (req, res) => {
  const fs = require("fs");
  const data = fs.readFileSync("todos.json", "utf-8");
  res.json(JSON.parse(data));
});

// add todo
app.post("/api/todos", (req, res) => {
  addTodo(req.body.task);
  res.json({ success: true });
});

// mark done
app.put("/api/todos/:id", (req, res) => {
  markDone(req.params.id);
  res.json({ success: true });
});

// delete todo
app.delete("/api/todos/:id", (req, res) => {
  deleteTodo(req.params.id);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
