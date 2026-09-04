import profile from "../assets/profile2.jpg";

function About() {
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
          <h2>عني | About Me</h2>

          <p className="about-description">

            أنا نبأ عدنان،مبرمجة واجهات امامية
          </p>

          <p className="about-text">
            لدي شغف واهتمام بتطوير الويب و<strong>Front-End Development</strong> والتقنيات الحديثة.
            أركز على تحويل الأفكار والتصاميم إلى واجهات برمجية متجاوبة، سريعة، وأنيقة تقدم أفضل تجربة مستخدم ممكنة،وسلسة تعمل بكفاءواهتم بكتابة كود منظم وقابل للتطوير مع التركيز على تجربة المستخدم اطمح باستمرار الى تطوير خبرتي في تقنيات الويب
            وبناء مشاريع ويب احترافية تعكس مهاراتي وشغفي بالبرمجة
            ومواكبة أحدث أدوات التكنولوجيا وحلول البرمجة.
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
      </div>
    </section>
  );
}

export default About;