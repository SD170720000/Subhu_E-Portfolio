import React from 'react'

const CTA = () => {
  const pdf = "https://SD170720000.github.io/Subhu_E-Portfolio/src/assets/subhankar_das_resume.pdf"
  return (
    <div className='cta'>
      <a href={pdf} id='resume' className='btn' download="Subhankar Das(Resume)" target='_blank'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
