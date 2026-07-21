import "../App.css";
import skillsImage from "../assets/profile.jpg";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>مهاراتي</h2>

      <p className="skills-text">
        أمتلك أساسًا قويًا في تطوير واجهات الويب باستخدام التقنيات الحديثة،
        وأسعى باستمرار إلى تطوير مهاراتي وبناء مشاريع احترافية، مع التركيز
        على كتابة كود منظم، تصميم واجهات متجاوبة، وتقديم تجربة مستخدم مميزة.
      </p>

      <div className="skills-list">
        <span>HTML5</span>
        <span>CSS3</span>
        <span>JavaScript</span>
        <span>React</span>
        <span>Responsive Design</span>
        <span>Git</span>
        <span>GitHub</span>
        <span>SQL</span>
        <span>VS Code</span>
        <span>Problem Solving</span>
      
      </div>
      <div className="skills-image">
  <img src={skillsImage} alt="profile" />
</div>


    </section>
  );
}

export default Skills;