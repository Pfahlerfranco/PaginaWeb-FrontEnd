import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="navbar-container">

      <NavLink to="/" className="logo" onClick={closeMenu}>
        <span>&lt;</span>FP<span>/&gt;</span>
      </NavLink>

      {/* HAMBURGER BUTTON */}
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* MOBILE OVERLAY */}
      {isOpen && <div className="nav-overlay" onClick={closeMenu} />}

      {/* NAV LINKS */}
      <nav className={`nav-links ${isOpen ? "open" : ""}`}>

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={closeMenu}
        >
          Inicio
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={closeMenu}
        >
          Sobre mí
        </NavLink>

        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={closeMenu}
        >
          Portfolio
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={closeMenu}
        >
          Contacto
        </NavLink>

      </nav>

    </div>
  );
}