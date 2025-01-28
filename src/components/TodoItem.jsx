import styles from "./TodoItem.module.css";

const TodoItem = ({ todoName, todoDate, onDeleteClick }) => {
  return (
    <div className={styles.todoItem}>
      <div className={styles.jdRow}>
        <div className={styles.jdCol1}>{todoName}</div>
        <div className={styles.jdCol2}>{todoDate}</div>
        <div className={styles.jdCol3}>
          <button
            type="button"
            className={styles.jdButton}
            onClick={() => onDeleteClick(todoName)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
