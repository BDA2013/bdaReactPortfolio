// Imports:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Current year:
const currentYear = new Date().getFullYear();

//LinkedIn icon and link:
const LinkedInIcon = <FontAwesomeIcon icon={["fab", "linkedin"]} size='3x' />
const linkedInUrl = "https://www.linkedin.com/in/bda2013";

//GitHub icon and link:
const gitHubIcon = <FontAwesomeIcon icon={['fab', 'github']} size='3x' color='black'/>
const gitHubUrl = "https://github.com/BDA2013";

// Footer Component:
export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
            <a href={linkedInUrl} target="_blank" rel="noreferrer">{LinkedInIcon}</a>
            &nbsp;
            <a href={gitHubUrl} target="_blank" rel="noreferrer">{gitHubIcon}</a>
            </div>
            <div className="container">
                <span className="text-muted">© {currentYear} Brian Adams</span>
            </div>
        </footer>
    );
}