import profile from "../assets/profile2.jpg";

function About() {
  return (
    <section id="about" className="about">

      
      <div className="about-content">
        <h2>عني</h2>

        <p>
          أنا نبأ عدنان، خريجة دبلوم تقنيات أنظمة الحاسوب و
          بكالوريوس هندسة تقنيات الحاسوب. شغوفة بتطوير واجهات الويب الحديثة
          وأسعى إلى بناء مواقع سريعة، متجاوبة، وسهلة الاستخدام.
        </p>

        <div className="about-info">
          <p>📍 <strong>الموقع:</strong> بغداد - العراق</p>
          <p>🎓 <strong>التخصص:</strong> هندسة تقنيات الحاسوب</p>
          <p>💻 <strong>المجال:</strong> Front-End Developer</p>
        </div>

        

      </div>
      <div className="about-image">
        <img src={profile} alt="نبأ" />
      </div>


    </section>
  );
}

export default About;