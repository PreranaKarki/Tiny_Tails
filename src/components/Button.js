import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  max-width: 15rem;
  background-color: ${({ theme }) => theme.colors.hover};
  color: rgb(255 255 255);
  padding: 1.4rem 2.4rem;
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  border-radius: 1.3rem;

  &:hover,
  &:focus,
  &:active {
    /* box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.boxShadow}; */
    transform: scale(0.8);
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1.8rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 1.2rem 1.6rem;
    font-size: 1.4rem;
  }
`;
