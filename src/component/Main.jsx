import React from "react";
import data from "../data/information";

function Main({ accent, secondary }) {
  return (
    <main>
      <div className="flex justify-center items-start flex-col sm:flex-row gap-10 my-20 px-10 md:px-40">
        <div className="w-1/4 flex flex-col flex-1 h-full space-y-20 p-2 max-sm:order-2">
          <div className="space-y-5">
            <h1
              className="text-2xl font-extrabold tracking-wider"
              style={{ color: accent }}
            >
              Skillset
            </h1>
            <ul>
              {data[0].skill.map((item, index) => (
                <li key={index} className="tracking-widest leading-7">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            <h1
              className="text-2xl font-extrabold tracking-wider"
              style={{ color: accent }}
            >
              Recent Works
            </h1>
            <ul>
              {data[0].recentwork.map((item, index) => (
                <li
                  key={index}
                  className="tracking-widest leading-9 border-b-4 w-fit rounded-b-sm border-black border-opacity-40"
                >
                  <a href={item.link} target="_blank">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-2/4 flex flex-col space-y-12 flex-[2]">
          <div>
            <h1 className="text-2xl font-extrabold tracking-wider">About Me</h1>
            <p className="font-light tracking-wider leading-6">
              {data[0].aboutme}
            </p>
          </div>
          <div
            className={`inline-block w-16 h-3 rounded-md`}
            style={{ backgroundColor: secondary }}
          ></div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-wider">
              Experience
            </h1>
            {data[0].experience.map((item) => (
              <div key={item.id} className="mb-12 last:mb-0">
                <div className="flex justify-between" style={{ color: accent }}>
                  <p className="font-bold tracking-wider leading-6">
                    {item.company} - <span> {item.position} </span>
                  </p>
                  <p className="font-bold tracking-wider leading-6">
                    {item.date}
                  </p>
                </div>
                <div>
                  <p className="font-light tracking-wider leading-6">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            className={`inline-block w-16 h-3 rounded-md`}
            style={{ backgroundColor: secondary }}
          ></div>
          <div className="space-y-5">
            <h1 className="text-2xl font-extrabold tracking-wider">
              Education
            </h1>
            <div className="flex justify-between font-medium">
              <p> {data[0].education[0].faculty} </p>
              <p> {data[0].education[0].graduated} </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
