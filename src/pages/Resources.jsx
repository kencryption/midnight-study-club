import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Resources = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="font-heading text-3xl mb-6">
          Browse Resources
        </h1>

        <p className="text-text-secondary">
          All shared notes, past papers, and study materials will appear here.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Resources;