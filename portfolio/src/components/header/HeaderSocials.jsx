import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";


const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://github.com/Anubha13kumari"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/anubha-kumari-329753221/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
     
    </div>
  );
};

export default HeaderSocials;
