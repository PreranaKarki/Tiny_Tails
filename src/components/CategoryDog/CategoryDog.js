import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Statuses, getDogs } from "../../Store/Slices/ProductSlice";
import { PulseLoader } from "react-spinners";
import { NavLink, useNavigate } from "react-router-dom";
import { Wrapper } from "../Animals/AnimalStyled";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { add } from "../../Store/Slices/CartSlice";

const CategoryDog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categoryDogs, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);
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
  const handleAdd = (currentElement) => {
    dispatch(add(currentElement));
    navigate("/cart");
  };
  return (
    <>
      <Wrapper>
        {categoryDogs.map((currentElement) => (
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
        ))}
      </Wrapper>
    </>
  );
};

export default CategoryDog;
