import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTodos,
  addTodo,
  deleteTodo,
  toggleTodo,
  editTodo,
  clearTodos
} from "./store/actions/todoActions";

export default function App() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.items);

  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Redux Saga TODO</h1>

      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => {
        dispatch(addTodo(text));
        setText("");
      }}>
        Add
      </button>

      <button onClick={() => dispatch(clearTodos())}>
        Clear
      </button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer"
              }}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>

            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              ❌
            </button>

            <button onClick={() => {
              const newText = prompt("Edit:", todo.text);
              if (newText) dispatch(editTodo(todo.id, newText));
            }}>
              ✏️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}