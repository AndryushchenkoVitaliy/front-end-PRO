import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });

  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!text.trim()) return;

    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text }
    ]);
    setText("");
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="container">
      <h1>TODO список</h1>

      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Введи задачу..."
        />
        <button onClick={addTodo}>Додати</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => removeTodo(todo.id)}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}