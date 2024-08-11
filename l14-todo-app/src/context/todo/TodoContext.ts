import { createContext } from "react";

export interface ITodo {
  id: number;
  title: string;
  isCompleted: boolean;
}

export interface ITodoContext {
  todos: ITodo[];

  deleteTodo?: (id: number) => void;
  editTodo?: (id: number, todo: ITodo) => void;
  addTodo?: (todo: ITodo) => void;
  toggleIsComplete?: (id: number) => void;
}

const getLocalTodos = (): ITodo[] => {
  const localTodosStr = localStorage.getItem("my-todos");
  if (!localTodosStr) return [];

  return JSON.parse(localTodosStr) as ITodo[];
};
export const defaultTodoContextValue: ITodoContext = {
  todos: localStorage.getItem("my-todos") ? getLocalTodos() : [],
};

const TodoContext = createContext<ITodoContext>(defaultTodoContextValue);

export default TodoContext;
