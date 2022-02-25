import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  todos:[]
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
      addTodo: (state,action) => {
          console.log(action);
        state.todos.push(action.payload)
      }
    },
  });
export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;