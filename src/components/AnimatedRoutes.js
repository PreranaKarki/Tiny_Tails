import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
//pages
import Home from "./Home/Home";
import About from "./About/About";
import Shop from "./Shop/Shop";
import Contact from "./Contact/Contact";
import CartPage from "./CartPage/CartPage";
import Error from "./Error/Error";
import AnimalDetails from "./AnimalDetails/AnimalDetails";
import Dog from "../pages/Dog";
import Cat from "../pages/Cat";
import Hamster from "../pages/Hamster";
import { AnimatePresence } from "../../node_modules/framer-motion/dist/framer-motion";
import Registration from "./Registration/Registration";
import Login from "./Login/Login";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/animaldetails/:id" element={<AnimalDetails />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/shop/dogs" element={<Dog />} />
        <Route exact path="/shop/cats" element={<Cat />} />
        <Route exact path="/shop/hamsters" element={<Hamster />} />
        <Route exact path="/registration" element={<Registration />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
