import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Wrapper } from "./FooterStyled";
import { Button } from "../Button";
import { animateScroll as scroll } from "react-scroll";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Footer = () => {
  //footer year
  const year = new Date().getFullYear();

  const button = {
    maxWidth: "19rem",
    height: "5rem",
    textTransform: "none",
  };
  const toggleHome = () => {
    //for scrolling to the top when logo is clicked
    scroll.scrollToTop();
  };

  const [showTinyTailsLinks, setShowTinyTailsLinks] = useState(false);
  const [showUserInfoLinks, setShowUserInfoLinks] = useState(false);
  const [showNeedHelpLinks, setShowNeedHelpLinks] = useState(false);

  return (
    <>
      <Wrapper>
        <section className="footer-contact">
          <div className="grid grid-two-column">
            <div className="question">
              <h3>Ready to get your new friend?</h3>
            </div>
            <Button id="button" style={button}>
              <NavLink to="/shop"> Find your buddy</NavLink>
            </Button>
          </div>
        </section>
        <footer>
          <div className="footer">
            <div className="footer-container">
              <div className="footer-sections">
                <div
                  className="footer-section"
                  onClick={() => setShowTinyTailsLinks(!showTinyTailsLinks)}
                >
                  <div className="mobile">
                    <h3 className="footer-links-header">Tiny Tails</h3>
                    <div className="footer-btn">
                      {showTinyTailsLinks ? (
                        <KeyboardArrowDownIcon />
                      ) : (
                        <ChevronRightSharpIcon />
                      )}
                    </div>
                  </div>
                  <div
                    className={`footer-links-mobile ${
                      showTinyTailsLinks ? "active" : ""
                    }`}
                  >
                    <NavLink
                      className="footer-links"
                      onClick={toggleHome}
                      smooth="true"
                      duration={500}
                    >
                      Home
                    </NavLink>
                    <NavLink className="footer-links" to="/about">
                      About
                    </NavLink>
                    <NavLink className="footer-links" to="/shop">
                      Shop
                    </NavLink>
                    <NavLink className="footer-links" to="/contact">
                      Contact
                    </NavLink>
                  </div>
                </div>
                <div
                  className="footer-section"
                  onClick={() => setShowUserInfoLinks(!showUserInfoLinks)}
                >
                  <div className="mobile">
                    <h3 className="footer-links-header">User Info</h3>
                    <div className="footer-btn">
                      {showUserInfoLinks ? (
                        <KeyboardArrowDownIcon />
                      ) : (
                        <ChevronRightSharpIcon />
                      )}
                    </div>
                  </div>
                  <div
                    className={`footer-links-mobile ${
                      showUserInfoLinks ? "active" : ""
                    }`}
                  >
                    <NavLink className="footer-links" to="/createaccount">
                      Create Account
                    </NavLink>
                    <NavLink className="footer-links" to="/login">
                      Login
                    </NavLink>
                  </div>
                </div>
                <div
                  className="footer-section"
                  onClick={() => setShowNeedHelpLinks(!showNeedHelpLinks)}
                >
                  <div className="mobile">
                    <h3 className="footer-links-header">Need Help</h3>
                    <div className="footer-btn">
                      {showNeedHelpLinks ? (
                        <KeyboardArrowDownIcon />
                      ) : (
                        <ChevronRightSharpIcon />
                      )}
                    </div>
                  </div>
                  <div
                    className={`footer-links-mobile ${
                      showNeedHelpLinks ? "active" : ""
                    }`}
                  >
                    <NavLink className="footer-links" to="/contact">
                      Contact Us
                    </NavLink>
                    <a href="tel: 9804373598" className="footer-links">
                      +977 9804373598
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <p className="copyright">
            ©{year} Prerana Karki. All Rights Reserved{" "}
          </p>
        </footer>
      </Wrapper>
    </>
  );
};

export default Footer;
