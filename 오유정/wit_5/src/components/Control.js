import React from 'react';
import 'moment/locale/ko';
import './Todo.scss'
import TodoLists from './TodoLists';
import Input from './Input';
function Control({date,count,lists,setLists,check,setCount,notCheck}){
  
  return (
  <div className="body">
    <div className="TodoHeader">
      <h1>{date.format('YYYY년 M월 D일')}</h1>
      <h2>{date.format('dddd')}</h2>
      <div className="RestTodo">할 일 {count}개 남음</div>
    </div>
    <div className="TodoLists">
      {lists.map(list=>{return(
        <TodoLists
        list = {list}
        key={list.id}
        text={list.text}
        setLists={setLists}
        lists={lists}
        checked={list.checked}
        setCount={setCount}
        check={check}
        notCheck={notCheck}></TodoLists>
      )
      })}
    </div>
      <Input
      lists = {lists}
      setLists={setLists}
      setCount={setCount}></Input>
    </div>
    )}  
export default React.memo(Control);