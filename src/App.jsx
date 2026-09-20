import { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import BackToTop from "./BackToTop";
import Skills from "./Skills";

const projects = [
  {
     orderId: 1,
    title: "Netflix Clone",
    description: "A frontend project inspired by Netflix.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/its-harini24/Netflix-Clone",
    demo: "https://netflix-clone-alpha-khaki-93.vercel.app/",
    image: "/projects/netflix.jpeg",
  },
  {
    orderId: 2,
    title: "Messenger UI",
    description: "A chat interface built to practice frontend development.",
    tech: ["React", "JavaScript", "CSS"],
    demo: "https://chat-ui-demo-tawny.vercel.app/",
    image: "/projects/chat-ui.jpeg",
  },
  {
    orderId: 3,
    title: "Hackathon Registration Form",
    description: "A Google-inspired registration form UI clone.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://hackathon-registeration-form-google.vercel.app/",
    image: "/projects/hackathon-form.jpeg",
  },
  {
    orderId: 4,
    title: "React To-Do List",
    description: "A simple task management app built with React.",
    tech: ["React", "JavaScript", "CSS"],
    link: "https://github.com/its-harini24/react-todo-list",
    demo: "https://react-todo-list-two-mu.vercel.app/",
    image: "/projects/todo-list.jpeg",
  },
  {
    orderId: 5,
    title: "Password Generator",
    description: "A React app that generates customizable passwords.",
    tech: ["React", "JavaScript", "CSS"],
    link: "https://github.com/its-harini24/Password-Generator-react",
    demo: "https://password-generator-react-blond-eight.vercel.app/",
    image: "/projects/password-generator.jpeg",
  },
  {
    orderId: 6,
    title: "FAQ Accordion",
    description: "A responsive FAQ app using state and conditional rendering.",
    tech: ["React", "JavaScript", "CSS"],
    link: "https://github.com/its-harini24/faq-accordion",
    demo: "https://faq-accordion-umber-eight.vercel.app/",
    image: "/projects/faq.jpeg",
  },
];

function SectionTitle({ subtitle, children }) {
  return (
    <div className="section-title">
      <p>{subtitle}</p>
      <h2>{children}</h2>
    </div>
  );
}

function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-intro">Hello, I'm</p>

        <h1>Harini N</h1>

        <h2>CSBS Student & Frontend Developer</h2>

        <p className="hero-description">
          I build web applications and solve problems
          with Java, React, and modern web technologies.
          I'm passionate about learning and creating
          useful digital experiences.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>

          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
          <a
        href="/Harini_N_Resume.pdf"
        download="Harini_N_Resume.pdf"
        className="btn btn-outline"
        >
           Download Resume ↓
        </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/its-harini24"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/harinin24/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      <div className="hero-decoration">
        <div className="decoration-circle">
          <span>H</span>
        </div>

        <p>Learning · Building · Growing</p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <SectionTitle subtitle="GET TO KNOW ME">
        About Me
      </SectionTitle>

      <div className="about-content">
        <div className="about-card">
          <span className="card-number">01 / ABOUT</span>

          <h3>A little about me</h3>

          <p>
            I'm Harini, a Computer Science and Business
            Systems student at Rajalakshmi Institute of
            Technology, Chennai.
          </p>

          <p>
            I enjoy developing websites, exploring
            technology, and solving programming problems.
            I'm currently strengthening my frontend
            development and programming skills.
          </p>
        </div>

        <div className="about-card about-highlight">
          <span className="card-number">MY INTERESTS</span>

          <h3>What I'm exploring</h3>

          <ul>
            <li>Frontend development with React</li>
            <li>Problem-solving and Data Structures</li>
            <li>Artificial Intelligence and Machine Learning</li>
            <li>Building practical web applications</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section">
      <SectionTitle subtitle="MY ACADEMIC JOURNEY">
        Education
      </SectionTitle>

      <div className="timeline">
        <div className="timeline-item">
          <span className="timeline-dot"></span>

          <div className="timeline-card">
            <span className="timeline-date">
              2025 – 2029
            </span>

            <h3>B.Tech – Computer Science and Business Systems</h3>

            <p>Rajalakshmi Institute of Technology</p>

            <p className="muted">
              Chennai, Tamil Nadu
            </p>

            <p>
              Currently pursuing my undergraduate degree
              and developing my technical and problem-solving
              skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <SectionTitle subtitle="LEARNING THROUGH EXPERIENCE">
        Experience
      </SectionTitle>

      <div className="experience-card">
        <div className="experience-top">
          <span className="experience-label">
            INTERNSHIP
          </span>

          <span className="experience-status">
            Current
          </span>
        </div>

        <h3>Frontend Developer Intern</h3>

        <p className="experience-company">
          College Startup
        </p>

        <p>
          Selected for a frontend development internship
          where I can apply my React knowledge, improve
          my development workflow, and gain practical
          experience working on projects.
        </p>

        <div className="tag-list">
          <span>React.js</span>
          <span>Frontend</span>
          <span>Web Development</span>
        </div>
      </div>
    </section>
  );
}



function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section">
      <SectionTitle subtitle="MY CREATIVE JOURNEY">
        Projects
      </SectionTitle>

      <p className="section-description">
        A few things I've built while learning.
      </p>

      <div className="project-path">
        <svg
  className="project-road"
  viewBox="0 0 1000 500"
  preserveAspectRatio="none"
  aria-hidden="true"
>
  {/* Outer road */}
  <path
    className="road-outline"
    d="M 100 100 H 900 C 960 100 960 150 960 200 V 300 C 960 350 920 400 860 400 H 140"
  />

  {/* Inner road */}
  <path
    className="road-center"
    d="M 100 100 H 900 C 960 100 960 150 960 200 V 300 C 960 350 920 400 860 400 H 140"
  />
</svg>
  {[...projects]
  .sort((a, b) => a.orderId - b.orderId)
  .map((project, index) => (
    <div
      className={`path-item ${
        index % 2 === 0 ? "left" : "right"
      }`}
      key={project.orderId}
    >
            <span className="level-number">
              LEVEL {String(index + 1).padStart(2, "0")}
            </span>

            <button
  className="project-picture"
  onClick={() => setSelectedProject(project)}
>
  <img src={project.image} alt={project.title} />
</button>

            <h3 className="roadmap-title">
  {project.title}
</h3>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="project-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-detail"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-project"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              ×
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
            />

            
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>

            <div className="tag-list">
              {selectedProject.tech.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            <a
              href={selectedProject.demo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo ↗
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
function CodingProfiles() {
  return (
    <section id="coding-profiles" className="section coding-section">
      <SectionTitle
        eyebrow="My Coding Journey"
        title="Learning by building"
      />

      <div className="coding-cards">
        <a
          className="coding-card"
          href="https://github.com/its-harini24"
          target="_blank"
          rel="noreferrer"
        >
          <span className="coding-icon">⌘</span>
          <h3>GitHub</h3>
          <p>Explore my projects and coding activity.</p>
          <span className="card-link">Visit profile ↗</span>
        </a>

        <a
          className="coding-card"
          href="https://leetcode.com/u/Harini_2008/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="coding-icon">〈〉</span>
          <h3>LeetCode</h3>
          <p>Follow my problem-solving journey.</p>
          <span className="card-link">Visit profile ↗</span>
        </a>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="section">
      <SectionTitle subtitle="MILESTONES">
        Achievements
      </SectionTitle>

      <div className="achievement-card">
        <span className="achievement-icon">✦</span>

        <div>
          <h3>Freshathon – 2nd Place</h3>

          <p>
            Participated in a college hackathon and
            secured second place as part of a team.
          </p>
        </div>
      </div>

      <div className="achievement-card">
        <span className="achievement-icon">✦</span>

        <div>
          <h3>NPTEL – The Joy of Computing Using Python</h3>

          <p>
            Completed the course and earned a score of 69%.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <SectionTitle subtitle="LET'S CONNECT">
        Get In Touch
      </SectionTitle>

      <p className="contact-description">
        Have a project idea or want to connect?
        Feel free to reach out.
      </p>

       <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=harinin.profile@gmail.com"
  target="_blank"
  rel="noreferrer"
  className="btn btn-primary"
>
  Say Hello ↗
</a>
      <div className="contact-links">
        
<a href="mailto:harinin.profile@gmail.com">
  Email me
</a>

<a
  href="https://github.com/its-harini24"
  target="_blank"
  rel="noreferrer"
>
  GitHub ↗
</a>

<a
  href="https://leetcode.com/u/Harini_2008/"
  target="_blank"
  rel="noreferrer"
>
  LeetCode ↗
</a>
      </div>
    </section>
  );
}



function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Harini N. Built with React.</p>

      <a href="#home">Back to top ↑</a>
    </footer>
  );
}

function App() {
  
function Reveal({ children }) {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`reveal ${visible ? "reveal-visible" : ""}`}
    >
      {children}
    </div>
  );

}
  return (
    <>
      <Navbar />

      <main>
  <Reveal><Home /></Reveal>
  <Reveal><About /></Reveal>
  <Reveal><Skills /></Reveal>
  <Reveal><Education /></Reveal>
  <Reveal><Experience /></Reveal>
  <Reveal><Projects /></Reveal>
  <Reveal><CodingProfiles /></Reveal>
  <Reveal><Achievements /></Reveal>
  <Reveal><Contact /></Reveal>
  
</main>

      <BackToTop />
      <Footer />
    </>
  );
}

export default App;