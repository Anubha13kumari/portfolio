import React from 'react'
import './contact.css'
import {FiMail} from 'react-icons/fi'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp}  from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
 const form = useRef();

 const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact ME</h2>

      <div className='container contact_container'>
        <div className='contact__options'>
          <article className='contact__option'>
          <FiMail className='contact__option-icon'></FiMail>
           <h4>Email</h4>
           <h5>anubhakri1308@gmail.com</h5>
           <a href='https://mail.google.com/mail/u/1/#inbox?compose=new'>Send a message</a>
           </article>
          

          <article className='contact__option'>
          <RiMessengerLine className='contact__option-icon'></RiMessengerLine>
           <h4>Messenger</h4>
           <h5>Hackmoreish</h5>
           <a href='https://www.facebook.com/profile.php?id=100074956186696'>Send a message</a>
          </article>

          <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'></BsWhatsapp>
           <h4>Whatsapp</h4>
           <h5>9876543210</h5>
           <a href='https://api.whatsapp.com/send?phone+9876543210'>Send a message</a>
           
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form action='' ref={form} onSubmit={sendEmail} className='contact__action'>
          <input type="text" name='name' placeholder='Your full name' required></input>
          <input type="email" name='email' placeholder='Your email' required></input>
          <textarea name="message" id="" cols="30" rows="7" placeholder='Your message' requirednh></textarea>
          <button type="Submit" className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
