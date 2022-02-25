import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Slices/Slice';
import todosReducer from "./Slices/todoSlice"
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer
  },
});