import { useRouter } from "next/router";
import { useState } from "react";
import React from "react";
import UseProduct from "../api/AllProducts";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import style from 'styled-components';
import { productType } from "../../types/Product";
import {Cart} from "../../components/cart/Cart";
import { ADDRCONFIG } from "dns";
import ProductQuery from "../api/SingleProduct";

export default function ProductDetail(){
  const router = useRouter(); 
  const productId =Number(router.query.ProductDetail);
  // const productIdquery= useQuery<productType,Error>([`product${productId}`], () =>
  // axios
  // .get(
  //   `https://fakestoreapi.com/products/${productId}`)
  // .then((res)=>res.data)
  const productIdquery = ProductQuery(productId);
  if(productIdquery.isLoading) return(<>Loading...</>);
  if (productIdquery.error) return (<>An error has occurred: {productIdquery.error.message}</>);
  if(productIdquery.isFetching)return(<>{productIdquery.isFetching ? "Updating..." : ""}</>);
  return(
    <Main>
      <ProductImage>
        <Image src={productIdquery.data.image} alt={productIdquery.data.title} width={300} height={300}></Image>
      </ProductImage>
      <ProductText>
        <h2>{productIdquery.data.title}</h2>
        <br></br>
        <h3>price : {productIdquery.data.price}</h3>
        <br></br>
        <p>{productIdquery.data.description}</p>
        <Cart id ={productIdquery.data.id} page="ProductDetail"></Cart>
      </ProductText>
    </Main>
   
  )
  }
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