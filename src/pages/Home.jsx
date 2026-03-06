import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";
import UploadModal from "../components/UploadModal";

const Home = () => {
  const [uploadOpen, setUploadOpen] = useState(false);

  return (
    <>
      <Navbar openUpload={() => setUploadOpen(true)} />

      <Hero openUpload={() => setUploadOpen(true)} />

      <HowItWorks />

      <Footer openUpload={() => setUploadOpen(true)} />

      <UploadModal
        isOpen={uploadOpen}
        onClose={() => setUploadOpen(false)}
      />
    </>
  );
};

export default Home;