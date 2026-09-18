import { projects } from "../data/projects"
import { useState } from "react"
function Projects() {
    
    const [category, setCategory] = useState("Todos")
    
    const filteredProjects = category === "Todos" 
        ? projects 
        : projects.filter(project => project.category === category);

    return (
        <section id="projects">
            <p>Categoría seleccionada: {category}</p>

            <button onClick={() => setCategory("Frontend")}>
                Frontend
            </button>

            <button onClick={() => setCategory("Backend")}>
                Backend
            </button>

            <button onClick={() => setCategory("Todos")}>
                Todos
            </button>

            <div className="projects-grid">
                {filteredProjects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <h3>{project.title}</h3>

                        <p>{project.description}</p>

                        <p>{project.category}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects