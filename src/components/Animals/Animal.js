import React, { useEffect } from "react";
import { Wrapper } from "./AnimalStyled";
import { NavLink, useNavigate } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { add } from "../../Store/Slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Store/Slices/ProductSlice";
import { Statuses } from "../../Store/Slices/ProductSlice";
import { PulseLoader } from "react-spinners";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Animal = ({ query, selectedCategory }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: animals, status } = useSelector((state) => state.products);

  useEffect(() => {
    //dispatch an action for getProducts
    dispatch(getProducts());
  }, [dispatch]);

  const handleAdd = (currentElement) => {
    //dispatching the action creator for adding items to cart
    dispatch(add(currentElement));
    navigate("/cart");
  };

  // if query is not empty, display filtered animals
  // const filteredAnimals = animals.filter(
  //   (animal) =>
  //     animal.category.toLowerCase().includes(query?.trim()?.toLowerCase()) ||
  //     animal.breed.toLowerCase().includes(query?.trim()?.toLowerCase())
  // );

  // const filteredProducts = animals.filter((product) => {
  //   if (selectedCategory === null) {
  //     // If no category is selected, show all animals
  //     return true;
  //   } else {
  //     // If a category is selected, filter by that category
  //     return product.category === selectedCategory;
  //   }
  // });

  const filteredAnimals = animals.filter((animal) => {
    const animalBreed = animal.breed.toLowerCase();
    const animalCategory = animal.category.toLowerCase();
    return (
      (selectedCategory === null || selectedCategory === animal.category) && // If no category is selected or selected category matches the animal category, show the animal
      (query === "" || // If search term is empty, show all animals
        animalBreed.includes(query) || // If search term is present in animal name, show the animal
        animalCategory.includes(query)) // If search term is present in animal breed, show the animal
    );
  });

  if (status === Statuses.LOADING) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "20vh",
        }}
      >
        <PulseLoader color="#000000" />
      </div>
    );
  }

  if (status === Statuses.ERROR) {
    return <h2>Something went wrong</h2>;
  }

  return (
    <>
      <Wrapper>
        {/* {filteredAnimals.length === 0 && <h2>animal Not Found</h2>} */}
        {filteredAnimals.length > 0 ? (
          filteredAnimals.map((currentElement) => (
            <NavLink
              to={`/animaldetails/${currentElement.id}`}
              key={currentElement.id}
            >
              <div className="card" {...currentElement}>
                <img
                  src={currentElement.image}
                  className="card-img-top"
                  alt="animal"
                />
                <div className="card-body">
                  <h5 className="card-title">{currentElement.breed}</h5>
                  <p className="card-text">
                    {currentElement.price.toLocaleString("ne-NP", {
                      style: "currency",
                      currency: "NPR",
                    })}
                  </p>
                  <button
                    className="card-btn"
                    onClick={() => handleAdd(currentElement)}
                  >
                    <AddCircleIcon fontSize="large" style={{ fontSize: 34 }} />
                  </button>
                </div>
              </div>
            </NavLink>
          ))
        ) : (
          <h2>No results found </h2>
        )}
      </Wrapper>
    </>
  );
};

export default Animal;
