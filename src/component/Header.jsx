import React from "react";
import profile from "../img/cat.png";
import data from "../data/information";
import CircleText from "./CircleText";

function Header({ accent, secondary }) {
  return (
    <header style={{ backgroundColor: accent }}>
      <div className="flex justify-center items-center flex-col lg:flex-row min-h-[500px] max-lg:h-[700px] max-lg:gap-12">
        <div className="relative w-5/12">
          <div className="relative mx-auto w-fit">
            <img
              src={profile}
              alt="profile-img"
              className="object-contain w-full max-w-xs mx-auto rounded-full max-h-80"
            />
            <CircleText secondary={secondary} />
          </div>
        </div>
        <div className="w-5/12 space-y-5 text-center lg:text-left">
          <p
            className="tracking-widest lg:text-xl"
            style={{ color: secondary }}
          >
            {data[0].position}
          </p>
          <h1 className="text-xl font-bold tracking-wider lg:text-6xl">
            {data[0].name}
          </h1>

          <button
            className="p-2 mt-5 tracking-widest rounded-md m:p-4 hover:scale-125"
            style={{ backgroundColor: secondary }}
          >
            CONTACT ME
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
