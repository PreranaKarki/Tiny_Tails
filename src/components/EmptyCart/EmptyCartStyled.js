import styled from "styled-components";

export const Wrapper = styled.section`
  display: inline-block;
  background-color: white;
  min-height: 100vh;
  width: 450px;
  max-width: calc(100%-40px);
  border-width: 0 0 1px;
  border-style: solid;
  color: black;
  overflow: hidden;
  transition: 0.3s ease;
  border-bottom-left-radius: 3.125rem;
  border-bottom-right-radius: 3.125rem;
  z-index: 9999;
  transition: transform 0.1s ease-in-out;
  animation-name: slide-in;
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  @media (min-width: 270px) and (max-width: 400px) {
    width: 270px;
    max-width: calc(100%-40px);
  }
  @media (min-width: 401px) and (max-width: 550px) {
    width: 340px;
    max-width: calc(100%-40px);
  }

  @keyframes slide-in {
    0% {
      right: -100%;
    }
    100% {
      right: 0%;
    }
  }
  .header {
    font-family: "Ubuntu", sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    margin-top: 2rem;
  }
  .sub-header {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .continueButton {
    padding: 0.2rem 2rem 0rem 2rem;
    background-color: black;
    color: white;
    height: 4rem;
    width: 200px;
    max-width: calc(100%-40px);
    font-size: 1.4rem;
    border-radius: 3rem;
  }
`;
