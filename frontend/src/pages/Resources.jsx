import { useState } from "react";
import { resourcesData } from "../data/resourcesData";
import YearSection from "../components/resources/YearSection";

const Resources = () => {

  const [search, setSearch] = useState("");

  // Flatten subjects for search
  const allSubjects = [];

  resourcesData.forEach((year) => {
    year.trimesters.forEach((tri) => {
      tri.subjects.forEach((subject) => {
        allSubjects.push(subject);
      });
    });
  });

  const filteredSubjects = allSubjects.filter((subject) =>
    subject.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">

      <h1 className="font-heading text-3xl mb-4">
        Browse Resources
      </h1>

      <p className="text-text-secondary mb-8">
        Select your year and trimester or search for a subject.
      </p>

      {/* Search Bar */}

      <div className="mb-12 relative">

        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
          🔍
        </span>

        <input
          type="text"
          placeholder="Search subjects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-surface border border-[#1c1c1f] rounded-lg pl-11 pr-4 py-3 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-accent focus:shadow-[0_0_12px_rgba(255,46,136,0.25)] transition"
        />

      </div>

      {/* Search Results */}

      {search && (
        <div className="mb-12">

          <h2 className="font-ui text-lg mb-4">
            Search Results
          </h2>

          {filteredSubjects.length === 0 ? (

            <div className="text-text-muted text-sm italic border border-dashed border-[#1c1c1f] rounded-lg p-4">
              No matching subjects found
            </div>

          ) : (

            <div className="grid md:grid-cols-3 gap-4">

              {filteredSubjects.map((subject) => (
                <div
                  key={subject.name}
                  onClick={() => window.open(subject.link, "_blank")}
                  className="bg-surface-hover rounded-lg p-4 border border-[#1c1c1f] hover:border-accent transition cursor-pointer"
                >
                  {subject.name}
                </div>
              ))}

            </div>

          )}

        </div>
      )}

      {/* Default Year Navigation */}

      {!search && (
        <div className="space-y-6">

          {resourcesData.map((year) => (
            <YearSection
              key={year.year}
              yearData={year}
            />
          ))}

        </div>
      )}

    </div>
  );
};

export default Resources;