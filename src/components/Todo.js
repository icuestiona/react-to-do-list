import React from "react";
import "./Todo.css";

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <div style={{ display: "flex" }}>
      <input class="form-check" type="checkbox" onClick={handleCheckboxClick} />
      <li
        style={{
          textDecoration: todo.completed ? "Line-through" : null,
        }}
      >
        {todo.task}
      </li>
      <button onClick={handleRemoveClick} class="btn btn btn-success btn-sm">
        Remove
      </button>
    </div>
  );
}

export default Todo;
