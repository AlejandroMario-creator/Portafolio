import { experiences } from "../data/experiences";

function Experience() {
    return (
        <section id="experience">
            <h2>Experiencia</h2>
            <div >
                {experiences.map((exp) => (
                    <div key={exp.id}>
                        <h3>{exp.role}</h3>
                        <h4>{exp.company}</h4>
                        <p>{exp.startDate} - {exp.endDate}</p>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience;