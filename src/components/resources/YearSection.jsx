import { useState } from "react";
import TrimesterSection from "./TrimesterSection";

const YearSection = ({ yearData }) => {

  const [open, setOpen] = useState(false);

  return (
    <div className="bg-surface rounded-xl">

      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex justify-between items-center font-ui text-lg hover:bg-surface-hover rounded-xl"
      >
        {yearData.year}
        <span>{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="px-6 pb-6 space-y-4">

          {yearData.trimesters.map((tri) => (
            <TrimesterSection key={tri.name} trimester={tri} />
          ))}

        </div>
      )}

    </div>
  );
};

export default YearSection;