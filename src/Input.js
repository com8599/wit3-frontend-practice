import React, { useState } from "react"; // 소문자로 꼭 적어줘야 한다.

function Input() {
  return (
    <div>
      <input placeholder="할 일을 입력 후, Enter 를 누르세요"></input>
      <button>+</button>
    </div>
  );
}

export default Input;
