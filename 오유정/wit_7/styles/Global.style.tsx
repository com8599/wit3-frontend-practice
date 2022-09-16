import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
body{
  margin:0;
  width:100%;
  height:100%;
  // display:flex;
  // flex-direction: column;
}
main{
  // flex: 1;
  background-color:blue;
}
@media screen and (max-width: 767px) {
	body {
		background-color: pink;
	}
}
`
export default GlobalStyle;