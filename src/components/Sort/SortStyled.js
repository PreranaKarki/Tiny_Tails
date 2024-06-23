import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 3rem 20rem;
  position: relative;
  z-index: 40;
  top: 0px; /* Adjust the top value to set the desired sticky position */
  .sort-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 1rem;
    align-items: center;
  }
  .button-container,
  .search {
    height: 1rem;
    border-radius: 15px;
    padding: 1.4rem;
    font-family: "Caveat", cursive;
    font-size: 2rem;
    background: transparent;
    color: black;
    font-weight: 500;
    border: 2px solid ${({ theme }) => theme.colors.hover};
    outline: none;
  }
  h5 {
    font-family: "Caveat", cursive;
    font-size: 2rem;
    font-weight: 500;
  }
  button {
    border: none;
    background: transparent;
    &:focus {
      border: none;
      outline: none;
    }
  }
  .button-container {
    padding-top: 0;
    margin-top: 0;
    padding-bottom: 2.9rem;
  }
  .sort-options {
    height: 3.2rem;
    border-radius: 15px;
    background-color: transparent;
    color: black;
    border: 2px solid ${({ theme }) => theme.colors.hover};
    padding: 4px;
    font-size: 1.6rem;
    font-family: "Caveat", cursive;
  }
  option {
    font-size: 1.2rem;
    color: black;
  }
  @media (min-width: 300px) and (max-width: 500px) {
    .sort-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .button-container,
    .search {
      width: 8rem;
    }
    .button-container {
      padding-top: 0;
      margin-top: 0;
      padding-bottom: 2.9rem;
    }
    .sort-options {
      width: 8rem;
    }
  }
  @media (min-width: 270px) and (max-width: 290px) {
    .sort-container {
      display: flex;
      gap: 0rem;
      justify-content: flex-start;
    }
    h5 {
      text-align: center;
    }
    .button-container,
    .search {
      width: 7rem;
      font-size: 1.5rem;
      text-align: center;
      padding-left: 1px;
    }
    .sort-options {
      width: 7rem;
      text-align: left;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 3rem 1rem;
    .sort-container {
      flex-direction: row;
      gap: 2rem;
    }
  }
`;
