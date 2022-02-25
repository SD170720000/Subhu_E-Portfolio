import React from 'react'
import { BsLinkedin ,BsGithub ,BsInstagram } from 'react-icons/bs'

const Socials = () => {
  let linkedin_url = "https://www.linkedin.com/in/subhankar-das-339750213/"
  let github_url = "https://github.com/SD170720000"
  let instagram_url = "https://www.instagram.com/subhankar17072000/?hl=en"

  return (
    <div className="header__socials">
        <a href={linkedin_url} target="_blank"><BsLinkedin/></a>
        <a href={github_url} target="_blank"><BsGithub/></a>
        <a href={instagram_url} target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default Socials
