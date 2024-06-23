import React from 'react'
import { Wrapper } from './ServicesStyled'
import dog from '../../images/dog.png'
import cat from '../../images/cat.png'
import hamster from '../../images/hamster.png'
import { useDispatch, useSelector } from "react-redux";
import { Statuses, getFeaturedProducts } from "../../Store/Slices/ProductSlice";
import { PulseLoader } from "react-spinners";
import { NavLink } from 'react-router-dom'

const Services = () => {
  const dispatch= useDispatch();
  const {categoryDog, status } = useSelector((state) => state.products);
  return (
    <>
      <Wrapper>
        <h1>What we have for you</h1>
        <div className="container">
          <div className="grid-four-column">
            <div className="services-1">
              <div>
                <NavLink to="shop/dogs">
                  <div className="content">
                    <img src={dog} alt="petproducts" className="icon" />
                    <h3>Dogs</h3>
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="services-2">
              <div>
                <NavLink to="shop/cats">
                  <div className="content">
                    <img src={cat} alt="petproducts" className="icon" />
                    <h3>Cats</h3>
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="services-3">
              <div>
                <NavLink to="shop/hamsters">
                  <div className="content">
                    <img src={hamster} alt="petproducts" className="icon" />
                    <h3>Hamster</h3>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Services