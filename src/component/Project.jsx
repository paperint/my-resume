import React, { useContext } from "react";
import data from "../data/information";
import { ThemeContext } from "../Context/themeContext";
import Customcolor from "./Customcolor";
import { useNavigate } from "react-router-dom";

function Project() {
  const navigate = useNavigate();
  const context = useContext(ThemeContext);
  const { primary, accent, secondary } = context;
  return (
    <section className="relative w-full py-12" style={{ backgroundColor: primary }}>
      <Customcolor />
      <button onClick={() => navigate("/")} className="absolute px-4 py-2 text-xl font-medium tracking-widest bg-white top-5 rounded-3xl right-5" >
        Home
      </button>
      <div className="w-full mx-auto max-w-7xl">
        <div>
          <h1 className="text-5xl font-extrabold text-center">Recent Works</h1>
        </div>
        <div className="grid grid-cols-1 gap-10 p-6 lg:grid-cols-3">
          {data[0].recentwork.map((item, index) => (
            <div
              key={index}
              className="w-full p-2 rounded-lg"
              style={{ backgroundColor: accent }}
            >
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full rounded-lg h-60"
                />
              </div>
              <div className="flex flex-col justify-center gap-4 px-5 my-5">
                <p>
                  Project : <span className="font-bold "> {item.title} </span>
                </p>
                <div
                  className="flex gap-6 font-bold underline"
                  style={{ color: secondary }}
                >
                  <p>
                    <a href={item.link} target="_blank">
                      Github
                    </a>
                  </p>
                  <p>
                    <a href={item.live} target="_blank">
                      Preview Site
                    </a>
                  </p>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <p>Tools :</p>
                  <div className="flex flex-wrap gap-3">
                    {item.tools.map((item, index) => (
                      <p
                        key={index}
                        className="px-2 py-1 text-sm font-bold rounded-full"
                        style={{ backgroundColor: primary }}
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
