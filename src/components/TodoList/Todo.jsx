import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="container">
      <TodoForm
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <TodoList setTodoList={setTodoList} todoList={todoList} />
    </div>
  );
};
