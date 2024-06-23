import React, { useRef, useState, useEffect } from "react";
import {
  RegisterSection,
  Container,
  Header,
  PageTitle,
  Form,
} from "./RegistrationStyled.js";
import "./Registration.css";
import ReusableForm from "../ReusableForm/ReusableForm.js";
import { Button } from "../Button.js";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const buttonRegister = {
  backgroundColor: "black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "3rem",
};

const user_regex = /^[A-Za-z][A-Za-z0-9_]{4,29}$/;
const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
const pw_regex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{5,10}$/;

const Registration = () => {
  //   const inputRef = useRef("");
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState("false");
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState("false");
  const [emailFocus, setemailFocus] = useState("false");

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState("false");
  const [passwordFocus, setPasswordFocus] = useState("false");

  const [matchPw, setMatchPw] = useState("");
  const [validMatch, setValidMatch] = useState("false");
  const [matchFocus, setMatchFocus] = useState("false");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState("false");

  //   useEffect(() => {
  //     inputRef.current.focus();
  //   }, []);

  useEffect(() => {
    const result = user_regex.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = email_regex.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = pw_regex.test(password);
    setValidPassword(result);
    const match = password === matchPw;
    setValidMatch(match);
  }, [password, matchPw]);

  useEffect(() => {
    setErrMsg("");
  }, [user, password, matchPw]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const v1 = user_regex.test(user);
    const v2 = pw_regex.test(password);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    setSuccess(true);
  };

  return (
    <>
      {/* {success ? (
        <div>
          <h1> Registration Successfully.</h1>
          <NavLink to="/">Click here to go back to home page</NavLink>
        </div>
      ) : ( */}
        <RegisterSection>
          <Container>
            <Header>
              <PageTitle>Become a Member</PageTitle>
            </Header>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <Form onSubmit={handleSubmit}>
              <ReusableForm
                htmlFor="username"
                label="Username"
                spanCorrect={
                  <span className={validName ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                }
                spanWrong={
                  <span className={validName || !user ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                }
                type="text"
                name="username"
                id="username"
                placeholder="Type your username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
              <p
                id="uidnote"
                className={
                  userFocus && user && !validName ? "instructions" : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                3 to 23 characters. <br />
                Must begin with an alphabet. <br />
                Letters, numbers, underscore, hyphens allowed.
              </p>

              <ReusableForm
                htmlFor="email"
                label="Email"
                spanCorrect={
                  <span className={validEmail ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                }
                spanWrong={
                  <span className={validEmail || !email ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                }
                type="email"
                name="email"
                id="email"
                placeholder="Type your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="eidnote"
                onFocus={() => setemailFocus(true)}
                onBlur={() => setemailFocus(false)}
              />
              <p
                id="eidnote"
                className={
                  emailFocus && email && !validEmail
                    ? "instructions"
                    : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                Please enter valid email. <br />
              </p>

              <ReusableForm
                htmlFor="password"
                label="Password"
                spanCorrect={
                  <span className={validPassword ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                }
                spanWrong={
                  <span
                    className={validPassword || !password ? "hide" : "invalid"}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                }
                type="password"
                name="password"
                id="password"
                placeholder="Type your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                area-invalid={validPassword ? "false" : "true"}
                area-describedby="pwnote"
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
              />
              <p
                id="pwnote"
                className={
                  passwordFocus && password && !validPassword
                    ? "instructions"
                    : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                5 to 10 characters. <br />
                must include uppercase, lowercase, a digit and special
                character.
                <br />
              </p>

              <ReusableForm
                htmlFor="confirm_pw"
                label="Confirm Password"
                spanCorrect={
                  <span className={validMatch && matchPw ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                }
                spanWrong={
                  <span className={validMatch || !matchPw ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                }
                type="password"
                name="matchPw"
                id="confirm_pw"
                value={matchPw}
                placeholder="Type your password again"
                onChange={(e) => setMatchPw(e.target.value)}
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <p
                id="confirmnote"
                className={
                  matchFocus && matchPw && !validMatch
                    ? "instructions"
                    : "offscreen"
                }
              >
                Must match the first password input field. <br />
              </p>
              <div className="btn">
                <Button style={buttonRegister}>Submit</Button>
              </div>
            </Form>
          </Container>
        </RegisterSection>
      {/* )} */}
    </>
  );
};

export default Registration;
