import { Link } from "react-router-dom";
import SplitText from "../component/SplitText";
import FloatingLines from "../component/FloatingLines";
import "../styles/home.css";

export default function Home() {

  return (
    <section className="hero">

      <FloatingLines
        linesGradient={[
          "#b070fe",
          "#6a5cff",
          "#2e2eff"
        ]}
        lineCount={[6,8,6]}
        lineDistance={[4,6,4]}
      />

      <div className="hero-content">

        <SplitText
          text="<Franco Pfahler/>"
          className="hero-title"
          delay={80}
          duration={1.2}
        />

        <p className="hero-subtitle">
          Developer Full Stack Jr — APIs, Databases & Web Applications
        </p>

        <div className="hero-buttons">
          <Link to="/portfolio" className="hero-btn-primary">Ver proyectos</Link>
          <Link to="/contact" className="hero-btn-secondary">Contactame</Link>
        </div>

      </div>

    </section>
  );
}