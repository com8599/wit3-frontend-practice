function Output({user,inputName,inputAge,addUser,onChange,deleteUser, updateUserName,updateName,onNewChange}){
  return (
      <div key={user.id}>
            이름: {user.userName}, 나이: {user.userAge}&nbsp;
            <button onClick={()=>deleteUser(user.id)}>삭제</button>
            <input value={updateName} onChange={onNewChange}></input>
            <button onClick={()=> updateUserName(user.id)}>수정</button>
      </div>
  )
}
export default Output;