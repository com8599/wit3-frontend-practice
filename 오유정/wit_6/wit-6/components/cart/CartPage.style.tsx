import ProductQuery from "../../pages/api/SingleProduct";
import Image from "next/image";
import { productType } from "../../types/Product";
import Product, { ProductWrapper,ProductTitle } from "../Product";
export default function CartPage({id}:{id:number}){
  const {data} = ProductQuery(id);
  console.log(data);
  console.log("id:"+ id);

  return(
    <ProductWrapper key={id}>
    {data&&
    <>
    <Image src={(data as productType).image} alt={(data as productType).title} width={150} height={150} priority></Image>
    <ProductTitle>{(data as productType).title}</ProductTitle>
    </>
    }
    </ProductWrapper>
  )
}