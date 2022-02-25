import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    const front_lang = [
        { key: 1, name: 'HTML5', progress: 'Experienced' },
        { key: 2, name: 'CSS3', progress: 'Experienced' },
        { key: 3, name: 'Bootstrap', progress: 'Experienced' },
        { key: 4, name: 'React JS', progress: 'Intermediate' }
    ]
    const back_lang = [
        { key: 1, name: 'Javascript', progress: 'Intermediate' },
        { key: 2, name: 'Python', progress: 'Experienced' },
        { key: 3, name: 'C Program', progress: 'Basic' },
        { key: 4, name: 'Java', progress: 'Basic' },
        { key: 5, name: 'MySQL', progress: 'Experienced' }
    ]
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        {
                            front_lang.map((lang) => {
                                return (
                                    <article key={lang.key} className="experience__details">
                                        <BsPatchCheckFill className='experience__details-icon'/>
                                        <div>
                                            <h4>{lang.name}</h4>
                                            <small className='text-light'>{lang.progress}</small>
                                        </div>
                                    </article>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        {
                            back_lang.map((lang) => {
                                return (
                                    <article key={lang.key} className="experience__details">
                                        <BsPatchCheckFill className='experience__details-icon'/>
                                        <div>
                                            <h4>{lang.name}</h4>
                                            <small className='text-light'>{lang.progress}</small>
                                        </div>
                                    </article>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
