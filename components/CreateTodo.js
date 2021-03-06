import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";
import { auth, firestore } from "../lib/firebase";

function CreateTodo({ setTodos }) {
  const [taskName, setTaskName] = useState("");
  const router = useRouter();

  async function handleSubmit(evt) {
    evt.preventDefault();
    const todoData = {
      taskName,
      username: auth.currentUser?.displayName,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    const uid = auth.currentUser?.uid ?? "";
    const newTodoRef = doc(collection(firestore, "users", uid, "todos"));
    await setDoc(newTodoRef, todoData);
    setTaskName("");
    router.push("/");
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task Name:
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default CreateTodo;
