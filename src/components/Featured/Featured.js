import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Statuses, getFeaturedProducts } from "../../Store/Slices/ProductSlice";
import { PulseLoader } from "react-spinners";
import { Wrapper } from "./FeaturedStyled";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { add } from "../../Store/Slices/CartSlice";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const Featured = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { featuredProducts, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getFeaturedProducts());
  }, [dispatch]);

  const handleAdd = (currentElement) => {
    dispatch(add(currentElement));
    navigate("/cart");
  };
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
        <div className="featured_container">
          <div className="featured_container_header">
            <div className="header">
              <h5 className="featured_header_title">
                get started with <br /> tiny tails.
              </h5>
              <p className="featured_header_text">
                Get started with our featured pets that gains the most <br />
                attention from you all.
              </p>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={5}
          slidesPerView={2}
          breakpoints={{
            500: { slidesPerView: 3 },
            1000: { slidesPerView: 4 },
          }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {featuredProducts.map((currentElement) => (
            <SwiperSlide className="swiperslide" key={currentElement.id}>
              <div className="card">
                <NavLink
                  to={`/animaldetails/${currentElement.id}`}
                  key={currentElement.id}
                >
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
                      <AddCircleIcon
                        fontSize="large"
                        style={{ fontSize: 34 }}
                      />
                    </button>
                  </div>
                </NavLink>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </>
  );
};

export default Featured;
