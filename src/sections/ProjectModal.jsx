import { Github, ExternalLink, X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
  
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);
  

  useEffect(() => {
    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, []);

  return createPortal(
    <div className="project-modal-overlay" onClick={onClose}>
      <div
        className="project-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        <div
  className="modal-accent"
  style={{
    backgroundImage: project.image
      ? `url(${project.image})`
      : { background: project.accent },
  }}
  
/>


        <div className="modal-content">
          <h2>{project.title}</h2>
          <p className="project-subtitle">{project.subtitle}</p>

          <p className="modal-description">{project.description}</p>

          <div className="project-tech">
            {project.tech.map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>

          <ul className="modal-details">
            {project.details.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <div className="modal-links">
            <a href={project.github} target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>

            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer">
                <ExternalLink size={18} /> Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
