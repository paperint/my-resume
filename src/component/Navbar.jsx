import React, { useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../Context/themeContext";
import { Link, animateScroll } from "react-scroll";
import axios from "axios";

function Navbar() {
  const context = useContext(ThemeContext);
  const navigate = useNavigate();
  const startWeb = useRef(false);
  const { primary } = context;
  const goBack = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }
  };

  const options = {
    duration: 500,
    smooth: true,
  };

  useEffect(() => {
    const postLog = async () => {
      if (!startWeb.current) {
        try {
          await axios.post(`${import.meta.env.VITE_API}/log/`, {
            txt: new Date(),
          });
          startWeb.current = true;
        } catch (error) {
          console.error("Error posting log:", error);
        }
      }
    };

    console.log("log test");
    postLog();
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 shadow-lg"
      style={{ backgroundColor: primary }}
    >
      <section className="w-full p-6 mx-auto max-w-7xl">
        <ul className="flex items-center justify-center gap-12">
          <div onClick={() => animateScroll.scrollToTop(options)}>
            <li
              onClick={() => {
                goBack();
              }}
              className="cursor-pointer hover:underline hover:underline-offset-2"
            >
              Home
            </li>
          </div>
          <Link
            activeClass="active"
            to="aboutme"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <li
              onClick={() => {
                goBack();
              }}
              className="cursor-pointer hover:underline hover:underline-offset-2"
            >
              About me
            </li>
          </Link>
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <li
              onClick={() => {
                goBack();
              }}
              className="cursor-pointer hover:underline hover:underline-offset-2"
            >
              Portfolio
            </li>
          </Link>
          <Link
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li
              onClick={() => {
                goBack();
              }}
              className="cursor-pointer hover:underline hover:underline-offset-2"
            >
              Skills
            </li>
          </Link>
        </ul>
      </section>
    </nav>
  );
}

export default Navbar;
