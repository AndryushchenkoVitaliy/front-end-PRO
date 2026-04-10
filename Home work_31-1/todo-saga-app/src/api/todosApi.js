let todos = [
    { id: 1, text: "First todo", completed: false }
];

export const fetchTodosApi = () =>
    new Promise(res => setTimeout(() => res(todos), 500));

export const addTodoApi = (text) =>
    new Promise(res => {
        const newTodo = { id: Date.now(), text, completed: false };
        todos.push(newTodo);
        setTimeout(() => res(newTodo), 300);
    });

export const deleteTodoApi = (id) =>
    new Promise(res => {
        todos = todos.filter(t => t.id !== id);
        setTimeout(() => res(id), 300);
    });

export const toggleTodoApi = (id) =>
    new Promise(res => {
        todos = todos.map(t =>
            t.id === id ? { ...t, completed: !t.completed } : t
        );
        setTimeout(() => res(id), 300);
    });

export const editTodoApi = ({ id, text }) =>
    new Promise(res => {
        todos = todos.map(t =>
            t.id === id ? { ...t, text } : t
        );
        setTimeout(() => res({ id, text }), 300);
    });

export const clearTodosApi = () =>
    new Promise(res => {
        todos = [];
        setTimeout(() => res([]), 300);
    });