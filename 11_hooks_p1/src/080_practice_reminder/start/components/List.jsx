import { useTodo } from "../context/Todo";
import Item from "./Item"

const List = () => {
    const todos = useTodo();
    return (
        <div>
            {todos.map(todo => <Item todo={todo} key={todo.id} />)}
        </div>
    );
}

export default List;