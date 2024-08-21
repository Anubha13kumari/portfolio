import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio7.jpeg";
import IMG5 from "../../assets/portfolio8.png";
import IMG6 from "../../assets/portfolio9.jpeg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={IMG1} alt=""></img>
          </div>
          <h3>AMAZON CLONE</h3>
          <div className="portfolio__items-cta">
            <a
              href="https://github.com/Anubha13kumari/amazon-clone"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://amazon-clone-psi-azure.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          </div>
        </article>

        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={IMG2} alt=""></img>
          </div>
          <h3>INSTAGRAM-CLONE</h3>
          <div className="portfolio__items-cta">
            <a
              href="https://github.com/Anubha13kumari/instagram-clone"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://instagram-clone-five-tau.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          </div>
        </article>

        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={IMG3} alt=""></img>
          </div>
          <h3>MY PORTFOLIO</h3>
          <div className="portfolio__items-cta">
            <a
              href="https://github.com/Anubha13kumari/portfolio"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://portfolio-nu-roan-65.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          </div>
        </article>

        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={IMG4} alt=""></img>
          </div>
          <h3>NETFLIX CLONE</h3>
          <div className="portfolio__items-cta">
            <a
              href="https://github.com/Anubha13kumari/netflix-clone"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://netflix-clone-indol-chi.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          </div>
        </article>


        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={IMG5} alt=""></img>
          </div>
          <h3>SARKARI RESULT</h3>
          <div className="portfolio__items-cta">
            <a
              href="https://github.com/erchandraprakash1999/website-design-14-aug"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://website-design-14-aug.vercel.app/ "
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          </div>
        </article>

        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={IMG6} alt=""></img>
          </div>
          <h3>PIXER CLONE</h3>
          <div className="portfolio__items-cta">
            <a
              href="https://github.com/erchandraprakash1999/website-design-5-aug"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://website-design-5-aug.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          </div>
        </article>


      </div>
    </section>
  );
};

export default Portfolio;
