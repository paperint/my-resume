import React, { useContext } from "react";
import Header from "../component/Header";
import Main from "../component/Main";
import Footer from "../component/Footer";
import Customcolor from "../component/Customcolor";
import { ThemeContext } from "../Context/themeContext";
import "../App.css";

function Homepage() {
  const context = useContext(ThemeContext);
  const { primary, secondary, accent } = context;

  return (
    <div style={{ backgroundColor: primary }}>
      <Customcolor />
      <Header accent={accent} secondary={secondary} />
      <Main accent={accent} secondary={secondary} />
      <Footer accent={accent} secondary={secondary} />
    </div>
  );
}

export default Homepage;
