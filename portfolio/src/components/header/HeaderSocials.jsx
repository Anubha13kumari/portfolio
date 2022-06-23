import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub}  from  'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://github.com/Anubha13kumari" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/anubha-kumari-329753221/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://www.instagram.com/solely_anubha/" target="_blank" rel="noreferrer"><GrInstagram/></a>
    </div>
  )
}

export default HeaderSocials