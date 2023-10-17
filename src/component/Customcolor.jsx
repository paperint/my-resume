import React, { useContext } from "react";
import randomColor from "../utils/randomColor";
import { ThemeContext } from "../Context/themeContext";

function Customcolor() {
  const context = useContext(ThemeContext);
  const {
    primary,
    setPrimary,
    secondary,
    setSecondary,
    accent,
    setAccent,
    isOpen,
    setIsOpen,
  } = context;

  function rgbToHex(rgbString) {
    const match = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    if (match) {
      const r = parseInt(match[1], 10);
      const g = parseInt(match[2], 10);
      const b = parseInt(match[3], 10);

      // Convert to hex
      const hexR = r.toString(16).padStart(2, "0");
      const hexG = g.toString(16).padStart(2, "0");
      const hexB = b.toString(16).padStart(2, "0");

      return `#${hexR}${hexG}${hexB}`;
    } else {
      return null;
    }
  }

  const handlerRandomColor = () => {
    setPrimary(randomColor());
    setSecondary(randomColor());
    setAccent(randomColor());
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed z-50 top-10">
        {isOpen && (
          <div>
            <button onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        )}
        {!isOpen && (
          <div className="relative flex flex-col items-center justify-center p-4 shadow-2xl left-4 w-60 space-y-9 bg-slate-200 rounded-xl">
            <button
              className="absolute w-12 p-3 font-extrabold bg-red-200 rounded-full -top-5 -right-5"
              onClick={handleClick}
            >
              x
            </button>
            <h1 className="text-xl font-bold tracking-widest">
              Custom your color
            </h1>
            <div className="flex justify-between w-full">
              <label className="flex flex-col items-center justify-center">
                <h1>Primary</h1>
                <input
                  type="color"
                  value={rgbToHex(primary)}
                  onChange={(e) => setPrimary(e.target.value)}
                  className="cursor-pointer"
                />
              </label>{" "}
              <label className="flex flex-col items-center justify-center">
                <h1>Secondary</h1>
                <input
                  type="color"
                  value={rgbToHex(secondary)}
                  onChange={(e) => setSecondary(e.target.value)}
                  className="cursor-pointer"
                />
              </label>
              <label className="flex flex-col items-center justify-center">
                <h1>Accent</h1>
                <input
                  type="color"
                  value={rgbToHex(accent)}
                  placeholder="Accent"
                  onChange={(e) => setAccent(e.target.value)}
                  className="cursor-pointer"
                />
              </label>
            </div>
            <button
              className="w-full p-2 font-bold bg-red-400 rounded-full cursor-pointer"
              onClick={() => handlerRandomColor()}
            >
              Ramdom Color
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Customcolor;
