import React from "react";

function ToDoList({ todos }) {
  console.log(todos);
  return (
    <div>
      <h1>ToDoList</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{JSON.stringify(todo)}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
