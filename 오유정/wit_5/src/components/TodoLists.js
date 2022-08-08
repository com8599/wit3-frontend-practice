import { BsCheck2} from "react-icons/bs";
import { FaTrash } from 'react-icons/fa';
import React from 'react';
import './TodoLists.scss';

function TodoLists({saved,setCount,lists,setLists,list,text,checked,check,notCheck}){
  const remove = (id)=>{
    setLists(
      lists.filter(list=>list.id!==id)
    )
  }
  if(checked){
    return(
      <div className='checkedlist' >
          <div className="checkbox" onClick={()=>saved&check(list.id)}>
            <BsCheck2 className="checkSvg"/>
          </div>
          <div className="text">
          {text}
          </div>
          <div onClick={()=>remove(list.id)}>
          <FaTrash className="trashSvg"/>
          </div>
      
      </div>
  )}
  else{
    return(
      <div className="list">
          <div className="checkbox" onClick={(
          )=>notCheck(list.id)}>
          </div>
          <div className="text">
          {text}
          </div>
        <div  onClick={()=>remove(list.id)&setCount(prev=>prev-1)}>
        <FaTrash className="trashSvg"/>
        </div>
      </div>

  )}
}
export default React.memo(TodoLists);