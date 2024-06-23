import React from "react";
import ReusableForm from "../ReusableForm/ReusableForm";
import { NavLink } from "react-router-dom";
import {
  AccountSection,
  Container,
  Header,
  PageTitle,
} from "../Account/AccountStyled.js";
import { Button } from "../Button.js";

const buttonAccount = {
  backgroundColor: "black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  maxWidth: "20rem",
};

const Login = () => {
  return (
    <>
      <AccountSection>
        <Container>
          <Header>
            <PageTitle>Login</PageTitle>
          </Header>
          <ReusableForm
            label="Username"
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Type your FullName"
          />
          <ReusableForm
            label="Email"
            type="email"
            name="Email"
            id="email"
            placeholder="Type your Email"
          />
          <ReusableForm
            label="Password"
            type="password"
            name="password"
            id="password"
            placeholder="Type your password"
          />
          <NavLink to="/">
            <div className="btn">
              <Button id="#login-btn" style={buttonAccount}>
                Login
              </Button>
            </div>
            <NavLink to="/registration">
              <div className="btn">
                <Button id="#login-btn" style={buttonAccount}>
                  Create Account
                </Button>
              </div>
            </NavLink>
          </NavLink>
        </Container>
      </AccountSection>
    </>
  );
};

export default Login;
