import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import style from "styled-components";
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import { useRouter } from "next/router";
import { useEffect } from "react";
import { NextPage } from 'next';
import {productType} from "../../types/Product";
import { ReactElement } from "react";
import Usecategory from "../api/UseCategory";
import { useState } from 'react';
import { type } from "os";
import { ProductWrapper,ProductContainer,ProductTitle } from "../../components/Product";
import Product from "../../components/Product";
import { emit } from "process";
export default function Category(){
  const router = useRouter(); 
  const category =router.query.category;
  if (typeof(category) !="string") return;
  const categoryQuery = Usecategory(category);
  if(categoryQuery.isLoading) return(<>Loading...</>);
  if (categoryQuery.error) return (<>An error has occurred: {categoryQuery.error.message}</>);
  if(categoryQuery.isFetching)return(<>{categoryQuery.isFetching ? "Updating..." : ""}</>);
  return(
    <>
    <P>[ {category} ]</P>
    <Product product={categoryQuery.data}></Product>
    </>
  )
}
const P = style.p`
margin:60px;
`