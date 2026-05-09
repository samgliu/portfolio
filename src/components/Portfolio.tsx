import { ProjectType } from './Portfolios';
import React from 'react';

interface Props {
  project: ProjectType;
}

function Portfolio({ project }: Props) {
  if (project) {
    return (
      <div className="portfolio">
        <div className="portfolio-header">
          <h2>{project.name}</h2>
          <div className="builtwith">
            {project.builtwith.map((el: React.ReactNode) => {
              return <span key={`${project.key}-${el}`}>{el}</span>;
            })}
          </div>
        </div>

        <a
          className="portfolio-preview"
          href={project.link || project.repo}
          aria-label={`${project.name} project preview`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={project.picture} alt={`${project.name} screenshot`} />
        </a>
        <div className="portfolio-content">
          <p>{project.description}</p>
          <div className="features-container">
            {project.features.map((feature, idx) => {
              return <span key={idx}>{feature}</span>;
            })}
          </div>
          <div className="portfolio-actions">
            {project.link ? (
              <a href={project.link} target="_blank" rel="noreferrer noopener">
                Live Demo
              </a>
            ) : null}
            <a href={project.repo} target="_blank" rel="noreferrer noopener">
              Repository
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Portfolio;
