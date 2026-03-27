import TodoForm from "./features/todos/TodoForm";
import TodoList from "./features/todos/TodoList";

export default function App() {
  return (
    <div className="container">
      <h1>TODO</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}