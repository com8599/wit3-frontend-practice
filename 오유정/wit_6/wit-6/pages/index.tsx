import type { NextPage } from 'next'
// import Head from 'next/head'
import Image from 'next/image'
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import style from "styled-components";
import UseProduct from "./api/Product";
import Product from '../components/Product.style';

const Home= () => {
    const { isLoading,error ,data, isFetching } = UseProduct();
    if (isLoading) return (<>Loading...</>);
    if (error) return (<>An error has occurred: {error.message}</>);
    if (isFetching) return (<>Updating...</>);
  return (
   <main> 
  <P>[ All Product ]</P>
  <Product product={data}></Product>
  </main>
  )
}
export default Home;
const P = style.p`
margin:60px;
`