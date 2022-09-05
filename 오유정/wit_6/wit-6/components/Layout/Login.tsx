import style from "styled-components";
import { useCallback, useEffect, useState } from "react";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import UseLogin from "../../pages/api/LoginApi";
import React from "react";
import { NodeNextRequest } from "next/dist/server/base-http/node";
import { ToCartButton } from "../cart/Cart";
import Link from "next/link";
export default function Login(){

  const [login,setLogin] = useState({logged:"login",id: "",password:""});
  const [open,setOpen] = useState(false);
  const {data} = UseLogin(login.id,login.password);

  useEffect(()=>{
    if(window.sessionStorage.getItem("login")){
      setLogin({...login,logged:window.sessionStorage.getItem("login") as string});
    }
  },[]);

  const loginHandler = ()=>{
    if(data) {
      console.log(data);
      window.sessionStorage.setItem("login","logout");
      setOpen(false);
      setLogin({...login,logged:"logout"});
    }
    else{
      alert("login failled");
    }
  }

  const loggedHandler = ()=>{
    setLogin({...login,logged:"login",id:"",password:""});
    window.sessionStorage.setItem("login","login");
  }
  return(
    <>
    <LoginBar open={open}>
      <Xbutton onClick={()=>setOpen(false)}>X</Xbutton>
      <LoginForm>
        <LoginBarInput value={login.id} onChange={e=> setLogin({...login,id:e.target.value})} placeholder="Id"></LoginBarInput>
        <LoginBarInput value={login.password} onChange={e=>setLogin({...login,password:e.target.value})} placeholder="Password"></LoginBarInput>
        <LoginBarButton onClick={()=>{loginHandler()}}>login</LoginBarButton>
      </LoginForm>
    </LoginBar>
    <TopbarContainer>
      <Link href="/cart"><ToCartButton login={login.logged}>Cart</ToCartButton></Link>
      <LoginButton open={open} onClick={()=>login.logged==="logout"?loggedHandler():setOpen(true)}>{login.logged}</LoginButton>
    </TopbarContainer>
    </>
  )
}

const LoginButton = style.p<{open:boolean}>`
display:${props=>(props.open?'none':'inline-block')};
// float:right;
// margin-right:100px;
//margin-left:90%;
&:hover{
  cursor:pointer;
}
`
const LoginBar = style.div<{open:boolean}>`
${props=>(props.open?'transform:translateX(0%);width:30%':'transform:translateX(100%);width:0;')};
// width:30%;
background-color:#f3f7fa;
float:right;
height:100vh;
transition-property: transform,width;
transition-duration: 1.5s;
` 

const LoginBarButton = style.div`
overflow:hidden;
border-radius: 10px;
margin-top:40px;
background-color:rgba(195, 216, 239, 0.5);
height:50px;
display:flex;
align-items:center;
justify-content:center;
&:hover{
  cursor:pointer;
  background-color:rgba(195, 216, 239, 1);
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
const LoginForm = style.form`
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
const TopbarContainer = style.div`
margin-left:90%;
`