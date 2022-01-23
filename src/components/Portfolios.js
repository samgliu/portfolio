import { useEffect, useState } from 'react';
import Portfolio from './Portfolio';
import odinBookPic from '../images/odinBook.png';
import instagramPic from '../images/instagramClone.png';
import ECPic from '../images/ecommerce.png';
import TOPPic from '../images/theOdinProject.png';
import blogPic from '../images/blog.png';
import memberPic from '../images/memberOnly.png';

function Portfolios() {
    const [projects, setProjects] = useState([]);

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
                name: 'E-commerce store',
                picture: ECPic,
                builtwith: ['React', 'HTML', 'CSS', 'JavaScript'],
                description: [
                    'A single page e-commerce store web application built with React framework',
                ],
                features: ['Single page web app', 'Responsive view'],
                link: 'https://samgliu.github.io/Shopping-Cart/',
                repo: 'https://github.com/samgliu/Shopping-Cart',
            },
            {
                key: '04',
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
                key: '05',
                name: 'Blog API',
                picture: blogPic,
                builtwith: ['HTML', 'CSS', 'Node.js', 'Express'],
                description: ['A blog api Full-stack web application'],
                features: ['BLOG API', 'User Authorization'],
                link: 'https://samgliu.github.io/THO-blog-api-client/',
                repo: 'https://github.com/samgliu/THO-blog-api',
            },
            {
                key: '06',
                name: 'Member Only message board',
                picture: memberPic,
                builtwith: ['Node.js', 'Express', 'EJS'],
                description: [
                    'A member only message board with user authorization level system.',
                ],
                features: ['User Authorization level', 'backend rendering'],
                link: 'https://rocky-coast-73275.herokuapp.com/',
                repo: 'https://github.com/samgliu/THO-members-only',
            },
        ]);
    }, []);
    if (projects) {
        return (
            <div className="portfolios">
                {projects.map((project) => {
                    return <Portfolio key={project.key} project={project} />;
                })}
            </div>
        );
    } else {
        return null;
    }
}

export default Portfolios;
