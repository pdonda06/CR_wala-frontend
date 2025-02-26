import "../styles/navbar.css";
import logoImg from "../../public/img/logo.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
      <div className="logo">
        <img src={logoImg} alt="Logo" className="logo-img" />
      </div>
        
      </div>

      <ul className="nav-links">
      <div className="search-box">
          <FontAwesomeIcon icon={faBars} className="menu-icon" />
          <input type="text" placeholder="Hinted search text" />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Case Studies</a></li>
        <li><a href="#">Testimonial</a></li>
        <li><a href="#">Contact</a></li>
        <li><button className="register-btn">Register</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
