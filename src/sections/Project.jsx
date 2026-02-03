import { forwardRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import ProjectModal from "./ProjectModal";
import { useEffect } from "react";
import acadifyImg from "../assets/acadify.png";
import echoSpaceImg from "../assets/echospace.jpeg";


const projects = [
  {
    title: "Acadify",
    subtitle: "Student Management Web Application",
    description:
      "A system designed to track assignments, surface urgency, and support academic focus.",
    github: "https://github.com/Mahekkkk/Acadify-Simplify-Learning-Amplify-Success",
    live: null,
    tech: ["Java", "JSP", "Servlets", "JDBC", "MySQL"],
    accent: "linear-gradient(135deg, #7c5cff, #00d4ff)",
    image: acadifyImg,
    details: [
      "Engineered a full-stack student management system enabling assignment tracking, automated reminders, and academic performance insights",
      "Implemented secure user registration and email verification using JavaMail API",
      "Designed backend architecture following MVC principles",
      "Optimized database interactions using JDBC",
    ],
  },
  {
    title: "EchoSpace",
    subtitle: "Blog Management System",
    description:
      "A scalable publishing platform built for controlled content workflows.",
    github: "https://github.com/Mahekkkk/EchoSpace",
    live: null,
    tech: ["PHP", "CodeIgniter 4", "MySQL", "JavaScript"],
    accent: "linear-gradient(135deg, #4fd1c5, #2cb1a6)",
    image: echoSpaceImg,
    details: [
      "Role-based authentication with admin content approval",
      "CRUD operations using CodeIgniter MVC",
      "Responsive frontend-backend integration",
      "Relational database design for workflows",
    ],
  },
];

const Project = forwardRef(function Project(_, ref) {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section ref={ref} className="project">
      <header className="project-header">
  <span className="project-eyebrow">Selected Work</span>

  <h2 className="project-heading cinematic-title">
    Things I’ve <span>Built</span>
  </h2>

  <p className="project-subheading">
    Real projects focused on systems, clarity, and impact.
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
        
        
        <div className="project-actions">
          <a href={project.github} target="_blank" rel="noreferrer"> <Github size={18} /> </a>
          </div>
        <p>{project.description}</p>

        <button className="project-expand" onClick={onOpen}>
          View project →
        </button>
      </div>
    </article>
  );
}

export default Project;
