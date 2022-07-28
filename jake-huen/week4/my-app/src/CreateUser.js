import React from "react";

const CreateUser = ({ username, age, onChange, onCreate }) => {
  return (
    <div>
      <input name="username" onChange={onChange} value={username} />
      <input name="age" onChange={onChange} value={age} />
      <button onClick={onCreate}>Add</button>
    </div>
  );
};

export default CreateUser;
