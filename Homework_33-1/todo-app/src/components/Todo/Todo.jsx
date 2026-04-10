import { useState } from "react";

export default function Todo() {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState("");

    const addTodo = () => {
        if (!text.trim()) {
            setError("Поле не може бути пустим");
            return;
        }

        setTodos([...todos, text]);
        setText("");
        setError("");
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>TODO</h1>

            <input
                placeholder="Введіть задачу"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button onClick={addTodo}>Додати</button>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <ul>
                {todos.map((t, i) => (
                    <li key={i} data-testid="todo-item">
                        {t}
                    </li>
                ))}
            </ul>
        </div>
    );
}