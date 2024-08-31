import { useEffect, useState } from "react";
import Header from "./components/Header";
import { useAppDispatch, useAppSelector } from "./hooks/useStore";
import { addTodo, ITodo } from "./features/todoSlice";
import { RxCross2 } from "react-icons/rx";
import TodoCard from "./components/TodoCard";

const App = () => {
  const { todos } = useAppSelector((state) => state.todoReducer);
  const { theme } = useAppSelector((state) => state.themeReducer);
  const dispatch = useAppDispatch();

  const [newTaskTitle, setNewTaskTitle] = useState<string>("");

  const addTaskHandler = () => {
    if (newTaskTitle.trim()) {
      addTodo && dispatch(addTodo(newTaskTitle.trim()));

      setNewTaskTitle("");
    }
  };

  useEffect(() => {
    // console.log("setting local storage");
    localStorage.setItem("my-todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const html = document.querySelector("html");

    html?.classList.remove("light", "dark");
    html?.classList.add(theme);
  }, [theme]);
  return (
    <>
      {/* {console.log("todos: ", todos)} */}

      <div className="app-container bg-orange-50 text-black dark:bg-slate-700 dark:text-white">
        <div className="outer-top shadow-sm shadow-orange-200">
          <Header />
        </div>

        <div className="outer-bottom">
          <div className="page-container p-6">
            <div className="mx-auto max-w-2xl p-10">
              <h1 className="text-2xl text-center font-semibold">
                Manage your TODO List
              </h1>

              <div className="mt-16 flex items-center justify-evenly rounded-md">
                <input
                  type="text"
                  name="todo"
                  id="todo"
                  placeholder="Write Todo.."
                  className="w-full p-3 pr-14 bg-slate-200 dark:text-black"
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                />

                <button
                  title="new-task-del-btn"
                  onClick={() => setNewTaskTitle("")}
                  className="rounded-full relative -left-3 -ml-8 p-1 bg-slate-300 hover:bg-slate-400 flex items-center"
                >
                  <RxCross2 size={16} />
                </button>

                <button
                  title="add-todo-btn"
                  className="p-3 bg-orange-300 hover:bg-orange-600"
                  onClick={addTaskHandler}
                >
                  Add
                </button>
              </div>

              <div className="mt-6">
                {todos.length > 0 &&
                  todos.map((todo: ITodo) => (
                    <TodoCard
                      key={todo.id}
                      id={todo.id}
                      title={todo.title}
                      isCompleted={todo.isCompleted}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
