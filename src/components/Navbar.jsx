import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Navbar({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsHidden(false);
        return;
      }

      if (window.scrollY > 20) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    localStorage.setItem("appLanguage", newLang);
  };

  return (
    <header className={`header-nav ${isHidden ? "navbar-hidden" : ""}`}>
      <nav className="navbar">
        <div className="logo">
          <a href="#hero">
            <h2>{i18n.language === 'ar' ? 'نبأ عدنان' : 'Nabaa Adnan'}</h2>
          </a>
        </div>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#hero" onClick={handleLinkClick}>{t('navbar.home')}</a>
          </li>
          <li>
            <a href="#about" onClick={handleLinkClick}>{t('navbar.about')}</a>
          </li>
          <li>
            <a href="#skills" onClick={handleLinkClick}>{t('navbar.skills')}</a>
          </li>
          <li>
            <a href="#projects" onClick={handleLinkClick}>{t('navbar.projects')}</a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>{t('navbar.contact')}</a>
          </li>
        </ul>

        <div className="nav-actions">
          <button
            className="lang-btn"
            onClick={toggleLanguage}
            title="تغيير اللغة | Change Language"
            aria-label="تغيير اللغة"
            style={{ 
              background: 'transparent', 
              border: '1px solid var(--border)', 
              color: 'var(--text-h)', 
              borderRadius: '8px',
              padding: '6px 12px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: '14px',
              marginRight: i18n.language === 'en' ? '8px' : '0',
              marginLeft: i18n.language === 'ar' ? '8px' : '0'
            }}
          >
            {i18n.language === "ar" ? "English" : "العربية"}
          </button>

          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
            title={darkMode ? t('navbar.lightMode') : t('navbar.darkMode')}
            aria-label="تبديل المظهر"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={t('navbar.toggleMenu')}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;