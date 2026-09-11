import { experiences } from "../data/experience";

function Experience() {
    return (
        <section id="experience">
            <h2>Experiencia</h2>
            <div >
                {experiences.map((exp, index) => (
                    <div key={index}>
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