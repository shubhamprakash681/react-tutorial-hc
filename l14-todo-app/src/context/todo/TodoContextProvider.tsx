import React, { useEffect, useState } from "react";
import TodoContext, { defaultTodoContextValue, ITodo } from "./TodoContext";

type Props = {
  children: React.ReactNode;
};

const TodoContextProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>(defaultTodoContextValue.todos);

  const deleteTodo = (id: number) => {
    setTodos((prevTodos: ITodo[]) =>
      prevTodos.filter((todo: ITodo) => todo.id !== id)
    );
  };

  const editTodo = (id: number, todo: ITodo) => {
    setTodos((prevTodo: ITodo[]) =>
      prevTodo.map((todoEl: ITodo) => {
        if (todoEl.id === id) {
          todoEl.isCompleted = todo.isCompleted;
          todoEl.title = todo.title;
          todoEl.id = Date.now();
        }

        return todoEl;
      })
    );
  };

  const toggleIsComplete = (id: number) => {
    setTodos(
      todos.map((todoEl: ITodo) => {
        if (todoEl.id === id) {
          todoEl.isCompleted = !todoEl.isCompleted;
        }

        return todoEl;
      })
    );
  };

  const addTodo = (todo: ITodo) => {
    setTodos((prevTodos: ITodo[]) => [todo, ...prevTodos]);
  };

  useEffect(() => {
    // console.log("setting local storage");
    localStorage.setItem("my-todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{ todos, deleteTodo, addTodo, editTodo, toggleIsComplete }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
