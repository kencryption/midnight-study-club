import React from "react";
import GradientBlobs from "./GradientBlobs";

const HowItWorks = () => {
  return (
    <section className="py-24">

        <GradientBlobs />

      <div className="max-w-6xl mx-auto px-6 text-center    ">

        <h2 className="font-heading text-3xl mb-4">
          How It Works
        </h2>

        <p className="text-text-secondary mb-16">
          Find, download, and share study resources with the Midnight Study Club community.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-surface p-8 rounded-xl hover:bg-surface-hover transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-6 bg-accent text-white font-ui">
              1
            </div>

            <h3 className="font-ui text-lg mb-2">
              Browse Resources
            </h3>

            <p className="text-text-secondary text-sm">
              Explore notes, past papers, and study guides organized by course.
            </p>
          </div>

          <div className="bg-surface p-8 rounded-xl hover:bg-surface-hover transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-6 bg-accent text-white font-ui">
              2
            </div>

            <h3 className="font-ui text-lg mb-2">
              Download & Study
            </h3>

            <p className="text-text-secondary text-sm">
              Access high-quality resources shared by students.
            </p>
          </div>

          <div className="bg-surface p-8 rounded-xl hover:bg-surface-hover transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-6 bg-accent text-white font-ui">
              3
            </div>

            <h3 className="font-ui text-lg mb-2">
              Contribute
            </h3>

            <p className="text-text-secondary text-sm">
              Upload your own notes and help the Midnight Study Club community grow.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;