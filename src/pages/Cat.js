import React from "react";
import CategoriesHero from "../components/CategoriesHero/CategoriesHero";
import CategoryCat from "../components/CategoryCat/CategoryCat";
import Footer from "../components/Footer/Footer";
import cat from "../images/cathero.jpg";

const Cat = () => {
  const data = {
    image: cat,
    para: "Shop Cats",
  };
  const heroStyles = {
    fontSize: "4.9rem",
  };
  return (
    <div>
      <CategoriesHero myData={data} style={heroStyles} />
      <CategoryCat />
      <Footer />
    </div>
  );
};

export default Cat;
