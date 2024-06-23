import styled from "styled-components";

export const Wrapper = styled.section`
  position: fixed;
  right: 0;
  top: 0;
  background-color: white;
  width: 450px;
  min-height: 100vh;
  max-width: calc(100%-20px);
  padding-left: 0;
  transition: 0.3s ease;
  border-bottom-left-radius: 3.125rem;
  border-bottom-right-radius: 3.125rem;
  z-index: 9999;
  transition: transform 0.1s ease-in-out;
  animation-name: slide-in;
  animation-duration: 0.8s;
  animation-timing-function: ease-in-out;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
    overflow-y: scroll;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #d9d9d9; /* Set the color of the scrollbar thumb */
  }

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

  .icon {
    background-color: transparent;
    height: 4rem;
    border: none;
    cursor: pointer;
    padding: 0.75rem 1.875rem 0;
    margin-top: 0.875rem;
    text-align: left;
    color: black;
  }
  .container {
    color: black;
    padding: 0;
  }
  .carttitle {
    font-family: "Ubuntu", sans-serif;
    font-size: 1.8rem;
    display: flex;
    padding-top: 1.3rem;
    padding-left: 2rem;
  }
  span {
    font-family: "Ubuntu", sans-serif;
    font-size: 1.6rem;
    font-weight: 300;
    display: flex;
  }
  .bold {
    font-family: "Ubuntu", sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
  }
  .cart-container {
    display: grid;
    grid-template-columns: 0.5fr 0.2fr 0.3fr;
  }
  .cart-column-three,
  .cart-column-four {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .cart-column-four {
    position: relative;
    left: 3rem;
    bottom: 0.3rem;
  }
  .cart-img {
    width: 65%;
    border-radius: 1.4rem;
  }
  .quantity {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
  }
  .quantity > button {
    padding: 0rem 1rem 0rem 1rem;
    background-color: transparent;
    position: relative;
    bottom: 0.4rem;
  }
  .quantitynum {
    position: relative;
    bottom: 0.2rem;
  }
  button {
    border: none;
    background-color: transparent;
    &:focus {
      border: none;
      outline: none;
    }
  }
  h5 {
    font-family: "Ubuntu", sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
  }
  .delete {
    margin-bottom: 1.5rem;
  }
  .total {
    font-family: "Ubuntu", sans-serif;
    font-size: 1.8rem;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 4.8rem;
    position: relative;
    left: 4rem;
  }
  .btn {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  #cart-btn {
    padding: 0rem 2rem 0rem 2rem;
    background-color: black;
    color: white;
    height: 4rem;
    width: 100%;
    border-radius: 3rem;
    margin-bottom: 1rem;
  }
`;
