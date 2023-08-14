import React, { useContext, useState } from "react";
import Header from "../component/Header";
import Main from "../component/Main";
import Footer from "../component/Footer";
import Customcolor from "../component/Customcolor";
import { ThemeContext } from "../Context/themeContext";
import Address from "../component/Address";
import "../App.css";

function Homepage() {
  const context = useContext(ThemeContext);
  const { primary, secondary, accent } = context;
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div style={{ backgroundColor: primary }}>
      <Customcolor />
      {contactOpen && (
        <Address setContactOpen={setContactOpen} contactOpen={contactOpen} />
      )}
      <Header
        accent={accent}
        secondary={secondary}
        setContactOpen={setContactOpen}
        contactOpen={contactOpen}
      />
      <Main accent={accent} secondary={secondary} />
      <Footer accent={accent} secondary={secondary} />
    </div>
  );
}

export default Homepage;
