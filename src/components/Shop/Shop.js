import React, { useState } from "react";
import { Wrapper } from "./ShopStyled";
import { useSelector } from "react-redux";
import Sort from "../Sort/Sort";
import Animal from "../Animals/Animal";
import ShopHero from "../ShopHero/ShopHero";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";

const Shop = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get('https://651f823144a3a8aa4769be14.mockapi.io/Data');
  //       const data = response.data;
  //       console.log(data);
  //       setProducts(data);
  //     } catch (error) {
  //       console.error('Error fetching data', error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const res = await fetch('https://fakestoreapi.com/products/1');
  //       const data = await res.json();
  //       console.log(data);
  //       setProducts(data);
  //     } catch (error) {
  //       console.error('Error fetching data', error);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  const { data: animals, status } = useSelector((state) => state.products);

  //query -  variable to track the search bar value.
  const [query, setQuery] = useState("");

  const handleQueryChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  //radio filter
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <Wrapper>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ x: window.innerWidth, transition: { duration: 0.9 } }}
        >
          <div className="shop-hero">
            <ShopHero />
          </div>
          <div className="sort-filter">
            <Sort
              query={query}
              selectedCategory={selectedCategory}
              handleQueryChange={handleQueryChange}
              handleCategoryClick={handleCategoryClick}
            />
          </div>
          <div className="container">
            <div className="animal-view">
              <Animal
                query={query}
                selectedCategory={selectedCategory}
                handleQueryChange={handleQueryChange}
                handleCategoryClick={handleCategoryClick}
              />
            </div>
          </div>
        </motion.div>
      </Wrapper>
    </>
  );
};

export default Shop;
