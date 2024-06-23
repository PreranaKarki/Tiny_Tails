import styled from "styled-components";

export const Wrapper = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  background-color: white;
  height: 100vh;
  padding-left: 0;
  width: 30vh;
  transition: 0.3s ease;
  border-bottom-right-radius: 3.125rem;
  border-bottom-right-radius: 3.125rem;
  z-index: 9999;
  transition: transform 0.1s ease-in-out;
  animation-name: slide-in;
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;

  @keyframes slide-in {
    0% {
      left: -100%;
    }
    100% {
      left: 0%;
    }
  }
  @media (min-width: 1000px) and (max-width: 1600px) {
    width: 35vh;
  }
  .icon {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    justify-content: flex-start;
  }
  .category-container a {
    margin-bottom: 1rem;
  }
  .category-content,
  .container-price {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 5rem;
  }
  .category-heading,
  .price-heading {
    font-family: "Ubuntu", sans-serif;
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }
  .category-heading-container {
    display: flex;
    margin-top: 0;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }
  .price-subheading {
    display: flex;
    gap: 1rem;
  }
  span,
  .price-subheading {
    font-family: "Titillium Web", sans-serif;
    font-size: 1.8rem;
    margin-top: 0;
  }
  .price-heading {
    padding-top: 2rem;
    @media (min-width: 400px) and (max-width: 700px) {
      padding-top: 0;
    }
  }
  .filter-button {
    padding: 0rem 2rem 0rem 2rem;
    background-color: black;
    color: white;
    height: 4rem;
    width: 100%;
    border-radius: 3rem;
    margin-bottom: 1rem;
    text-transform: none;
    font-family: "Titillium Web", sans-serif;
    font-size: 1.8rem;
  }
`;
