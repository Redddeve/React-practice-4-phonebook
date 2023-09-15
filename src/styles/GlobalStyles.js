import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body{
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #e7ecf2;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul,
ol,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  list-style: none;
  padding: 0;
  margin: 0;
}

div {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: flex-start;
  font-size: 20px;
  color: #010101;
}
`;
