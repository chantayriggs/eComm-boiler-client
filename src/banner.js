import React from 'react'
import { NavLink } from "react-router-dom"

const Banner = (props) => {
    return (
        <div>
            <div className="banner-wrapper" >
                <div className="banner">
                    <div className="header">{props.title}</div>
                    <div className="path"> 
                        <NavLink className="hover" to="/">Home</NavLink>
                        <i class="fas fa-angle-right"></i>
                        <div className="current">{props.path}</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Banner