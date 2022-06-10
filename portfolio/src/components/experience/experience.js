import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='conatiner experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon'/>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon'/>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon'/>
              <h4>JAVASCRIPT</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon'/>
              <h4>REACT</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>

        </div>
        {/* end of frontend */}
        <div className='experience_backend'>
        <h3>Backend development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon'/>
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon'/>
              <h4>PHP</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon'/>
              <h4>My SQL</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon'/>
              <h4>python</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
           </div>
      </div>
    </section>
  )
}

export default Experience