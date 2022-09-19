import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: 'Noto Sans KR', sans-serif,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue;
  }

  #__next{
    width: 100%;
    height: 100%;
    overflow:auto;
    background-color:#f5f5f5;
  }
  

  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  p {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  button {
    cursor: pointer;
    border: none;
    font-family: 'Noto Sans KR',
  }

  ul {
  list-style: none;
  padding: 0;
  margin: 0;
  }

`;
