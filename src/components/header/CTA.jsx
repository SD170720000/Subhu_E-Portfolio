import React from 'react'

const CTA = () => {
  const pdf = "https://raw.githubusercontent.com/SD170720000/Subhu_E-Portfolio/master/src/assets/subhankar_das_resume.pdf"
  return (
    <div className='cta'>
      <a href={pdf} id='resume' className='btn' download="Subhankar Das(Resume)">Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
