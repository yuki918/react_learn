import { useState } from "react";
import Form from "./Form";
import List from "./List";

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  const [todos, setTodos] = useState(todosList);

  const deleteTodo = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  }

  // const createTodo = (todo) => {
  //   setTodos([...todos, todo]);
  // }
  const createTodo = (todo) => setTodos([...todos, todo]);

  return (
    <>
      <List todos={todos} deleteTodo={deleteTodo} />
      <Form createTodo={createTodo} />
    </>
  );
};

export default Todo;