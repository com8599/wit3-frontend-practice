import React from "react";

function User({ user, onRemove }) {
  return (
    <div>
      <span>
        이름 : {user.username}, 나이 : {user.age}
      </span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

const UserList = ({ users, onRemove }) => {
  return (
    <div>
      {users.map((user) => (
        <User user={user} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default UserList;
