import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Validation from "../Contact/Validation.js";
import {
  AccountSection,
  Container,
  Header,
  PageTitle,
  Form,
} from "./AccountStyled.js";
import ReusableForm from "../ReusableForm/ReusableForm.js";
import { Button } from "../Button.js";
import { registerUser } from "../../Store/Slices/AccountSlice.js";
import { useSelector, useDispatch } from "react-redux";

const buttonAccount = {
  backgroundColor: "black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "3rem",
};

const Account = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    fullName: "",
    address: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [errors, setErrors] = useState({});
  const [auth, setAuth] = useState("login");

  const handleData = (event) => {
    const { name, value } = event.target;
    console.log(userData);
    setUserData({ ...userData, [name]: value });
  };
  const handleDataSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(userData));
  };
  useEffect(() => {}, [errors]);

  const authenticate = () =>{
    if(auth == "register"){

    }else{
      dispatch(registerUser((fullName, address, email, password, confirmpassword)))
    }
  }

  return (
    <AccountSection>
      <Container>
        <Header>
          <PageTitle>Become a Member</PageTitle>
        </Header>
        {!errors && isSubmit ? (
          (alert("You are succcesfully logged in"), navigate("/"))
        ) : (
          <Form
            // action="https://formspree.io/f/myyrgpop"
            method="POST"
            onSubmit={handleDataSubmit}
          >
            <ReusableForm
              label="Username"
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Type your FullName"
              onChange={handleData}
              value={userData.fullName}
            />
            {errors.fullName && (
              <p
                style={{
                  color: "red",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "0rem",
                  marginTop: "1rem",
                  fontSize: "1.2rem",
                }}
              >
                {errors.fullName}
              </p>
            )}
            <ReusableForm
              label="Address"
              type="text"
              name="address"
              id="address"
              placeholder="Type your Address"
              onChange={handleData}
              value={userData.address}
            />
            {errors.address && (
              <p
                style={{
                  color: "red",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "0rem",
                  marginTop: "1rem",
                  fontSize: "1.2rem",
                }}
              >
                {errors.address}
              </p>
            )}
            <ReusableForm
              label="Email"
              type="email"
              name="email"
              id="email"
              placeholder="Type your Email"
              onChange={handleData}
              value={userData.email}
            />
            {errors.email && (
              <p
                style={{
                  color: "red",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "0rem",
                  marginTop: "1rem",
                  fontSize: "1.2rem",
                }}
              >
                {errors.email}
              </p>
            )}
            <ReusableForm
              label="Password"
              type="text"
              name="password"
              id="password"
              placeholder="Type your password"
              onChange={handleData}
              value={userData.password}
            />
            {errors.password && (
              <p
                style={{
                  color: "red",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "0rem",
                  marginTop: "1rem",
                  fontSize: "1.2rem",
                }}
              >
                {errors.password}
              </p>
            )}
            <ReusableForm
              label="Confirm Password"
              type="text"
              name="confirmpassword"
              id="confirmpassword"
              placeholder="Type your password again"
              onChange={handleData}
              value={userData.confirmpassword}
            />
            {errors.confirmpassword && (
              <p
                style={{
                  color: "red",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "0rem",
                  marginTop: "1rem",
                  fontSize: "1.2rem",
                }}
              >
                {errors.confirmpassword}
              </p>
            )}
            <div className="btn">
              <Button style={buttonAccount}>Submit</Button>
            </div>
          </Form>
        )}
      </Container>
    </AccountSection>
  );
};

export default Account;
