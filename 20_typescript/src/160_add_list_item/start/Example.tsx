import { useState } from "react";
import TaskList from "./TaskList";

export type Todo = {
  id: number;
  text: string;
};

const Example = () => {
  const [ inputText, setInputText ] = useState("");
  const [ todos, setTodos ] = useState<Todo[]>([
    { id: 0, text: '買い物' },
    { id: 1, text: '勉強' },
  ]);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value);
  const addTodoIten = () => {
    setTodos(state => [...state, { id: todos.length, text: inputText }])
    setInputText("");
  }
  return (
    <>
      {/* <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} /> */}
      <input type="text" value={inputText} onChange={changeHandler} />
      <button onClick={addTodoIten}>追加</button>
      <TaskList todos={todos}/>
    </>
  )
};

export default Example;
