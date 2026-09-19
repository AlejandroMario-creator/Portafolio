import { skills } from "../data/skils"

function Skills() {
  return (
    <section id="skills">
      <div className="section-heading">
        <p className="section-kicker">Stack</p>
        <h2>Skills</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.id}>
            <h3>{skill.category}</h3>
            <ul>
              {skill.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
