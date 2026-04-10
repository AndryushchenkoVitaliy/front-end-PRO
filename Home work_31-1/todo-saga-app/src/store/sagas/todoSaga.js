import { call, put, takeEvery } from "redux-saga/effects";
import { todoActionTypes } from "../actions/todoActions";

import {
    fetchTodosApi,
    addTodoApi,
    deleteTodoApi,
    toggleTodoApi,
    editTodoApi,
    clearTodosApi
} from "../../api/todosApi";

// FETCH
function* fetchWorker() {
    const data = yield call(fetchTodosApi);
    yield put({ type: todoActionTypes.FETCH_SUCCESS, payload: data });
}

// ADD
function* addWorker(action) {
    const newTodo = yield call(addTodoApi, action.payload);
    yield put({ type: todoActionTypes.ADD_SUCCESS, payload: newTodo });
}

// DELETE
function* deleteWorker(action) {
    yield call(deleteTodoApi, action.payload);
    yield put({ type: todoActionTypes.DELETE_SUCCESS, payload: action.payload });
}

// TOGGLE
function* toggleWorker(action) {
    yield call(toggleTodoApi, action.payload);
    yield put({ type: todoActionTypes.TOGGLE_SUCCESS, payload: action.payload });
}

// EDIT
function* editWorker(action) {
    yield call(editTodoApi, action.payload);
    yield put({ type: todoActionTypes.EDIT_SUCCESS, payload: action.payload });
}

// CLEAR
function* clearWorker() {
    yield call(clearTodosApi);
    yield put({ type: todoActionTypes.CLEAR_SUCCESS });
}

export function* todoSaga() {
    yield takeEvery(todoActionTypes.FETCH_REQUEST, fetchWorker);
    yield takeEvery(todoActionTypes.ADD_REQUEST, addWorker);
    yield takeEvery(todoActionTypes.DELETE_REQUEST, deleteWorker);
    yield takeEvery(todoActionTypes.TOGGLE_REQUEST, toggleWorker);
    yield takeEvery(todoActionTypes.EDIT_REQUEST, editWorker);
    yield takeEvery(todoActionTypes.CLEAR_REQUEST, clearWorker);
}