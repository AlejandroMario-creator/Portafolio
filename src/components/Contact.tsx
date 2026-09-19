function Contact() {
  return (
    <section id="contact">
      <div className="section-heading">
        <p className="section-kicker">Contacto</p>
        <h2>Hablemos</h2>
      </div>

      <div className="contact-panel">
        <p className="contact-text">
          Estoy en Lima y abierto a prácticas, internships o un primer
          rol junior, presencial o remoto para Perú y LATAM.
        </p>

        <div className="contact-links">
          <a
            href="https://wa.link/653arm"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
              <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
            </svg>
            WhatsApp
          </a>

          <a
            href="https://www.linkedin.com/in/mario-alejandro-a17a03266/"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M8 11v5" />
              <path d="M8 8v.01" />
              <path d="M12 16v-5" />
              <path d="M16 16v-3a2 2 0 1 0 -4 0" />
              <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
