import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: ['Buy ice cream', 'Eat ice cream', 'Go to the gym'],
  },
  reducers: {
    addTodo: (state, action) => {
      let newTodos = [...state.todos];
      newTodos = newTodos.concat(action.payload);
      return {
        ...state,
        todos: newTodos,
      };
    },
    clearTodos: (state) => {
      return {
        todos: ['Buy ice cream', 'Eat ice cream', 'Go to the gym'],
      };
    },
  },
});

export const { addTodo, clearTodos } = todoSlice.actions;
export const todos = (state) => state.todo.todos;
export default todoSlice.reducer;
