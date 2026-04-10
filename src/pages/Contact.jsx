import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import "../styles/contact.css";


const EMAILJS_SERVICE_ID  = "franzierserviceweb";
const EMAILJS_TEMPLATE_ID = "template_k51ya5c";
const EMAILJS_PUBLIC_KEY  = "5MX2zFHfh-kt0lB7M";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">

        {/* HEADER */}
        <div className="contact-header">
          <h1>Ponete en <span>contacto</span></h1>
          <p>
            Tenés un proyecto en mente o querés trabajar juntos?
            Mandame un mensaje y te respondo a la brevedad.
          </p>
        </div>

        {/* FORM */}
        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="from_name">Nombre</label>
              <input
                id="from_name"
                name="from_name"
                type="text"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="reply_to">Email</label>
              <input
                id="reply_to"
                name="reply_to"
                type="email"
                placeholder="tu@email.com"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Asunto</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="¿De qué se trata?"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Contame sobre tu proyecto o consulta..."
              required
            />
          </div>

          {status === "success" && (
            <div className="form-feedback success">
              Mensaje enviado. Te respondo pronto.
            </div>
          )}
          {status === "error" && (
            <div className="form-feedback error">
              Hubo un error al enviar. Intentá de nuevo o escribime directamente.
            </div>
          )}

          <button type="submit" className="form-submit" disabled={status === "loading"}>
            <FaPaperPlane />
            {status === "loading" ? "Enviando..." : "Enviar mensaje"}
          </button>

        </form>

        {/* SOCIALS */}
        <div className="contact-socials">
          <h2>También encontrame en</h2>
          <div className="contact-social-links">
            <a href="https://github.com/Pfahlerfranco" target="_blank" rel="noopener noreferrer" className="contact-social-link">
              <FaGithub /> github.com/Pfahlerfranco
            </a>
            <a href="https://www.linkedin.com/in/franco-pfahler/" target="_blank" rel="noopener noreferrer" className="contact-social-link">
              <FaLinkedin /> linkedin.com/in/franco-pfahler
            </a>
            <a href="mailto:pfahlerfranco@gmail.com" className="contact-social-link">
              <FaEnvelope /> pfahlerfranco@gmail.com
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
