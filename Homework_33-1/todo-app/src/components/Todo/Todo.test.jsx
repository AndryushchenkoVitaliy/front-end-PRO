import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./Todo";

describe("Todo App", () => {

    test("має заголовок TODO", () => {
        render(<Todo />);
        expect(screen.getByText("TODO")).toBeInTheDocument();
    });
    test("дозволяє вводити текст", async () => {
        render(<Todo />);

        const input = screen.getByPlaceholderText("Введіть задачу");

        await userEvent.type(input, "Buy milk");

        expect(input.value).toBe("Buy milk");
    });
    test("показує помилку якщо поле пусте", async () => {
        render(<Todo />);

        const button = screen.getByText("Додати");
        await userEvent.click(button);

        expect(screen.getByText("Поле не може бути пустим")).toBeInTheDocument();
    });
    test("додає новий todo", async () => {
        render(<Todo />);

        const input = screen.getByPlaceholderText("Введіть задачу");
        const button = screen.getByText("Додати");

        await userEvent.type(input, "Task 1");
        await userEvent.click(button);

        expect(screen.getByText("Task 1")).toBeInTheDocument();
    });
    test("очищає input після додавання", async () => {
        render(<Todo />);

        const input = screen.getByPlaceholderText("Введіть задачу");
        const button = screen.getByText("Додати");

        await userEvent.type(input, "Task 2");
        await userEvent.click(button);

        expect(input.value).toBe("");
    });
    test("збільшується список елементів", async () => {
        render(<Todo />);

        const input = screen.getByPlaceholderText("Введіть задачу");
        const button = screen.getByText("Додати");

        await userEvent.type(input, "A");
        await userEvent.click(button);

        await userEvent.type(input, "B");
        await userEvent.click(button);

        const items = screen.getAllByTestId("todo-item");

        expect(items).toHaveLength(2);
    });
});