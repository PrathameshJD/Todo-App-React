import { useState, useRef } from "react";
import styles from "./AddTodo.module.css";
import { useContext } from "react";
import { TodoItemContext } from "../store/todo-items-store";
function AddTodo() {
  const todoNameElement = useRef();
  const dueDateElement = useRef();
  const { addNewItems } = useContext(TodoItemContext);

  const handleOnClickNewItem = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    console.log();
    addNewItems(todoName, todoDate);
  };

  return (
    <>
      <form className={styles.container} onSubmit={handleOnClickNewItem}>
        <div className={styles.jdRow}>
          <div className={styles.jdCol1}>
            <input
              type="text"
              placeholder="Enter Todo here"
              ref={todoNameElement}
            />
          </div>
          <div className={styles.jdCol2}>
            <input type="date" ref={dueDateElement} />
          </div>
          <div className={styles.jdCol3}>
            <button type="submit" className={styles.jdButton}>
              Add
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddTodo;
