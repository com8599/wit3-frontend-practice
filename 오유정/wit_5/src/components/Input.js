import { useState} from "react";
import styled,{css} from "styled-components";
import React from 'react';
import { BsPlus } from "react-icons/bs";
const Button = styled.button`
border: none;
cursor: pointer;
width:80px;
height:80px;
border-radius:50%;
justify-content: center;
transform: translate(210px,40px);
.plus{
  color:white;
  font-size:75px;
  transform: translate(-3px, 0);
}
${props=>props.open===false?
  css`
  background-color:rgb(56,217,169);
  `:
  (css`background-color:rgb(255, 107, 107);transform: translate(210px,192px) rotate(45deg);
  .plus{
    transform: translate(-3px, 0);
  }`
  )
}
`;
const InputData = styled.input`
${props=>props.open===true?css`display:flex`:css`display:none`};
padding: 12px;
border:1px solid rgb(222,226,230);
width:100%;
outline:none;
font-size:18px;
box-sizing: border-box;`

const InputContainer = styled.div`
  ${props=>props.open===true?css`display:flex`:css`display:none`};
  background-color: rgb(248, 249, 250);
  border-bottom-l
  eft-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid rgb(233, 236, 239);
  padding:32px 32px 72px;
`
function Input({lists,setLists,setCount}){
  const [open,setOpen] = useState(false);
  const [newList,setNewList] = useState("");
  const addList = ()=>{
    setLists([...lists,{id:Date.now(),text:newList, checked:false}])
    setNewList("");
    setCount(prev=>prev+1);
  }
  const onKeyPress = (e) => {
    if(e.key==='Enter'){
      addList();
      setOpen(false);
        }
  }  
  return(
  <>  
      <Button open={open} onClick={()=>open===true?setOpen(false):setOpen(true)}>
        <BsPlus className='plus'/>
    </Button>
      <InputContainer open={open}>
      <InputData value={newList} open={open} onChange={e=> setNewList(e.target.value)} onKeyPress={onKeyPress} placeholder='할 일을 입력 후, Enter 를 누르세요'></InputData>
      </InputContainer>
  </>
  )
}
export default React.memo(Input);