function About() {
  return (
    <section id="about">
      <div className="section-heading">
        <p className="section-kicker">Sobre mí</p>
        <h2>Enfocado en desarrollo web</h2>
      </div>

      <div className="about-layout">
        <p className="about-text">
          Estudio Ingeniería de Sistemas Computacionales en la Universidad
          Privada del Norte, en 9.º ciclo. Me enfoco en desarrollo web y
          quiero sumarme a un equipo donde pueda aportar en frontend,
          aprender buenas prácticas y seguir creciendo como junior.
        </p>

        <ul className="about-facts">
          <li>
            <span>Ubicación</span>
            Lima, Perú
          </li>
          <li>
            <span>Universidad</span>
            UPN
          </li>
          <li>
            <span>Ciclo</span>
            9.º
          </li>
          <li>
            <span>Enfoque</span>
            Desarrollo web
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
