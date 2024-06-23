import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Wrapper } from "./EmptyCartStyled";

const EmptyCart = () => {
  return (
    <Wrapper>
      <div className="header">your cart is empty!</div>
      <div className="sub-header">add your fav pets to the cart</div>
      <div className="button">
        <NavLink to="/shop">
          <button className="continueButton">
            {" "}
            Continue Shopping
          </button>
        </NavLink>
      </div>
    </Wrapper>
  );
};

export default EmptyCart;
