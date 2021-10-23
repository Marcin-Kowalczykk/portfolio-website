import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Best Choice Demo Regular';
}

html {
  overflow-y: scroll;
	scroll-behavior: smooth;
}

body {
    margin: 0;
    padding: 0;
    color: #1b1a1aba;
    background: #8e9eab;
    background: -webkit-linear-gradient(to right, #eef2f3, #8e9eab);
    background: linear-gradient(to right, #eef2f3, #8e9eab);
  }
`;

export default GlobalStyle;
