import { createGlobalStyle } from "styled-components";
import "modern-normalize"

export const GlobalStyle = createGlobalStyle`

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
  
  }
  body {
    margin: 0;
    padding: 0;
    background-color: #CCCCCC;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: calc(18 / 14);
    letter-spacing: -0.02em;
    padding: 0;
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

  section {
    width: 100%;
    margin: 0 auto;
    bargin-bottom: 20px;
  }
  
`