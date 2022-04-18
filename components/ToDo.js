import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { auth, firestore } from "../lib/firebase";
import { useRouter } from "next/router";

const ToDo = ({ todo }) => {
  const router = useRouter();

  async function deleteTodo(docId) {
    const docRef = doc(
      firestore,
      "users",
      auth.currentUser.uid,
      "todos",
      docId
    );
    await deleteDoc(docRef);
    router.push("/");
  }
  return (
    <div>
      <p>ToDo {JSON.stringify(todo, router)}</p>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default ToDo;
