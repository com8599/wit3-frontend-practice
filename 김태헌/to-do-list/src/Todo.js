import React from "react";
import "./Todo.css";
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
import TodoFooter from "./TodoFooter";
const Todo = () => {
  return (
    <div className="Todo-container">
      <TodoHeader />
      <TodoBody />
      <TodoFooter />
    </div>
  );
};

export default Todo;
