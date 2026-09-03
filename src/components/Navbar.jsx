import { useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header-nav">
      <nav className="navbar">
        <div className="logo">
          <a href="#hero">
            <h2>نبأ عدنان</h2>
          </a>
        </div>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#hero" onClick={handleLinkClick}>الرئيسية</a>
          </li>
          <li>
            <a href="#about" onClick={handleLinkClick}>عني</a>
          </li>
          <li>
            <a href="#skills" onClick={handleLinkClick}>مهاراتي</a>
          </li>
          <li>
            <a href="#projects" onClick={handleLinkClick}>مشاريعي</a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>تواصل معي</a>
          </li>
        </ul>

        <div className="nav-actions">
          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
            title={darkMode ? "الوضع النهاري" : "الوضع الليلي"}
            aria-label="تبديل المظهر"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="فتح القائمة"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;