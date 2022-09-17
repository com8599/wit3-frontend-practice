import styled from "styled-components";
const Ad = () => {
  return(
    <AdWrapper>
      신용카드 결제 시 최대 12개월 할부 적용 가능. &nbsp;
      <a href="#">더 알아보기</a>
    </AdWrapper>
  )
}
const AdWrapper = styled.div`
background-color:rgba(255, 255, 255,0.98);
padding:10px 0;
text-align:center;
font-size:12px;
color:rgba(29, 29, 31,0.9);
` 
export default Ad;