import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

const App = () => {
  //overlay for sidebar
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };
  // Define setFilterOpen function to set the state in App.js
  const setFilterOpen = (open) => {
    setIsOpen(open);
  };
  // defining object that was passed intheme props
  const theme = {
    colors: {
      bg: "#fff",
      black: "#000",
      hover: "#4a6741",
      border: "rgba(98,84,243,0.5)",
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
    },
    media: {
      mobile: "768px",
      belowtab: "765",
      includingmini: "766",
      mobileover: "769px",
      miniover: "900",
      tab: "998px",
      tabover: "1025",
      smaller: "540px",
      smallerover: "550",
      vsmall: "360px",
      msmall: "381px",
    },
  };
  return (
    <>
      <div
        className={`App ${isOpen ? "overlay-open" : ""}`}
        style={{ opacity: isOpen ? "0.5" : "1" }}
      >
        {/* wrapper that provides theming values to all of the components it contains. */}
        <ThemeProvider theme={theme}>
          <Router>
            {/* will act as external component */}
            <GlobalStyle />
            <Header toggleFilter={toggleFilter} setFilterOpen={setFilterOpen} />
            <AnimatedRoutes />
          </Router>
        </ThemeProvider>
      </div>
      <div
        className={`overlay ${isOpen ? "overlay-open" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
};

export default App;
