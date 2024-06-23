import React, { useState } from "react";
import { Wrapper } from "./SortStyled";
import FilterSection from "../FilterSection/FilterSection";
import Animal from "../Animals/Animal";
import { useSelector } from "react-redux";
const Sort = ({query, handleQueryChange, selectedCategory, handleCategoryClick}) => {
  //sidebar
  const [showCategory, setShowCategory] = useState(false);
  //sidebar function
  const handleCategorySidebar = () => setShowCategory(!showCategory);

  //to pass as a prop in a filter section
  const products = useSelector((state) => state.products.data);

  return (
    <>
      <Wrapper>
        <div className="sort-container">
          <div className="button-container">
            <button onClick={handleCategorySidebar}>
              <h5>Browse</h5>
              {showCategory && (
                <FilterSection
                  onClose={() => setShowCategory(false)}
                  categories={products}
                  value= {selectedCategory}
                  onChange= {handleCategoryClick}
                />
              )}
            </button>
          </div>
          <input
            className="search"
            type="text"
            placeholder="Search"
            // sets the value of the input element to the current value of the `query` state variable.
            value={query}
            // attaches an event listener to the input element that triggers when the user types a new value in the search bar
            onChange={handleQueryChange}
          />
          <select className="sort-options" defaultValue="" required>
            <option value="" disabled hidden>
              Sort{" "}
            </option>
            <option value="option1">Low - High</option>
            <option value="option2">High - Low</option>
          </select>
        </div>
      </Wrapper>
    </>
  );
};

export default Sort;
