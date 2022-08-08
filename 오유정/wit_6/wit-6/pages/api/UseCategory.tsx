import {useQuery} from "@tanstack/react-query";
import {TypeProduct} from "../../types/Product";
import axios from "axios";

export default function Usecategory(category:String){
//   return (useQuery<TypeProduct[],Error>(["product"], () =>
//   axios
//     .get(`https://fakestoreapi.com/products/category/${(category)}`)
//     // .get("https://fakestoreapi.com/products/category/electronics")
//     .then((res) => res.data)    
// ))
  return useQuery<TypeProduct[],Error>(["product"], async() =>
  axios
    .get(`https://fakestoreapi.com/products/category/${(category)}`)
    .then((res) => res.data)    

)
}