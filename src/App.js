import { useState } from "react";

function App() {
  const [addToDo, setAddToDo] = useState("");
  const [users, setUsers] = useState([]);
  const [modifyToDo, setModifyToDo] = useState("");

  const onAddList = () => {
    setUsers([...users, addToDo]);
    setAddToDo("");
  };

  const onResetList = (targetIndex) => {
    const deleteList = users.filter((context, index) => index !== targetIndex);
    // console.log(deleteList);
    setUsers(deleteList);
  };

  const onModify = (targetIndex) => {
    const modifyList = users.map((user, index, context) => {
      if (index === targetIndex) {
        // console.log(index, targetIndex);
        // console.log(context);
        // console.log(modifyToDo);
        return user.replace(context.at(-1), modifyToDo);
      } else {
        return user;
      }
    });
    // console.log(modifyList);
    setUsers(modifyList);
    setModifyToDo("");
  };

  return (
    <div>
      <div>
        <h1>My To-Do-List</h1>
        <input
          type="text"
          value={addToDo}
          placeholder="너의 해야할 작업을 적어주세요..."
          size="30"
          onChange={(event) => {
            // console.log(event.target.value);
            setAddToDo(event.target.value);
          }}
        />
        <button onClick={onAddList}>추가</button>
      </div>
      <div>
        {users.map((context, index) => (
          <div key={index}>
            <label>
              <input type="radio" onClick={() => onResetList(index)} />
              {context}
            </label>
            <span key={index}>
              <input
                type="text"
                placeholder="수정사항을 적어주세요..."
                value={modifyToDo}
                onChange={(event) => setModifyToDo(event.target.value)}
              />
              <button onClick={() => onModify(index)}>수정</button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
