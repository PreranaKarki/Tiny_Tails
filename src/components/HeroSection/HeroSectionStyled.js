import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100vw;
  .container {
    width: 100%;
    margin: 0rem;
    padding: 0rem;
    height: 100%;
    @media (min-width: 1200px) {
      max-width: 99vw;
    }
  }
  .arrow {
    display: flex;
    justify-content: space-between;
    padding: 0rem 1rem;
    position: relative;
    top: 28rem;
    align-items: center;
    @media (max-width: 300px) {
      top: 17rem;
      padding: 0rem;
    }
    @media (min-width: 300px) {
      top: 22rem;
    }
    @media (min-width: 700px) {
      top: 24rem;
    }
    @media (min-width: 800px) {
      top: 26rem;
    }
    @media (min-width: 1000px) {
      top: 27rem;
    }
    @media (min-width: 1200px) {
      top: 30rem;
    }
  }
  .right-arrow,
  .left-arrow {
    color: ${({ theme }) => theme.colors.bg};
    cursor: pointer;
    z-index: 10;
    font-size: 3rem;
    background-color: ${({ theme }) => theme.colors.hover};
    border-radius: 50%;
  }
  .right-arrow {
    margin-right: 1.2rem;
    @media (max-width: 300px) {
      margin-right: 0rem;
      margin-left: 2rem;
    }
    @media (max-width: 400px) {
      margin-right: 0.4rem;
    }
    @media (max-width: 500px) {
      margin-right: 1rem;
    }
    @media (min-width: 1200px) {
      margin-right: 0rem;
    }
  }
  .left-arrow {
    @media (max-width: 300px) {
      margin-left: 0.4rem;
    }
  }
  .hero-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .image {
    background-size: cover;
    object-fit: cover;
    width: 100vw;
    height: 100%;
    z-index: 99;
    border-bottom-left-radius: 3.125rem;
    border-bottom-right-radius: 3.125rem;
    overflow-x: auto;
    overflow-y: auto;
    @media (max-width: 300px) {
      height: 30rem;
    }
    @media (min-width: 300px) {
      height: 40rem;
      width: 100vw;
    }
    @media (min-width: 700px) {
      height: 42rem;
    }
    @media (min-width: 800px) {
      height: 49rem;
    }
    @media (min-width: 1000px) {
      height: 50rem;
    }
    @media (min-width: 1200px) {
      height: 58rem;
    }
    @media (min-width: 1500px) {
      height: 64rem;
    }
  }
  .hero-content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999;
    color: white;
    position: absolute;
    top: 18rem;
    @media (min-width: 260px) and (max-width: 300px){
      top: 13.5rem;
    }
    @media (min-width: 700px) {
      top: 19.7rem;
    }
    @media (min-width: 800px) {
      top: 21.7rem;
    }
    @media (min-width: 1000px) {
      top: 22.7rem;
    }
    @media (min-width: 1200px) {
      top: 25.7rem;
    }
    @media (min-width: 1500px) {
    }
  }
  .desc {
    font-family: "Caveat", cursive;
    font-size: 2rem;
    font-weight: 700;
    text-align: justify;
    text-justify: inter-word;
    line-height: 1.2;
    word-spacing: 0.8;
    @media (max-width: 300px) {
      margin: 0rem 0.7rem;
      max-width: 65%;
    }
    @media (min-width: 301px) {
      margin: 0rem 0.5rem;
      max-width: 73%;
    }
    @media (min-width: 400px) {
      font-size: 2.6rem;
      margin: 0rem 0.5rem;
      max-width: 78%;
      line-height: 1;
      word-spacing: 0.8;
    }
    @media (min-width: 501px) {
      max-width: 80%;
    }
    @media (min-width: 550px) {
      max-width: 90%;
    }
    @media (min-width: 570px) {
      max-width: 98%;
      font-size: 3rem;
    }
    @media (min-width: 700px) {
      max-width: 100%;
      font-size: 3.3rem;
    }
    @media (min-width: 800px) {
      font-size: 3.2rem;
    }
    @media (min-width: 900px) {
      font-size: 3.5rem;
    }
    @media (min-width: 1000px) {
      left: 3.7rem;
    }
  }
  .hero-btn {
    @media (min-width: 900px) {
      left: 3rem;
    }
  }
  .slide {
    transition: transform 0.5s ease-out;
  }
  .slide.active {
    z-index: 1;
    animation-name: slideIn;
    animation-duration: 0.8s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 3;
  }

  @keyframes slideIn {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
