import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import { productType } from "../../types/Product";
export default function ProductQuery(id:number){
  return useQuery<productType,Error>([`product${id}`], () =>
  axios
  .get(
    `https://fakestoreapi.com/products/${id}`)
  .then((res)=>res.data)
  .catch(()=>console.log("error"))
)
}