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
      <MainTitle><span>스토어.</span><span>좋아하는 Apple 제품을</span><p>구입하는 가장 좋은 방법.</p></MainTitle>
      <MainTag>
        <Tag1>쇼핑 지원이 필요하다면?</Tag1>
        <Tag2>Apple Store를 방문하세요</Tag2>
      </MainTag>
    </MainTop>

    </>
  )
}

const MainTitle = styled.div`
display:inline-block;
margin:70px;
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
`
const MainTop = styled.div`
display:flex;
align-items: center;
justify-content:center;
`
const MainTag = styled.div`
margin-left:100px;
display:inline-block;
`
const Tag1 = styled.div`
`
const Tag2 = styled.div`
`
export default Home
