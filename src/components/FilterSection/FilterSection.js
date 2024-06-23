import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "./FilterSectionStyled";
import { Button } from "../Button";
import "../Navbar/NavbarStyled";
import CloseIcon from "@mui/icons-material/Close";
import { setCategories } from "../../Store/Slices/CategoriesSlice";
import Animal from "../Animals/Animal";
const FilterSection = ({ onClose, categories, selectedCategory, handleCategoryClick }) => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.categories);
  

  //for closing sidebar
  const handleClose = () => {
    onClose();
  };
  useEffect(() => {
    // check if categories= animal is an array before dispatching it to the Redux store
    if (Array.isArray(categories)) {
      dispatch(setCategories(categories));
    }
  }, [categories, dispatch]);

  return (
    <>
      <Wrapper onClick={(event) => event.stopPropagation()}>
        <div className="icon">
          <CloseIcon onClick={handleClose} fontSize="large" />
        </div>
        <div className="category-container">
          <div className="category-content">
            <h3 className="category-heading">Category</h3>
            {/* <label className="category-heading-container">
              <input
                onChange={handleCategoryClick}
                type="radio"
                name="test"
                value={selectedCategory}
              />
              <span className="checkmark">All</span>
            </label> */}
            {list.map((category) => (
              <label className="category-heading-container" key={category.id}>
                <input
                  onChange={handleCategoryClick}
                  type="radio"
                  value={selectedCategory}
                  id={category.id}
                  name={category}
                />
                <span className="checkmark">{category}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="container-price">
          <h3 className="price-heading">Price</h3>
          <label className="price-subheading">
            <input type="radio" id="radio" name="price" />
            <span className="checkmark"></span>1k-5k
          </label>
          <label className="price-subheading">
            <input type="radio" id="radio" name="price" />
            <span className="checkmark"></span>5k-10k
          </label>
          <label className="price-subheading">
            <input type="radio" id="radio" name="price" />
            <span className="checkmark"></span>10k-15k
          </label>
          <label className="price-subheading">
            <input type="radio" id="radio" name="price" />
            <span className="checkmark"></span>15k-20k
          </label>
          <label className="price-subheading">
            <input type="radio" id="radio" name="price" />
            <span className="checkmark"></span>20k-30k
          </label>
          <label className="price-subheading">
            <input type="radio" id="radio" name="price" />
            <span className="checkmark"></span>above 30k
          </label>
        </div>
        <div className="clear">
          <Button className="filter-button">Clear Filters</Button>
        </div>
      </Wrapper>
    </>
  );
};

export default FilterSection;
