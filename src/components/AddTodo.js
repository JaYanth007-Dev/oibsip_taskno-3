import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

const AddTodo = ({ dispatch }) => {
  const [title, setTitle] = useState("");

  const handleAddTodo = () => {
    if (!title) {
      alert("Please enter the title");
      return; 
    }

    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };

    dispatch({ type: "ADD_TODO", payload: newTodo });
    setTitle("");
  };

  return (
    <div className="flex flex-wrap justify-center space-y-4 md:flex flex-row md:space-y-0">
      <input
        type="text"
        placeholder="Enter a todo..."
        value={title}
        className="w-[300px] px-[15px] py-[10px] text-[20px] bg-[#000] border-2 border-[#c89666] outline-none rounded-full text-[#ccc] shadow1 whitespace-normal mx-auto md:mr-[25px]"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className="w-[60px] py-[15px] px-[15px] text-[20px] font-bold rounded-md bg-[#f1af71] hover:scale-100 md:rounded-full"
        onClick={handleAddTodo}
      >
        <FontAwesomeIcon icon={faPlus} type="submit" />
      </button>
    </div>
  );
};

export default AddTodo;