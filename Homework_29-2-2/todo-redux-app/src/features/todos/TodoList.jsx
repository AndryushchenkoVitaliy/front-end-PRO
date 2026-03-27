import { useSelector } from "react-redux";

export default function TodoList() {
  const todos = useSelector((state) => state.todos.items);

  return (
    <div>
      <h3>TODOS</h3>

      <div className="list">
        {todos.map((todo) => (
          <div key={todo.id} className="item">
            {todo.text}
          </div>
        ))}
      </div>

      <p className="footer">Всего: {todos.length}</p>
    </div>
  );
}