import styled from "styled-components";

export const ShopHeroContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.875rem;
  height: 45.875rem;
  z-index: 1;
  box-sizing: border-box;

  @media (max-width: 22.4rem) {
    //mobile device
    position: absolute;
    top: 6%;
    height: 25rem;
    width: 100%;
    margin-top: 1.125rem;
    padding: 0 0.15rem;
  }
  @media (max-width: 40rem) {
    //mobile device
    margin-top: -1.563rem;
    padding: 0 0.29rem;
  }
  @media (max-width: 54.375rem) {
    margin-bottom: 0px;
    padding-bottom: 0px;
  }
  @media (max-width: 64rem) {
    height: 38rem;
  }
  @media (max-width: 17.5rem) {
    //mobile device
    margin-top: 0;
    padding: 0 0.1rem;
  }
`;
export const ShopHeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  @media (max-width: 64rem) {
    height: 40rem;
  }
`;
export const ShopVideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  overflow: hidden;
  border-bottom-left-radius: 3.125rem;
  border-bottom-right-radius: 3.125rem;

  @media (max-width: 45rem) {
    height: 40%;
    width: 100%;
  }
  @media (max-width: 54.375rem) {
    height: 70%;
    width: 100%;
  }
  @media (max-width: 17.5rem) {
    height: 60%;
    width: 100%;
    margin-top: 1.25rem;
  }
`;
export const ShopHeroContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  display: flex;
  text-align: left;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 54.375rem) {
    //mobile device
    top: -12%;
  }
  @media (max-width: 45rem) {
    //mobile device
    display: block;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    position: absolute;
    top: 5rem;
    height: 13rem;
  }
  @media (min-width: 270px) and (max-width: 299px) {
    top: 4rem;
    right: 1rem;
  }
`;
export const ShopHeroContentInner = styled.div`
  margin: 1.25rem 7.348rem;
  color: black;

  @media (max-width: 54.375rem) {
    //mobile device
    margin-top: 0.625rem;
    width: 40rem;
  }
  @media (max-width: 64rem) {
    margin: 1.25rem 7.188rem;
  }
  @media (max-width: 45rem) {
    //mobile device
    color: black;
    margin: 2px 30px 0;
  }
`;
export const ShopHeroHeading = styled.h1`
  font-weight: 200;
  margin: 0 0 0.635rem;
  font-family: "Ubuntu", sans-serif;
  font-size: 5rem;
  font-weight: 600;
  color: black;

  @media (max-width: 55rem) {
    font-size: 3.3rem;
    margin-bottom: 0.375rem;
  }
  @media (max-width: 64rem) {
    font-size: 3rem;
  }
  @media (max-width: 43rem) {
    //mobile device
    display: none;
  }
`;
export const ShopHeroSubHeading = styled.h2`
  font-family: "Mochiy Pop One", sans-serif;
  font-weight: 400;
  font-size: 2.4rem;
  margin: 0.125rem 0;
  color: black;
  line-height: 1.5;

  @media (max-width: 55rem) {
    font-size: 1.426em;
    line-height: 1.9;
  }
  @media (max-width: 64rem) {
    font-size: 1.5rem;
  }
  @media (max-width: 43rem) {
    //mobile device
    display: none;
  }
`;
export const ShopHeroText = styled.p`
  font-weight: 300;
  margin-bottom: 1.3rem;
  font-size: 1.7rem;
  margin-top: 1rem;

  @media screen and (max-width: 54.375rem) {
    margin-top: 0.438rem;
    margin-bottom: 1.563rem;
  }
  @media (max-width: 43rem) {
    //mobile device
    display: none;
  }
`;
export const ShopHeroMobileTitle = styled.div`
  @media screen and (min-width: 43rem) {
    display: none;
  }
  @media screen and (max-width: 43.875rem) {
    font-size: 2.5rem;
    display: block;
    margin-top: 5rem;
    font-weight: 700;
  }
  @media screen and (max-width: 17.5rem) {
    font-size: 2rem;
    display: block;
    margin-bottom: 10px;
  }
  @media (min-width: 270px) and (max-width: 299px) {
    font-size: 2rem;
  }
`;
export const ShopHeroMobileText = styled.div`
  @media screen and (min-width: 43rem) {
    display: none;
  }
  @media screen and (max-width: 43.875rem) {
    font-family: "Dosis", sans-serif;
    display: block;
    padding-bottom: 10px;
    font-weight: 700;
  }
  @media screen and (max-width: 17.5rem) {
    font-size: 0.758em;
    text-align: left;
  }
`;
export const P = styled.p`
  @media screen and (max-width: 43.875rem) {
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.7;
    position: relative;
    bottom: 1rem;
  }
  @media (min-width: 270px) and (max-width: 299px) {
    font-size: 1.3rem;
  }
`;
