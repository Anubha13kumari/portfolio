import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { MdOutlineFolderOpen } from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about_me-image'>
            <img src={ME} alt=""></img>
          </div>
        </div>
        <div className='about_content'>
        <div className='about__cards'>
          <article className='about__card'>
            <FaAward className='about__icon'></FaAward>
            <h5>Experience</h5>
            <small>3+ Years Working</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'></FiUsers>
            <h5>Clients</h5>
            <small>200+ WorldWide</small>
          </article>

          <article className='about__card'>
            <MdOutlineFolderOpen className='about__icon'></MdOutlineFolderOpen>
            <h5>Projects</h5>
            <small>80+ completed </small>
          </article>
          </div>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </p>

          <a href="contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
