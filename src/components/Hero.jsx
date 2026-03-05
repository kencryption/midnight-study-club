import React from "react";
import CursorGlow from "./CursorGlow";
import GradientBlobs from "./GradientBlobs";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-start justify-center pt-40 overflow-hidden">
      
      <GradientBlobs />

      <CursorGlow />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="font-heading text-5xl text-text">Midnight Study Club</h1>

        <p className="mt-6 text-text-secondary text-lg">
          The first rule of M******* S**** C*** is you do not
          <br />
          talk about M******* S**** C***.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#resources" className="btn-primary">
            Browse Resources
          </a>

          <a href="#upload" className="btn-secondary">
            Upload Notes
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
