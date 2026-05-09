import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Header() {
    return (
        <nav className="header" aria-label="Primary navigation">
            <ul>
                <li>
                    <Link to="#home">Home</Link>
                </li>
                <li>
                    <Link to="#portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="#contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
