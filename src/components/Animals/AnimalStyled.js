import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5rem;
  position: relative;
  z-index: 9;
  .card {
    width: 25rem;
  }
  .card-img-top {
    max-height: 27rem;
    border-radius: 4rem;
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
    &:focus {
      border: none;
      outline: none;
    }
  }
  @media (min-width: 278px) and (max-width: 281px) {
    padding: 1.3rem;
    gap: 3rem;
    display: flex;
    justify-content: center;
    .card {
      width: 10rem;
      padding-left: 0.5rem;
    }
    .card-img-top {
      max-height: 10rem;
      max-width: 12rem;
      border-radius: 2rem;
    }
    .card-title {
      font-size: 1.3rem;
      font-weight: 700;
    }
  }
  @media (min-width: 282px) and (max-width: 377px) {
    padding: 0.2rem;
    gap: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .card {
      width: 12rem;
    }
    .card-img-top {
      max-height: 13rem;
      max-width: 13rem;
      border-radius: 2rem;
    }
    .card-title {
      font-size: 1.3rem;
      font-weight: 700;
    }
  }
  @media (min-width: 378px) and (max-width: 470px) {
    gap: 3rem;
    display: flex;
    justify-content: center;
    .card {
      width: 15rem;
      padding-left: 0.5rem;
    }
    .card-img-top {
      max-height: 15rem;
      max-width: 17rem;
      border-radius: 2rem;
    }
  }
  @media (min-width: 471px) and (max-width: 699px) {
    display: flex;
    padding: 0rem 2rem 0rem 2rem;
    gap: 1rem;
    .card {
      width: 13rem;
      padding-left: 0.5rem;
    }
    .card-img-top {
      max-height: 13rem;
      max-width: 15rem;
      border-radius: 2rem;
    }
  }
  @media (min-width: 700px) and (max-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 4rem;
    .card {
      width: 18rem;
      padding-left: 0.5rem;
    }
    .card-img-top {
      max-height: 22rem;
      max-width: 25rem;
      border-radius: 2rem;
    }
  }
  @media (min-width: 769px) and (max-width: 899px) {
    display: flex;
    justify-content: center;
    gap: 4rem;
    .card {
      width: 18rem;
      padding-left: 0.5rem;
    }
    .card-img-top {
      max-height: 22rem;
      max-width: 25rem;
      border-radius: 2rem;
    }
  }
  @media (min-width: 900px) and (max-width: 940px) {
    display: flex;
    justify-content: center;
    gap: 4rem;
    .card {
      width: 20rem;
      padding-left: 0.5rem;
    }
    .card-img-top {
      max-height: 22rem;
      max-width: 26rem;
      border-radius: 2rem;
    }
  }
  @media (min-width: 941px) and (max-width: 1140px) {
    display: flex;
    justify-content: center;
    gap: 4rem;
    .card {
      width: 25rem;
      padding-left: 0.5rem;
    }
    .card-img-top {
      max-height: 25rem;
      max-width: 26rem;
    }
  }
  @media (min-width: 1141px) and (max-width: 1400px) {
    display: flex;
    justify-content: center;
    gap: 7rem;
    .card {
      width: 33rem;
      padding-left: 0.5rem;
    }
    .card-img-top {
      max-height: 35rem;
      max-width: 36rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media (min-width: 1401px) and (max-width: 1600px) {
    display: flex;
    justify-content: center;
    gap: 7rem;
    .card {
      width: 35rem;
      padding-left: 0.5rem;
    }
    .card-img-top {
      max-height: 35rem;
      max-width: 33rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
