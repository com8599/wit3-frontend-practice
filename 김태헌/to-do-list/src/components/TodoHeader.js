import React, { useState } from "react";
import "../css/TodoHeader.css";
const TodoHeader = () => {
  const getYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return year + "년 " + month + "월 " + day + "일";
  };
  const getyoil = () => {
    const week = ["월", "화", "수", "목", "금", "토", "일"];
    const date = new Date();
    const dayOfWeek = week[date.getDay() - 1] + "요일";
    return dayOfWeek;
  };
  return (
    <div className="header_container">
      <div>
        <h1>{getYear()}</h1>
        <div className="day">{getyoil()}</div>
        <div className="todo_left">할 일 1개 남음</div>
      </div>
    </div>
  );
};

export default TodoHeader;
