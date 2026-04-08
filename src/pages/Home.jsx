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
          delay={80}
          duration={1.2}
        />

        <p className="hero-subtitle">
          Backend Developer — APIs, Databases & Web Applications
        </p>

      </div>

    </section>
  );
}