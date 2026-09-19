import { projects } from "../data/projects"
import { useState } from "react"
function Projects() {

    const [category, setCategory] = useState("Todos")

    const categories = ["Todos", "Frontend", "Backend"]

    const filteredProjects = category === "Todos"
        ? projects
        : projects.filter(project => project.category === category);


    return (
        <section id="projects">
            <div className="project-filters">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

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