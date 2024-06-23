import React from "react";
import { Wrapper } from "../HeroSection/HeroSectionStyled";

const CategoriesHero = ({ myData }) => {
  const heroStyles = {
    position: "relative",
    zIndex: "9",
  };
  const heroColor = {
    color: "black",
    width: "25rem",
    fontSize: "4rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  return (
    <>
      <Wrapper>
        <div className="container" style={heroStyles}>
          <div className="hero-container">
            <img src={myData.image} alt="firstimage" className="image" />
            <div className="hero-content-container">
              <p className="desc" style={heroColor}>
                {myData.para}
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default CategoriesHero;
