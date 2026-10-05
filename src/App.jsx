import { useState } from "react";
import { motion } from "framer-motion";
import mihretuPhoto from "./assets/mihretu.jpg";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Mihiretu.</div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          type="button"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <main id="home" className="hero">
        <motion.p
          className="welcome"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          WELCOME TO MY PORTFOLIO
        </motion.p>
        <img
  src={mihretuPhoto}
  alt="Mihiretu Yeshi"
  className="profile-photo"
/>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Hi, I'm <span>Mihiretu Yeshi</span> 👋
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Software Developer
        </motion.h2>

        <motion.p
          className="description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          I build modern and user-friendly web applications using
          modern web technologies.
        </motion.p>

        <motion.div
          className="buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <a href="#projects" className="button">
            View My Work
          </a>

          <a href="#contact" className="button contact-button">
            Contact Me
          </a>
        </motion.div>
      </main>

      {/* ABOUT */}
      <section id="about" className="about">
        <motion.p
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          GET TO KNOW ME
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3>I'm a passionate Software Developer</h3>

            <p>
              I am a software developer who enjoys creating modern,
              responsive, and useful web applications.
            </p>

            <p>
              I am continuously learning new technologies and improving
              my programming skills by building real-world projects.
            </p>

            <p>
              My goal is to become a strong full-stack developer and
              create applications that solve real problems.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3>My Focus</h3>

            <p>🌐 Web Development</p>
            <p>⚛️ React Development</p>
            <p>🟢 Node.js & Backend</p>
            <p>🗄️ Database Development</p>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="skills">
        <motion.p
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          WHAT I WORK WITH
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>

        <div className="skills-grid">
          {[
            ["🌐", "HTML", "Building structured and semantic web pages."],
            ["🎨", "CSS", "Creating responsive and modern interfaces."],
            [
              "⚡",
              "JavaScript",
              "Adding interactive functionality to websites.",
            ],
            [
              "⚛️",
              "React",
              "Building modern component-based applications.",
            ],
            [
              "🟢",
              "Node.js",
              "Creating backend services and APIs.",
            ],
            [
              "🗄️",
              "MySQL",
              "Working with relational databases and data.",
            ],
          ].map(([icon, title, description], index) => (
            <motion.div
              className="skill-card"
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="skill-icon">{icon}</div>

              <h3>{title}</h3>

              <p>{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects">
        <motion.p
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          MY RECENT WORK
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {[
            {
              icon: "🎓",
              title: "Student Management System",
              description:
                "A full-stack student management application for managing student information, departments, study years, and enrollment data.",
              tech: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
            },
            {
              icon: "📋",
              title: "Task Manager",
              description:
                "A task management application designed to help users organize tasks, track progress, and manage daily work.",
              tech: ["React", "Node.js", "Express", "MySQL"],
            },
            {
              icon: "💼",
              title: "Personal Portfolio",
              description:
                "A responsive personal portfolio website showcasing my skills, projects, and contact information.",
              tech: ["React", "JavaScript", "CSS"],
            },
          ].map((project, index) => (
            <motion.div
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <div className="project-image">{project.icon}</div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href="#"
                    className="project-button"
                    onClick={(event) => event.preventDefault()}
                  >
                    Live Demo
                  </a>

                  <a
                    href="#"
                    className="project-button github-button"
                    onClick={(event) => event.preventDefault()}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <motion.p
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          GET IN TOUCH
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="contact-description"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Have a project idea or want to work together?
          I'd love to hear from you.
        </motion.p>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="contact-item">
              <span>📧</span>

              <div>
                <h3>Email</h3>
                <p>mihiretuyeshi@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <span>📍</span>

              <div>
                <h3>Location</h3>
                <p>Ethiopia</p>
              </div>
            </div>

            <div className="contact-item">
              <span>💻</span>

              <div>
                <h3>GitHub</h3>
                <p>github.com/yeshi830</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>
          </motion.form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Mihiretu Yeshi. All rights reserved.</p>

        <p>Built with React ⚛️</p>
      </footer>
    </>
  );
}

export default App;