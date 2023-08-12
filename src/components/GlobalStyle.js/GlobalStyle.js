import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

* {
    vertical-align: baseline;
    font-weight: inherit;
    font-family: inherit;
    font-style: inherit;
    font-size: 100%;
    border: 0 none;
    outline: 0;
    padding: 0;
    margin: 0;
  }

  :root {
    --color-black: #111111;
    --color-violet: #1e1823;
    --color-orange: #fd9222;
    --color-white: #fafafa;
    --color-white-secondary: #fff;
  }

    body {
    margin: 0;
    padding: 0;
    background-color: var(--color-white);
  color: var(--color-black);
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: calc(18 / 14);
  letter-spacing: -0.02em;
  padding: 0;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  ul{
    list-style: none;
  }

  button {
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: calc(17 / 14);
  }
  
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  
  h1, h2, h3, h4, h5, h6{
    margin: 0;
    padding: 0;
  }
`