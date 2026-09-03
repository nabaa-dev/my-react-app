import skillsImage from "../assets/profile.jpg";

function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Responsive Design",
    "Git",
    "GitHub",
    "SQL",
    "VS Code",
    "Problem Solving",
  ];

  return (
    <section className="skills" id="skills">
      <h2>مهاراتي</h2>

      <p className="skills-text">
        أمتلك أساساً قوياً في تطوير واجهات الويب باستخدام التقنيات الحديثة،
        وأسعى باستمرار إلى تطوير مهاراتي وبناء مشاريع احترافية، مع التركيز
        على كتابة كود منظم، تصميم واجهات متجاوبة، وتقديم تجربة مستخدم مميزة.
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
              <img src={skillsImage} alt="نبأ عدنان - مهارات البرمجة والتطوير" className="framed-img" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;