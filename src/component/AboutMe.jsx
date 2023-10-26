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
        <p className="font-light leading-6 tracking-wider text-justify hyphens-auto [word-spacing:-2px]">
          {" "}
          {data[0].aboutme}{" "}
        </p>
        <Link
          to="https://uyzagsjpoenqdjnvtqse.supabase.co/storage/v1/object/sign/portfolio/TanakitResume?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8vVGFuYWtpdFJlc3VtZSIsImlhdCI6MTY5ODMwNzQzMywiZXhwIjoxNzI5ODQzNDMzfQ.QhnF7J9HW_kkW3CPJ89IsV3kpTSN7EOI9uW831ddRqg&t=2023-10-26T08%3A03%3A52.628Z"
          target="_blank"
          className="w-fit"
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
