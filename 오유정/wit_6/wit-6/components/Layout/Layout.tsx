import Navbar from "./Navbar";
import Login from "./Login";
import React, { Dispatch, SetStateAction } from "react";
export default function Layout(props:{children:React.ReactNode}){
  return(
    <>
    <header>
    <Login/>
    <Navbar/>
    </header>
    <main>
      {props.children}
    </main>
    </>
  )
}