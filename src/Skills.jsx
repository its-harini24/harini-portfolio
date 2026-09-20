
import { useEffect, useRef, useState } from "react";
import { FaFileExcel, FaJava ,FaCss3Alt} from "react-icons/fa6";
import { SiGit, SiGithub } from "react-icons/si";

import {
  SiC,
  SiCplusplus,
  SiPython,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

import "./Skills.css";

const skills = [
  { name: "C", icon: SiC, percent: 80, color: "#A8B9CC" },
  { name: "C++", icon: SiCplusplus, percent: 85, color: "#00599C" },
  { name: "Java", icon: FaJava, percent: 85, color: "#E76F00" },
  { name: "Python", icon: SiPython, percent: 80, color: "#3776AB" },
  { name: "HTML5", icon: SiHtml5, percent: 90, color: "#E34F26" },
 { name: "CSS3", icon: FaCss3Alt, percent: 85, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, percent: 80, color: "#B99A16" },
  { name: "React.js", icon: SiReact, percent: 75, color: "#61DAFB" },
  { name: "MySQL", icon: SiMysql, percent: 75, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, percent: 70, color: "#47A248" },
  { name: "MS Excel", icon: FaFileExcel, percent: 80, color: "#217346" },
  { name: "Git", icon: SiGit, percent: 75, color: "#F05032" },
{ name: "GitHub", icon: SiGithub, percent: 80, color: "#181717" }
];

function SkillRing({ name, icon: Icon, percent, color, animate }) {
  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);

  return (
    <div className="skill-ring-card">
      <div className={`skill-ring ${animate ? "is-visible" : ""}`}>
        <svg viewBox="0 0 120 120" aria-label={`${name}: ${percent}%`}>
          <circle
            className="ring-track"
            cx="60"
            cy="60"
            r={radius}
          />

          <circle
            className="ring-progress"
            cx="60"
            cy="60"
            r={radius}
            stroke={color}
            strokeDasharray={circumference}
            style={{ "--ring-offset": offset }}
          />
        </svg>

        <div className="skill-ring-center">
          <Icon style={{ color }} aria-hidden="true" />
          <span>{animate ? `${percent}%` : "0%"}</span>
        </div>
      </div>

      <h3>{name}</h3>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="section skills-section"
      ref={sectionRef}
    >
      <div className="section-title">
        <p className="section-eyebrow">MY TOOLKIT</p>
        <h2>Technologies I explore</h2>
        <p className="skills-subtitle">
          Growing my skills one project at a time.
        </p>
      </div>

      <div className="skills-rings-grid">
        {skills.map((skill) => (
          <SkillRing
            key={skill.name}
            {...skill}
            animate={animate}
          />
        ))}
      </div>
    </section>
  );
}