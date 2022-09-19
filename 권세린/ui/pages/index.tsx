import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import { BsBag, BsApple, BsBoxSeam, BsCreditCard, BsChevronCompactRight } from "react-icons/bs"
import { TbMenu } from "react-icons/tb"
import { MdOutlinePhonelink } from "react-icons/md"
import { ImHappy } from "react-icons/im"
import { HiOutlineGift, HiPlus } from "react-icons/hi"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const HeaderButtonContainer = styled.div`
  display: flex;
  background-color: #313132;
  justify-content: space-between;
  padding: 15px;
`

const CreditCardDescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
`

const StoreContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F5F5F7;
  padding: 40px 70px 40px 20px;
`

const StoreMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`

const CreditCardDescriptionText = styled.span`
  font-size: 12px;
  color: #1D1D1F;
`

const CreditCardDescriptionText2 = styled(CreditCardDescriptionText)`
  font-size: 5px;
  color: #1D1D1F;
`

const CreditCardDescriptionMoreText = styled(CreditCardDescriptionText)`
  font-size: 12px;
  color: #1472D0;
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Title = styled.p`
  font-size: 30px;
  color: #1D1D1F;
  font-weight: bold;
`

const SubTitle = styled.span`
  font-size: 30px;
  color: #6E6E73;
  font-weight: bold;
`

const BoxItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 16px;
`;

const BoxItem = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 5px;
`;

const BoxItemIcon = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const BoxItemLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const BoxItemLabel = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: #1D1D1F;
`;

const BoxItemBalance = styled.span`
  font-size: 15px;
  color: #1472D0;
`;

const Products = styled.div`
  width: 417px;
  padding: 20px;
  display: flex;
  overflow: scroll;
  overflow: auto;
  white-space: nowrap;
  gap: 10px 20px;

  &::-webkit-scrollbar{
    display: none;
  }
`

const Product = styled.div`
  display: flex;
  flex-direction: column;
`

const ProductImg = styled.img`
  width: 100px;
  height: 100px;
`

const ProductType = styled.div`
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  color: black;
`

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ContentsTitle = styled(Title)`
  font-size: 20px;
`

const ContentsSubTitle = styled(SubTitle)`
  font-size: 20px;
`
const ContentsDescriptionBoxs = styled.div`
  width: 417px;
  padding: 20px 20px 20px 0;
  display: flex;
  overflow: scroll;
  overflow: auto;
  white-space: nowrap;
  gap: 20px;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar{
    display: none;
  }
`

const ContentsDescriptionBox = styled.div`
  width: 300px;
  height: 450px;
  background-color: black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow:  0px 0px 10px 2px rgba(100, 100, 100, 0.1);
`

const ContentsDescriptionBoxTitle = styled.div`
  font-size: 18px;
  color: white;
  padding: 50px 20px 7px;
  font-weight: bold;
`

const ContentsDescriptionBoxSubTitle = styled(ContentsDescriptionBoxTitle)`
  font-size: 10px;
  padding: 30px 20px 5px;
`

const ContentsDescriptionBoxPrice = styled(ContentsDescriptionBoxTitle)`
  font-size: 15px;
  font-weight: normal;
  padding: 0px 20px 5px;
`

const ContentsDescriptionBoxImage = styled.img`
  width: 300px;
  height: 250px;
`
const SmallContentsDescriptionBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const LinkButton = styled.button`
  height: 40px;
  padding: 10px 20px;
  border-radius: 20px;
  background: #E8E8ED;
  color: #000000;
  font-size: 12px;
  font-weight: bold;
`

const DiscriptionPText = styled.p`
  color: #555555;
  font-size: 10px;
`

const DiscriptionSpanText = styled.span`
  color: #555555;
  font-size: 10px;
  font-weight: bold;
`

const AppleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px 0;
`

const PlusInfoBoxs = styled.div`
  border: solid #D6D6D6;
  border-width: 1px 0;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`

const PlusInfoBox = styled.div`
  border-top: solid #D6D6D6 1px;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`

const HeaderButton = () => {
  return (
    <HeaderButtonContainer>
      <TbMenu style={{color: "#D6D6D6", fontSize: "20px"}}/>
      <BsApple style={{color: "#D6D6D6", fontSize: "20px"}}/>
      <BsBag style={{color: "#D6D6D6", fontSize: "20px"}}/>
    </HeaderButtonContainer>
  )
}

const CreditCardDescription = () => {
  return (
    <CreditCardDescriptionContainer>
      <CreditCardDescriptionText>신용카드 결제 시 최대 12개월 할부 적용 가능.</CreditCardDescriptionText>
      <CreditCardDescriptionText2>2</CreditCardDescriptionText2>
      <CreditCardDescriptionMoreText>더 알아보기 &gt;</CreditCardDescriptionMoreText>
    </CreditCardDescriptionContainer>
  )
}

const StoreMain = () => {
  return (
  <StoreMainContainer>
    <TitleContainer>
      <Title>스토어.
      <SubTitle>좋아하는 Apple 제품을 구입하는 가장 좋은 방법.</SubTitle>
      </Title>
    </TitleContainer>
    <BoxItems>
      <BoxItem>
        <BoxItemIcon src="https://via.placeholder.com/320/F0F2F5/DBDCDF/"/>
        <BoxItemLabelContainer>
          <BoxItemLabel>쇼핑 지원이 필요하다면?</BoxItemLabel>
          <BoxItemBalance>스페셜리스트에게 문의하세요</BoxItemBalance>
        </BoxItemLabelContainer>
      </BoxItem>
      <BoxItem>
        <BoxItemIcon src="https://via.placeholder.com/320/F0F2F5/DBDCDF/"/>
        <BoxItemLabelContainer>
          <BoxItemLabel>Apple Store를 방문하세요</BoxItemLabel>
          <BoxItemBalance>가까운 매장 찾기 &gt;</BoxItemBalance>
        </BoxItemLabelContainer>
      </BoxItem>
    </BoxItems>
    <Products>
      <Product>
        <ProductImg src="https://via.placeholder.com/320/F0F2F5/DBDCDF/"/>
        <ProductType>Mac</ProductType>
      </Product>
      <Product>
        <ProductImg src="https://via.placeholder.com/320/F0F2F5/DBDCDF/"/>
        <ProductType>iPhone</ProductType>
      </Product>
      <Product>
        <ProductImg src="https://via.placeholder.com/320/F0F2F5/DBDCDF/"/>
        <ProductType>iPad</ProductType>
      </Product>
      <Product>
        <ProductImg src="https://via.placeholder.com/320/F0F2F5/DBDCDF/"/>
        <ProductType>Apple Watch</ProductType>
      </Product>
      <Product>
        <ProductImg src="https://via.placeholder.com/320/F0F2F5/DBDCDF/"/>
        <ProductType>AirPods</ProductType>
      </Product>
      <Product>
        <ProductImg src="https://via.placeholder.com/320/F0F2F5/DBDCDF/"/>
        <ProductType>AirTag</ProductType>
      </Product>
      <Product>
        <ProductImg src="https://via.placeholder.com/320/F0F2F5/DBDCDF/"/>
        <ProductType>Apple TV</ProductType>
      </Product>
      <Product>
        <ProductImg src="https://via.placeholder.com/320/F0F2F5/DBDCDF/"/>
        <ProductType>액세사리</ProductType>
      </Product>
    </Products>
  </StoreMainContainer>
  )
}

const BrandNewContents = () => {
  return (
    <ContentsContainer>
      <TitleContainer>
        <ContentsTitle>최신 제품.
          <ContentsSubTitle>따끈따끈한 신제품 이야기.</ContentsSubTitle>
        </ContentsTitle>
      </TitleContainer>
      <ContentsDescriptionBoxs>
        <ContentsDescriptionBox>
          <ContentsDescriptionBoxTitle>iPhone 14 Pro<br/> 프로 그 이상.</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxPrice>&#8361;1,550,000부터</ContentsDescriptionBoxPrice>
        <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/"/>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox>
          <ContentsDescriptionBoxSubTitle>APPLE WATCH SERIES 8</ContentsDescriptionBoxSubTitle>
          <ContentsDescriptionBoxTitle style={{padding: "20px 20px 7px"}}>건강하게 앞서 나아가다.</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxPrice>&#8361;599,000부터</ContentsDescriptionBoxPrice>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/"/>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox style={{backgroundColor: "white"}}>
          <ContentsDescriptionBoxTitle style={{color: "black"}}>iPhone 14 Pro 크게. 더 크게.</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxPrice style={{color: "black"}}>&#8361;1,250,000부터</ContentsDescriptionBoxPrice>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/"/>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox>
          <ContentsDescriptionBoxSubTitle>APPLE WATCH ULTRA</ContentsDescriptionBoxSubTitle>
          <ContentsDescriptionBoxTitle style={{padding: "20px 20px 7px"}}>모험을 위한 시간.</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxPrice>&#8361;1,149,000부터</ContentsDescriptionBoxPrice>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/"/>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox>
          <ContentsDescriptionBoxSubTitle>AIRPODS PRO(2세대)</ContentsDescriptionBoxSubTitle>
          <ContentsDescriptionBoxTitle style={{padding: "20px 20px 7px"}}>듣는다는 것을 다시 생각하다.</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxPrice>&#8361;359,000부터</ContentsDescriptionBoxPrice>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/"/>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox style={{backgroundColor: "white"}}>
          <ContentsDescriptionBoxSubTitle style={{color: "black"}}>APPLE WATCH SE</ContentsDescriptionBoxSubTitle>
          <ContentsDescriptionBoxTitle style={{color: "black", padding: "20px 20px 7px"}}>부담 없이 빠져들다.</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxPrice style={{color: "black"}}>&#8361;359,000부터</ContentsDescriptionBoxPrice>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/"/>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox style={{backgroundColor: "white"}}>
          <ContentsDescriptionBoxSubTitle style={{color: "black"}}>M2 칩 탑재 MACBOOK AIR</ContentsDescriptionBoxSubTitle>
          <ContentsDescriptionBoxTitle style={{color: "black", padding: "20px 20px 7px"}}>가볍게만 볼 수 없는 이유.</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxPrice style={{color: "black"}}>&#8361;1,690,000부터</ContentsDescriptionBoxPrice>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/"/>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox>
          <ContentsDescriptionBoxSubTitle>MACBOOK PRO 13</ContentsDescriptionBoxSubTitle>
          <ContentsDescriptionBoxTitle style={{padding: "20px 20px 7px"}}>거침없이 프로.</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxPrice>&#8361;1,790,000부터</ContentsDescriptionBoxPrice>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/"/>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox>
          <ContentsDescriptionBoxSubTitle>IPAD AIR</ContentsDescriptionBoxSubTitle>
          <ContentsDescriptionBoxTitle style={{padding: "20px 20px 7px"}}>가뿐하게. 색다르게. 강력하게.</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxPrice>&#8361;779,000부터</ContentsDescriptionBoxPrice>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/"/>
        </ContentsDescriptionBox>
      </ContentsDescriptionBoxs>
    </ContentsContainer>
  )
}

const HelpContents = () => {
  return (
    <ContentsContainer>
      <TitleContainer>
        <ContentsTitle>도움의 손길.
          <ContentsSubTitle>언제든, 당신에게 맞는 방식으로.</ContentsSubTitle>
        </ContentsTitle>
      </TitleContainer>
      <ContentsDescriptionBoxs>
        <ContentsDescriptionBox style={{backgroundColor: "white"}}>
          <ContentsDescriptionBoxTitle style={{color: "#1D1D1F"}}>스페셜리스트와 함께하는 일대일<br/>쇼핑. 온라인으로, 또는 매장에서.</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/"/>
        </ContentsDescriptionBox>
        <SmallContentsDescriptionBoxContainer>
          <ContentsDescriptionBox style={{backgroundColor: "white", height: "220px" }}>
            <ContentsDescriptionBoxTitle style={{color: "#1D1D1F"}}>무료 개인 맞춤 세션으로 새<br/> 기기와 더 친숙해지세요.</ContentsDescriptionBoxTitle>
            <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/" style={{height: "220px"}}/>
          </ContentsDescriptionBox>
          <ContentsDescriptionBox style={{height: "200px", 
          background: "linear-gradient(to top left, #EEDBDF, rgba(255, 153, 150, 0), #D9EAFE), linear-gradient(to top right, #DECEF5, #F1F8FE) rgba(255, 153, 150, 1)"}}>
          <ContentsDescriptionBoxTitle style={{color: "#1D1D1F"}}>Genius Bar에서<br/> 전문가의 서비스와<br/> 지원을 받아보세요.</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/" style={{height: "30px"}}/>
        </ContentsDescriptionBox>
        </SmallContentsDescriptionBoxContainer>
      </ContentsDescriptionBoxs>
    </ContentsContainer>
  )
}

const WeAreSpecialContents = () => {
  return (
    <ContentsContainer>
      <TitleContainer>
        <ContentsTitle>남다른 Apple Store.
          <ContentsSubTitle>이곳에서 쇼핑해야 하는 더욱더 많은 이유.</ContentsSubTitle>
        </ContentsTitle>
      </TitleContainer>
      <ContentsDescriptionBoxs>
        <ContentsDescriptionBox style={{backgroundColor: "white", padding: "20px 30px 0 20px", height: "215px"}}>
          <BsBag style={{color: "#3F6EB8", fontSize: 40}}/>
          <ContentsTitle style={{fontSize: "18px"}}>온라인으로 주문하고, 매장에서<br/> 픽업.</ContentsTitle>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox style={{backgroundColor: "white", padding: "20px 30px 0 20px", height: "215px"}}>
          <BsBoxSeam style={{color: "#FF0053", fontSize: 40}}/>
          <ContentsTitle style={{fontSize: "18px"}}>무료 익일 배송 또는 표준 배송.</ContentsTitle>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox style={{backgroundColor: "white", padding: "20px 30px 0 20px", height: "215px"}}>
          <MdOutlinePhonelink style={{color: "#AC39FF", fontSize: 40}}/>
          <ContentsTitle style={{fontSize: "18px"}}>쓰던 기기를 보상 판매하고 새<br/> 기기를 더 저렴하게.1</ContentsTitle>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox style={{backgroundColor: "white", padding: "20px 30px 0 20px", height: "215px"}}>
          <BsCreditCard style={{color: "#68CC45", fontSize: 40}}/>
          <ContentsTitle style={{fontSize: "18px"}}>기분 좋은 결제 옵션.2</ContentsTitle>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox style={{backgroundColor: "white", padding: "20px 30px 0 20px", height: "215px"}}>
          <ImHappy style={{color: "#007AFF", fontSize: 40}}/>
          <ContentsTitle style={{fontSize: "18px"}}>자신만의 것이라는 증표. 무료로<br/> 조합해서 새기는 이모티콘, 이름,<br/> 숫자.</ContentsTitle>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox style={{backgroundColor: "white", padding: "20px 30px 0 20px", height: "215px"}}>
          <BsApple style={{color: "#F3695F", fontSize: 40}}/>
          <ContentsTitle style={{fontSize: "18px"}}>Mac을 맞춤 구성하고, Apple<br/> Watch를 당신만의 스타일로.</ContentsTitle>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox style={{backgroundColor: "white", padding: "20px 30px 0 20px", height: "215px"}}>
          <HiOutlineGift style={{color: "#FF3333", fontSize: 40}}/>
          <ContentsTitle style={{fontSize: "18px"}}>당신의 선물에 각별함을 더하는<br/> 법.</ContentsTitle>
        </ContentsDescriptionBox>
      </ContentsDescriptionBoxs>
    </ContentsContainer>
  )
}

const AccessoryContents = () => {
  return (
    <ContentsContainer>
      <TitleContainer>
        <ContentsTitle>새로움을 입다.
          <ContentsSubTitle>전에 없던 색상으로 찾아온 수많은 액세사리.</ContentsSubTitle>
        </ContentsTitle>
      </TitleContainer>
      <ContentsDescriptionBoxs>
        <ContentsDescriptionBox style={{backgroundColor: "white"}}>
          <ContentsDescriptionBoxTitle style={{color: "#1D1D1F"}}>액세사리.</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxSubTitle style={{color: "#1D1D1F", fontSize: "15px", fontWeight: "normal", padding: "0px 20px 5px"}}>즐겨 사용하는 기기들과 완벽하게<br/> 페어링되는 여러 가지 필수품.</ContentsDescriptionBoxSubTitle>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/"/>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox style={{backgroundColor: "white"}}>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/" style={{height: "300px", padding: "20px"}}/>
          <ContentsDescriptionBoxSubTitle style={{color: "#C86123", fontSize: "12px", fontWeight: "normal", padding: "5px 20px 0"}}>New</ContentsDescriptionBoxSubTitle>
          <ContentsDescriptionBoxTitle style={{fontSize: "15px", color: "#1D1D1F", padding: "5px 20px 20px"}}>MagSafe형 iPhone 14 Pro 가죽<br/>케이스 - 잉크</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxPrice style={{color: "#1D1D1F"}}>&#8361;85,000</ContentsDescriptionBoxPrice>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox style={{backgroundColor: "white"}}>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/" style={{height: "300px", padding: "20px"}}/>
          <ContentsDescriptionBoxSubTitle style={{color: "#C86123", fontSize: "12px", fontWeight: "normal", padding: "5px 20px 0"}}>New</ContentsDescriptionBoxSubTitle>
          <ContentsDescriptionBoxTitle style={{fontSize: "15px", color: "#1D1D1F", padding: "5px 20px 20px"}}>MagSafe형 iPhone 14 실리콘<br/>케이스 - 라일락</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxPrice style={{color: "#1D1D1F"}}>&#8361;69,000</ContentsDescriptionBoxPrice>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox style={{backgroundColor: "white"}}>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/" style={{height: "300px", padding: "20px"}}/>
          <ContentsDescriptionBoxSubTitle style={{color: "#C86123", fontSize: "12px", fontWeight: "normal", padding: "5px 20px 0"}}>New</ContentsDescriptionBoxSubTitle>
          <ContentsDescriptionBoxTitle style={{fontSize: "15px", color: "#1D1D1F", padding: "5px 20px 20px"}}>45mm 베이지 브레이드 솔로 루프 -<br/>사이즈 6</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxPrice style={{color: "#1D1D1F"}}>&#8361;135,000</ContentsDescriptionBoxPrice>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox style={{backgroundColor: "white"}}>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/" style={{height: "300px", padding: "20px"}}/>
          <ContentsDescriptionBoxSubTitle style={{color: "#C86123", fontSize: "12px", fontWeight: "normal", padding: "5px 20px 0"}}>New</ContentsDescriptionBoxSubTitle>
          <ContentsDescriptionBoxTitle style={{fontSize: "15px", color: "#1D1D1F", padding: "5px 20px 20px"}}>45mm 스톰 블루 스포츠 루프</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxPrice style={{color: "#1D1D1F"}}>&#8361;65,000</ContentsDescriptionBoxPrice>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox style={{backgroundColor: "white"}}>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/" style={{height: "300px", padding: "20px"}}/>
          <ContentsDescriptionBoxSubTitle style={{color: "#C86123", fontSize: "12px", fontWeight: "normal", padding: "5px 20px 0"}}>New</ContentsDescriptionBoxSubTitle>
          <ContentsDescriptionBoxTitle style={{fontSize: "15px", color: "#1D1D1F", padding: "5px 20px 20px"}}>45mm 세쿼이아/퓨어 플래티넘 Nike<br/>스포츠 루프</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxPrice style={{color: "#1D1D1F"}}>&#8361;65,000</ContentsDescriptionBoxPrice>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox style={{backgroundColor: "white"}}>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/" style={{height: "300px", padding: "20px"}}/>
          <ContentsDescriptionBoxSubTitle style={{color: "#C86123", fontSize: "12px", fontWeight: "normal", padding: "5px 20px 0"}}>New</ContentsDescriptionBoxSubTitle>
          <ContentsDescriptionBoxTitle style={{fontSize: "15px", color: "#1D1D1F", padding: "5px 20px 20px"}}>45mm 세쿼이아/퓨어 플래티넘 Nike<br/>스포츠 루프</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxPrice style={{color: "#1D1D1F"}}>&#8361;65,000</ContentsDescriptionBoxPrice>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox style={{backgroundColor: "white"}}>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/" style={{height: "300px", padding: "20px"}}/>
          <ContentsDescriptionBoxSubTitle style={{color: "#C86123", fontSize: "12px", fontWeight: "normal", padding: "5px 20px 0"}}>New</ContentsDescriptionBoxSubTitle>
          <ContentsDescriptionBoxTitle style={{fontSize: "15px", color: "#1D1D1F", padding: "5px 20px 20px"}}>MagSafe형 iPhone 가죽 카드지갑-<br/>오렌지</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxPrice style={{color: "#1D1D1F"}}>&#8361;85,000</ContentsDescriptionBoxPrice>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox style={{backgroundColor: "white"}}>
          <ContentsDescriptionBoxTitle style={{color: "#1D1D1F"}}>모든 액세사리를 살펴보세요.</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/"/>
        </ContentsDescriptionBox>
      </ContentsDescriptionBoxs>
    </ContentsContainer>
  )
}

const EarphoneContents = () => {
  return (
    <ContentsContainer>
      <TitleContainer>
        <ContentsTitle>생생하게 들리는 차이.
          <ContentsSubTitle>풍부한 고품질 사운드를 원한다면 필연적인 선택.</ContentsSubTitle>
        </ContentsTitle>
      </TitleContainer>
      <ContentsDescriptionBoxs>
      <ContentsDescriptionBox style={{backgroundColor: "white"}}>
          <ContentsDescriptionBoxTitle style={{color: "#1D1D1F"}}>Apple Music 6개월 무료 이용<br/>혜택.</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxSubTitle style={{color: "#1D1D1F", fontSize: "15px", fontWeight: "normal", padding: "0px 20px 5px"}}>적용 대상 기기에 제공되는 혜택.*</ContentsDescriptionBoxSubTitle>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/"/>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox style={{backgroundColor: "white"}}>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/" style={{height: "300px", padding: "20px"}}/>
          <ContentsDescriptionBoxTitle style={{fontSize: "15px", color: "#1D1D1F", padding: "27px 20px 20px"}}>Beats Studio Buds - True<br/>Wireless 노이즈 감쇠 이어폰 - 블랙</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxPrice style={{color: "#1D1D1F"}}>&#8361;199,000</ContentsDescriptionBoxPrice>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox style={{backgroundColor: "white"}}>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/" style={{height: "300px", padding: "20px"}}/>
          <ContentsDescriptionBoxSubTitle style={{color: "#C86123", fontSize: "12px", fontWeight: "normal", padding: "5px 20px 0"}}>무료 각인</ContentsDescriptionBoxSubTitle>
          <ContentsDescriptionBoxTitle style={{fontSize: "15px", color: "#1D1D1F", padding: "5px 20px 20px"}}>AirPods(3세대) MagSafe 충전<br/>케이스 모델</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxPrice style={{color: "#1D1D1F"}}>&#8361;269,000</ContentsDescriptionBoxPrice>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox style={{backgroundColor: "white"}}>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/" style={{height: "300px", padding: "20px"}}/>
          <ContentsDescriptionBoxSubTitle style={{color: "#C86123", fontSize: "12px", fontWeight: "normal", padding: "5px 20px 0"}}>무료 각인</ContentsDescriptionBoxSubTitle>
          <ContentsDescriptionBoxTitle style={{fontSize: "15px", color: "#1D1D1F", padding: "5px 20px 20px"}}>AirPods Max - 실버</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxPrice style={{color: "#1D1D1F"}}>&#8361;769,000</ContentsDescriptionBoxPrice>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox style={{backgroundColor: "white"}}>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/" style={{height: "300px", padding: "20px"}}/>
          <ContentsDescriptionBoxTitle style={{fontSize: "15px", color: "#1D1D1F", padding: "27px 20px 20px"}}>Beats Fit Pro 진정한 무선 이어버드 --<br/>스톤 퍼플</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxPrice style={{color: "#1D1D1F"}}>&#8361;269,000</ContentsDescriptionBoxPrice>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox style={{backgroundColor: "white"}}>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/" style={{height: "300px", padding: "20px"}}/>
          <ContentsDescriptionBoxSubTitle style={{color: "#C86123", fontSize: "12px", fontWeight: "normal", padding: "5px 20px 0"}}>무료 각인</ContentsDescriptionBoxSubTitle>
          <ContentsDescriptionBoxTitle style={{fontSize: "15px", color: "#1D1D1F", padding: "5px 20px 20px"}}>AirPods(2세대)</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxPrice style={{color: "#1D1D1F"}}>&#8361;199,000</ContentsDescriptionBoxPrice>
        </ContentsDescriptionBox>
      </ContentsDescriptionBoxs>
    </ContentsContainer>
  )
}

const ExperienceContents = () => {
  return (
    <ContentsContainer>
      <TitleContainer>
        <ContentsTitle>Apple 경험.
        <ContentsSubTitle>Apple 제품 및 서비스로 더욱더 많은 걸 누리다.</ContentsSubTitle>
        </ContentsTitle>
      </TitleContainer>
      <ContentsDescriptionBoxs>
        <ContentsDescriptionBox style={{backgroundColor: "white"}}>
            <ContentsDescriptionBoxTitle style={{color: "#1D1D1F"}}>네 가지 Apple 서비스. 한 번의<br/>간편한 가입.</ContentsDescriptionBoxTitle>
            <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/"/>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox style={{backgroundColor: "white"}}>
          <ContentsDescriptionBoxSubTitle style={{fontWeight: "bold", color: "#737378", fontSize: "12px", padding: "30px 20px 10px"}}>NEW</ContentsDescriptionBoxSubTitle>
          <ContentsDescriptionBoxTitle style={{color: "#1D1D1F", padding: "5px 20px 10px"}}>보다 오래 안심할 수 있도록</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxPrice style={{color: "#1D1D1F"}}>이제 AppleCare+가 우발적인 손상에<br/>대한 수리 서비스를 횟수 제한 없이<br/>제공합니다.</ContentsDescriptionBoxPrice>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/" style={{height: "300px", padding: "20px"}}/>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox style={{backgroundColor: "white"}}>
          <ContentsDescriptionBoxSubTitle style={{fontWeight: "bold", color: "#737378", fontSize: "12px", padding: "30px 20px 10px"}}>홈</ContentsDescriptionBoxSubTitle>
          <ContentsDescriptionBoxTitle style={{color: "#1D1D1F", padding: "5px 20px 10px"}}>앱 하나로 집안 전체를 관리하는<br/>방법을 알아보세요.</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/" style={{height: "300px", padding: "20px"}}/>
        </ContentsDescriptionBox>
      </ContentsDescriptionBoxs>
    </ContentsContainer>
  )
}

const SpecialDiscountContents = () => {
  return (
    <ContentsContainer>
      <TitleContainer>
        <ContentsTitle>특별 할인.
        <ContentsSubTitle>비즈니스, 학교 등을 위한 혜택.</ContentsSubTitle>
        </ContentsTitle>
      </TitleContainer>
      <ContentsDescriptionBoxs>
        <ContentsDescriptionBox style={{backgroundColor: "white"}}>
          <ContentsDescriptionBoxSubTitle style={{fontWeight: "bold", color: "#737378", fontSize: "12px", padding: "30px 20px 10px"}}>교육</ContentsDescriptionBoxSubTitle>
          <ContentsDescriptionBoxTitle style={{color: "#1D1D1F", padding: "5px 20px 10px"}}>교육 할인가로 Mac 또는 iPad를<br/>더 저렴하게.3</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/" style={{height: "300px", padding: "20px"}}/>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox>
          <ContentsDescriptionBoxSubTitle style={{fontWeight: "bold", color: "#737378", fontSize: "12px", padding: "30px 20px 10px"}}>비즈니스</ContentsDescriptionBoxSubTitle>
          <ContentsDescriptionBoxTitle style={{padding: "5px 20px 10px"}}>대기업부터 중소기업까지<br/>Apple이 함께합니다.3</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/" style={{height: "300px", padding: "20px"}}/>
        </ContentsDescriptionBox>
        <ContentsDescriptionBox style={{backgroundColor: "white"}}>
          <ContentsDescriptionBoxSubTitle style={{fontWeight: "bold", color: "#737378", fontSize: "12px", padding: "30px 20px 10px"}}>인증 리퍼비쉬 제품</ContentsDescriptionBoxSubTitle>
          <ContentsDescriptionBoxTitle style={{color: "#1D1D1F", padding: "5px 20px 10px"}}>1년 보증이 제공되는 리퍼비쉬<br/>Apple 제품을 쇼핑하세요.</ContentsDescriptionBoxTitle>
          <ContentsDescriptionBoxImage src="https://via.placeholder.com/100/F0F2F5/DBDCDF/" style={{height: "300px", padding: "20px"}}/>
        </ContentsDescriptionBox>
      </ContentsDescriptionBoxs>
    </ContentsContainer>
  )
}

const QuickLinkContents = () => {
  return (
    <ContentsContainer>
      <ContentsTitle style={{fontSize: "18px"}}>빠른 링크</ContentsTitle>
      <ContentsContainer style={{flexDirection: "row", paddingTop: "20px", gap: "10px"}}>
        <LinkButton>주문 상태</LinkButton>
        <LinkButton>쇼핑 도움말</LinkButton>
        <LinkButton>반품</LinkButton>
      </ContentsContainer>
    </ContentsContainer>
  )
}

const StoreContents = () => {
  return (
    <StoreContentsContainer>
      <StoreMain/>
      <BrandNewContents/>
      <HelpContents/>
      <WeAreSpecialContents/>
      <AccessoryContents/>
      <EarphoneContents/>
      <ExperienceContents/>
      <SpecialDiscountContents/>
      <QuickLinkContents/>
    </StoreContentsContainer>
  )
}

const InfoPolicyContents = () => {
  return (
    <ContentsContainer>
      <DiscriptionPText>사업자등록번호 : 120-81-84429 | 통신판매업신고번호 : 제 2011-서울강남-00810호</DiscriptionPText>
      <DiscriptionPText>대표이사 : PETER DENWOOD | 주소 : 서울 특별시 강남구 영동대로 517</DiscriptionPText>
      <DiscriptionPText>대표전화 : 080-330-8877 | 팩스 : 02-6928-0000</DiscriptionPText>
      <DiscriptionPText>* 신규 가입자에게만 적용됩니다. 멤버십은 거주 지역의 월 요금으로 자동 갱신되며, 해지 시 종료됩니다. 제한 사항 및 기타 약관이 적용됩니다. 구입한 기기 수에 상관없이, 무료 체험 혜택은 Apple ID당 한 번만 제공됩니다. 본 프로모션은 Apple Music의 다른 무료 체험 또는 프로모션과 중복 적용되지 않습니다. 적용 대상 오디오 기기 소유: 본 프로모션은 한정된 기간 동안 신규 가입자에게만 적용되며, 신규 가입자는 적용 대상 기기를 iOS 15 또는 iPadOS 15 이후 버전이 설치된 Apple 기기에 연결해야 합니다. 무료 체험 혜택은 적용 대상 기기 페어링 이후 3개월 안에 신청할 수 있습니다. 적용 대상 오디오 기기를 이미 소유하고 있는 경우 새로 구입하지 않아도 혜택을 받을 수 있습니다. 새 iPhone 구입 및 활성화: 본 프로모션은 한정된 기간 동안 새 iPhone을 구입하고 활성화한 신규 가입자에게만 적용됩니다. 무료 체험 혜택은 적용 대상 iPhone 활성화 이후 3개월 안에 신청할 수 있습니다.</DiscriptionPText>
      <br/>
      <DiscriptionPText>1. 보상 판매 금액은 보상 판매 대상이 되는 제품의 상태, 연도, 구성에 따라 달라집니다.일부 기기는 보상 판매 대상이 아닙니다. 크레딧 또는 Apple Store Gift Card로 보상 판매를 받으려면 19세 이상이어야 합니다. 보상 판매 금액은 적용 가능한 새 기기 구입 시 적용하거나 Apple Store Gift Card로 받을 수 있습니다. 최종 확정 금액은 보상 판매 대상 기기를 수령한 후, 예상 금액 산정 시 제시한 기기의 설명과 일치하는지 비교 검수 후 정해집니다. 부가세는 새로 구입한 기기의 총액을 바탕으로 부과됩니다. 일부 매장에서는 보상 판매를 제공하지 않으며, 매장 내 보상 판매와 온라인 보상 판매 프로그램 간 내용에 차이가 있을 수 있습니다. 컴퓨터 제품에 대해서는 매장 내 보상 판매를 제공하지 않습니다. 일부 매장은 추가 요구 사항이 있을 수 있습니다. Apple 또는 보상 판매 파트너사는 어떤 보상 판매도 거래를 거부하거나, 보상 판매 수량을 제한할 권리를 보유합니다. 적용 가능 기기의 보상 판매 및 재활용에 대한 자세한 내용은 Apple의 보상 판매 파트너사에서 확인할 수 있습니다. 규제 및 제한이 적용될 수 있습니다. 보상 판매 프로그램은 Apple의 파트너이자 독립적으로 운영되는 제3의 업체에 의해 제공됩니다. Apple 및 Apple의 계열사는 고객과 파트너 간 계약의 당사자가 아닙니다. 추가 약관은 apple.com/kr/trade-in을 참고하십시오.</DiscriptionPText>
      <br/>
      <DiscriptionPText>2.<DiscriptionSpanText>이용 약관</DiscriptionSpanText>위 할부 서비스는 Apple Online Store, Apple 전화 판매 및 Apple 리테일 매장에서 구입하는 경우에만 이용할 수 있습니다.
할부 서비스는 신용 카드 발급사인 신한, BC, KB, NH, 롯데, 삼성, 현대, 하나, KEB 및 시티은행에서 제공합니다. 모든 할부 구입은 신용 카드 발급사의 승인을 받아야 합니다. 신용 카드 발급사에서 할부 구입을 승인해 주지 않는 경우에도 Apple 직원에게 승인 거부 사유가 전달되지 않습니다. 할부 구입에 대한 승인 결과는 신용 카드 발급사에 문의하십시오. 할부 조건, 수수료, 청구액 등은 은행 웹사이트를 참고하십시오. 청구액은 카드 명세서에 표시됩니다. 할부 서비스를 이용하려면 한국 거주자여야 합니다.</DiscriptionPText>
      <DiscriptionPText>할부 서비스를 이용하려면 구입 시 현지 발급 신용 카드 또는 현지 발급 제휴 카드(Visa, Mastercard, AMEX, China Union Pay)를 사용해야 합니다. 해외 신용 카드(한국 외 다른 국가 또는 지역에서 발급 받은 신용 카드), 직불/체크 카드 및 현지 발급/제휴 법인 카드는 할부 서비스를 이용할 수 없습니다. 할부는 광고 가격 또는 정찰 가격을 기준으로 합니다. 모든 주문 제품은 무료 배송됩니다.</DiscriptionPText>
      <DiscriptionPText>이 정보는 2021년 03월 16일 기준 최신 정보입니다.</DiscriptionPText>
      <br/>
      <DiscriptionPText>3. 특별 할인가는 이용 자격을 갖춘 고객에게 적용됩니다. 특별 할인 혜택을 받는 방법에 관한 자세한 내용은 매장 내 Apple 스페셜리스트에게 문의하거나 080-330-8877에 전화로 문의하시기 바랍니다.</DiscriptionPText>
      <DiscriptionPText>보다 오래 안심할 수 있도록. 이제 AppleCare+가 우발적인 손상에 대한 수리 서비스를 횟수 제한 없이 제공합니다.</DiscriptionPText>
    </ContentsContainer>
  )
}

const PlusInfoContents = () => {
  return (
    <PlusInfoBoxs>
      <AppleContainer>
        <BsApple style={{color: "#555555", fontSize: "20px"}}/>
        <BsChevronCompactRight style={{color: "#D6D6D6", fontSize: "20px"}}/>
        <ContentsDescriptionBoxSubTitle style={{color: "#555555", padding: "0"}}>Apple Store 온라인</ContentsDescriptionBoxSubTitle>
      </AppleContainer>
      <PlusInfoBox>
        <ContentsDescriptionBoxSubTitle style={{color: "#555555", padding: "0"}}>쇼핑 및 알아보기</ContentsDescriptionBoxSubTitle>
        <HiPlus style={{color: "#555555", fontSize: "10px"}}/>
      </PlusInfoBox>
      <PlusInfoBox>
        <ContentsDescriptionBoxSubTitle style={{color: "#555555", padding: "0"}}>서비스</ContentsDescriptionBoxSubTitle>
        <HiPlus style={{color: "#555555", fontSize: "10px"}}/>
      </PlusInfoBox>
      <PlusInfoBox>
        <ContentsDescriptionBoxSubTitle style={{color: "#555555", padding: "0"}}>계정</ContentsDescriptionBoxSubTitle>
        <HiPlus style={{color: "#555555", fontSize: "10px"}}/>
      </PlusInfoBox>
      <PlusInfoBox>
        <ContentsDescriptionBoxSubTitle style={{color: "#555555", padding: "0"}}>Apple Store</ContentsDescriptionBoxSubTitle>
        <HiPlus style={{color: "#555555", fontSize: "10px"}}/>
      </PlusInfoBox>
      <PlusInfoBox>
        <ContentsDescriptionBoxSubTitle style={{color: "#555555", padding: "0"}}>비즈니스</ContentsDescriptionBoxSubTitle>
        <HiPlus style={{color: "#555555", fontSize: "10px"}}/>
      </PlusInfoBox>
      <PlusInfoBox>
        <ContentsDescriptionBoxSubTitle style={{color: "#555555", padding: "0"}}>교육</ContentsDescriptionBoxSubTitle>
        <HiPlus style={{color: "#555555", fontSize: "10px"}}/>
      </PlusInfoBox>
      <PlusInfoBox>
        <ContentsDescriptionBoxSubTitle style={{color: "#555555", padding: "0"}}>Apple의 가치관</ContentsDescriptionBoxSubTitle>
        <HiPlus style={{color: "#555555", fontSize: "10px"}}/>
      </PlusInfoBox>
      <PlusInfoBox>
        <ContentsDescriptionBoxSubTitle style={{color: "#555555", padding: "0"}}>Apple 정보</ContentsDescriptionBoxSubTitle>
        <HiPlus style={{color: "#555555", fontSize: "10px"}}/>
      </PlusInfoBox>
    </PlusInfoBoxs>
  )
}

const EtcInfoContents = () => {
  return (
  <ContentsContainer>
      <DiscriptionPText>다양한 쇼핑 방법: <DiscriptionSpanText style={{fontWeight: "normal", color: "#0066D4"}}>Apple Store를 방문</DiscriptionSpanText>하거나, 
      <DiscriptionSpanText style={{fontWeight: "normal", color: "#0066D4"}}>리셀러</DiscriptionSpanText>를 찾아보거나, <DiscriptionSpanText style={{fontWeight: "normal", color: "#0066D4"}}>080-330-8877</DiscriptionSpanText>
      번으로 전화하세요.</DiscriptionPText>
      <br/>
      <DiscriptionPText>대한민국</DiscriptionPText>
      <br/>
      <DiscriptionPText>Copiright © 2022 Apple Inc. 모든 권리 보유.</DiscriptionPText>
      <DiscriptionPText style={{color: "#222222"}}>개인정보 처리방침<DiscriptionSpanText style={{color: "#DDDDDD", fontWeight: "normal"}}> | </DiscriptionSpanText>약관<DiscriptionSpanText style={{color: "#DDDDDD", fontWeight: "normal"}}> | </DiscriptionSpanText>
      판매 및 환불<DiscriptionSpanText style={{color: "#DDDDDD", fontWeight: "normal"}}> | </DiscriptionSpanText>법적 고지<DiscriptionSpanText style={{color: "#DDDDDD", fontWeight: "normal"}}> | </DiscriptionSpanText>사이트 맵</DiscriptionPText>
    </ContentsContainer>
  )
  
}


const FooterContents = () => {
  return (
    <StoreContentsContainer>
      <InfoPolicyContents/>
      <PlusInfoContents/>
      <EtcInfoContents/>
    </StoreContentsContainer>
  )
}

const Main: NextPage = () => {
  return (
    <Container>
      <HeaderButton/>
      <CreditCardDescription/>
      <StoreContents/>
      <FooterContents/>
    </Container>
  )
}

export default Main
