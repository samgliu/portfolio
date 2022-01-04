import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Contact() {
    return (
        <div className="contact" id="contact">
            <div>
                <a href="https://github.com/samgliu">
                    <FaGithub />
                    Github
                </a>
            </div>
            <div>
                <a href="https://linkedin.com/in/gang-liu-78b432124">
                    <FaLinkedin />
                    Linkedin
                </a>
            </div>
            <div>
                <a href="mailto:samgliu19@gmail.com">
                    <FaEnvelope />
                    Email<span className="switch">: samgliu19@gmail.com</span>
                </a>
            </div>
        </div>
    );
}

export default Contact;
