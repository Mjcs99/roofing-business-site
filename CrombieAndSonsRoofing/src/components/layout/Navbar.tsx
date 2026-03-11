import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container nav-container">
        <a href="/" className="nav-logo" onClick={closeMenu}>
          <img
            className="nav-logo-img"
            src={logo}
            alt="Crombie & Sons Roofing and Exteriors"
          />

          <div className="nav-logo-text">
            <span className="nav-logo-title">Crombie & Sons</span>
            <span className="nav-logo-subtitle">Roofing and Exteriors</span>
          </div>
        </a>

        <nav className="nav-menu" aria-label="Main navigation">
          <a href="/" className="nav-link">Home</a>
          <a href="/services" className="nav-link">Services</a>
          <a href="/financing" className="nav-link">Financing</a>
          <a href="/contact" className="nav-link">Contact</a>
        </nav>

        <div className="nav-actions">
          <a href="tel:+14035972710" className="nav-phone">
            (403) 597-2710
          </a>
          <a href="/contact" className="nav-cta">
            Free Estimate
          </a>
        </div>

        <button
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-inner">
            <a href="/" className="mobile-nav-link" onClick={closeMenu}>Home</a>
            <a href="/services" className="mobile-nav-link" onClick={closeMenu}>Services</a>
            <a href="/financing" className="mobile-nav-link" onClick={closeMenu}>Financing</a>
            <a href="/contact" className="mobile-nav-link" onClick={closeMenu}>Contact</a>

            <div className="mobile-menu-footer">
            <a href="tel:+14035972710" className="mobile-phone" onClick={closeMenu}>
                (403) 597-2710
            </a>
            <a href="/contact" className="mobile-cta" onClick={closeMenu}>
                Free Estimate
            </a>
            </div>
        </div>
      </div>
    </header>
  );
}