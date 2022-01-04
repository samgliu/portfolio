import { HashLink as Link } from 'react-router-hash-link';

function Header() {
    return (
        <div className="header">
            <ul>
                <li>
                    <Link to="#">Home</Link>
                </li>
                <li>
                    <Link to="#portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="https://linkedin.com/in/gang-liu-78b432124">
                        Resume
                    </Link>
                </li>
                <li>
                    <Link to="#contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;
