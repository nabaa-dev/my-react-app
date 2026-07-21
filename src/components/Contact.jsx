import {
  FaTelegramPlane,
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">

      <h2>تواصل معي</h2>

      <p>
        إذا كان لديك أي استفسار أو ترغب بالتعاون معي في مشروع،
        يسعدني تواصلك عبر أي من الوسائل التالية.
      </p>

      <div className="contact-icons">

        <a
          className="email"
          href="mailto:nabaaadnan284@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope />
        </a>

        <a
          className="telegram"
          href="https://t.me/n_2000ad"
          target="_blank"
          rel="noreferrer"
        >
          <FaTelegramPlane />
        </a>

        <a
          className="whatsapp"
          href="https://wa.me/9647713367730"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
        </a>

        <a
          className="github"
          href="https://github.com/Nabaa-dev"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          className="linkedin"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

      </div>

    </section>
  );
}

export default Contact;