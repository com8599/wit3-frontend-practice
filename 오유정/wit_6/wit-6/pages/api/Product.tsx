import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import { ReactElement } from "react";
import {TypeProduct} from "../../types/Product";
export default function UseProduct(){
  return useQuery<TypeProduct[],Error>(["product"], () =>
  axios
  .get(
    `https://fakestoreapi.com/products`)
  .then((res)=>res.data)
)
}