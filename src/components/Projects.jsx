import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projectList = [
    {
      title: "Portfolio Website",
      desc: "موقع شخصي احترافي تم بناؤه وتطويره باستخدام React وCSS، متجاوب بالكامل مع كافة الشاشات ويدعم الوضعين الليلي والنهاري.",
      tags: ["React", "CSS3", "JavaScript", "Responsive Design"],
      demoLink: "#hero",
      codeLink: "https://github.com/Nabaa-dev",
    },
    {
      title: "قريباً...",
      desc: "يجري العمل حالياً على بناء تطبيقات ويب تفاعلية إضافية، وسيتم نشرها وربطها برمز المصدر قريباً.",
      tags: ["React", "Web Development", "In Progress"],
      codeLink: "https://github.com/Nabaa-dev",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>مشاريعي</h2>
      <p className="projects-subtitle">
        نماذج من أعمالي ومشاريعي البرمجية التي أعمل على تطويرها
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
                  <FaExternalLinkAlt /> عرض المشروع
                </a>
              )}
              {project.codeLink && (
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn code-btn"
                >
                  <FaGithub /> كود المشروع
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