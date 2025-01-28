import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const {todoItems} = useContext(TodoItemContext);
  return (
    todoItems.length === 0 && (
      <p className={styles.welcomeMessage}>Enjoy Your Day</p>
    )
  );
};

export default WelcomeMessage;
