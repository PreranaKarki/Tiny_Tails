import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/Finallogo.png";
import { animateScroll as scroll } from "react-scroll";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenuLeft, CgClose } from "react-icons/cg";
import { Nav } from "./NavbarStyled.js";
import { useSelector } from "react-redux";
import CartPage from "../CartPage/CartPage.js";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const ul = {
  listStyleType: "none",
};
const toggleHome = () => {
  //for scrolling to the top when logo is clicked
  scroll.scrollToTop();
};

const Navbar = ({ toggleCart }) => {
  //to show and hide hamburger
  const [menuIcon, setMenuIcon] = useState(false);

  const showNavbar = () => setMenuIcon(!menuIcon);

  //to show and hide cart
  const [isCartVisible, setIsCartVisible] = useState(false);

  const showCart = () => setIsCartVisible(!isCartVisible);

  //to get the cart state
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <>
      <Nav>
        <div className={menuIcon ? "navbar active" : "navbar"}>
          <ul className="navbar-lists" style={ul}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive ? "menu_active" : "";
                }}
                //to close the mobile navbar when a link is clicked and new page renders
                onClick={() => setMenuIcon(false)}
              >
                Home
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return isActive ? "menu_active" : "";
                }}
                onClick={() => setMenuIcon(false)}
              >
                About
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) => {
                  return isActive ? "menu_active" : "";
                }}
                onClick={() => setMenuIcon(false)}
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => {
                  return isActive ? "menu_active" : "";
                }}
                onClick={() => setMenuIcon(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          {/* hamburger menu */}
          <div className="hamburger-menu">
            <CgMenuLeft
              className="mobile-nav-icon menu-icon"
              onClick={showNavbar}
            />
            <CgClose
              className="mobile-nav-icon close-icon"
              onClick={showNavbar}
            />
          </div>
          <div className="nav-secondhalf">
            <NavLink to="/">
              <img className="img" onClick={toggleHome} src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className="nav-right">
            <NavLink to="/login">
              <PermIdentityIcon className="account" fontSize="large" />
            </NavLink>

            <button
              className="cart"
              onClick={() => {
                {
                  setMenuIcon(false);
                  showCart();
                }
              }}
            >
              <FiShoppingCart className="basket" />
              <span className="cart-total-item">{cartTotalQuantity}</span>
              {isCartVisible && (
                <CartPage onClose={() => setIsCartVisible(false)} />
              )}
            </button>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
