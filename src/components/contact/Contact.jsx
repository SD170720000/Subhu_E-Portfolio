import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin,BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const cards = [
    { key: 1, icon: MdOutlineEmail, title: 'Email', val: 'subhudas1707@gmail.com', link: 'mailto:subhankar.das.17.07.2000@gmail.com' },
    { key: 2, icon: BsLinkedin, title: 'LinkedIn', val: 'Subhu', link: 'https://www.linkedin.com/in/subhankar-das-339750213/' },
    { key: 3, icon: BsWhatsapp, title: 'WhatsApp', val: '9819415610', link: 'https://api.whatsapp.com/send?phone=+919819415610', }
  ]
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nfgi289', 'template_v3d6ci1', form.current, 'user_quuTj0kuyeIIpcfcQTv21')

    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {
            cards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.key} className="contact__option">
                  <Icon className='contact__option-icon'/>
                  <h4>{card.title}</h4>
                  <h5 className='text-light'>{card.val}</h5>
                  <a href={card.link} target='_blank'>
                    Send a message
                  </a>
                </article>
              );
            })
          }
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
