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
          to="https://uyzagsjpoenqdjnvtqse.supabase.co/storage/v1/object/sign/portfolio/Tanakit%20Kanakangboon.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8vVGFuYWtpdCBLYW5ha2FuZ2Jvb24ucGRmIiwiaWF0IjoxNjk3NzA4NzczLCJleHAiOjE3MjkyNDQ3NzN9.-xkuYxMFUGFdr-bi4IQ1R-yNc0nPfh8nBPZyL8nLa0U&t=2023-10-19T09%3A46%3A14.855Z"
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
