import React, { useState } from "react";
import logo from "../assets/images/logo.svg";

import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburger = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link>
              <img src={logo} alt="" />
            </Link>

            <button type="button" className="nav-btn" onClick={handleHamburger}>
              <FaAlignRight />
            </button>
          </div>
          <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
