import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleProduct } from "../../Store/Slices/SingleProductSlice";
import { Wrapper } from "./AnimalDetailsStyled";
import { Statuses } from "../../Store/Slices/ProductSlice";
import { PulseLoader } from "react-spinners";

const AnimalDetails = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.singleProductPage);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  //spinner
  if (status === Statuses.LOADING) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
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
    <Wrapper>
      {data && ( //adds a check to see if `data` is not null before rendering the `img` tag and accessing the properties of `data`
        <>
          <div className="animal-details-container">
            <h5 className="animal-title">{data.breed}</h5>
            <p className="animal-desc">{data.desc}</p>
            <p className="price">RS. {data.price}</p>
            <div className="btn">
              <NavLink to="/order">
                <button id="cart-btn">ADD TO CART</button>
              </NavLink>
              <NavLink to="/shop">
                <button id="buy-btn">BUY IT NOW</button>
              </NavLink>
            </div>
          </div>
          <div>
            <img id="single_img" src={data.image} alt="animal_image" />
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default AnimalDetails;
