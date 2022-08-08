import {useState,useRef} from 'react';
import Output from './Output';
function App() {
  const [input,setInput] = useState({
    inputName:"",
    inputAge:"",
  });
  const {inputName,inputAge} = input; 
  const [users,setUsers] = useState([]);
  const onChange = (newUser) =>{
    setInput({
      ...input,
      [newUser.target.name] : newUser.target.value
    })
  } 
  const nextId = useRef(0);
  const addUser = ()=>{
    const newUser = {
      id:nextId.current,
      userName:inputName,
      userAge:inputAge
    };
    setUsers([
      ...users,newUser
    ]);
    setInput({
      inputName:"",
      inputAge:""
    });
    nextId.current+=1;
  }
  const deleteUser = (id)=>{
    setUsers(users.filter(user=>user.id!==id))
  }
  const [updateName,setUpdateName] = useState("");
  
  const onNewChange = (e) => {
    setUpdateName(e.target.value)

  }
  const updateUserName = (id)=>{
    setUsers(
      users.map(user=>(user.id===id?{...user,userName:updateName}:user))
    )
    setUpdateName("");
  }
  return (
    <div className="App">
      <div>
        <input name="inputName" placeholder="이름을 입력하세요." value={inputName} onChange={onChange}></input>
        <input name="inputAge" placeholder="나이를 입력하세요." value={inputAge} onChange={onChange}></input>
        <button onClick={addUser}>Add</button>
      </div>
      {users.map(user=>{return(
        <Output
        key={user.id}
        user = {user}
        inputName={inputName}
        inputAge={inputAge}
        onChange={onChange}
        addUser={addUser}
        deleteUser={deleteUser}
        updateName={updateName}
        updateUserName = {updateUserName}
        onNewChange={onNewChange}
        >
        </Output>
      )}
      )

      }
    </div>
  );
}

export default App;