const { v4: uuidv4 } = require('uuid');

function Portfolio({ project }) {
    if (project) {
        return (
            <div className="portfolio" id="portfolio">
                <h2>{project.name}</h2>
                <div className="builtwith">
                    {project.builtwith.map((el) => {
                        return <span key={uuidv4()}>{el}</span>;
                    })}
                </div>

                <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <img src={project.picture} alt="" />
                </a>
                <p>{project.description}</p>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Live Demo
                </a>
            </div>
        );
    } else {
        return null;
    }
}

export default Portfolio;
