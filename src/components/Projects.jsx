import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  const projectList = [
    {
      title: t('projects.p1_title'),
      desc: t('projects.p1_desc'),
      tags: ["React", "CSS3", "JavaScript", "Responsive Design"],
      demoLink: "#hero",
      codeLink: "https://github.com/Nabaa-dev",
    },
    {
      title: t('projects.p2_title'),
      desc: t('projects.p2_desc'),
      tags: ["React", "Web Development", "In Progress"],
      codeLink: "https://github.com/Nabaa-dev",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>{t('projects.title')}</h2>
      <p className="projects-subtitle">
        {t('projects.subtitle')}
      </p>

      <div className="projects-container">
        {projectList.map((project, idx) => (
          <div key={idx} className="project-card">
            <div className="project-card-header">
              <h3>{project.title}</h3>
            </div>
            <p className="project-card-desc">{project.desc}</p>
            <div className="project-tags">
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} className="tag-badge">
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-buttons">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  className="project-btn demo-btn"
                >
                  <FaExternalLinkAlt /> {t('projects.demoBtn')}
                </a>
              )}
              {project.codeLink && (
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn code-btn"
                >
                  <FaGithub /> {t('projects.codeBtn')}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;