import React from "react";
import "../css/TodoBody.css";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";
const BodyContainer = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
const TodoBody = () => {
  const todos = useTodoState();
  return (
    <BodyContainer>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </BodyContainer>
  );
};

export default TodoBody;
