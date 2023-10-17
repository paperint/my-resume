import React from "react";
import skillset from "../data/skillset";

function Skills({ accent, secondary }) {
  return (
    <section id="skill">
      <article className="flex flex-col w-full max-w-6xl p-6 mx-auto gap-7">
        <h2
          className="text-4xl font-black tracking-wider underline underline-offset-4"
          style={{ color: secondary }}
        >
          Skills
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {skillset.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-5 p-4 border-2 rounded-lg shadow-xl"
              style={{ borderColor: accent }}
            >
              <p className="text-xl font-medium"> {item.title} </p>
              <ul className="flex flex-wrap items-center justify-center gap-8">
                {item.skills.map((item, index) => (
                  <li key={index}>
                    <img
                      src={item.image}
                      alt={item.lang}
                      className="w-16 h-16 mb-4"
                    />
                    <p className="text-sm text-center"> {item.lang} </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default Skills;
