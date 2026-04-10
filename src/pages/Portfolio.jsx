import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/portfolio.css";

export const projects = [
  {
    id: "paginaWeb-FrontEnd",
    title: "<FP> Studio",
    description: "Pagina Web personal para mi Portafolio, desarrollada con React. Diseño responsivo y optimizado para SEO.",
    tags: ["React.js", "React Router", "React Developer Tools"],
    github: "#", 
    demo: "#",   
    images: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1627873649417-af542667a3d7?w=800&h=400&fit=crop",
    ],
  },
  {
    id: "administracion-web",
    title: "Administracion Web UNAHUR",
    description: "Aplicación web full-stack para gestión de agendas, prestadores, afiliados y consultas . Backend en Nodes.js con Express, frontend en React y base de datos PosgresSQL.",
    tags: ["Node.js", "Express", "React", "PostgreSQL"],
    github: "https://github.com/DesApp-2025c2-Grupo1", 
    demo: "#",   
    images: [
      "https://images.unsplash.com/photo-1551531623-df8f1629ae3d?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f5ae4e8b908?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=800&h=400&fit=crop",
    ],
  },
  {
    id: "Api-AntiSocial-MongoDB",
    title: "Api AntiSocial MongoDB",
    description: "API para gestión de contenido anti-social con integración a MongoDB. Incluye autenticación, validación de datos y manejo de errores.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/Pfahlerfranco/Api-AntiSocial-MongoDB", 
    demo: null,
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1604386439900-59ef12a723f7?w=800&h=400&fit=crop",
    ],
  },
  {
    id: "automotoresDamian-api",
    title: "E-commerce Automotores Damian e Hijo",
    description: "PROXIMAMENTE... Pagina Web completa para tienda online con gestión de productos, carrito, pedidos y pagos.",
    tags: ["Node.js", "MongoDB", "Docker", "AWS"],
    github: "#", 
    demo: "#",   
    images: [
      "https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1526373965369-ea8ac28bccf2?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1507238691515-186a50e1cae8?w=800&h=400&fit=crop",
    ],
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
