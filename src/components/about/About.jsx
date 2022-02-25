import React from 'react'
import './about.css'
import ME from '../../assets/subhankar_bag.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  const cards = [
    { key: 1, icon: FaAward, title: 'Experience', subtitle: '4th Year Student' },
    { key: 2, icon: FiUsers, title: 'Interships', subtitle: '2 + 1 international' },
    { key: 3, icon: VscFolderLibrary, title: 'Projects', subtitle: '5+ Completed' },
  ]
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Subhankar Das" />
          </div>
        </div>
        <div className="about__content">
          
          <div className="about__cards">
            {
              cards.map((card) => {
                const Icon = card.icon;
                return (
                  <article className='about__card' key={card.key}>

                    <Icon className='about__icon' />
                    <h5>{card.title}</h5>
                    <small>{card.subtitle}</small>

                  </article>
                )
              })
            }
          </div>

          <p>
            Currently completing my Bachlor's degree in computer science from Vidyalankar Institute Of Technology.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About
