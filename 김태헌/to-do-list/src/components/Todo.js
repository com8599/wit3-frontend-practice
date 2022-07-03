import React from "react";
import "../css/Todo.css";
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
import TodoFooter from "./TodoFooter";
import styled from "styled-components";
const TodoContainer = styled.div`
  width: 512px;
  height: 768px;
  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;
const Todo = () => {
  return (
    <TodoContainer>
      <TodoHeader />
      <TodoBody />
      <TodoFooter />
    </TodoContainer>
  );
};

export default Todo;
