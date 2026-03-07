import { useState } from "react";

import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import UploadModal from "../components/UploadModal";

const Home = () => {
  const [uploadOpen, setUploadOpen] = useState(false);

  const openUpload = () => setUploadOpen(true);
  const closeUpload = () => setUploadOpen(false);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">

      <main className="flex-grow">
        <Hero openUpload={openUpload} />
        <HowItWorks />
      </main>

      <UploadModal
        isOpen={uploadOpen}
        onClose={closeUpload}
      />

    </div>
  );
};

export default Home;