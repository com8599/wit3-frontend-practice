import React, { useState, useRef } from "react";
import "./Todo.css";
import plus_logo from "./plus.png";
import trash_logo from "./trash.png";

function Todo() {
  const [text, setText] = useState([
    { id: 0, list: "아침 산책" },
    { id: 1, list: "오늘의 뉴스 읽기" },
    { id: 2, list: "샌드위치 사 먹기" },
    { id: 3, list: "리액트 공부하기" },
  ]);

  const textRef = useRef();

  const [changeOpacity, setChangeOpacity] = useState(false);
  const [display, setDisplay] = useState(false);
  const [show, setShow] = useState(false);

  const rotateBtn = {
    transform: show ? `rotate(${-45}deg)` : `rotate(${90}deg)`,
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      // console.log(e.target.value);
      // setText(e.target.value);
      // console.log(textRef.current.value);]
      const todo = textRef.current.value;
      setText([
        ...text,
        {
          id: text[text.length - 1].id + 1,
          list: todo,
        },
      ]);
    }
  };

  const onReset = (targetId) => {
    // console.log(text[targetId]);
    if (targetId !== null) {
      const deleteId = text[targetId];
      // console.log(deleteId);
      setText((text) => text.filter((deleteId) => deleteId.id !== targetId));
      // console.log(deleteId !== targetId);
      //const deleteId = text.filter((text) => console.log(text[targetId]));
      // console.log(deleteId);
    } // 1개도 안 남아 있는 경우에는 추가가 되질 않는다...
  };

  return (
    <div>
      <div>
        {text.map((v) => (
          <React.Fragment key={v.id}>
            <div>
              <span
                className="circle"
                onClick={() => setChangeOpacity(!changeOpacity)}
              ></span>
              <span style={{ opacity: changeOpacity ? 0.2 : 1 }}>{v.list}</span>
              <button
                onClick={() => onReset(v.id)}
                onMouseMove={() => setDisplay(!display)}
                style={{ opacity: display ? 1 : 0 }}
              >
                <img src={trash_logo} alt="trash_logo" />
              </button>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div
        className="addBtn"
        style={{ backgroundColor: show ? "rgb(248, 249, 251)" : "white" }}
      >
        <input
          placeholder="할 일을 입력 후, Enter 를 누르세요"
          onKeyDown={onKeyDown}
          ref={textRef}
          style={{ display: show ? "block" : "none" }}
        />
        <button
          className="addList"
          onClick={() => setShow(!show)}
          style={{
            backgroundColor: show ? "rgb(255, 107, 107)" : "rgb(55, 217, 168)",
          }}
        >
          <img src={plus_logo} alt="plus_logo" style={rotateBtn} />
        </button>
      </div>
    </div>
  );
}

export default Todo;
