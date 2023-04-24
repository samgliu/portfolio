import { useEffect, useState } from 'react';

import ECPic from '../images/ecommerce.png';
import Portfolio from './Portfolio';
import React from 'react';
import TOPPic from '../images/theOdinProject.png';
import blogPic from '../images/blog.png';
import dataVizPic from '../images/dataVizPic.png';
import instagramPic from '../images/instagramClone.png';
import odinBookPic from '../images/odinBook.png';

export type ProjectType = {
  key: string;
  name: string;
  picture: string;
  builtwith: string[];
  description: string[];
  features: string[];
  link: string;
  repo: string;
};

function Portfolios() {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    setProjects([
      {
        key: '01',
        name: 'Odin Book',
        picture: odinBookPic,
        builtwith: ['Node.js', 'Express', 'MongoDB', 'React'],
        description: ['A social web app built with MERN.'],
        features: [
          'Sign up/in',
          'Friend/Post/Comment/Like',
          'Real-time Chat',
          'Image upload',
        ],
        link: 'https://samgliu.github.io/Odinbook-Client',
        repo: 'https://github.com/samgliu/Odinbook-Client',
      },
      {
        key: '02',
        name: 'Instagram Clone',
        picture: instagramPic,
        builtwith: ['REACT', 'Firebase', 'HTML', 'Javascript', 'CSS'],
        description: [
          'A Instagram clone web app built with React and Firebase.',
        ],
        features: [
          'Sign up/in',
          'Post/Comment',
          'Real-time Chat',
          'Image upload',
        ],
        link: 'https://samgliu.github.io/instagram-clone',
        repo: 'https://github.com/samgliu/instagram-clone',
      },
      {
        key: '03',
        name: 'Data Visualization',
        picture: dataVizPic,
        builtwith: ['Typescript', 'D3', 'React', 'vega-lite'],
        description: ['A data visualization web app built with React and D3 libraries.'],
        features: ['Data Visualization'],
        link: 'https://samgliu.github.io/data_visualization_demo/',
        repo: 'https://github.com/samgliu/data_visualization_demo',
      },
      {
        key: '04',
        name: 'E-commerce store',
        picture: ECPic,
        builtwith: ['React', 'HTML', 'CSS', 'JavaScript'],
        description: ['A e-commerce store web application built with React'],
        features: ['Single Page Application Architecture', 'Responsive View'],
        link: 'https://samgliu.github.io/Shopping-Cart/',
        repo: 'https://github.com/samgliu/Shopping-Cart',
      },
      {
        key: '05',
        name: 'TOP page clone',
        picture: TOPPic,
        builtwith: ['HTML', 'CSS', 'SCSS'],
        description: [
          'A The Odin Project webpage clone with a simple CSS framework I made',
        ],
        features: ['Grid based CSS framework', 'Responsive view'],
        link: 'https://samgliu.github.io/css-framework-grid-based/',
        repo: 'https://github.com/samgliu/css-framework-grid-based',
      },
      {
        key: '06',
        name: 'Blog API',
        picture: blogPic,
        builtwith: ['HTML', 'CSS', 'Node.js', 'Express'],
        description: ['A blog api Full-stack web application'],
        features: ['BLOG API', 'User Authorization'],
        link: 'https://samgliu.github.io/THO-blog-api-client/',
        repo: 'https://github.com/samgliu/THO-blog-api',
      },
    ]);
  }, []);
  if (projects) {
    return (
      <div className="portfolios">
        {projects.map((project: ProjectType) => {
          return <Portfolio key={project.key} project={project} />;
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Portfolios;
