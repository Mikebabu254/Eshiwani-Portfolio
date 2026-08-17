import { useState } from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        ESHIWANI<span>.</span>
      </a>

      {/* Single toggle button with accessibility attributes */}
      <button 
        className="menu-button" 
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  );
}

export default NavBar;