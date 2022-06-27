import React from "react";
import { useEffect } from "react";

function User({ user, onRemove }) {
  useEffect(() => {
    console.log("유저 추가");
  }, []);

  //unmount 될 때 실행된다.
  useEffect(() => {
    //clean-up function
    return () => {
      console.log("removed");
    };
  }, []);
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

// React Hook
// useEffect => 상태를 감시하면서 상태가 변경될때마다 실행되는 애들
