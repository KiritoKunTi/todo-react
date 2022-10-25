import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Todo from "./Todo";
import { db } from "./firebase";
import { query, collection, onSnapshot } from "firebase/firestore";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2f80ed] to-[#1cb5e0] flex items-center`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border w-full p-2 text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center text-xl p-2`,
};

function App() {
  const [todos, setTodos] = useState([]);

  // Create todos
  // Read todos from Firebase
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);
  // Update todos from Firebase
  // Delete todos

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo List</h3>
        <form className={style.form}>
          <input className={style.input} type="text" placeholder="Add todo" />
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, id) => (
            <Todo key={id} todo={todo} />
          ))}
        </ul>
        <p className={style.count}>You have 2 todos.</p>
      </div>
    </div>
  );
}

export default App;
