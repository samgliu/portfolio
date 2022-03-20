import React from "react";
import { ProjectType } from "./Portfolios";
const { v4: uuidv4 } = require('uuid');

interface Props {
    project: ProjectType;
}

function Portfolio({ project }: Props) {
    if (project) {
        return (
            <div className="portfolio" id="portfolio">
                <h2>{project.name}</h2>
                <div className="builtwith">
                    {project.builtwith.map((el: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => {
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
                <div className="features-container">
                    {project.features.map((feature) => {
                        return <span>{feature}</span>;
                    })}
                </div>

                <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Live Demo
                </a>
                <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Repository
                </a>
            </div>
        );
    } else {
        return null;
    }
}

export default Portfolio;
