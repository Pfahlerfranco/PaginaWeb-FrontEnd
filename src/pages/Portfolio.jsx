import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/portfolio.css";

export const projects = [
  {
    id: "api-rest-nodejs",
    title: "REST API con Node.js",
    description: "API RESTful construida con Express.js y PostgreSQL. Incluye autenticación JWT, validación de datos, manejo de errores y documentación Swagger.",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
    github: "#", // TODO: tu-repo-github
    demo: "#",   // TODO: tu-url-demo (o null si no hay)
  },
  {
    id: "sistema-gestion",
    title: "Sistema de Gestión",
    description: "Aplicación web full-stack para gestión de inventario. Backend en Python con FastAPI, frontend en React y base de datos MySQL.",
    tags: ["Python", "FastAPI", "React", "MySQL"],
    github: "#", // TODO: tu-repo-github
    demo: "#",   // TODO: tu-url-demo
  },
  {
    id: "bot-telegram",
    title: "Bot de Telegram",
    description: "Bot automatizado con integración a APIs externas. Maneja comandos, envía notificaciones y procesa datos en tiempo real usando webhooks.",
    tags: ["Python", "Telegram API", "Docker", "Redis"],
    github: "#", // TODO: tu-repo-github
    demo: null,
  },
  {
    id: "ecommerce-api",
    title: "E-commerce API",
    description: "Backend completo para tienda online con gestión de productos, carrito, pedidos y pagos. Desplegado en AWS con contenedores Docker.",
    tags: ["Node.js", "MongoDB", "Docker", "AWS"],
    github: "#", // TODO: tu-repo-github
    demo: "#",   // TODO: tu-url-demo
  },
];

export default function Portfolio() {
  return (
    <div className="portfolio-page">
      <div className="portfolio-container">

        {/* HEADER */}
        <div className="portfolio-header">
          <h1>Mis <span>Proyectos</span></h1>
          <p>Una selección de proyectos en los que trabajé.</p>
        </div>

        {/* GRID */}
        <div className="projects-grid">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="project-card"
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github && project.github !== "#" && (
                  <span
                    className="project-link"
                    onClick={(e) => { e.preventDefault(); window.open(project.github, "_blank"); }}
                  >
                    <FaGithub /> GitHub
                  </span>
                )}
                {project.demo && project.demo !== "#" && (
                  <span
                    className="project-link"
                    onClick={(e) => { e.preventDefault(); window.open(project.demo, "_blank"); }}
                  >
                    <FaExternalLinkAlt /> Demo
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
