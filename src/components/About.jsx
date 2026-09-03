import profile from "../assets/profile2.jpg";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2>عني | About Me</h2>
          
          <p className="about-description">
            أنا نبأ عدنان، <strong>خريجة دبلوم أنظمة تقنيات الحاسوب وبكالوريوس هندسة تقنيات الحاسوب</strong>.
          </p>
          <p className="about-description-en">
            <em>Diploma Graduate in Computer Systems Techniques & Bachelor’s Degree in Computer Engineering Techniques</em>
          </p>
          <p className="about-text">
            لدي شغف كبير واهتمام عميق بتطوير الويب و<strong>Front-End Development</strong> والتقنيات الحديثة. 
            أركز على تحويل الأفكار والتصاميم إلى واجهات برمجية متجاوبة، سريعة، وأنيقة تقدم أفضل تجربة مستخدم ممكنة، 
            مع استمرار التعلم ومواكبة أحدث أدوات التكنولوجيا وحلول البرمجة.
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
                <strong>المؤهل الأكاديمي:</strong>
                <span> دبلوم تقنيات أنظمة الحاسوب + بكالوريوس هندسة تقنيات الحاسوب</span>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">💻</span>
              <div>
                <strong>المجال والاهتمام:</strong>
                <span> Front-End Web Development & Technology</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-image">
          <img src={profile} alt="نبأ عدنان - Nabaa Adnan" />
        </div>
      </div>
    </section>
  );
}

export default About;