import { ProjectType } from './Portfolios';
import React from 'react';
const { v4: uuidv4 } = require('uuid');

interface Props {
  project: ProjectType;
}

function Portfolio({ project }: Props) {
  if (project) {
    return (
      <div
        className="portfolio"
        id="portfolio"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            textAlign: 'center',
          }}
        >
          <h2>{project.name}</h2>
          <div className="builtwith">
            {project.builtwith.map((el: React.ReactNode) => {
              return <span key={uuidv4()}>{el}</span>;
            })}
          </div>
        </div>

        <a href={project.link} target="_blank" rel="noreferrer noopener">
          <img src={project.picture} alt="" />
        </a>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <p>{project.description}</p>
          <div
            className="features-container"
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {project.features.map((feature, idx) => {
              return <span key={idx}>{feature}</span>;
            })}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
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
