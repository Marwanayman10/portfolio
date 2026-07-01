import React , {useRef} from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { RiMessengerLine } from 'react-icons/ri'

import emailjs from '@emailjs/browser'



const ContactOption = [ 
  {
    id: 1,
    icon: <MdOutlineEmail/>,
    title: 'Email',
    info: "marooayman100@gmail.com",
    link: 'mailto:marooayman100@gmail.com'

  },

   {
    id: 2,
    icon: <RiMessengerLine/>,
    title: 'Messenger',
    info: "Marwan Ayman",
    link: 'https://m.me/marawan.gad.5'
  },

   {
    id: 3,
    icon: <BsWhatsapp/>,
    title: 'WhatsApp',
    info: "01020416756",
    link: 'https://wa.me/201020416756'
  }

]

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9421u9l', 'template_jg1os1s', form.current,  'eCczN6cnY2f7BNbUe',
      )
      e.target.reset()
      
  };





  return (
    <section className="contact" id="contact">
      <div className="top_section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className="container contact_container">
        <div className="contact_options">
          {ContactOption.map(({ id, icon, title, info, link})=>(
           <article key={id} className="contact_option">
            {icon}
            <h4>{title}</h4>
            <h5>{info}</h5>
            <a href={link} target="_blank">Send Message</a> 
          </article>
          ))}
          </div>
          
        
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea  name="message" placeholder="Your Message" required></textarea>
          <button className="btn btn-primary" type="submit">Send Message</button>
        </form>
        </div>
  
    </section>
  )
}

export default Contact
