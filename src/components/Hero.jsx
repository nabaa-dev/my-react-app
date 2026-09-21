import profile from "../assets/profile_main.jpg";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t, i18n } = useTranslation();
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-badge">{t('hero.badge')}</span>
          <h1 className="hero-title">{t('hero.name')}</h1>
          <h2 className="hero-subtitle">{t('hero.job')}</h2>
          
          <div className="hero-qualifications">
            <p className={`degree-${i18n.language}`}>{t('hero.degree')}</p>
          </div>

          <p className="hero-bio">
            {t('hero.bio')}
          </p>

          <div className="buttons">
            <a href="#contact" className="btn btn-primary">
              {t('hero.contactBtn')}
            </a>
            <a href="#projects" className="btn btn-secondary">
              {t('hero.projectsBtn')}
            </a>
            <a href="#about" className="btn btn-outline">
              {t('hero.aboutBtn')}
            </a>
          </div>
        </div>

        <div className="hero-img">
          <div className="hero-img-card">
            <div className="img-glow-backdrop"></div>
            <div className="img-decorative-line"></div>
            <div className="img-corner-accent top-accent"></div>
            <div className="img-corner-accent bottom-accent"></div>
            <img src={profile} alt="نبأ عدنان - Nabaa Adnan" className="framed-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;