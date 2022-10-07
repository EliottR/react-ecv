import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todoList, setTodoList }) => {
  return todoList.map((todoItem) => (
    <TodoListItem
      todoList={todoList}
      setTodoList={setTodoList}
      todoItem={todoItem}
      key={todoItem.id}
      name={todoItem.name}
    />
  ));
};
