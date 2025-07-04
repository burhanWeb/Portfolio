import React from "react";
import logo from "../assets/images/logo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} width="80" height="80" alt="Logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-6 text-2xl">
        <a
          href="https://github.com/burhanWeb"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-400 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/burhan-sidiq-aaab8b2a7/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-400 transition-colors"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
