import styled from "styled-components";
import React, { useState, useEffect, ReactElement } from "react";
import CartPage from "./CartPage.style";
import ProductQuery from "../../pages/api/SingleProduct";
import Image from "next/image";
import { productType } from "../../types/Product";
import cart from "../../pages/cart";
import { ProductContainer } from "../Product";
export function Cart({id,page}:{id:number,page:string}){
  const [cartItems,setCartItems] = useState<number[]>([]);

  useEffect(()=>{
    if(window.sessionStorage.getItem("cart")){
      setCartItems(JSON.parse(window.sessionStorage.getItem("cart") as string));
    }
  },[]);

  const addCart = (newId:number)=>{
    console.log("newId: "+newId);
    if(window.sessionStorage.getItem("cart")){
      const oldCart = JSON.parse(window.sessionStorage.getItem("cart") as string);
      console.log("oldCart: "+ oldCart);
      oldCart.push(newId);
      window.sessionStorage.setItem("cart",JSON.stringify(oldCart));
      setCartItems(oldCart);
      }
    
    else{
      window.sessionStorage.setItem("cart",JSON.stringify([newId]));
      setCartItems(JSON.parse(window.sessionStorage.getItem("cart") as string));
    }
    console.log("cartItems: "+cartItems);
    }
   


  if(page==="ProductDetail"){
    return (
      <>
      <AddButton onClick={()=>addCart(id)}>Cart</AddButton>
      </>
      )
  }
  else{
    // cartItems.map(
    //   id=>{

    //     return(
    //       <CartPage key={id} id={id}></CartPage>
    //     )
    //   }
    // )
    return(
      <ProductContainer>{
        cartItems.map(
          id=>
          <CartPage key={id} id={id}></CartPage>
          
        )
      }
    </ProductContainer>
    )
  }

}
export const ToCartButton = styled.div<{login:string}>`
display:${props=>(props.login==="logout"?`inline-block`:`none`)};
&:hover{
  cursor:pointer;
}
// background-color:rgba(0,0,0,0.1);
background-color:#e6f0f7;
padding: 0 10px;
margin-right:15px;
`
export const AddButton = styled.button`
`