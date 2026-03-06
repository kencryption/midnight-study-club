import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = ({ openUpload }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const root = document.getElementById("root");
      if (root) root.scrollTop = 0;
    } else {
      navigate("/");
    }
  };

  return (
    <footer className="relative bg-surface border-t border-[#1c1c1f] overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-[2px] bg-accent opacity-70 blur-[1px]" />

      <div className="pointer-events-none absolute inset-0 flex justify-center overflow-hidden">
        <div className="w-[260px] h-[120px] md:w-[600px] md:h-[260px] bg-accent opacity-10 blur-[120px] rounded-full translate-y-10 md:translate-y-20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-16">

        <div className="flex flex-col md:flex-row justify-between gap-10">

          <div className="max-w-sm">
            <Link to="/" onClick={handleHomeClick}>
              <h3 className="font-heading text-xl mb-4 logo-glow cursor-pointer">
                Midnight Study Club
              </h3>
            </Link>

            <p className="text-text-secondary text-sm">
              A collaborative platform where students share resources and survive finals together.
            </p>
          </div>

          <div className="text-left md:text-right">
            <h4 className="font-ui mb-4 text-text">Navigate</h4>

            <ul className="space-y-2 text-text-secondary text-sm">
              <li>
                <Link
                  to="/"
                  onClick={handleHomeClick}
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

        <div className="border-t border-[#1c1c1f] mt-8 md:mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-text-muted text-sm">
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