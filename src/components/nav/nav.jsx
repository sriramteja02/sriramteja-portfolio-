import "./nav.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h2>Sriram</h2>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
         <Link to="/skills">Skills</Link>
        
        <Link to="/projects">Projects</Link>
       
        <Link to="/education">Education</Link>
        <Link to="/contact">Contact Me</Link>
      </div>
    </nav>
  );
}
