import { experiences } from "../data/experiences"

function Experience() {
    return (
        <section id="experience" className="experience">
            <h2>Experiencia</h2>

            <div className="experience-list">
                {experiences.map((exp) => (
                    <div className="experience-card" key={exp.id}>
                        <h3>{exp.role}</h3>
                        <h4>{exp.company}</h4>
                        <p>{exp.ruc}</p>

                        <span className="experience-date">
                            {exp.startDate} - {exp.endDate}
                        </span>

                        <p>{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience