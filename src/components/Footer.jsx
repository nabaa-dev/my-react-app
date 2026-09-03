function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>نبأ عدنان | Nabaa Adnan</h3>
        <p className="footer-tagline">
          هندسة تقنيات الحاسوب • تطوير واجهات الويب (Front-End Development)
        </p>
        <div className="footer-links">
          <a href="#hero">الرئيسية</a>
          <a href="#about">عني</a>
          <a href="#skills">مهاراتي</a>
          <a href="#projects">مشاريعي</a>
          <a href="#contact">تواصل معي</a>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} جميع الحقوق محفوظة لـ نبأ عدنان
        </p>
      </div>
    </footer>
  );
}

export default Footer;