import React from 'react'
import { NavLink } from "react-router-dom"

const Contact = () => {
    return (
        <div>
            <div className="banner-wrapper" >
                <div className="banner">
                    <div className="header">Contact</div>
                    <div className="path"> 
                        <NavLink to="/">Home</NavLink>
                        <i class="fas fa-angle-right"></i>
                        <div className="current">Contact</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contact