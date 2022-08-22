import style from 'styled-components';
import Image from 'next/image'
import { TypeProduct } from '../types/Product';
import { Props } from 'next/script';
import Router from 'next/router';
export default function Product({product}:{product:TypeProduct[]}){
  const toDetail = (id:number)=>{
    Router.push(`/ProductDetail/${id}`)
  }
  return(
    <ProductContainer>
      {product.map(data=>{
          return(
             <ProductWrapper onClick ={()=>toDetail(data.id)} key={data.id}>
              <Image src={data.image} alt={data.title} width={150} height={150} priority></Image>
              <ProductTitle>{data.title}</ProductTitle>
            </ProductWrapper>
          )
        })}
    </ProductContainer>
  )
}
export const ProductWrapper = style.div`
flex: 0 1 50%;
text-align:center;
margin-bottom:50px;
&:hover{
  cursor:pointer;
}
`
export const ProductContainer = style.div`
  display:flex;
  flex-wrap: wrap;
  margin-left:100px;
  margin-right:100px;
`
export const ProductTitle = style.p`
text-align:center;
`