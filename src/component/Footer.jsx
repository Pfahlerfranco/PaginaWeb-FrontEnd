import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ABOUT */}
        <div className="footer-about">
          <h2 className="footer-logo">
            <span>&lt;</span>FP<span>/&gt;</span>
          </h2>

          <p>
            Desarrollo aplicaciones web modernas, APIs y soluciones
            escalables. Enfocado en crear productos eficientes
            y experiencias digitales de calidad.
          </p>

          <div className="status">
            <span className="status-dot"></span>
            Disponible para trabajar
          </div>
        </div>

        {/* NAV */}
        <div className="footer-nav">
          <h3>Navegación</h3>

          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/portfolio">Proyectos</NavLink>
          <NavLink to="/about">Sobre mí</NavLink>
          <NavLink to="/contact">Contacto</NavLink>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h3>Contacto</h3>

          <p>Buenos Aires, Argentina</p>

          <div className="socials">
            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaEnvelope />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} FP Studio — Desarrollador Web
      </div>

    </footer>
  );
}