import { skills } from "../data/skils"

function Skills() {
    return (
        <section id="skills">
            <h2>Skills</h2>

            <div className="skills-grid">
                {skills.map((skill) => (
                    <div className="skill-card" key={skill.id}>

                        <h3>{skill.category}</h3>

                        <ul>
                            {skill.technologies.map((tech) => (
                                <li key={tech}>
                                    {tech}
                                </li>
                            ))}
                        </ul>

                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills