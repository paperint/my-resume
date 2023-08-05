import React from "react";
import data from "../data/information";

function Main({ accent, secondary }) {
  return (
    <main>
      <div className="flex flex-col items-start justify-center gap-10 px-10 mx-auto my-20 max-w-screen-2xl sm:flex-row md:px-40">
        <div className="flex flex-col flex-1 w-1/4 h-full p-2 space-y-20 max-sm:order-2">
          <div className="space-y-5">
            <h1
              className="text-2xl font-extrabold tracking-wider"
              style={{ color: accent }}
            >
              Skillset
            </h1>
            <ul>
              {data[0].skill.map((item, index) => (
                <li key={index} className="leading-7 tracking-widest">
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
              Certificates
            </h1>
            <ul>
              {data[0].certificate.map((item, index) => (
                <li
                  key={index}
                  className="leading-9 tracking-widest border-b-4 border-black rounded-b-sm w-fit border-opacity-40"
                >
                  <a href={item.link} target="_blank">
                    {item.title}
                  </a>
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
                  className="leading-9 tracking-widest border-b-4 border-black rounded-b-sm w-fit border-opacity-40"
                >
                  <a href={item.link} target="_blank">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full sm:w-2/4 flex flex-col space-y-12 flex-[2]">
          <div>
            <h1 className="text-2xl font-extrabold tracking-wider">About Me</h1>
            <p className="font-light leading-6 tracking-wider">
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
                  <p className="font-bold leading-6 tracking-wider">
                    {item.company} - <span> {item.position} </span>
                  </p>
                  <p className="font-bold leading-6 tracking-wider">
                    {item.date}
                  </p>
                </div>
                <div>
                  <p className="font-light leading-6 tracking-wider">
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
