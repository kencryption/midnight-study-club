import React from "react";
import { Link } from "react-router-dom";
import GradientBlobs from "./GradientBlobs";

const Hero = ({ openUpload }) => {
  return (
    <section className="relative flex justify-center py-40 overflow-hidden">

      <GradientBlobs />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="font-heading text-5xl text-text">
          Midnight Study Club
        </h1>

        <p className="mt-6 text-text-secondary text-lg">
          The first rule of M******* S**** C*** is you do not
          <br />
          talk about M******* S**** C***.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <Link to="/resources" className="btn-primary">
            Browse Resources
          </Link>

          <button onClick={openUpload} className="btn-secondary">
            Upload Notes
          </button>

        </div>
      </div>
    </section>
  );
};

export default Hero;