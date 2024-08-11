import { MdOutlineDelete, MdOutlineModeEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import { ITodo } from "../context/todo/TodoContext";

type TodoCardProps = {
  id: number;
  isCompleted: boolean;
  title: string;

  toggleIsComplete?: (id: number) => void;
  editTodo?: (id: number, todo: ITodo) => void;
  deleteTodo?: (id: number) => void;
};

const TodoCard: React.FC<TodoCardProps> = ({
  id,
  isCompleted,
  title,
  toggleIsComplete,
  editTodo,
  deleteTodo,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>(title);

  const saveTaskHandler = () => {
    if (newTitle.trim()) {
      editTodo && editTodo(id, { title: newTitle.trim(), isCompleted, id });

      setIsEditing(false);
    }
  };

  return (
    <div className="rounded-md my-3 px-3 py-4 bg-orange-100 hover:bg-orange-200 flex items-center gap-2">
      <input
        className="cursor-pointer rounded-md w-5 h-5 text-orange-700 bg-gray-100 border-gray-300 
        focus:ring-orange-700 dark:focus:ring-orange-700 dark:ring-offset-gray-800 focus:ring-2 
        dark:bg-gray-700 dark:border-gray-600"
        type="checkbox"
        name="isCompleted"
        id={`${id}-isCompleted`}
        title="isCompleted"
        checked={isCompleted}
        onChange={() => toggleIsComplete && toggleIsComplete(id)}
      />

      {isEditing ? (
        <input
          className={`w-full px-2 ${isCompleted && "line-through"} text-black`}
          type="text"
          name={`task-${id}-title`}
          id={`task-${id}-title`}
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <div
          className={`w-full px-2 ${isCompleted && "line-through"} text-black`}
        >
          {title}
        </div>
      )}

      {isEditing ? (
        <button
          title="task-save-btn"
          className="flex items-center border border-green-200 bg-green-100 p-1 text-green-800 rounded-full hover:bg-green-300"
          onClick={saveTaskHandler}
        >
          <FaCheck size={18} />
        </button>
      ) : (
        <button
          title="task-edit-btn"
          className="flex items-center border border-slate-200 bg-slate-100 p-1 text-slate-800 rounded-full hover:bg-slate-300"
          onClick={() => setIsEditing(true)}
        >
          <MdOutlineModeEdit size={20} />
        </button>
      )}

      <button
        title="task-del-btn"
        className="flex items-center border border-red-200 bg-red-100 p-1 text-red-800 rounded-full hover:bg-red-300"
        onClick={() => deleteTodo && deleteTodo(id)}
      >
        <MdOutlineDelete size={20} />
      </button>
    </div>
  );
};

export default TodoCard;
