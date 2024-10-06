import { useState } from "react"
import { useTodoDispatch } from "../context/Todo";

const Item = ({ todo }) => {
  const [ editingContent, setEditingContent ] = useState(todo.content);
  const dispatch = useTodoDispatch();
  const changeContent = (e) => setEditingContent(e.target.value);
  const toggleEditMode = (e) => {
    const newTodo = { ...todo, editing: !todo.editing };
    dispatch({ type: 'todo/update', todo: newTodo });
  };
  const confirmContent = (e) => {
    // フォームがサブミットされたときに、画面遷移（ページ更新）をさせない
    e.preventDefault();
    const newTodo = { ...todo, editing: !todo.editing, content: editingContent };
    dispatch({ type: 'todo/update', todo: newTodo });
  };
  const complete = (todo) => dispatch({ type: "todo/delete", todo });

  return (
    <div key={todo.id}>
        <button onClick={() => complete(todo)}>完了</button>
        <form onSubmit={confirmContent} style={{display: "inline-block"}}>
          {
            // 編集中フラッグがtrueの場合
            todo.editing ? (
              <input
                type="text"
                value={editingContent}
                onChange={changeContent}
              />
            ) : (
              <span onDoubleClick={toggleEditMode}>{todo.content}</span>
            )
          }
        </form>
    </div>
  )
};

export default Item;
