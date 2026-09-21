import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>{t('footer.title')}</h3>
        <p className="footer-tagline">
          {t('footer.tagline')}
        </p>
        <div className="footer-links">
          <a href="#hero">{t('footer.home')}</a>
          <a href="#about">{t('footer.about')}</a>
          <a href="#skills">{t('footer.skills')}</a>
          <a href="#projects">{t('footer.projects')}</a>
          <a href="#contact">{t('footer.contact')}</a>
        </div>
        <p className="footer-copy">
          {t('footer.copy', { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}

export default Footer;