import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Ad from '../components/Ad'
import styled from "styled-components"

const Home: NextPage = () => {
  return (
    <>
    <Ad/>
    <MainTop>
      <MainTitle><span>스토어.</span><span>좋아하는 Apple 제품을&nbsp;</span><p>구입하는 가장 좋은 방법.</p></MainTitle>
      <MainTag>
        <Tag><p><b>쇼핑 지원이 필요하다면?</b></p><a href="#">스페셜리스트에게 문의하세요</a></Tag>
        <Tag><p><b>Apple Store를 방문하세요</b></p><a href="#">가까운 매장 찾기 &gt;</a></Tag>
      </MainTag>
    </MainTop>
    <ProductCards>
      <SingleProductCard>Mac</SingleProductCard>
      <SingleProductCard>iPhone</SingleProductCard>
      <SingleProductCard>iPad</SingleProductCard>
      <SingleProductCard>Apple Watch</SingleProductCard>
      <SingleProductCard>AirPods</SingleProductCard>
      <SingleProductCard>AirTag</SingleProductCard>
      <SingleProductCard>Apple TV</SingleProductCard>
      <SingleProductCard>액세서리</SingleProductCard>
    </ProductCards>
    <SubTitle><span>최신 제품.</span><span>따끈따끈한 신제품 이야기.</span></SubTitle>
    </>
  )
}

const MainTitle = styled.div`
display:inline-block;
margin:70px 70px 70px 0;
font-family: SfProText;
font-weight:700;
font-size:40px;
>span:nth-child(2){
  color:rgba(15,15,15,0.6);
}
 >p{
    margin:0;
    color:rgba(15,15,15,0.6);
 }
@media screen and (max-width : 767px){
  font-size:28px;
  margin:56px 20px 24px 0;
  >p{
    display:inline;
  }
}
`
const MainTop = styled.div`
display:flex;
align-items: center;
justify-content:center;
@media screen and (max-width : 767px){
  flex-direction:column;
  margin-left:20px;
}
`
const MainTag = styled.div`
margin-left:100px;
display:inline-block;
font-size:14px;
>div>a{
  text-decoration:none;
  color:#0066CC;  
}
@media screen and (max-width : 767px){
  margin:0;
  align-self:start;

}
`
const Tag = styled.div`
`


const ProductCards = styled.div`
// display:flex;
// justify-content: space-evenly;
font-weight:600;
white-space:nowrap; 
overflow:auto; 
padding: 16px 4px;
text-align:center;
-ms-overflow-style: none; /* IE and Edge */
scrollbar-width: none; /* Firefox */
::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera*/
}
margin:50px 0 80px 0;
@media screen and (max-width : 767px){
  margin:50px 0;
  margin-left:20px;
}
`
const SingleProductCard = styled.span`
margin:0 40px;
`
const SubTitle = styled.div`
font-weight:700;
font-size:25px;
margin:0 150px;
font-family: SfProText;
>span:last-child{
  color:rgba(15,15,15,0.6);
}
@media screen and (max-width : 767px){
  font-size:18px;
  margin:0;
  margin-left:30px;
}
`
export default Home
