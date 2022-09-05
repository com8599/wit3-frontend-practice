import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import { ReactElement } from "react";
import { productType } from "../../types/Product";
export default function UseProduct(){
  return useQuery<productType[],Error>(["products"], () =>
  axios
  .get(
    `https://fakestoreapi.com/products`)
  .then((res)=>res.data),
  // {refetchOnMount:false,refetchOnWindowFocus:false} 
)
}