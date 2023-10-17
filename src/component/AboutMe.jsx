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
          to="https://uyzagsjpoenqdjnvtqse.supabase.co/storage/v1/object/sign/portfolio/Resume_Tanakit.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8vUmVzdW1lX1RhbmFraXQucGRmIiwiaWF0IjoxNjk3NTY1OTcxLCJleHAiOjE3MjkxMDE5NzF9.7Qc14zzfdJI8YapWvTu-T6QRrVoZkA8s-llh6aLs95o&t=2023-10-17T18%3A06%3A12.013Z"
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
