import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  // Схема валідації
  const validationSchema = Yup.object({
    task: Yup.string()
      .min(5, "Мінімум 5 символів")
      .required("Обов'язкове поле"),
  });

  // Додавання задачі
  const handleSubmit = (values, { resetForm }) => {
    setTodos([...todos, values.task]);
    resetForm();
  };

  // Видалення задачі за індексом
  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>TODO List</h1>

      <Formik
        initialValues={{ task: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form">
          <Field
            name="task"
            placeholder="Введіть задачу..."
            className="input"
          />

          <button type="submit" className="button">
            Додати
          </button>

          <ErrorMessage name="task" component="div" className="error" />
        </Form>
      </Formik>

      <ul className="list">
        {todos.map((todo, index) => (
          <li key={index} className="item">
            <span>{todo}</span>
            <button
              className="delete"
              onClick={() => removeTodo(index)}
              title="Видалити задачу"
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}