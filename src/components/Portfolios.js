import { useEffect, useState } from 'react';
import Portfolio from './Portfolio';
import odinBookPic from '../images/odinBook.png';
import instagramPic from '../images/instagramClone.png';
import TOPPic from '../images/theOdinProject.png';

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
                link: 'https://samgliu.github.io/Odinbook-Client',
            },
            {
                key: '02',
                name: 'Instagram Clone',
                picture: instagramPic,
                builtwith: ['REACT', 'HTML', 'Javascript', 'CSS'],
                description: ['A Instagram clone web app built with React.'],
                link: 'https://samgliu.github.io/instagram-clone',
            },
            {
                key: '03',
                name: 'TOP page clone',
                picture: TOPPic,
                builtwith: ['HTML', 'CSS', 'SCSS'],
                description: [
                    'A The Odin Project webpage clone with a simple CSS framework I made',
                ],
                link: 'https://samgliu.github.io/css-framework-grid-based/',
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
