import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { todoReducer } from "./reducers/todoReducer";
import { rootSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    todos: todoReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false // отключаем thunk (если используем saga)
    }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);