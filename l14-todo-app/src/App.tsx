import { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import ThemeContext, { IThemeContext } from "./context/theme/ThemeContext";
import TodoCard from "./components/TodoCard";
import TodoContext, { ITodo, ITodoContext } from "./context/todo/TodoContext";
import { RxCross2 } from "react-icons/rx";

function App() {
  const { theme } = useContext<IThemeContext>(ThemeContext);
  const { todos, deleteTodo, editTodo, addTodo, toggleIsComplete } =
    useContext<ITodoContext>(TodoContext);

  const [newTaskTitle, setNewTaskTitle] = useState<string>("");
  const addTaskHandler = () => {
    if (newTaskTitle.trim()) {
      addTodo &&
        addTodo({
          id: Date.now(),
          title: newTaskTitle.trim(),
          isCompleted: false,
        });

      setNewTaskTitle("");
    }
  };

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
                      toggleIsComplete={toggleIsComplete}
                      editTodo={editTodo}
                      deleteTodo={deleteTodo}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
