function Hero() {
    return (
        <section id="home" className="hero">

            <div className="hero-content">
                <p className="hero-label">
                    Hola, Soy
                </p>
                <h1>Mario Alejandro</h1>

                <p className="hero-description">
                    Estudiante de ingeniería en sistemas enfocado en el desarrollo web y construcción de software
                </p>

                <div className="hero-actions">
                    <a href="#projects">Ver proyectos</a>
                    <a href="#contact">Contacto</a>
                </div>

            </div>
            <div className="hero-visual">
                <div className="code-window">
                    <div className="code-header">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    {/*
                    <pre>
                        <code>
                            {"const developer = {\n"}
                            {"  name: 'Mario Alejandro',\n"}
                            {"  role: 'Web Developer',\n"}
                            {"  learning: true\n"}
                            {"};"}
                        </code>
                    </pre> 
                    */}
                </div>

            </div>
        </section>
    )
}

export default Hero;
