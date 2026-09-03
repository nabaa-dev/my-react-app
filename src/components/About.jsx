import profile from "../assets/profile2.jpg";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2>عني</h2>
          <p className="about-description">
            أنا نبأ عدنان، خريجة دبلوم تقنيات أنظمة الحاسوب وبكالوريوس هندسة تقنيات الحاسوب. 
            شغوفة بتطوير واجهات الويب الحديثة وأسعى إلى بناء مواقع سريعة، متجاوبة، وسهلة الاستخدام.
          </p>

          <div className="about-info">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <strong>الموقع:</strong>
                <span> بغداد - العراق</span>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🎓</span>
              <div>
                <strong>التخصص:</strong>
                <span> هندسة تقنيات الحاسوب</span>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">💻</span>
              <div>
                <strong>المجال:</strong>
                <span> Front-End Developer</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-image">
          <img src={profile} alt="نبأ عدنان" />
        </div>
      </div>
    </section>
  );
}

export default About;