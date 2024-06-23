import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Wrapper } from "./CartStyled";
import { NavLink } from "react-router-dom";
import {
  add,
  decreaseQuantity,
  remove,
  clearCart,
  getTotals,
} from "../../Store/Slices/CartSlice";
import CloseIcon from "@mui/icons-material/Close";
import EmptyCart from "../EmptyCart/EmptyCart";

const CartPage = ({ onClose }) => {
  const dispatch = useDispatch();
  //to display cart products
  const displayCartProducts = useSelector((state) => state.cart);

  //subtotal
  useEffect(() => {
    dispatch(getTotals());
  }, [displayCartProducts, dispatch]);

  //delete function
  const handleRemove = (currentElement) => {
    dispatch(remove(currentElement));
  };

  // //quantity increase and decrease
  const handleIncreaseCart = (currentElement) => {
    dispatch(add(currentElement));
  };
  const handleDecreaseCart = (currentElement) => {
    dispatch(decreaseQuantity(currentElement));
  };

  //clear cart
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <Wrapper onClick={(event) => event.stopPropagation()}>
        <div className="icon">
          <CloseIcon onClick={onClose} fontSize="large" />
        </div>
        {displayCartProducts.cartItems.length > 0 ? (
          <>
            <div className="container">
              <h3 className="carttitle">your bag</h3>
              <hr />
              {displayCartProducts.cartItems.map((currentElement) => (
                <div className="cart-container" key={currentElement.id}>
                  <div className="cart-column-one">
                    <img
                      className="cart-img"
                      src={currentElement.image}
                      alt="selectedanimal"
                    />
                  </div>
                  <div className="cart-column-three">
                    <h5>{currentElement.breed}</h5>
                    <span className="quantity">
                      <button
                        onClick={() => handleDecreaseCart(currentElement)}
                      >
                        <RemoveIcon fontSize="medium" />{" "}
                      </button>
                      <span className="quantitynum">
                        {currentElement.cartQuantity}
                      </span>
                      <button
                        onClick={() => handleIncreaseCart(currentElement)}
                      >
                        <AddIcon fontSize="medium" />
                      </button>
                    </span>
                  </div>
                  <div className="cart-column-four">
                    <button
                      className="delete"
                      onClick={() => handleRemove(currentElement)}
                    >
                      {" "}
                      <DeleteOutlineIcon fontSize="large" />{" "}
                    </button>
                    <h5>
                      Rs.{currentElement.price * currentElement.cartQuantity}
                    </h5>
                  </div>
                </div>
              ))}
              <hr />
              <div className="subtotal-container">
                <span className="total">
                  Total Rs.{displayCartProducts.cartTotalAmount}
                </span>
                <div className="btn">
                  <NavLink to="/order">
                    <button id="cart-btn">Check Out</button>
                  </NavLink>
                  <NavLink to="/shop">
                    <button id="cart-btn">Continue Shopping</button>
                  </NavLink>
                  <NavLink to="/shop">
                    <button onClick={() => handleClearCart()} id="cart-btn">
                      Clear Cart
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <EmptyCart onClose={onClose} />
          </>
        )}
      </Wrapper>
    </>
  );
};

export default CartPage;
