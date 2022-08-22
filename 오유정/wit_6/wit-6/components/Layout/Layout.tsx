import Navbar from "./Navbar";
import Login from "./Login";
import { Dispatch, SetStateAction } from "react";
export default function Layout(){
  return(
    <>
    <Login/>
    <Navbar/>
    </>
  )
}