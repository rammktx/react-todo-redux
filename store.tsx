import { configureStore } from '@reduxjs/toolkit';
import todoSliceReducer from './ToDoSlice';

export default configureStore({
  reducer: {
    todo: todoSliceReducer,
  },
});
