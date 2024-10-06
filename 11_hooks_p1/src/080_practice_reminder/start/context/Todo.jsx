import { createContext, useContext, useReducer } from "react";

const TodoContext = createContext();
const TodoDispatchContext = createContext();
const todosList = [
  {
    id: 1,
    content: "店予約する",
    editing: false,
  },
  {
    id: 2,
    content: "卵買う",
    editing: false,
  },
  {
    id: 3,
    content: "郵便出す",
    editing: false,
  },
];

const todoReducer = (todos, action) => {
  switch(action.type) {
    case 'todo/add':
      return [...todos, action.todo];
    case 'todo/delete':
      return todos.filter((todo) => todo.id !== action.todo.id);
    case 'todo/update':
      return todos.map(_todo => _todo.id === action.todo.id ? { ..._todo, ...action.todo } : { ..._todo });
    default:
      return state;
  }
}

const TodoProvider = ({ children }) => {
  const [todo, dispatch] = useReducer(todoReducer, todosList);

  return (
    <TodoContext.Provider value={todo}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

const useTodo = () => useContext(TodoContext);
const useTodoDispatch = () => useContext(TodoDispatchContext);

export {TodoProvider, useTodo, useTodoDispatch};
