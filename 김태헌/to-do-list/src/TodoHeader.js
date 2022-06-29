import React from "react";
import "./TodoHeader.css";
const TodoHeader = () => {
  return (
    <div className="container">
      <div className="date">
        <h1>2022년 6월 29일</h1>
        <h3>수요일</h3>
      </div>
      <div className="todo_left">할 일 1개 남음</div>
    </div>
  );
};

export default TodoHeader;
