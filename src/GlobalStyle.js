import {createGlobalStyle} from 'styled-components';

export const GlobalStyle=createGlobalStyle`
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  text-decoration: none !important;
  text-transform: capitalize;
  transition: 0.2s linear;
}

html {
  font-size: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scroll-padding-top: 8.5rem;
}
html::-webkit-scrollbar {
  width: .2rem;
}
html::-webkit-scrollbar-track {
  background-color: #fff;
}
html::-webkit-scrollbar-thumb {
  background: purple;
  border-radius: 5rem;
}

img {
  width: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}

button{
    background-color:${({theme})=>theme.colors.text2}!important;
}


`

