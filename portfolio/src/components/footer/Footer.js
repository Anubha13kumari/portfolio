import React from "react";
import "./footer.css";
import { FaLinkedin } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
import { FaGithub  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="a" className="footer__logo">
        Anubha
      </a>
      <ul className="permalinks">
        <li>
          <a href="#xyz">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/anubha-kumari-329753221/">
          <FaLinkedin />
        </a>
        {/* <a href="anubhamuz@gmail.com">
          <MdEmail />
        </a> */}
        <a href="https://github.com/Anubha13kumari">
        <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Anubha Kumari's portfolio.All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
