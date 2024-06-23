import React from "react";
import CategoriesHero from "../components/CategoriesHero/CategoriesHero";
import CategoryDog from "../components/CategoryDog/CategoryDog";
import Footer from "../components/Footer/Footer";
import dog from "../images/herooDog.jpg";

const Dog = () => {
  const data = {
    image: dog,
    para: "Shop Dogs",
  };
  const heroStyles = {
    fontSize: "4.9rem",
  };
  return (
    <div>
      <CategoriesHero myData={data} style= {heroStyles}/>
      <CategoryDog />
      <Footer />
    </div>
  );
};

export default Dog;
