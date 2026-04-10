import { useParams, Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { projects } from "./Portfolio";
import Carousel from "../component/Carousel";
import "../styles/project.css";

export default function Project() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="project-page">
        <div className="project-detail-container">
          <div className="project-not-found">
            <h2>Proyecto no encontrado</h2>
            <Link to="/portfolio">← Volver al portfolio</Link>
          </div>
        </div>
      </div>
    );
  }

  const imageItems = project.images
    ? project.images.map((url, i) => ({ id: i, image: url, title: `${project.title} - ${i + 1}` }))
    : [];

  return (
    <div className="project-page">
      <div className="project-detail-container">

        {/* BACK */}
        <Link to="/portfolio" className="project-back">
          <FaArrowLeft /> Volver al portfolio
        </Link>

        {/* HEADER */}
        <div className="project-detail-header">
          <h1>{project.title}</h1>

          <div className="project-detail-links">
            {project.github && project.github !== "#" && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-detail-link secondary">
                <FaGithub /> Ver en GitHub
              </a>
            )}
            {project.demo && project.demo !== "#" && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-detail-link primary">
                <FaExternalLinkAlt /> Ver demo
              </a>
            )}
          </div>
        </div>

        {/* GALLERY */}
        {imageItems.length > 0 && (
          <div className="project-detail-gallery">
            <Carousel
              items={imageItems}
              baseWidth="100%"
              autoplay
              autoplayDelay={3000}
              pauseOnHover={false}
              loop
              round={false}
            />
          </div>
        )}

        {/* DESCRIPTION */}
        <div className="project-detail-description">
          <h2>Descripción</h2>
          <p>{project.description}</p>
        </div>

        {/* TECH STACK */}
        <div className="project-detail-tech">
          <h2>Tecnologías</h2>
          <div className="project-detail-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-detail-tag">{tag}</span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
