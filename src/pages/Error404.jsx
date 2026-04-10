import { Link } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
import FuzzyText from '../component/FuzzyText';
import '../styles/error404.css';

export default function Error404() {
  return (
    <>
      <Header />
      <main className="error404">
        <div className="error404__container">
          <div className="error404__content">
            <FuzzyText
              fontSize="clamp(3rem, 20vw, 15rem)"
              fontWeight={900}
              color="#ff6b6b"
              glitchMode={true}
              glitchInterval={1500}
              glitchDuration={200}
              baseIntensity={0.15}
              hoverIntensity={0.6}
              enableHover={true}
              fuzzRange={25}
              className="error404__text"
            >
              404
            </FuzzyText>

            <div className="error404__message">
              <h1>Página No Encontrada</h1>
              <p>Lo sentimos, la página que buscas no existe o ha sido movida.</p>
            </div>

            <Link to="/" className="error404__button">
              Volver a Inicio
            </Link>
          </div>

          <div className="error404__background">
            <div className="error404__shape error404__shape--1"></div>
            <div className="error404__shape error404__shape--2"></div>
            <div className="error404__shape error404__shape--3"></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
