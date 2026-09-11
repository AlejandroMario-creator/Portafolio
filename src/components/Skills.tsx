import { skills } from "../data/skils"

function Skills(){
    return (
        <section id="skills">
            {skills.map((skill,index) =>(
                <div key={index}>
                    <h3>{skill.category}</h3>
                    <ul>
                        {skill.technologies.map((tech)=>(
                            <li key={skill.id}>{tech}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    )
}

export default Skills
