import { createGlobalStyle } from 'styled-components'
import bgImg from '../images/bg.jpeg'

export const GlobalStyle = createGlobalStyle `
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'New Tegomin', serif;
  }

  body {
    background: url(${bgImg}) center no-repeat;
    background-size: cover;
    color: #332c36;
  }
  
`