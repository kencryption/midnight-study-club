import { useState } from "react";
import SubjectCard from "./SubjectCard";

const TrimesterSection = ({ trimester }) => {

  const [open, setOpen] = useState(false);

  return (
    <div>

      {/* Trimester Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left bg-background border border-[#1c1c1f] rounded-lg px-4 py-3 flex justify-between items-center hover:border-accent transition"
      >
        {trimester.name}
        <span>{open ? "−" : "+"}</span>
      </button>

      {/* Content */}
      {open && (
        <div className="mt-4">

          {trimester.subjects.length === 0 ? (

            <div className="text-text-muted text-sm italic border border-dashed border-[#1c1c1f] rounded-lg p-4">
              No resources uploaded yet
            </div>

          ) : (

            <div className="grid md:grid-cols-3 gap-4">

              {[...trimester.subjects]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((subject) => (
                  <SubjectCard
                    key={subject.name}
                    subject={subject}
                  />
                ))}

            </div>

          )}

        </div>
      )}

    </div>
  );
};

export default TrimesterSection;