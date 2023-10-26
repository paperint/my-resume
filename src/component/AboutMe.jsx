import React from "react";
import data from "../data/information";
import { Link } from "react-router-dom";

function AboutMe({ accent, secondary }) {
  return (
    <section id="aboutme">
      <article className="flex flex-col w-full max-w-6xl p-6 mx-auto gap-7">
        <h2
          className="text-4xl font-black tracking-wider underline underline-offset-4"
          style={{ color: secondary }}
        >
          About Me
        </h2>
        <p className="font-light leading-6 tracking-wider text-justify">
          {data[0].aboutme}
        </p>
        <Link
          to="https://uyzagsjpoenqdjnvtqse.supabase.co/storage/v1/object/sign/portfolio/Tanakit%20Kanakangboon%20(2).pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8vVGFuYWtpdCBLYW5ha2FuZ2Jvb24gKDIpLnBkZiIsImlhdCI6MTY5ODMwNTk0MiwiZXhwIjoxNzI5ODQxOTQyfQ.SsjMLo7bnAc2OKilONrfDTTEIYxGBcbNVUUXvvNphkA&t=2023-10-26T07%3A39%3A01.359Z"
          target="_blank"
        >
          <button
            type="button"
            className="px-16 py-3 text-xl font-bold rounded-md active:scale-90 w-fit"
            style={{ backgroundColor: accent }}
          >
            Resume
          </button>
        </Link>
      </article>
    </section>
  );
}

export default AboutMe;
