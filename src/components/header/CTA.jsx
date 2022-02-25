import React from 'react'
import PDF from '../../assets/subhankar_das_resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={PDF} id='resume' className='btn' download>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
