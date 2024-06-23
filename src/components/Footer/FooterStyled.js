import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 0;
  .footer-contact {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
    transform: translateY(20%);
    position: relative;
    z-index: 28;
  }
  .footer-logo {
    width: 13rem;
  }
  h3 {
    font-family: "Caveat", cursive;
    font-size: 3rem;
    font-weight: 500;
  }
  #button > a {
    color: white;
  }

  //responsive tophalf
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .footer-contact {
      max-width: 37vh;
      transform: translateY(23%);
      padding: 5rem 0.4rem;
      height: 18rem;
    }
    .grid {
      gap: 0.8rem;
    }
    h3 {
      font-size: 2rem;
      line-height: 1.2;
    }
    #button {
      width: 8rem;
      margin-top: 1rem;
      position: relative;
      left: 3.3rem;
    }
    #button > a {
      font-size: 1.3rem !important;
      font-weight: 700;
      position: relative;
      right: 7px;
      bottom: 2px;
      text-align: center;
      width: 6rem;
      margin-top: 0;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 770px) and (min-height: 1024px) and (max-height: 1024px) {
    .footer-contact {
      max-width: 50vh;
      padding: 5rem 2rem;
    }
    h3 {
      font-size: 2.3rem;
    }
    #button {
      width: 13rem;
      position: relative;
      left: 5rem;
    }
    #button > a {
      width: 11rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.media.mobileover}) and (max-width: ${({ theme }) =>theme.media.tab}) {
    .footer-contact {
      max-width: 70vw;
      padding: 5rem 10rem;
      transform: translateY(23%);
      padding: 5rem 4rem;
    }
    .footer-contact > .grid {
      gap: 5rem;
    }
    h3 {
      font-size: 3.5rem;
    }
    #button {
      width: 15rem;
      margin-top: 2rem;
      position: relative;
      left: 3rem;
    }
    #button > a {
      font-size: 1.5rem;
      position: relative;
      right: 1.7rem;
      width: 14rem;
      margin-top: 0;
      color: ${({ theme }) => theme.colors.bg};
    }
  }
  /* @media (min-width: 1028px) and (max-width: 1032px) { */

  @media only screen and (min-width: 1000px) {
    .footer-contact > .grid {
      gap: 1rem;
    }
    h3 {
      font-family: "Caveat", cursive;
      font-size: 3rem;
      font-weight: 500;
    }
    #button {
      width: 17rem;
      position: relative;
      left: 8rem;
      top: 0.7rem;
    }
    #button > a {
      position: relative;
      right: 1rem;
      width: 14rem;
      margin-top: 0;
      bottom: 2px;
      color: ${({ theme }) => theme.colors.bg};
    }
  }

  //actual footer
  .footer {
    padding: 0rem 1rem;
    margin: 10px 40px 40px;
    z-index: 27;
  }
  .footer-container {
    position: relative;
    // max-width: 1440px;
    width: 100%;
    box-sizing: border-box;
    padding: 3rem 1.6rem;
    color: white;
    background-color: black;
    border-radius: 40px;
  }
  .footer-sections {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    @media (min-width: 700px) {
      margin-top: 1.3rem;
    }
  }
  .footer-links-header {
    font-size: 2.6rem;
  }
  .footer-links {
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
    align-items: center;
    font-family: "Kanit", sans-serif;
    font-size: 1.4rem !important;
    &:hover {
      color: ${({ theme }) => theme.colors.hover};
    }
  }
  .copyright {
    font-size: 1.4rem;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer-btn {
    display: none;
  }
  @media (max-width: 700px) {
    .footer {
      width: 90vw;
    }
    .mobile {
      display: flex;
      flex-wrap: row wrap;
      justify-content: space-between;
    }
    .footer-sections {
      display: flex;
      flex-direction: column;
    }
    .footer-btn {
      display: inline-block;
    }
    .footer-links {
      display: none;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .active .footer-links {
      display: flex;
    }
  }
  @media (max-width: 750px) and (min-width: 1500px) {
    .footer {
      max-width: 90vw;
    }
    .footer-container{
      margin: auto;
    }
`;
