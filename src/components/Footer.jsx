import { Link } from "react-router-dom";

const Footer = ({ openUpload }) => {

  const scrollHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative mt-24 bg-surface border-t border-[#1c1c1f] overflow-hidden">

      {/* Accent Glow Divider */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-accent opacity-70 blur-[1px]" />

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="w-[600px] h-[300px] bg-accent opacity-10 blur-[120px] rounded-full translate-y-24"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* Brand */}
          <div className="max-w-sm">
            <Link to="/" onClick={scrollHome} className="inline-block">
              <h3 className="font-heading text-xl mb-4 logo-glow cursor-pointer">
                Midnight Study Club
              </h3>
            </Link>

            <p className="text-text-secondary text-sm">
              A collaborative platform where students share resources and survive finals together.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-left md:text-right">
            <h4 className="font-ui mb-4 text-text">Navigate</h4>

            <ul className="space-y-2 text-text-secondary text-sm">

              <li>
                <Link
                  to="/"
                  onClick={scrollHome}
                  className="nav-link hover:text-accent transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/resources"
                  className="nav-link hover:text-accent transition-colors"
                >
                  Browse Resources
                </Link>
              </li>

              <li>
                <button
                  onClick={openUpload}
                  className="nav-link hover:text-accent transition-colors"
                >
                  Upload
                </button>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-[#1c1c1f] mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-text-muted text-sm">

          <p>© {new Date().getFullYear()} Midnight Study Club</p>

          <p className="mt-3 md:mt-0 hover:text-accent transition-colors">
            Built for students, by students
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;