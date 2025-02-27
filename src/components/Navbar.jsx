<<<<<<< HEAD
import { useState } from "react";
import "../styles/navbar.css";
import logoImg from "../../public/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={logoImg} alt="Logo" className="logo-img" />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <div className="search-box">
=======
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
>>>>>>> 4070010187d317fb628c859f1435ce487693b8fe
          <FontAwesomeIcon icon={faBars} className="menu-icon" />
          <input type="text" placeholder="Hinted search text" />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
<<<<<<< HEAD
        <li><a href="/">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/case-studies">Case Studies</a></li>
        <li><a href="#">Testimonial</a></li>
        <li><a href="/contact-us">Contact</a></li>
=======
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Case Studies</a></li>
        <li><a href="#">Testimonial</a></li>
        <li><a href="#">Contact</a></li>
>>>>>>> 4070010187d317fb628c859f1435ce487693b8fe
        <li><button className="register-btn">Register</button></li>
      </ul>
    </nav>
  );
};

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> 4070010187d317fb628c859f1435ce487693b8fe
