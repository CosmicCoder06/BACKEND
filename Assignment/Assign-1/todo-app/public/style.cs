* {
  box-sizing: border-box;
  font-family: "Segoe UI", sans-serif;
}

body {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.app {
  width: 360px;
  padding: 25px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  color: white;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-weight: 600;
}

.input-box {
  display: flex;
  gap: 10px;
}

input {
  flex: 1;
  padding: 10px 14px;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 14px;
}

button {
  border: none;
  border-radius: 10px;
  padding: 10px 14px;
  background: #00ffd5;
  color: #000;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0, 255, 213, 0.6);
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

li {
  background: rgba(255, 255, 255, 0.2);
  padding: 12px;
  border-radius: 12px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: fadeIn 0.3s ease;
}

li span {
  flex: 1;
}

.actions button {
  margin-left: 6px;
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.actions button:hover {
  background: rgba(255, 255, 255, 0.2);
}

.done {
  text-decoration: line-through;
  opacity: 0.6;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
