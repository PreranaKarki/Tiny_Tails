import React from "react";
import CategoriesHero from "../components/CategoriesHero/CategoriesHero";
import CategoryHamster from "../components/CategoryHamster/CategoryHamster";
import Footer from "../components/Footer/Footer";
import hamster from "../images/heroHamster.jpg";

const Hamster = () => {
  const data = {
    image: hamster,
    para: "Shop Hamsters",
  };
  const heroStyles = {
    fontSize: "4.9rem",
  };
  return (
    <div>
      <CategoriesHero myData={data} style={heroStyles} />
      <CategoryHamster />
      <Footer />
    </div>
  );
};

export default Hamster;
