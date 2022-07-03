import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

const AddButton = styled.button`
  background: #38d9a9;
  display: flex;
  cursor: pointer;
  width: 60px;
  height: 60px;
  z-index: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -30px;
  left: 40%;
  color: white;
  border-radius: 50%;
  border: none;
  font-size: 60px;
  outline: none;
  &:active {
    background: #20c997;
  }
  transition: 0.2s all ease-in;
  ${(props) =>
    props.clicked &&
    css`
      background: #ff6b6b;
      &:active {
        background: #20c997;
      }
      transform: rotate(45deg);
    `}
`;
const InsertTodo = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
`;
const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 32px 32px 32px 72px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;
const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  font-size: 18px;
  box-sizing: border-box;
`;
const TodoFooter = () => {
  const [clicked, setClicked] = useState(false);
  const onToggle = () => {
    setClicked(!clicked);
  };
  return (
    <div>
      {clicked && (
        <InsertTodo>
          <InsertForm>
            <Input placeholder="할 일을 입력 후, Enter를 누르세요" />
          </InsertForm>
        </InsertTodo>
      )}
      <AddButton onClick={onToggle} clicked={clicked}>
        <MdAdd />
      </AddButton>
    </div>
  );
};

export default TodoFooter;
