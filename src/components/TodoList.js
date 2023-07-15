import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, dispatch }) => {
  return (
    <ul>
      {todos.length <= 0 && (
        <div className="text-red-200 uppercase  text-lg flex justify-center items-center h-[200px] md:text-xl md:h-[400px]">
          There is No todo task here...
        </div>
      )}
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
};

export default TodoList;
