import React from "react";
import profile from "../assets/img/profile.jpg";
import data from "../data/information";
import CircleText from "./CircleText";

function Header({ accent, secondary, setContactOpen, contactOpen }) {
  return (
    <header style={{ backgroundColor: accent }} className="p-6">
      <div className="flex justify-center items-center flex-col lg:flex-row min-h-[500px] max-sm:h-[500px] max-lg:h-[700px] max-lg:gap-12 gap-12 mx-auto">
        <div className="relative">
          <div className="relative">
            <img
              src={profile}
              alt="profile-img"
              className="object-cover border border-gray-100 rounded-full shadow-sm w-44 h-44 sm:w-96 sm:h-96 "
            />
            <CircleText secondary={secondary} />
          </div>
        </div>
        <div className="w-full space-y-6 text-center sm:max-w-sm xl:max-w-2xl lg:space-y-12 lg:text-left">
          <p
            className="font-medium tracking-widest lg:text-xl"
            style={{ color: secondary }}
          >
            {data[0].position}
          </p>
          <h1 className="text-xl font-bold tracking-wider lg:text-6xl">
            {data[0].name}
          </h1>

          <button
            className="p-2 mt-5 tracking-widest rounded-md md:p-4 hover:scale-125"
            style={{ backgroundColor: secondary }}
            onClick={() => setContactOpen(!contactOpen)}
          >
            CONTACT ME
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
