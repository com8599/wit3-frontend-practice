import styled from "styled-components";
import { TbMenu } from "react-icons/tb";
import { AiFillApple } from "react-icons/ai";
import { BsBag } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <MobileUl>
        <MobileBar><TbMenu/></MobileBar>
        <Apple><AiFillApple fontSize="1.4em"/></Apple>
        <Cart><BsBag/></Cart>
      </MobileUl>
      <WebUl>
        <MobileBar><TbMenu/></MobileBar>
          <Apple><AiFillApple fontSize="1.4em"/></Apple>
          <li> 스토어 </li>
          <li> Mac </li>
          <li> iPad </li>
          <li> iPhone </li> 
          <li> Watch </li> 
          <li> AirPods </li> 
          <li> TV 및 홈 </li>
          <li> Apple 독점 제공 </li>
          <li> 액세서리 </li>
          <li> 고객지원 </li>       
          <Cart><BsBag/></Cart>
      </WebUl>
    </header>
  )
}
export default Header;

const MobileUl = styled.ul`
margin:0;
padding:0;
align-items:center;
background-color:rgba(29, 29, 31,0.9);
height:48px;
display:flex;
list-style:none;
color:rgba(245,245,247,0.8);
justify-content: space-between;
@media screen and (min-width : 768px){
  display:none;
}
`

const MobileBar = styled.li`
padding-left:15px;
@media screen and (min-width : 768px){
  display:none;
}
`
const Apple = styled.li`

`
const Cart = styled.li`
padding-right:15px;
`
const WebUl = styled.ul`
@media screen and (max-width : 767px){
  display:none;
}
margin:0;
padding:0;
align-items:center;
background-color:rgba(29, 29, 31,0.9);
height:48px;
display:flex;
list-style:none;
color:rgba(245,245,247,0.8);
justify-content: space-evenly;
font-size:13px;
`