import React from "react";
import { Button } from "../Button";
import { Wrapper } from "./ErrorStyled";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div>
            <h2>404 ERROR</h2>
            <h3>OH NO! YOU ARE LOST</h3>
            <p>
              The page you are looking for does not exist. How you got here is a
              mystery. Click the button to go back to home page{" "}
            </p>
            <NavLink to="/">
              <Button>Home Page</Button>
            </NavLink>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Error;
