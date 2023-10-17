import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/information";
import { ThemeContext } from "../Context/themeContext";
import useConvertRgb from "../hook/useConvertRgb";

function Portfolio() {
  const navigate = useNavigate();
  const { extractRgbValues } = useConvertRgb();
  const context = useContext(ThemeContext);
  const { accent, secondary } = context;
  const { r, g, b } = extractRgbValues(accent);

  const divStyle = {
    boxShadow:
      `5px 5px 0px 0px rgba(${r}, ${g}, ${b}, 0.5), ` +
      `10px 10px 0px 0px rgba(${r}, ${g}, ${b}, 0.3), ` +
      `15px 15px 0px 0px rgba(${r}, ${g}, ${b}, 0.2), ` +
      `20px 20px 0px 0px rgba(${r}, ${g}, ${b}, 0.1), ` +
      `25px 25px 0px 0px rgba(${r}, ${g}, ${b}, 0.05)`,
  };

  return (
    <section id="portfolio" className="w-full p-6 mx-auto max-w-7xl">
      <article>
        <h2
          className="w-full max-w-6xl p-6 mx-auto text-4xl font-black tracking-wider underline underline-offset-4"
          style={{ color: secondary }}
        >
          Portfolio
        </h2>
        {data[0].recentwork
          .filter((item, index) => index < 5)
          .map((item, index) => (
            <div
              className="flex flex-col justify-center w-full max-w-6xl p-6 mx-auto gap-9 md:flex-row md:gap-28"
              key={index}
            >
              {/* image */}
              <div style={divStyle} className="flex-1 rounded-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover object-top w-full rounded-md h-72 hover:object-scale-down"
                />
              </div>
              {/* detail */}
              <div className="flex flex-col justify-between flex-1 min-h-full gap-4 md:gap-0 md:py-4">
                <h3
                  className="text-4xl font-extrabold tracking-widest"
                  style={{ color: secondary }}
                >
                  Project {index + 1}
                </h3>
                <div>
                  <p className="mb-2 text-xl font-medium ">
                    Project: {item.title}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <p className="underline underline-offset-2">
                      <a href={item.link} target="_blank">
                        Github
                      </a>
                    </p>
                    <p className="underline underline-offset-2">
                      <a href={item.live} target="_blank">
                        Deploy live
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-lg font-medium">Techstack :</p>
                  <ul className="flex flex-wrap gap-2 text-sm">
                    {item.tools.map((item, index) => (
                      <li
                        key={index}
                        className="pr-2 border-r-2 last:border-none"
                        style={{ borderColor: secondary }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        <div className="flex items-center justify-center w-full my-10">
          <button
            onClick={() => navigate("/Recentworks")}
            className="px-4 py-2 text-sm font-bold text-center rounded-md active:scale-95"
            style={{ backgroundColor: accent }}
          >
            View More
          </button>
        </div>
      </article>
    </section>
  );
}

export default Portfolio;
