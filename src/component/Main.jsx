import React from "react";
import data from "../data/information";
import { useNavigate } from "react-router-dom";

function Main({ accent, secondary }) {
  const navigate = useNavigate();
  return (
    <main>
      <div className="flex flex-col items-start justify-center gap-10 px-10 mx-auto my-20 max-w-screen-2xl sm:flex-row md:px-40">
        <div className="flex flex-col flex-1 w-full h-full p-2 space-y-20 sm:w-1/4 max-sm:order-2">
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
              {data[0].recentwork
                .filter((item, index) => index < 5)
                .map((item, index) => (
                  <li
                    key={index}
                    className="leading-9 tracking-widest border-b-4 border-black rounded-b-sm w-fit border-opacity-40"
                  >
                    <a href={item.link} target="_blank">
                      {item.title}
                    </a>
                  </li>
                ))}
              <li className="font-extrabold leading-9 tracking-widest border-b-4 border-black rounded-b-sm w-fit border-opacity-40">
                <button onClick={() => navigate("/Recentworks")}>
                  See More
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full sm:w-2/4 flex flex-col space-y-12 flex-[2]">
          <div>
            <h1 className="text-2xl font-extrabold tracking-wider">About Me</h1>
            <p className="font-light leading-6 tracking-wider text-justify">
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
                <div
                  className="flex justify-between w-full"
                  style={{ color: accent }}
                >
                  <p className="inline-flex flex-wrap items-center gap-2 font-bold leading-6 tracking-wider ">
                    {item.company} - <span> {item.position} </span>
                  </p>
                  <p className="font-bold leading-6 tracking-wider">
                    {item.date}
                  </p>
                </div>
                <div className="mt-2">
                  <ul className="ml-4 list-disc">
                    {item.description.map((item, index) => (
                      <li key={index}>
                        <p className="font-light leading-6 tracking-wider text-justify">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
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
            {data[0].education.map((item, index) => (
              <div key={index} className="flex justify-between font-medium">
                <p> {item.faculty} </p>
                <p> {item.graduated} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
