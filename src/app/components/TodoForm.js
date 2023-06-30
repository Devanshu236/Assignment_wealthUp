"use client";
import React from "react";
import styles from '../page.module.css'


const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <input className={styles.inp}
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className={styles.btn} type="submit"> {editId ? "Completed" : "Go"}</button>
    </form>
  );
};

export default TodoForm;