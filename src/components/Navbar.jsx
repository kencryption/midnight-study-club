import React, { useState } from "react";
import assets from "../assets/assets";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-ui bg-background text-text border-b border-accent">
        {/* Logo */}
        <img
          src={assets.logo}
          className="logo-glow w-32 sm:w-40 object-contain"
          alt="Midnight Study Club"
        />

        {/* Navigation */}
        <div className="ml-auto mr-8 hidden sm:flex items-center gap-5 text-text font-ui sm:text-sm">
          <a
            href="#"
            className="nav-link sm:hover:border-b sm:hover:border-accent"
          >
            Home
          </a>
          <a
            href="#resources"
            className="nav-link sm:hover:border-b sm:hover:border-accent"
          >
            Resources
          </a>
        </div>

        {/* Upload Button */}
        <a
          href="#upload"
          className="text-sm hidden sm:flex items-center gap-2 bg-accent text-white font-ui px-6 py-2 rounded-full cursor-pointer hover:scale-105 hover:shadow-[0_0_12px_var(--color-accent-glow)] transition-all duration-200"
        >
          Upload
        </a>

        {/* Hamburger Menu */}
        <button
          onClick={() => setMenuOpen(true)}
          className="sm:hidden ml-4 text-2xl text-accent"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-60 bg-surface pt-20 pl-10 pr-10 flex flex-col gap-6 text-text transition-transform duration-300 z-30 shadow-xl ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-2xl text-accent"
        >
          ✕
        </button>

        <a
          href="#"
          className="nav-link w-full text-center"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>

        <a
          href="#resources"
          className="nav-link w-full text-center"
          onClick={() => setMenuOpen(false)}
        >
          Resources
        </a>

        <a
          href="#upload"
          className="bg-accent text-white px-6 py-2 rounded-full w-full text-center"
          onClick={() => setMenuOpen(false)}
        >
          Upload
        </a>
      </div>
    </>
  );
};

export default Navbar;
