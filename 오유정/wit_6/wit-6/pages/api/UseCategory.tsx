import {useQuery} from "@tanstack/react-query";
import {productType} from "../../types/Product";
import axios from "axios";

export default function Usecategory(category:String){

  return useQuery<productType[],Error>([`${(category)}products`], async() =>
  axios
    .get(`https://fakestoreapi.com/products/category/${(category)}`)
    .then((res) => res.data)    

)
}