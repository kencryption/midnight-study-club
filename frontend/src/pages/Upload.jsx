import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Upload = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="font-heading text-3xl mb-6">
          Upload Resource
        </h1>

        <p className="text-text-secondary">
          Share your notes and help other students.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Upload;