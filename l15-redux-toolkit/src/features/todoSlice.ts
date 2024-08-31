import { createSlice, nanoid } from "@reduxjs/toolkit";

export interface ITodo {
  id: string;
  title: string;
  isCompleted: boolean;
}
const getLocalTodos = (): ITodo[] => {
  const localTodosStr = localStorage.getItem("my-todos");
  if (!localTodosStr) return [];

  return JSON.parse(localTodosStr) as ITodo[];
};

const initialState = {
  todos: localStorage.getItem("my-todos") ? getLocalTodos() : [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, actions) => {
      const newTodo: ITodo = {
        id: nanoid(),
        title: actions.payload,
        isCompleted: false,
      };

      state.todos.push(newTodo);
    },
    deleteTodo: (state, actions) => {
      state.todos = state.todos.filter((todo) => todo.id !== actions.payload);
    },
    editTodo: (state, actions) => {
      state.todos = state.todos.map((todo: ITodo) => {
        if (todo.id === actions.payload.id) {
          (todo.title = actions.payload.title),
            (todo.isCompleted = actions.payload.isCompleted);
        }

        return todo;
      });
    },
    toggleIsComplete: (state, actions) => {
      state.todos.forEach((todo: ITodo) => {
        if (todo.id === actions.payload) {
          todo.isCompleted = !todo.isCompleted;
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, editTodo, toggleIsComplete } =
  todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer;
