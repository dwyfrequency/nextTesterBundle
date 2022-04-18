import React from "react";
import ToDo from "./ToDo";

function ToDoList({ todos }) {
  return (
    <div>
      <h1>ToDoList</h1>
      <ul>
        {todos.map((todo) => (
          <ToDo key={todo.id} todo={todo}>
            {JSON.stringify(todo)}
          </ToDo>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
