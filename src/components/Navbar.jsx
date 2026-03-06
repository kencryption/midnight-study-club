import React, { useState } from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";

const Navbar = ({ openUpload }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 font-ui bg-background text-text border-b border-accent">

        {/* Logo */}
        <Link to="/" onClick={scrollHome}>
          <img
            src={assets.logo}
            className="logo-glow w-20 sm:w-28 object-contain cursor-pointer"
            alt="Midnight Study Club"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="ml-auto mr-8 hidden sm:flex items-center gap-5 text-text font-ui sm:text-sm">
          <Link
            to="/"
            onClick={scrollHome}
            className="nav-link sm:hover:border-b sm:hover:border-accent"
          >
            Home
          </Link>

          <Link
            to="/resources"
            className="nav-link sm:hover:border-b sm:hover:border-accent"
          >
            Resources
          </Link>
        </div>

        {/* Upload Button */}
        <button
          onClick={openUpload}
          className="btn-primary btn-navbar max-sm:hidden"
        >
          Upload
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="sm:hidden ml-4 text-2xl text-accent"
        >
          ☰
        </button>
      </div>

      {/* Background overlay */}
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
          className="absolute top-10 right-5 text-2xl text-accent"
        >
          ✕
        </button>

        {/* Mobile Home */}
        <Link
          to="/"
          className="nav-link w-full text-center"
          onClick={() => {
            setMenuOpen(false);
            scrollHome();
          }}
        >
          Home
        </Link>

        {/* Mobile Resources */}
        <Link
          to="/resources"
          className="nav-link w-full text-center"
          onClick={() => setMenuOpen(false)}
        >
          Resources
        </Link>

        {/* Mobile Upload */}
        <button
          onClick={() => {
            setMenuOpen(false);
            openUpload();
          }}
          className="btn-primary w-full text-center"
        >
          Upload
        </button>
      </div>
    </>
  );
};

export default Navbar;