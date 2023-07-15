import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faTrash,
  faPenToSquare,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ todo, dispatch }) => {
  const [editMode, setEditMode] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const handleToggleTodo = () => {
    dispatch({ type: "TOGGLE_TODO", payload: todo });
  };

  const handleEditTodo = () => {
    if (editTitle.trim() === "") return;
    dispatch({
      type: "UPDATE_TODO",
      payload: { id: todo.id, title: editTitle },
    });
    setEditMode(false);
  };

  const handleDeleteTodo = () => {
    dispatch({ type: "DELETE_TODO", payload: todo });
  };

  return (
    <li className="border-2 border-[#ccc] rounded-lg p-[6px] text-[#fff] text-[14px] font-base whitespace-normal my-[15px] flex md:p-[10px] md:text-[20px] md:my-[20px]">
      {editMode ? (
        <div className="px-[6px] flex flex-row justify-between w-full md:px-[15px]">
          <input
            type="text"
            value={editTitle}
            className="px-[4px] py-[3px] mr-[15px] text-[16px] font-medium outline-none rounded-full text-[#fff] bg-transparent border-2 border-[#c89666] whitespace-normal md:mr-[25px] md:text-[18px] md:px-[10px] md:py-[5px]"
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <button
            className="bg-transparent outline-none border-none cursor-pointer text-[25px] text-[#f1af71]"
            onClick={handleEditTodo}
          >
            <FontAwesomeIcon icon={faBookmark} />
          </button>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-between w-full px-2">
          <span
            style={{
              textDecoration: todo.completed ? "line-through red" : "none",
            }}
          >
            {todo.title}
          </span>
          <div className="flex flex-row gap-3">
            <button
              className="bg-transparent outline-none border-none cursor-pointer text-[25px] text-[#32CD32] "
              onClick={handleToggleTodo}
            >
              <FontAwesomeIcon icon={faCircleCheck} />
            </button>
            <button
              className="bg-transparent outline-none border-none cursor-pointer text-[25px] text-[#e2d029]"
              onClick={() => setEditMode(true)}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button
              className="bg-transparent outline-none border-none cursor-pointer text-[25px] text-[#fa6262] "
              onClick={handleDeleteTodo}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
