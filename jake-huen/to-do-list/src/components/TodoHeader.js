import React, { useState } from "react";
import { useTodoState } from "../TodoContext";
import styled from "styled-components";

const HeaderContainer = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .todo_left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;
const TodoHeader = () => {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

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
    <HeaderContainer>
      <div>
        <h1>{getYear()}</h1>
        <div className="day">{getyoil()}</div>
        <div className="todo_left">할 일 {undoneTasks.length}개 남음</div>
      </div>
    </HeaderContainer>
  );
};

export default TodoHeader;
