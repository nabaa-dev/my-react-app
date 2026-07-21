import { useState } from "react";
import profile from "../assets/profile.png";
function Hero(props) {
  const[count,setCount] =useState(0);
  return (
    <section  id="hero" className="hero">
      <div className="Hero-content">

      <div className="hero-text">
        <h1>{props.name}</h1>
        <h3>{props.job}</h3>
        <h3>{props.desc}</h3>

        <p>
          مهندسة ومبرمجة مواقع الكترونية  
        
          احول الافكار الى تجارب رقمية وفعالة احب البرمجة. تصميم الواجهات وحل المشاكل
        </p>
         <div className="hero-img">
        <img src={profile}alt="profile"/>
      </div>
        <div className="buttons">
          <button className="bto1">تواصل معي</button>

  <button

    onClick={() => setCount(count + 1)}

  >

    اضغط هنا

  </button>

  <button className="bto2">

    تحميل CV

  </button>

</div>
        <a href="/cv.pdf"download></a>
  
      </div>
      
      </div>

    </section>
  );
}

export default Hero;