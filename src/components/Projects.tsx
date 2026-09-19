import { useState } from "react"
import { projects } from "../data/projects"

function Projects() {
  const [category, setCategory] = useState("Todos")
  const categories = ["Todos", "Frontend", "Backend"]

  const filteredProjects = category === "Todos"
    ? projects
    : projects.filter((project) => project.category === category)

  return (
    <section id="projects">
      <div className="section-heading">
        <p className="section-kicker">Trabajo</p>
        <h2>Proyectos</h2>
      </div>

      <div className="project-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={category === cat ? "active" : undefined}
            onClick={() => setCategory(cat)}
            type="button"
          >
            {cat}
          </button>
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <p className="empty-state">
          Pronto publicaré proyectos de esta categoría.
        </p>
      ) : (
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <ul>
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              {(project.github.startsWith("http") || project.demo.startsWith("http")) && (
                <div className="project-links">
                  {project.github.startsWith("http") && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      Código
                    </a>
                  )}
                  {project.demo.startsWith("http") && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Demo
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default Projects
