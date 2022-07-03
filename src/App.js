import React, { useState } from "react";
import Todo from "./Todo";
import "./App.css";

function App() {
  const date = new Date();
  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"]; // 배열 만들어서 getDay를 인덱스로 이용하기
  let countOfTodo = 0;

  return (
    <div className="container">
      <div className="date">
        <h1>
          {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일
        </h1>
        <div className="dayOfWeek">{dayOfWeek[date.getDay()]}요일</div>
        <p></p>
        <div className="count">할 일 {countOfTodo}개 남음</div>
      </div>
      <div className="todo">
        <Todo />
      </div>
    </div>
  );
}

export default App;
