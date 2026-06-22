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
  FaAws,
} from "react-icons/fa";

import {
  SiMysql,
  SiSpringboot,
  SiHibernate,
  SiPostman,
  SiApachemaven,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: FaJava, color: "#f89820" },
      { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
      { name: "SQL", icon: SiMysql, color: "#4479a1" },
      { name: "Python", icon: FaPython, color: "#3776ab" },
    ],
  },

  {
    title: "Backend Development",
    skills: [
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Spring Security", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Hibernate", icon: SiHibernate, color: "#59666C" },
      { name: "JPA", icon: SiHibernate, color: "#59666C" },
      { name: "JSP & Servlets", icon: FaJava, color: "#f89820" },
      { name: "JDBC", icon: FaJava, color: "#f89820" },
      { name: "REST APIs", icon: SiSpringboot, color: "#6DB33F" },
    ],
  },

  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: FaReact, color: "#61dafb" },
      { name: "HTML5", icon: FaHtml5, color: "#e34f26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572b6" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#7952b3" },
      { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
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
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Maven", icon: SiApachemaven, color: "#C71A36" },
      { name: "AWS (Learning)", icon: FaAws, color: "#FF9900" },
    ],
  },
];

const Skills = forwardRef(function Skills(_, ref) {
  return (
    <section ref={ref} className="skills">
      <header className="section-header">
        <span className="section-eyebrow">Technical Skills</span>

        <h2 className="section-title">
          Skills & <span>Technologies</span>
        </h2>

        <p className="section-subtitle">
          Technologies I use to design, develop, and deploy modern web
          applications.
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