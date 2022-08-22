import style from "styled-components";
import { useEffect, useState } from "react";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import UseLogin from "../../pages/api/LoginApi";
import React from "react";
export default function Login(){
  const [login,setLogin] = useState({logged:"login",id: "",password:""});
  const [open,setOpen] = useState(false);
  const {data} = UseLogin(login.id,login.password);
  useEffect(()=>{
    if(sessionStorage.getItem("login")){
      setLogin({...login,logged:sessionStorage.getItem("login") as string});
    }
  },[setLogin]);

  // useEffect(()=>{
  //   if(sessionStorage.getItem("open")){
  //     setOpen(sessionStorage.getItem("open") as string);
  //   }
  // },[setOpen]);
  const loginHandler = ()=>{
    if(data===undefined){
      window.sessionStorage.setItem("login","login");
      // window.sessionStorage.setItem("open","false");
      alert("login failled");
      return setLogin({...login,logged:"login"});
    }
    setLogin({...login,logged:"logout"});
    window.sessionStorage.setItem("login","logout");
  }

  const loggedHandler = ()=>{
    setLogin({...login,logged:"login"});
    window.sessionStorage.setItem("login",login.logged);
  }

  return(
    <>
    <LoginBar login={open}>
      <Xbutton onClick={()=>setOpen(false)}>X</Xbutton>
      <LoginBarContainer>
        <LoginBarInput value={login.id} onChange={e=> setLogin({...login,id:e.target.value})} placeholder="Id"></LoginBarInput>
        <LoginBarInput value={login.password} onChange={e=>setLogin({...login,password:e.target.value})} placeholder="Password"></LoginBarInput>
        <LoginBarButton onClick={()=>{loginHandler()}}>login</LoginBarButton>
      </LoginBarContainer>
    </LoginBar>
    <LoginButton login={open} onClick={()=>login.logged==="logout"?loggedHandler():setOpen(true)}>{login.logged}</LoginButton>
    </>
  )
}

const LoginButton = style.p<{login:boolean}>`
display:${props=>(props.login ?'none':'block')};
// float:right;
// margin-right:100px;
margin-left:90%;
&:hover{
  cursor:pointer;
}
`
const LoginBar = style.div<{login:boolean}>`
${props=>(props.login?'transform:translate;width:30%;':'transform:translate(130%);width:0')};
background-color:#f3f7fa;
float:right;
height:100vh;
transition-property: transform,width;
transition-duration: 1.5s;
` 

const LoginBarButton = style.button`
border:none;
margin-top:40px;
height:50px;
&:hover{
  cursor:pointer;
}
`
const LoginBarInput = style.input`
padding-left:20px;
border:none;
height:50px;
&:first-child{
  border-bottom : 1px solid #EEEEEE;
}
`
const LoginBarContainer = style.form`
margin:50% 15%;
display:flex;
flex-direction:column;
`
const Xbutton = style.p`
margin-left:90%;
margin-top:5%;
&:hover{
  cursor:pointer;
}
`