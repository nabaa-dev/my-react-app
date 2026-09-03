import profile from "../assets/profile.png";

function Hero({ name, job, desc }) {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-badge">مرحباً بك في موقعي</span>
          <h1>{name}</h1>
          <h2 className="hero-subtitle">{job}</h2>
          <p className="hero-desc">{desc}</p>

          <p className="hero-bio">
            مهندسة ومبرمجة مواقع إلكترونية، أحول الأفكار إلى تجارب رقمية تفاعلية وفعالة،
            شغوفة بتصميم الواجهات الحديثة وحل المشكلات البرمجية.
          </p>

          <div className="buttons">
            <a href="#contact" className="btn btn-primary">
              تواصل معي
            </a>
            <a href="#projects" className="btn btn-secondary">
              مشاريعي
            </a>
            <a 
              href="#about" 
              className="btn btn-outline"
            >
              عني والمزيد
            </a>
          </div>
        </div>

        <div className="hero-img">
          <img src={profile} alt="نبأ عدنان - مهندسة تقنيات الحاسوب" />
        </div>
      </div>
    </section>
  );
}

export default Hero;