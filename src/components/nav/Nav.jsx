import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBookAlt, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { useState } from 'react';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    const options = [
        {srno:1,id:'#',icon:<AiOutlineHome />},
        {srno:2,id:'#about',icon:<AiOutlineUser />},
        {srno:3,id:'#experience',icon:<BiBookAlt />},
        {srno:4,id:'#contact',icon:<BiMessageSquareDetail />},
        {srno:5,id:'#footer',icon:<RiServiceLine />},
    ]

    return (
        <nav>
            {
                options.map((option) => {
                    return (
                        <a key={option.srno} 
                        href={option.id} 
                        onClick={() => setActiveNav(option.id)} 
                        className={activeNav === option.id ? 'active' : ''}>
                            {option.icon}
                        </a>
                    )
                })
            }
        </nav>

    )
}


export default Nav