import profile from "../assets/profile.png";

function Hero({ name, job, degreeAr, degreeEn }) {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-badge">مرحباً بك في موقعي الشخصي</span>
          <h1 className="hero-title">{name}</h1>
          <h2 className="hero-subtitle">{job}</h2>
          
          <div className="hero-qualifications">
            <p className="degree-ar">🎓 {degreeAr}</p>
            <p className="degree-en">🎓 {degreeEn}</p>
          </div>

          <p className="hero-bio">
            مهندسة ومطورة واجهات ويب متخصصة في تقنيات Front-End Development والتقنيات الحديثة. 
            شغوفة بابتكار تجارب مستخدم تفاعلية، بناء مواقع متجاوبة وسريعة، ومتابعة أحدث تطورات التكنولوجيا.
          </p>

          <div className="buttons">
            <a href="#contact" className="btn btn-primary">
              تواصل معي
            </a>
            <a href="#projects" className="btn btn-secondary">
              مشاريعي
            </a>
            <a href="#about" className="btn btn-outline">
              عني والمزيد
            </a>
          </div>
        </div>

        <div className="hero-img">
          <img src={profile} alt="نبأ عدنان - Nabaa Adnan" />
        </div>
      </div>
    </section>
  );
}

export default Hero;