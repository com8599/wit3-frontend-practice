import React, { useState, useRef } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";
function App() {
  const [inputs, setInputs] = useState({
    username: "",
    age: "",
  });
  const { username, age } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const [users, setUsers] = useState([{ id: 1, username: "김태헌", age: 25 }]);
  const nextId = useRef(2);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      age,
    };
    setUsers([...users, user]);
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  return (
    <div>
      <CreateUser
        username={username}
        age={age}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} />
    </div>
  );
}

export default App;
