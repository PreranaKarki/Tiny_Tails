import styled from "styled-components";

export const Wrapper = styled.section`
  padding-top: 5.3rem;
  padding-bottom: 8rem;
  background-color: #cdcaae;

  h1 {
    text-align: center;
    font-size: 3rem;
  }
  .grid {
    gap: 4.8rem;
  }
  .services-1,
  .services-2,
  .services-3,
  .services-4 {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s ease; /* define the transition property */
    &:hover {
      background-color: #4a6741;
      color: white;                       
    }
  }
  .grid-four-column > div {
    background-color: #ebebeb;
    width: 22rem;
    padding: 20px;
    border-radius: 40px;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 6rem;
  }
  .content {
    gap: 1rem;
  }
  h3 {
    font-size: 1.5rem;
    font-family: "Kanit", sans-serif;
    &:hover {
      color: white;
    }
  }

  .icon {
    width: 8rem;
    height: 8rem;
    padding: 0.7rem;
    border-radius: 20%;
    background-color: transparent;
  }
  @media (max-width: 700px) {
    h1 {
      text-align: center;
      font-size: 2.5rem;
    }
    .container {
      width: 100vw;
    }
    .grid-four-column {
      display: grid;
      width: 100vw;
      gap: 2rem;
    }
    .grid-four-column > div {
      display: grid;
      width: 75vw;
      height: 20rem;
      gap: 2rem;
    }
    div {
      display: flex !important;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0rem;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .icon {
      width: 15rem;
      height: 15rem;
      padding: 23px;
    }
  }
  @media (min-width: 701px) and (max-width: 1000px) {
    .container {
      display: flex;
      justify-content: center; /* center the grid horizontally */
    }
    .grid-four-column > div {
      background-color: #ebebeb;
      width: 22rem;
      padding: 20px;
      border-radius: 40px;
    }
    div {
      gap: 2rem;
    }
    /* Styling for the icon and text inside each grid item */
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .icon {
      width: 15rem;
      height: 15rem;
    }
  }
`;
