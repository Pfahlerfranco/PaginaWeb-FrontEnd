import { FaDownload } from "react-icons/fa";
import "../styles/about.css";

const skills = [
  "Node.js", "Python", "JavaScript", "TypeScript",
  "Express.js", "FastAPI", "PostgreSQL", "MySQL",
  "MongoDB", "Redis", "Docker", "Git",
  "REST APIs", "React", "Linux", "AWS", "CMS", "Windows", "Agile", "Scrum", ".NET"  
];

export default function About() {
  return (
    <div className="about-page">
      <div className="about-container">

        {/* HEADER */}
        <div className="about-header">
          <h1>Sobre <span>mí</span></h1>
          <p>Developer Full Stack Jr enfocado en construir APIs robustas y Aplicaciones Web escalables.</p>
        </div>

        {/* BIO */}
        <section className="about-bio">
          <h2>Biografia</h2>
          <p>
            Soy Franco Pfahler de 26 años, Desarrollador Full Stack Jr con base en Buenos Aires, Argentina.
            Estudiante de 3er año en la Licenciatura en Informatica en la Universidad Nacional de Hurlingham.
            Me especializo en el diseño e implementación de APIs, arquitecturas de Bases de Datos
            y Aplicaciones Web de alto rendimiento.
          </p>
          <p>
            Mi enfoque está en escribir código limpio, escalable y bien documentado.
            Disfruto resolver problemas complejos y aprender nuevas tecnologías para
            entregar soluciones que realmente funcionen en producción, y pueda satisfacer la necesidad del cliente.
          </p>
        </section>

        {/* SKILLS */}
        <section className="about-skills">
          <h2>Tech Stack</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill} className="skill-badge">{skill}</span>
            ))}
          </div>
        </section>

        {/* CV */}
        <section className="about-cv">
          {/* Cuando quiera actualizar el CV, voy a Public */}
          <a href="/cv_FrancoPfahler_Desarrollador2026.pdf" download className="cv-btn">
            <FaDownload />
            Descargar CV
          </a>
        </section>

      </div>
    </div>
  );
}
