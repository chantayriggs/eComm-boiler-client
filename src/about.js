import React from 'react'
import { NavLink } from "react-router-dom"

const About = () => {
    return (
        <div>
            <div className="banner-wrapper" >
                <div className="banner">
                    <div className="header">About Us</div>
                    <div className="path"> 
                        <NavLink to="/">Home</NavLink>
                        <i class="fas fa-angle-right"></i>
                        <div className="current">About</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default About