import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
      <article className='portfolio__items'>
        <div className='portfolio__items-image'>
         <img src={IMG1} alt=""></img>
        </div>
          <h3>This is a portfolio items title</h3>
          <div className='portfolio__items-cta'>
          <a href="https://github.com/Anubha13kumari/Calculator/tree/anubhaJS/react/calculator" className='btn'target="_blank">Github</a>
          <a href="https://github.com/Anubha13kumari/Calculator/tree/anubhaJS/react/calculator" className='btn btn-primary' target="_blank">Live demo</a>
          </div>
        </article>

      <article className='portfolio__items'>
        <div className='portfolio__items-image'>
         <img src={IMG2} alt=""></img>
        </div>
          <h3>This is a portfolio items title</h3>
          <div className='portfolio__items-cta'>
          <a href="https://github.com/Anubha13kumari/Calculator/tree/anubhaJS/react/calculator" className='btn'target="_blank">Github</a>
          <a href="https://github.com/Anubha13kumari/Calculator/tree/anubhaJS/react/calculator" className='btn btn-primary' target="_blank">Live demo</a>
          </div>
       </article>

      <article className='portfolio__items'>
        <div className='portfolio__items-image'>
         <img src={IMG3} alt=""></img>
        </div>
          <h3>This is a portfolio items title</h3>
          <div className='portfolio__items-cta'>
          <a href="https://github.com/Anubha13kumari/Calculator/tree/anubhaJS/react/calculator" className='btn'target="_blank">Github</a>
          <a href="https://github.com/Anubha13kumari/Calculator/tree/anubhaJS/react/calculator" className='btn btn-primary' target="_blank">Live demo</a>
          </div>
        </article>
        </div>
      </section>
  )
}

export default Portfolio