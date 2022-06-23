import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt}  from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiFillMessage} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav] =useState('#')
  return (
    <nav>
    <a href="#xyz" onClick={() => setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><BiHome></BiHome></a>
    <a href="#about" onClick={() => setActiveNav('about')} className={activeNav==='#about' ? 'active' : ''}><AiOutlineUser/></a>
    <a href="#experience" onClick={() => setActiveNav('experience')} className={activeNav==='#experience' ? 'active' : ''}><BiBookAlt></BiBookAlt></a>
    <a href="#services" onClick={() => setActiveNav('services')} className={activeNav==='#services' ? 'active' : ''}><RiServiceLine></RiServiceLine></a>
    <a href="#contact" onClick={() => setActiveNav('contact')} className={activeNav==='#contact' ? 'active' : ''}><AiFillMessage/></a>
    </nav>
  )
}

export default Nav
