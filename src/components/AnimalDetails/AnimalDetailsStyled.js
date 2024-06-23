import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0rem 3.2rem;
  @media (min-width: 270px) and (max-width: 300px) {
    padding: 0rem 2rem;
    grid-template-columns: 10rem 1fr;
  }
  @media (min-width: 301px) and (max-width: 400px) {
    grid-template-columns: 12rem 1fr;
  }
  @media (min-width: 401px) and (max-width: 450px) {
    grid-template-columns: 15rem 1fr;
  }
  @media (min-width: 451px) and (max-width: 550px) {
    grid-template-columns: 20rem 1fr;
  }
  @media (min-width: 750px) {
    padding: 0rem 5.2rem;
  }
  .animal-details-container {
    margin-top: 9rem;
  }
  .animal-title {
    font-family: "Fjalla One", sans-serif;
    font-size: 2rem;
  }
  .animal-desc,
  .price {
    font-family: "Montserrat", sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    padding-top: 0.4rem;
    @media (max-width: 700px) {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
  .animal-desc {
    max-width: 37rem;
    text-align: justify;
    @media (max-width: 300px) {
      max-width: 27rem;
    }
  }
  .price {
    font-size: 1.5rem;
    padding-top: 1.3rem;
  }
  .btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 0;
    @media (min-width: 270px) and (max-width: 450px) {
      position: absolute;
      width: 25rem;
    }
    @media (min-width: 860px) {
      width: 37rem;
    }
  }
  #buy-btn,
  #cart-btn {
    padding: 0rem 2rem 0rem 2rem;
    color: black;
    height: 4rem;
    width: 100%;
    margin-bottom: 1rem;
    font-size: 2rem;
    @media (max-width: 300px) {
      max-width: 27rem;
    }
  }
  #buy-btn {
    background-color: black;
    color: white;
    font-size: 2.2rem;
  }
  #single_img {
    margin-top: 9rem;
    margin-left: 3rem;
    width: 35rem;
    height: 45rem;
    @media (max-width: 300px) {
      width: 16rem;
      height: 29rem;
      margin-right: 4rem;
      margin-left: -0.5rem;
      padding: 1.7rem;
      margin-top: 10.2rem;
    }
    @media (min-width: 301px) and (max-width: 500px) {
      width: 18rem;
      height: 27rem;
      margin-right: 3rem;
    }
    @media (min-width: 501px) and (max-width: 600px) {
      width: 25rem;
      height: 33rem;
      padding-right: 2.7rem;
    }
    @media (min-width: 601px) and (max-width: 800px) {
      width: 28rem;
      height: 33rem;
      padding-right: 1rem;
    }
  }
`;
