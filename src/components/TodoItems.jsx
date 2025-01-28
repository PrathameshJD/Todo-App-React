
import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemContext } from "../store/todo-items-store";
const TodoItems = () => {
  const {todoItems} = useContext(TodoItemContext)
  const {deleteItem} = useContext(TodoItemContext)
  return (
    <div className={styles.itemContainers}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={deleteItem}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
