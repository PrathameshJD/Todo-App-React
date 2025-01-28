import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const TodoItemContextProvider =({children})=>{

  const todoItemsReducer = (currTodoItems, action) => {
    let newTodoItems = currTodoItems;
    if (action.type === "NEW_ITEM") {
      newTodoItems = [
        ...currTodoItems,
        { name: action.payload.itemName, dueDate: action.payload.itemDate },
      ];
    } else if (action.type === "DELETE_ITEM") {
      newTodoItems = currTodoItems.filter(
        (item) => item.name !== action.payload.todoItemName
      );
    }
    return newTodoItems;
  };

  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItems = (itemName, itemDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: { itemName, itemDate },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteAction = {
      type: "DELETE_ITEM",
      payload: {
        todoItemName,
      },
    };
    dispatchTodoItems(deleteAction);
  };

  return <TodoItemContext.Provider value={{ todoItems, addNewItems, deleteItem }}>
    {children}
  </TodoItemContext.Provider>

}
export default TodoItemContextProvider;
