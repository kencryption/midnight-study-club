import { Routes, Route } from "react-router-dom";
import CursorGlow from "./components/CursorGlow";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Resources from "./pages/Resources";

const App = () => {
  return (
    <>
      <CursorGlow />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </>
  );
};

export default App;