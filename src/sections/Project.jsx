import { forwardRef, useState } from "react";
import { Github } from "lucide-react";
import ProjectModal from "./ProjectModal";

import placifyImg from "../assets/placify.png";
import acadifyImg from "../assets/acadify.png";
import echoSpaceImg from "../assets/echospace.jpeg";

const projects = [
  {
    title: "Placify",
    subtitle: "Campus Placement Management System",
    description:
      "A full-stack placement platform connecting students, recruiters, and administrators through a centralized recruitment workflow.",
    github: "https://github.com/Mahekkkk/Placify",
    live: null,
    tech: [
      "Spring Boot",
      "React",
      "MySQL",
      "JWT",
      "Spring Security",
    ],
    accent: "linear-gradient(135deg, #00d4ff, #7c5cff)",
    image: placifyImg,
    details: [
      "Built a full-stack placement management platform using Spring Boot and React",
      "Implemented JWT authentication and role-based authorization",
      "Developed Student, Recruiter, and Admin dashboards",
      "Integrated job applications, applicant tracking, and analytics",
      "Implemented resume upload and notification workflows",
    ],
  },

  {
    title: "Acadify",
    subtitle: "Student Academic Management System",
    description:
      "A student academic management platform for assignment tracking, grade monitoring, email verification, and automated reminders.",
    github:
      "https://github.com/Mahekkkk/Acadify-Simplify-Learning-Amplify-Success",
    live: null,
    tech: ["Java", "JSP", "Servlets", "JDBC", "MySQL", "JavaMail API"],
    accent: "linear-gradient(135deg, #7c5cff, #00d4ff)",
    image: acadifyImg,
    details: [
      "Developed a Java-based academic management system using JSP and Servlets",
      "Implemented email verification and secure user authentication",
      "Built assignment management with priority tracking and reminders",
      "Created dashboards for academic performance monitoring",
      "Integrated JavaMail API for automated notifications",
    ],
  },

  {
    title: "EchoSpace",
    subtitle: "Blog Management System",
    description:
      "A blog management system featuring content publishing, moderation workflows, and role-based access control.",
    github: "https://github.com/Mahekkkk/EchoSpace",
    live: null,
    tech: ["PHP", "CodeIgniter 4", "MySQL", "JavaScript"],
    accent: "linear-gradient(135deg, #4fd1c5, #2cb1a6)",
    image: echoSpaceImg,
    details: [
      "Role-based authentication with admin content approval",
      "Implemented complete CRUD operations using CodeIgniter MVC",
      "Designed responsive frontend-backend integration",
      "Built relational database structures for publishing workflows",
    ],
  },
];

const Project = forwardRef(function Project(_, ref) {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section ref={ref} className="project">
      <header className="project-header">
        <span className="project-eyebrow">Featured Projects</span>

        <h2 className="project-heading cinematic-title">
          Projects & <span>Case Studies</span>
        </h2>

        <p className="project-subheading">
          Full-stack applications built to solve real-world problems using
          modern technologies.
        </p>
      </header>

      <div className="project-grid-cards">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onOpen={() => setActiveProject(project)}
          />
        ))}
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
});

function ProjectCard({ project, onOpen }) {
  return (
    <article
      className="project-card"
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen()}
    >
      <div
        className="project-accent"
        style={{
          backgroundImage: `url(${project.image})`,
        }}
      />

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>

        <p className="project-subtitle">{project.subtitle}</p>

        <div className="project-tech">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-chip">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={18} />
          </a>
        </div>

        <p>{project.description}</p>

        <button
          className="project-expand"
          onClick={(e) => {
            e.stopPropagation();
            onOpen();
          }}
        >
          View Project →
        </button>
      </div>
    </article>
  );
}

export default Project;