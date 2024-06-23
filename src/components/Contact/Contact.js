//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1566251730183!2d85.3177709!3d27.71245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19016c9d9fcb%3A0xd2291eee6917d60a!2sDurbar%20Marg%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1695987009598!5m2!1sen!2snp"
//           width="100%"
//           height="300"
//           style={{border:'0'}}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade">
//         </iframe>
import React, { useState, useEffect } from "react";
import Circle from "../../images/CircleF.png";
import PhoneIcon from "@mui/icons-material/Phone";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ReusableForm from "../ReusableForm/ReusableForm.js";

import {
  ContactBody,
  ContactSection,
  ContactContainer,
  ContactLeft,
  CircleImg,
  Position,
  H2Left,
  H2Right,
  Span,
  P,
  H3Container,
  H3,
  Details,
  Items,
  ItemsText,
  Form,
  Msg,
  Label,
  Textarea,
} from "./ContactStyled.js";
import { Button } from "../Button.js";
import Validation from "./Validation";

const buttonContact = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const color = {
  color: "black",
};

const Contact = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    address: "",
    email: "",
    message: "",
  });

  const [records, setRecords] = useState([]);

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    const { name, value } = event.target;

    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = Validation(userData); // Calling validation function to get errors object
    if (Object.keys(errors).length === 0) {
      // Checking if there are no errors
      const newRecord = { ...userData, id: new Date().getTime().toString() }; // Creating new record object with unique ID
      console.log(newRecord);
      setRecords([...records, newRecord]); // Adding new record to the array of existing records
      console.log(setRecords);
    } else {
      setErrors(errors); // Updating errors state with validation errors (if any)
    }
    //success msg

    // //clear fields
    // setUserData({ fullName: "", address: "", email: "", message: "" }); // Resetting user data after submitting form
  };

  useEffect(() => {
    {
    }
  }, [errors]);

  return (
    <>
      <ContactBody>
        <ContactSection>
          <ContactContainer>
            <ContactLeft>
              <CircleImg src={Circle} alt="Img" />
              <Position>
                <H2Left>NICE TO MEET YOU.</H2Left>
                <H2Right>HERE TO MEET YOUR NEEDS.</H2Right>
              </Position>
              <Span />
            </ContactLeft>
            <P>
              We are happy to answer any questions you have. <br /> You are just
              one step away from gathering <br /> the answer.{" "}
            </P>
          </ContactContainer>
          <Details>
            <H3Container>
              <H3>FEEL FREE TO CONNECT WITH US</H3>
            </H3Container>
            <Items>
              <PhoneIcon className="icon" fontSize="large" />
              <ItemsText>Telephone Number 025-55555</ItemsText>
            </Items>
            <Items>
              <PhoneIphoneIcon className="icon" fontSize="large" />
              <ItemsText> Mobile Number 981111111</ItemsText>
            </Items>
            <Items>
              <MailOutlineIcon className="icon" fontSize="large" />
              <ItemsText>prenakarki98@gmail.com</ItemsText>
            </Items>
          </Details>
        </ContactSection>
        <Form
          // action="https://formspree.io/f/myyrgpop"
          method="POST"
          onSubmit={handleSubmit}
        >
          <ReusableForm
            label="Username"
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Type your FullName"
            style={color}
            onChange={handleInput}
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
                fontSize: "1rem",
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
            style={color}
            onChange={handleInput}
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
                fontSize: "1rem",
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
            style={color}
            onChange={handleInput}
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
                fontSize: "1rem",
              }}
            >
              {errors.email}
            </p>
          )}
          <Msg>
            <Label>Message</Label>
            <Textarea
              name="message"
              value={userData.message}
              onChange={handleInput}
              autoComplete="off"
            />
            {errors.message && (
              <p
                style={{
                  color: "red",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "0rem",
                  marginTop: "1rem",
                  fontSize: "1rem",
                }}
              >
                {errors.message}
              </p>
            )}
          </Msg>
          <div className="btn" style={buttonContact}>
            <Button> Submit </Button>
          </div>
        </Form>
      </ContactBody>
    </>
  );
};
export default Contact;
