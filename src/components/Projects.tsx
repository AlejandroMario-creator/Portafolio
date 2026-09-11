import { projects } from "../data/projects"

function Projects() {
    return (
        <section id="projects">
            {projects.map((project) => (
                <div key={project.id}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div>
                        <strong>Tecnologias:</strong>
                        <ul>
                            {project.technologies.map((tech) => (
                                <li key={tech}>{tech}</li>
                            ))}
                        </ul>

                    </div>
                    <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                    <a href={project.demo} target="_blank" rel="noreferrer">Demo</a>
                </div>
            ))}
        </section>
    )
}

export default Projects