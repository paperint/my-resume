import React, { useContext } from "react";
import { ThemeContext } from "../Context/themeContext";

function Address({ setContactOpen, contactOpen }) {
  const context = useContext(ThemeContext);
  const { primary, accent } = context;
  return (
    <div className="absolute z-50 flex items-center justify-center h-screen translate-x-1/2 right-1/2">
      <div className="relative max-w-2xl p-5">
        <div
          style={{ backgroundColor: primary }}
          className="w-full p-6 shadow-2xl rounded-xl"
        >
          <div className="mb-5">
            <h1 className="text-4xl font-bold" style={{ color: accent }}>
              Tanakit Kankangboon
            </h1>
            <h2 className="text-xl">Developer</h2>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">Personal Info</h2>
            <div>
              <h3 style={{ color: accent }} className="font-bold">
                Address
              </h3>
              <p>
                Hai-YA sub-district, Mueang Chiangmai district, Chiang Mai
                province
              </p>
            </div>
            <div>
              <h3 style={{ color: accent }} className="font-bold">
                Phone Number
              </h3>
              <p>088-2669690</p>
            </div>
            <div>
              <h3 style={{ color: accent }} className="font-bold">
                Email
              </h3>
              <p>Tanakit.Kankangboon@gmail.com</p>
            </div>
            <div>
              <h3 style={{ color: accent }} className="font-bold">
                LinkedIn
              </h3>
              <p>
                <a href="https://www.linkedin.com/in/tanakit-kankangboon-32329b1a5/">
                  linkedin.com/in/tanakit-kankangboon-32329b1a5/
                </a>
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={() => setContactOpen(!contactOpen)}
          className="absolute px-4 py-2 text-sm text-white bg-black rounded-full opacity-90 top-1 right-1"
        >
          x
        </button>
      </div>
    </div>
  );
}

export default Address;
