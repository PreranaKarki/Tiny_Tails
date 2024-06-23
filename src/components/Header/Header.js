import React from "react";
// import { NavLink } from 'react-router-dom'
// import logo from '../../images/Logoooo.png'
import Nav from "../Navbar/Navbar";

import { MainHeader } from "./HeaderStyledComponent.js";

const Header = () => {
  return (
    <MainHeader>
      <Nav />
    </MainHeader>
  );
};

export default Header;
