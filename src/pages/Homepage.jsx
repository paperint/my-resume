import React from "react";
import { useState } from "react";
import randomColor from "../utils/randomColor";
import Header from "../component/Header";
import Main from "../component/Main";
import Footer from "../component/Footer";
import "../App.css";

function Homepage() {
  const [primary, setPrimary] = useState("#f3e6d8");
  const [secondary, setSecondary] = useState("#c1c0ec");
  const [accent, setAccent] = useState("#34abad");
  const [isOpen, setIsOpen] = useState(false);

  const handlerRandomColor = () => {
    setPrimary(randomColor());
    setSecondary(randomColor());
    setAccent(randomColor());
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ backgroundColor: primary }}>
      <div className="fixed z-50 top-10">
        {isOpen && (
          <div>
            <button onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        )}
        {!isOpen && (
          <div className="relative left-4 w-60 flex flex-col justify-center items-center space-y-9 p-4 bg-slate-200 rounded-xl shadow-2xl">
            <button
              className="absolute -top-5 -right-5 font-extrabold bg-red-200 w-12 p-3 rounded-full"
              onClick={handleClick}
            >
              x
            </button>
            <h1 className="text-xl font-bold tracking-widest">
              Custom your color
            </h1>
            <div className="flex justify-between w-full">
              <label className="flex flex-col justify-center items-center">
                <h1>Primary</h1>
                <input
                  type="color"
                  value={primary}
                  onChange={(e) => setPrimary(e.target.value)}
                  className="cursor-pointer"
                />
              </label>{" "}
              <label className="flex flex-col justify-center items-center">
                <h1>Secondary</h1>
                <input
                  type="color"
                  value={secondary}
                  onChange={(e) => setSecondary(e.target.value)}
                  className="cursor-pointer"
                />
              </label>
              <label className="flex flex-col justify-center items-center">
                <h1>Accent</h1>
                <input
                  type="color"
                  value={accent}
                  placeholder="Accent"
                  onChange={(e) => setAccent(e.target.value)}
                  className="cursor-pointer"
                />
              </label>
            </div>
            <button
              className="cursor-pointer bg-red-400 w-full p-2 rounded-full font-bold"
              onClick={() => handlerRandomColor()}
            >
              Ramdom Color
            </button>
          </div>
        )}
      </div>
      <Header accent={accent} secondary={secondary} />
      <Main accent={accent} secondary={secondary} />
      <Footer accent={accent} secondary={secondary} />
    </div>
  );
}

export default Homepage;
