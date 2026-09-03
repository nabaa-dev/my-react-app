import {
  FaTelegramPlane,
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  const contactMethods = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/Nabaa-dev",
      label: "github.com/Nabaa-dev",
      className: "github",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/nabaa-adnan",
      label: "LinkedIn Profile",
      className: "linkedin",
    },
    {
      name: "البريد الإلكتروني",
      icon: <FaEnvelope />,
      link: "mailto:nabaaadnan284@gmail.com",
      label: "nabaaadnan284@gmail.com",
      className: "email",
    },
    {
      name: "Telegram",
      icon: <FaTelegramPlane />,
      link: "https://t.me/n_2000ad",
      label: "@n_2000ad",
      className: "telegram",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      link: "https://wa.me/9647713367730",
      label: "+964 771 336 7730",
      className: "whatsapp",
    },
  ];

  return (
    <section id="contact" className="contact">
      <h2>تواصل معي</h2>

      <p className="contact-intro">
        إذا كان لديك أي استفسار أو ترغب بالتعاون في مشاريع برمجية،
        يسعدني جداً تواصلك عبر أي من القنوات التالية:
      </p>

      <div className="contact-cards-container">
        {contactMethods.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`contact-card ${item.className}`}
            title={item.name}
            aria-label={item.name}
          >
            <div className="contact-card-icon">{item.icon}</div>
            <div className="contact-card-info">
              <span className="contact-name">{item.name}</span>
              <span className="contact-val">{item.label}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;