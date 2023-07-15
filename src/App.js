import React, { useReducer } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

const initialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "UPDATE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};

const App = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="bg-gradient-to-b from-[#e1b382] to-[#c89666] w-[100vw] h-[100vh] flex justify-center items-center overflow-y-hidden md:overflow-y-auto">
      <div className="bg-[#12343b] w-[330px] h-[550px] p-[30px] shadow mb-[10px]  rounded-md overflow-y-auto md:w-[450px] md:h-[650px]">
        <Header />
        <AddTodo dispatch={dispatch} />
        <TodoList todos={todos} dispatch={dispatch} />
      </div>
    </div>
  );
};

export default App;
