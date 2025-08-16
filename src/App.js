import  { useState, useEffect } from "react";
import "./App.css";
import { MdDarkMode ,MdLightMode } from "react-icons/md";
import { FaGithub, FaLinkedin , FaTwitter, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function App() {
  const [dark, setDark] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const fullName = "Aravind Mantri";

  // Letter by letter animation
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayName(fullName.slice(0, i + 1));
      i++;
      if (i > fullName.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);


  // Skills data
const skills = [
  "React.js",
  "JavaScript (ES6+)",
  "HTML5 & CSS3",
  "Bootstrap",
  "Node.js & Express",
  "Sqlite",
  "Git & GitHub",
  "Responsive Web Design",
  "REST APIs"
];


const projects = [
  {
    title: "Nxt Trendz",
    desc: "A modern e-commerce platform built with React and Node.js featuring payment integration and an admin dashboard for product management.",
    link: "https://nxt-trendz-swart.vercel.app/",
    username:'rahul',
    password:'rahul@2021'
  },
  {
    title: "Jobby App",
    desc: "A responsive job listing web application with advanced search, filters, and user-friendly UI built using React.",
    link: "https://jobby-app-sandy-seven.vercel.app/login",
        username:'rahul',
    password:'rahul@2021'
  },
  {
    title: "Emoji Game",
    desc: "A fun interactive game built with React to practice logic and state management, featuring dynamic scoring and animations.",
    link: "https://emoji-game-ruddy.vercel.app/"
  }
];

// Education data
const education = [
  {
    degree: "MCA (Master of Computer Applications)",
    year: "2023 - 2025",
    institution: "Manpower Development College"
  },
  {
    degree: "Bachelor's Degree",
    year: "2020 - 2023",
    institution: "Nishitha Degree College"
  },
  {
    degree: "Intermediate",
    year: "2018 - 2022",
    institution: "S.R Junior College"
  }
];


const contacts = [
  {
    icon: <FaLinkedin size={24} />,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/mantri-aravind-630286242",
  },
  {
    icon: <FaEnvelope size={24} />,
    title: "Email",
    link: "mailto:aravindmantri77@gmail.com",
  },
  {
    icon: <FaWhatsapp size={24} />,
    title: "WhatsApp",
    link: "https://wa.me/+917416213890",
  },
  {
    icon: <FaTwitter size={24} />,
    title: "Twitter",
    link: "https://twitter.com/MantriAravind3",
  },
  
];



  return (
    <div className={`app ${dark ? "dark" : ""}`}>
      {/* Header / Nav */}
      <header className={`header ${dark ? "dark-header" : ""}`}>
        <h1 className="brand">{displayName || "Aravind"}</h1>
        <nav>
             <a href="#home">Home</a>
    <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button className={`dark-toggle ${dark?'light-mode':'dark-mode'}`} onClick={() => setDark(!dark)}>
            {dark ? <MdLightMode />   : <MdDarkMode/>}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-text">
          <p className="hero-intro">Hello, I'm</p>
          <h2 className="hero-name">{displayName || "Aravind"}</h2>
          <p className="hero-subtitle">
            Frontend Developer passionate about building **modern web applications** with beautiful UI/UX.
          </p>
          <a href="#contact" className="btn-primary">Get In Touch</a>
        </div>
        <div className="hero-image">
         <img src="profile.jpg" width="50" className="profile" alt="Aravind" />
        </div>
      </section>

      {/* Skills Section */}
<section id="skills" className="skills">
  <h3 className="section-title">Skills</h3>
  <div className="skills-list">
    {skills.map((skill, i) => (
      <span key={i} className="skill-item">{skill}</span>
    ))}
  </div>
</section>


      {/* Projects Section */}
      <section id="projects" className="projects">
        <h3 className="section-title">Projects</h3>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="project-card">
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              <a href={p.link} target=" _blank" className="project-link">View Project →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
<section id="education" className="education">
  <h3 className="section-title">Education</h3>
  <div className="education-list">
    {education.map((edu, i) => (
      <div key={i} className="education-card">
        <h4>{edu.degree}</h4>
        <p>{edu.institution}</p>
        <span>{edu.year}</span>
      </div>
    ))}
  </div>
</section>


  <section id="contact" className="contact">
  <h3 className="section-title">Contact Me</h3>
  <div className="contact-cards">
    {contacts.map((c, i) => (
      <a
        key={i}
        href={c.link}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-card"
      >
        <div className="contact-icon">{c.icon}</div>
        <p className="contact-title">{c.title}</p>
      </a>
    ))}
  </div>
</section>


      {/* Footer */}
      <footer className="footer">
        <div className="footer-socials">
          <a href="#github"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/mantri-aravind-630286242"><FaLinkedin /></a>
          <a href="https://twitter.com/MantriAravind3"><FaTwitter /></a>
        </div>
        <p>© 2025 Aravind. Built with ❤️ using React</p>
      </footer>
    </div>
  );
}
