import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className='conatiner services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
          <li>
          <BsCheck className='service__list-icon'></BsCheck>
          <p>Lorem Ipsum is simply dummy text of the printing</p>
          </li>
          <li>
          <BsCheck className='service__list-icon'></BsCheck>
          <p>Lorem Ipsum is simply dummy text of the printing</p>
          </li>
          <li>
          <BsCheck className='service__list-icon'></BsCheck>
          <p>Lorem Ipsum is simply dummy text of the printing</p>
          </li>
          </ul>
        </article>
        {/* end of ui/ux */}

        <article className='service'>
          <div className='service__head'>
            <h3>WEB DEVELOPMENT</h3>
          </div>
          <ul className='service__list'>
          <li>
          <BsCheck className='serivice__list-icon'></BsCheck>
          <p>Lorem Ipsum is simply dummy text of the printing</p>
          </li>
          <li>
          <BsCheck className='serivice__list-icon'></BsCheck>
          <p>Lorem Ipsum is simply dummy text of the printing</p>
          </li>
          <li>
          <BsCheck className='serivice__list-icon'></BsCheck>
          <p>Lorem Ipsum is simply dummy text of the printing</p>
          </li>
          </ul>
        </article>
        {/* end of web dev */}

      </div>
    </section>
  )
}

export default Services