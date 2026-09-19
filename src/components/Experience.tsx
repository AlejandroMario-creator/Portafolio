import { experiences } from "../data/experiences"

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-heading">
        <p className="section-kicker">Recorrido</p>
        <h2>Experiencia</h2>
      </div>

      <div className="experience-list">
        {experiences.map((exp) => (
          <article className="experience-card" key={exp.id}>
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <span className="experience-date">
              {exp.startDate} — {exp.endDate}
            </span>
            <p>{exp.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
