import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import CursorGlow from "./components/CursorGlow";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UploadModal from "./components/UploadModal";

import Home from "./pages/Home";
import Resources from "./pages/Resources";

const App = () => {
  const [uploadOpen, setUploadOpen] = useState(false);

  const openUpload = () => setUploadOpen(true);
  const closeUpload = () => setUploadOpen(false);

  return (
    <>
      <CursorGlow />
      <ScrollToTop />

      <Navbar openUpload={openUpload} />

      <Routes>
        <Route path="/" element={<Home openUpload={openUpload} />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>

      <Footer openUpload={openUpload} />

      <UploadModal
        isOpen={uploadOpen}
        onClose={closeUpload}
      />
    </>
  );
};

export default App;