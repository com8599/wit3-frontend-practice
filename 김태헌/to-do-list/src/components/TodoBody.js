import React from "react";
import "../css/TodoBody.css";
import TodoItem from "./TodoItem";
import styled from "styled-components";
const BodyContainer = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
const TodoBody = () => {
  return (
    <BodyContainer>
      <TodoItem text="프로젝트 생성하기" done={true} />
      <TodoItem text="컴포넌트 스타일링 하기" done={true} />
      <TodoItem text="데이트 하기" done={false} />
      <TodoItem text="React 공부하기" done={false} />
    </BodyContainer>
  );
};

export default TodoBody;
