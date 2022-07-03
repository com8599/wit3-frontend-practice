import React from 'react';
import Control from './components/Control';
import moment from 'moment';
import { useState } from 'react';
function Do(){
  const date = moment();
  const existList = [
    { id : 0,
      text : "아침 산책",
      checked: true
    },
    {
      id: 1,
      text:"오늘의 뉴스 읽기",
      checked: true
    },
    {
      id: 2,
      text: "샌드위치 사 먹기",
      checked: false
    },
    {
      id: 3,
      text: "리액트 공부하기",
      checked:false
    }
  ]
  const [lists,setLists] = useState(existList);
  const [count,setCount] = useState(2);
  const check = (id)=>{
    setLists(lists.map(list=>
      id===list.id?{...list,checked:!list.checked}:list
    ))
    setCount(prev=>prev+1);
  }
  const notCheck = (id)=>{
    setLists(lists.map(list=>
      id===list.id?{...list,checked:true}:list
    ))
    setCount(prev=>prev-1);
  }
  return (
    <Control
    date={date}
    count={count}
    lists={lists}
    setLists={setLists}
    setCount={setCount}
    check={check}
    notCheck={notCheck}/>
  )
}
export default React.memo(Do);

//useEffect 사용해보기 