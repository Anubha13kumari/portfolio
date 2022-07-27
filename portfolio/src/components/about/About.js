import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdOutlineFolderOpen } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about_me-image">
            <img src={ME} alt=""></img>
          </div>
        </div>
        <div className="about_content">
          <div className="about__cards">
            {/* <article className="about__card">
              <FaAward className="about__icon"></FaAward>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article> */}

            {/* <article className="about__card">
              <FiUsers className="about__icon"></FiUsers>
              <h5>Clients</h5>
              <small>200+ WorldWide</small>
            </article> */}

             {/* <article className="about__card">
              <MdOutlineFolderOpen className="about__icon"></MdOutlineFolderOpen>
              <h5>Projects</h5>
              <small>80+ completed </small>
            </article> */}
          </div> 

          <p>
            Hi, I am a Reactjs developer, who love Programming, Developing and Learning.
            I have always found coding intutive and have pushed myself to learn most effective ways to achieve a result.
             Excited to be at the deployment phase of my carrer as a Reactjs Developer.
          </p>

          <a href="/contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
