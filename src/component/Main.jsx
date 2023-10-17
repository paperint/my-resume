import React from "react";
import Portfolio from "./Portfolio";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Framer from "./Framer";

function Main({ accent, secondary }) {
  return (
    <main className="py-12">
      <Framer>
        <AboutMe accent={accent} secondary={secondary} />
      </Framer>
      <Framer>
        <Portfolio />
      </Framer>
      <Framer>
        <Skills accent={accent} secondary={secondary} />
      </Framer>
    </main>
  );
}

export default Main;
