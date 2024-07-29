/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import Education from "./Components/Education";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Tehreem Masroor",
  title: "Junior Undergraduate Student",
  email: "tehreem.masroor@gmail.com",
  gitHub: "thm-msror",
  instagram: "",
  linkedIn: "thm-msror",
  medium: "",
  twitter: "microsoft",
  youTube: "Code",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <div id="home-container">
        <Home name={siteProps.name} title={siteProps.title} />
      </div>
      {/*<Home name={siteProps.name} title={siteProps.title} />*/}
      <About />
      <Education />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
