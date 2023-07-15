import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
const EditTodo = ({ todo, dispatch }) => {
  const [editTitle, setEditTitle] = useState(todo.title);

  const handleEditTodo = () => {
    if (editTitle.trim() === "") return;
    dispatch({
      type: "UPDATE_TODO",
      payload: { id: todo.id, title: editTitle },
    });
  };

  return (
    <div>
      <input
        type="text"
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
      />
      <button onClick={handleEditTodo}>
        <FontAwesomeIcon icon={faBookmark} />
      </button>
    </div>
  );
};

export default EditTodo;
