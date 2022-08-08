import { useRouter } from "next/router";
import { useState } from "react";
import UseProduct from "../api/Product";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import style from 'styled-components';
import { TypeProduct } from "../../types/Product";
const Main = style.main`
margin:80px 150px;
display:flex;
flex-wrap: wrap;
`
const ProductImage = style.div`
flex:1 1 50%;
`
const ProductText = style.div`
flex:1 1 50%;
`
// interface addCartType {
//   addCart : (id:number) => void;
// }
export default function ProductDetail(){
  const router = useRouter(); 
  const ProudctId =router.query.ProductDetail;
  const {isFetching,isLoading,error,data} = useQuery<TypeProduct,Error>(["product"], () =>
  axios
  .get(
    `https://fakestoreapi.com/products/${ProudctId}`)
  .then((res)=>res.data)
)
  if(isLoading) return(<>Loading...</>);
  if (error) return (<>An error has occurred: {error.message}</>);
  if(isFetching)return(<>{isFetching ? "Updating..." : ""}</>);
  return(
    <Main>
      <ProductImage>
        <Image src={data.image} alt={data.title} width={300} height={300}></Image>
      </ProductImage>
      <ProductText>
        <h2>{data.title}</h2>
        <br></br>
        <h3>price : {data.price}</h3>
        <br></br>
        <p>{data.description}</p>
        {/* <button onClick={()=>{addCart}}>cart</button> */}
      </ProductText>
    </Main>
   
   
  )
  }