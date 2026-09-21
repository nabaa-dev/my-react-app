import skillsImage from "../assets/profile.jpg";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "FastAPI",
    "REST APIs",
    "SQL",
    "Git",
    "GitHub",
    "Responsive Web Development",
    "Deployment"
  ];

  return (
    <section className="skills" id="skills">
      <h2>{t('skills.title')}</h2>

      <p className="skills-text">
        {t('skills.description')}
      </p>

      <div className="skills-container">
        <div className="skills-list">
          {skills.map((skill) => (
            <div key={skill} className="skill-card">
              <span className="skill-name">{skill}</span>
            </div>
          ))}
        </div>

        {skillsImage && (
          <div className="skills-image">
            <div className="skills-img-card">
              <div className="img-skills-backdrop"></div>
              <div className="img-geometric-line top-line"></div>
              <div className="img-geometric-line bottom-line"></div>
              <img src={skillsImage} alt={t('skills.imgAlt')} className="framed-img" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;