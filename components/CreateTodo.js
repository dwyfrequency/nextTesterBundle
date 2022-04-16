import { useState } from "react";

function CreateTodo({setTodos, user}) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setTodos(prevState => prevState.concat({
      taskName,
      user,
    }));
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task Name:
        <input
          type="text"
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default CreateTodo;
