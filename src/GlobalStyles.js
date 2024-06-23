import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin-top: 5px;
  margin-left: 0;
  margin-right: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
}
html {
  font-size: 62.5%;
  overflow-x: hidden;
}
a {
  text-decoration: none;
}
body{
  overflow: hidden;
}

li {
  list-style: none;
}

body::-webkit-scrollbar {
  width: 1.5rem;
}

body::-webkit-scrollbar-track {
  background-color: #fff;
}

body::-webkit-scrollbar-thumb {
  ${"" /* background: ${({theme}) => theme.colors.hover}; */}
  background-color: black;
  border: 4px solid transparent;
  border-radius: 9px;
  background-clip: content-box;
}
h1,
h2{
  font-family: "Work Sans", sans-serif;
}

h1 {
  font-size: 5.3rem;
  font-weight: 900;
}

h2 {
  font-size: 4.4rem;
  font-weight: 300;
  white-space: normal;

}

p{
  font-size: 1rem;
  font-weight: 400;
}
a{
  &:link,
  &:visited {
    display:inline-block;
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.black};
    transition: color 0.3s linear;
  }
}

@media (max-width: ${({ theme }) => theme.media.mobile}){
  a{
    font-size: 2.2rem !important;
  } 
}

${"" /* resuable code section  */}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 9rem;
}
.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}
.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}
.grid-four-column{
  grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}
.grid-five-column{
  grid-template-columns: repeat(5, 1fr);
}

`;
