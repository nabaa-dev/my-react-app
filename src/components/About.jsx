import profile from "../assets/profile2.jpg";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <div className="about-img-card">
            <div className="img-depth-backdrop"></div>
            <div className="img-frame-accent"></div>
            <img src={profile} alt="نبأ عدنان - Nabaa Adnan" className="framed-img" />
          </div>
        </div>

        <div className="about-content">
          <h2>{t('about.title')}</h2>

          <p className="about-description">
            {t('about.intro')}
          </p>

          <p className="about-text">
            {t('about.description')}
          </p>

          <div className="about-info">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <strong>{t('about.locationLabel')}</strong>
                <span> {t('about.locationValue')}</span>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🎓</span>
              <div>
                <strong>{t('about.degreeLabel')}</strong>
                <span> {t('about.degreeValue')}</span>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">💻</span>
              <div>
                <strong>{t('about.interestLabel')}</strong>
                <span> {t('about.interestValue')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;