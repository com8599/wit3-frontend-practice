import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import { useRouter } from "next/router";
import { useEffect } from "react";
import { NextPage } from 'next';
import {TypeProduct} from "../../types/Product";
import { ReactElement } from "react";
import Usecategory from "../api/UseCategory";
import { useState } from 'react';
import { type } from "os";
import { ProductWrapper,AllProductWrapper,ProductTitle } from "../../components/Product.style";
import Product from "../../components/Product.style";
import { emit } from "process";
export default function Category(){
  const router = useRouter(); 
  const category =router.query.category;
  
  if(typeof(category)!="string")return;

  const {isFetching,isLoading,error,data} = Usecategory(category);
  if(isLoading) return(<>Loading...</>);
  if (error) return (<>An error has occurred: {error.message}</>);
  if(isFetching)return(<>{isFetching ? "Updating..." : ""}</>);
  return(
    <>
    <p>[ {category} ]</p>
    <Product e={data}></Product>
    </>
  )
}