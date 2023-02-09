import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #121214;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  input[type='number'] {
    -moz-appearance:textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  button{
    border: 1px solid white;
  }

  button:hover{
    background-color: white;
    border: 2px solid black;
    color: black;
    font-style: italic;
}
`
export default GlobalStyle