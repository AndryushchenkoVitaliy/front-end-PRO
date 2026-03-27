import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: (text) => ({
        payload: {
          id: nanoid(),
          text,
        },
      }),
    },
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;