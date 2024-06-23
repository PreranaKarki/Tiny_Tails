import styled from "styled-components";
// import { Link as LinkR} from 'react-router-dom';

export const Nav = styled.nav`
  width: 100%;
  padding: 0rem 1.2rem;
  padding-right: 0rem;
  .navbar {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    @media (min-width: 500px) {
      grid-template-columns: 3fr 2fr 3fr;
    }
    @media (min-width: 700px) {
      grid-template-columns: 4fr 3fr 3fr;
    }
    @media (min-width: 900px) {
      grid-template-columns: 4fr 2fr 3fr;
    }
    @media (min-width: 1000px) {
      grid-template-columns: 5fr 1fr 5fr;
    }
    @media (min-width: 1200px) {
      grid-template-columns: 5fr 1fr 5fr;
    }
  }
  .navbar-lists {
    display: flex;
    flex-direction: row;
    gap: 3.4rem;
    align-items: center;
    @media (min-width: 768px) {
      gap: 1.6rem;
    }
    @media (min-width: 900px) {
      gap: 2.3rem;
    }
    @media (min-width: 1000px) {
      gap: 3.4rem;
    }
  }
  .menu_active {
    width: auto;
    height: auto;
    padding-left: 3px;
    background-color: ${({ theme }) => theme.colors.hover};
    position: relative;
    border-radius: 10px;
    align-items: center;
    color: white;
    animation: active 1s ease-in-out infinite alternate;
  }
  @keyframes active {
    from {
      transform: rotate(-8deg);
    }
    to {
      transform: rotate(9deg);
    }
  }
  .nav-secondhalf {
    width: 15rem;
    height: 5rem;
    display: flex;
    justify-content: center;
  }
  .img {
    width: 12rem;
    position: relative;
    bottom: 0.6rem;
  }
  .nav-right {
    position: relative;
    float: right;
    display: flex;
    justify-content: flex-end;
    padding-right: 1rem;
    padding-bottom: 0.8rem;
  }
  .account {
    font-size: 2.4rem;
  }
  /* .cart-link {
        position: relative; */
  .cart {
    outline: none;
    border: none;
    position: relative;
  }
  .basket {
    position: relative;
    font-size: 2.1rem;
    margin-top: 10px;
    padding-top: 2px;
  }
  .cart-total-item {
    position: absolute;
    font-size: 15px;
    padding-left: 4px;
    color: black;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 700;
    display: grid;
    place-items: center;
    left: 100%;
    top: 7px;
  }
  /* } */
  //hamburger
  .hamburger-menu {
    display: none;
  }
  .close-icon {
    display: none;
  }
  //hamburger responsive
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .hamburger-menu {
      display: block;
      z-index: 9999;
      display: flex;
      justify-content: flex-start;
    }
    .mobile-nav-icon {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.black};
      margin-top: 0;
      z-index: 99;
    }
    .active .menu-icon {
      display: none;
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.black};
    }
    .active .close-icon {
      display: inline-block;
      z-index: 9;
    }
    .navbar-lists {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: fixed;
      height: 100vh;
      background-color: ${({ theme }) => theme.colors.bg};
      z-index: 99;
      top: 0;
      left: ${({ menuIcon }) => (menuIcon ? "0" : "-100%")};
      transition: 1000ms;
      visibility: hidden;
      width: 450px;
      max-width: calc(100%-30px);

      @media (min-width: 270px) and (max-width: 400px) {
        width: 270px;
        max-width: calc(100%-40px);
      }
      @media (min-width: 401px) and (max-width: 550px) {
        width: 340px;
        max-width: calc(100%-20px);
      }
    }
    .navbar.active .navbar-lists {
      visibility: visible;
      z-index: 99;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: fixed;
      left: -1%;
    }
    .menu_active {
      height: 3.2rem;
      position: relative;
    }
  }
`;
export default Nav;
