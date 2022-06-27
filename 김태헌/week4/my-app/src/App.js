import React, { useState, useRef } from "react";
import { useEffect } from "react";
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
  const [users, setUsers] = useState([]);
  // const [name,setName] = useState();
  //useEffect(func,array)
  // func => 변경될때마다 실행하고 싶은거
  useEffect(() => {
    console.log("changed"); //이거 두번실행되는이유 -> users가 빈배열될때도 추가된걸로 간주됨.
  }, [users]);
  //dependency 배열이다.
  //함수형 컴포넌트 안에서만 사용한다. jsx를 리턴하는 함수 내에서만 사용할 수 있다. -> 빈 배열인 경우 함수형 컴포넌트가 load되는 순간 실행된다.
  useEffect(() => {
    console.log("뭘까");
    // 사용자에게 뭔가를 보여주기 전에 외부에서 데이터를 가져올 때 사용
  }, []);
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

  const updateUserName = (targetId, newName) => {
    const updatedUsers = users.map((user) => {
      if (user.id === targetId) {
        return {
          ...user,
          name: newName,
        };
      } else {
        return user;
      }
    });
    setUsers(updatedUsers);
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

//JSON placeholder
//서버에 데이터 요청
// -> useEffect에서 페이지가 렌더링되자마자 실행되는 코드.

//javascript는 싱글 쓰레드라서 한번에 하나밖에 못한다.
// const [posts, setPosts] = useState([]);

// useEffect(() => {
//   const initData = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     console.log(response);
//     const data = await response.json();
//     setPosts(data);
//   };
//   initData();
// }, []);
// pending -> 처리중인 것.
// promise는 3가지 상태가 있다.
// pending, fulfilled, rejected
// promise가 반환되는 것 앞에 await를 붙이면 완료될때까지 기다림.
// await는 async함수 내에서만 쓸 수 있다.
// useEffect 안에 내부에 async함수를 만들어서 호출한다.
// if(posts.length===0){
//보통은 activity indicator 보여준다.
//   return <div>Loading...</div>;
// }
