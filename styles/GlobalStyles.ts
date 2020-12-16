import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
  background-color: white;
  margin: 0;
  padding: 0;
  font-family: 'NanumSquareRound', source-code-pro, Menlo, Monaco, Consolas,
    'Courier New', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -ms-user-select: none; 
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}

* {
  box-sizing: inherit;
}

input, button, textarea {
  font-family: 'NanumSquareRound', source-code-pro, Menlo, Monaco, Consolas,
    'Courier New', monospace;
}

html, body, #root {
  height: 100%;
  font-size: 100%;
  font-family: 'NanumSquareRound', source-code-pro, Menlo, Monaco, Consolas,
    'Courier New', monospace;
  font-style: normal;
  font-weight: normal;
}
a {
  text-decoration: none;
}
`;

export default GlobalStyles;
