export const todoActionTypes = {
    FETCH_REQUEST: "todos/fetch_request",
    FETCH_SUCCESS: "todos/fetch_success",

    ADD_REQUEST: "todos/add_request",
    ADD_SUCCESS: "todos/add_success",

    DELETE_REQUEST: "todos/delete_request",
    DELETE_SUCCESS: "todos/delete_success",

    TOGGLE_REQUEST: "todos/toggle_request",
    TOGGLE_SUCCESS: "todos/toggle_success",

    EDIT_REQUEST: "todos/edit_request",
    EDIT_SUCCESS: "todos/edit_success",

    CLEAR_REQUEST: "todos/clear_request",
    CLEAR_SUCCESS: "todos/clear_success",
};


export const fetchTodos = () => ({
    type: todoActionTypes.FETCH_REQUEST
});

export const addTodo = (text) => ({
    type: todoActionTypes.ADD_REQUEST,
    payload: text
});

export const deleteTodo = (id) => ({
    type: todoActionTypes.DELETE_REQUEST,
    payload: id
});

export const toggleTodo = (id) => ({
    type: todoActionTypes.TOGGLE_REQUEST,
    payload: id
});

export const editTodo = (id, text) => ({
    type: todoActionTypes.EDIT_REQUEST,
    payload: { id, text }
});

export const clearTodos = () => ({
    type: todoActionTypes.CLEAR_REQUEST
});