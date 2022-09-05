import { ReactElement} from "react";
import Link from 'next/link'
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import style from 'styled-components'
import router from 'next/router';
import Usecategory from "../../pages/api/UseCategory";
import { useState } from "react";
export default function Navbar():ReactElement{
  const { isLoading,error ,data, isFetching } = useQuery<string[],Error>(["category"], () =>
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => res.data),
      // {refetchOnMount:false,refetchOnWindowFocus:false}  
  );

  if (isLoading) return (<p>Loading...</p>);
  if (error) return (<p>An error has occurred: {error.message}</p>);
  if (isFetching) return(<p>Updating...</p>);

  return (
    <>
    <Link href="/"><Logo>My Shop</Logo></Link>
      <nav>
        <MenuWrapper>
        {data.map(e=>{return(<Menu key={data.indexOf(e)} onClick={() => {
          router.push(`/category/${e}`)
          }}>{e}</Menu>)})}
        </MenuWrapper>
      </nav>
    </>
  )
}
const Logo = style.p`
margin-top:0;
margin-left:60px;
display:inline-block;
font-size:40px;
&:hover{
  cursor:pointer;
}
`
const MenuWrapper = style.ul`
display:flex;
justify-content: space-around;
list-style:none;
font-size:20px;
margin-bottom:50px;
`
const Menu = style.li`
&:hover{
  cursor:pointer;
}
`