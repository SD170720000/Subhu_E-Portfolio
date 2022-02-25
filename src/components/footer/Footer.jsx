import React from 'react'
import './footer.css'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  const pages = [
    { key: 1, id: '#', name: 'Home' },
    { key: 2, id: '#about', name: 'About' },
    { key: 3, id: '#experience', name: 'Experience' },
    { key: 4, id: '#contact', name: 'Contact' },
    { key: 5, id: '#', name: 'Resume' },
  ]

  const socials = [
    { key: 1, icon: BsFacebook, link: 'https://www.facebook.com/profile.php?id=100070808036700' },
    { key: 2, icon: BsInstagram, link: 'https://www.instagram.com/subhankar17072000/' },
    { key: 3, icon: BsTwitter, link: 'https://twitter.com/SUBHANK26539174' },
  ]

  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>SUBHANKAR</a>
      <ul className='permalinks'>
        {
          pages.map((page) => {
            return (
              <li key={page.key}>
                <a href={page.id}>{page.name}</a>
              </li>
            )
          })
        }
      </ul>

      <div className="footer__socials">
        {
          socials.map((social) => {
            const Icon = social.icon
            return (
              <a key={social.key} href={social.link} target='_blank'>
                <Icon />
              </a>
            )
          })
        }
      </div>

      <div className="footer__copyright">
        <small>&copy; Subhankar Das. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
