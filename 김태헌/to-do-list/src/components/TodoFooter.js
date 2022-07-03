import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

const AddButton = styled.button`
  background: #38d9a9;
  display: flex;
  cursor: pointer;
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 40%;
  bottom: 0;
  color: white;
  border-radius: 50%;
  border: none;
  font-size: 60px;
  outline: none;
  &:active {
    background: #20c997;
  }
  ${(props) =>
    props.checked &&
    css`
      background: #ff6b6b;
      &:active {
        background: #20c997;
      }
      transform: rotate(45deg);
    `}
`;

const TodoFooter = () => {
  const [clicked, setClicked] = useState(false);
  const onToggle = () => {
    setClicked(!clicked);
  };
  return (
    <AddButton onClick={onToggle} clicked={clicked}>
      <MdAdd />
    </AddButton>
  );
};

export default TodoFooter;
