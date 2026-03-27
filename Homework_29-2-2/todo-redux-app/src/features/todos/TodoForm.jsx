import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todosSlice";

export default function TodoForm() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.trim()) return;

    dispatch(addTodo(value));
    setValue("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите задачу"
      />
      <button type="submit">Добавить</button>
    </form>
  );
}