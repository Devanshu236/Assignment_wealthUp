"use client";
import React from "react";
import styles from '../page.module.css'

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ul className={styles.allTodos}>
      {todos.map((t) => (
        <li className={styles.singleTodo}>
          <span className={styles.todoText} key={t.id}>
            {t.todo}
          </span>
          <button className={styles.btn} onClick={() => handleEdit(t.id)}>Edit</button>
          <button className={styles.btn} onClick={() => handleDelete(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;