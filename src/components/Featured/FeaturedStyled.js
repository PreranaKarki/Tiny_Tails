import styled from "styled-components";

export const Wrapper = styled.section`
  gap: 4rem;
  position: relative;
  padding-bottom: 10px;

  .featured_container_header {
    position: relative;
    max-width: 1440px;
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: 2rem;
    @media (min-width: 768px) {
      .featured_container_header {
        padding: 0 40px;
      }
    }
  }
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .featured_header_title {
    font-family: "Righteous", sans-serif;
    font-size: 4rem;
    font-weight: 700;
    font-stretch: normal;
    line-height: 1.1;
  }
  .featured_header_text {
    font-family: "Ubuntu", sans-serif;
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 1.56;
  }
  .card-img-top {
    max-height: 38rem;
    border-radius: 3rem;
    padding: 1rem;
  }
  .card-title {
    font-family: "Ubuntu", sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
  }
  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover {
      color: #4a6741;
    }
  }
  .card-text {
    font-size: 1.6rem;
    font-weight: 300;
    font-family: "Caveat", cursive;
  }
  .card-btn {
    text-decoration: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4rem;
    &:focus {
      border: none;
      outline: none;
    }
  }
`;
