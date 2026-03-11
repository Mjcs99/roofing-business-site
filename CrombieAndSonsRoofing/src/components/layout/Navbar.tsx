import "./Navbar.css";
import logo from "../../assets/logo.png"
export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-container">
        <a href="/" className="nav-logo">
          
          <img className="nav-logo-img" src={logo}></img>
          
          <div className="nav-logo-text">
            <span className="nav-logo-title">Crombie & Sons</span>
            <span className="nav-logo-subtitle">Roofing and Exteriors</span>
          </div>
        </a>

        <nav className="nav-menu" aria-label="Main navigation">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/services" className="nav-link">
            Services
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="/financing" className="nav-link">
            Financing
          </a>
          <a href="/contact" className="nav-link">
            Contact
          </a>
        </nav>

        <div className="nav-actions">
          <a href="tel:+14035972710" className="nav-phone">
            (403) 597-2710
          </a>
          <a href="/contact" className="nav-cta">
            Free Estimate
          </a>
        </div>
      </div>
    </header>
  );
}