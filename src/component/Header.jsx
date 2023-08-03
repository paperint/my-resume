import React from "react";
import profile from "../img/cat.png";
import data from "../data/information";
import { Link, animateScroll as scroll } from "react-scroll";
import CircleText from "./CircleText";

function Header({ accent, secondary }) {
  return (
    <header style={{ backgroundColor: accent }}>
      <div className="flex justify-center items-center flex-col lg:flex-row min-h-[500px] max-lg:h-[700px] max-lg:gap-12">
        <div className="relative w-5/12">
          <div className="relative w-fit mx-auto">
            <img
              src={profile}
              alt="profile-img"
              className="w-full max-w-xs max-h-80 object-contain rounded-full mx-auto"
            />
            <CircleText secondary={secondary} />
          </div>
        </div>
        <div className="w-5/12 text-center lg:text-left space-y-5">
          <p
            className="lg:text-xl tracking-widest"
            style={{ color: secondary }}
          >
            {data[0].position}
          </p>
          <h1 className="text-xl lg:text-6xl font-bold tracking-wider">
            {data[0].name}
          </h1>
          <Link
            activeClass="active"
            to="contact-me"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button
              className="rounded-md p-2 m:p-4 tracking-widest hover:scale-125 mt-5"
              style={{ backgroundColor: secondary }}
            >
              CONTACT ME
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
