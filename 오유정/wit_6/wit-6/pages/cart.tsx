import style from "styled-components";
import { Cart } from "../components/cart/Cart";
import ProductQuery from "./api/SingleProduct";
import Image from "next/image";
import { productType } from "../types/Product";
export default function cart({id}:{id:number}){
  
  return(
    <>
    <P>[cart]</P>
    <Cart id={0} page="cartPage"></Cart>
    </>
  )
}
const P = style.p`
margin:60px;
font-size:25px;
`