import { forwardRef } from "react";
import {
  FaJava,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiMysql, SiCodeigniter } from "react-icons/si";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: FaJava, color: "#f89820" },
      { name: "Python", icon: FaPython, color: "#3776ab" },
      { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "HTML", icon: FaHtml5, color: "#e34f26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572b6" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#7952b3" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: FaReact, color: "#61dafb" },
      { name: "CodeIgniter 4", icon: SiCodeigniter, color: "#ee4623" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479a1" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#f05032" },
      { name: "GitHub", icon: FaGithub, color: "#ffffff" },
    ],
  },
];


const Skills = forwardRef(function Skills(_, ref) {
  return (
    <section ref={ref} className="skills">
      <header className="section-header">
        <span className="section-eyebrow">Expertise</span>
        <h2 className="section-title">Skills & Stack</h2>
        <p className="section-subtitle">
          Tools I trust to build reliable, maintainable systems.
        </p>
      </header>

      <div className="skills-groups">
        {skillGroups.map((group, i) => (
          <div className="skills-group" key={i}>
            <h3>{group.title}</h3>

            <div className="skills-grid">
  {group.skills.map((skill, j) => {
    const Icon = skill.icon;

    return (
      <div className="skill-icon" key={j}>
        <Icon
          size={34}
          style={{ color: skill.color }}
          aria-label={skill.name}
        />
        <span className="label">{skill.name}</span>
      </div>
    );
  })}
</div>

          </div>
        ))}
      </div>
    </section>
  );
});

export default Skills;
