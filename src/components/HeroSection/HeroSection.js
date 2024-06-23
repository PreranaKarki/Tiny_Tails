import React, { useEffect, useState } from "react";
import { Wrapper } from "./HeroSectionStyled.js";
import { NavLink } from "react-router-dom";
import { Button } from "../Button.js";
import { HeroData } from "./HeroData.js";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";

const HeroSection = ({ slides }) => {
  // const {name}= heroh1;
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1); // If current is equal to the last index, reset it to 0 else increment it by 1
    }, 10000);
    return () => clearInterval(interval);
  }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    // Checking if slides is not an array or if its length is less than or equal to 0
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="arrow">
          <ChevronLeftOutlinedIcon
            className="left-arrow"
            fontSize="large"
            onClick={prevSlide}
          />
          <ChevronRightSharpIcon
            className="right-arrow"
            fontSize="large"
            onClick={nextSlide}
          />
        </div>
        {HeroData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <>
                  <div className="hero-container">
                    <img src={slide.image} alt="firstimage" className="image" />
                    <div className="hero-content-container">
                      <p className="desc">{slide.para}</p>
                      <NavLink to="/shop">
                        <Button className="hero-btn">Shop Now</Button>
                      </NavLink>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default HeroSection;
