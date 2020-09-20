import React, { useState } from 'react'

import { NavLink } from "react-router-dom"

import Logo from "../images/logo.jpg"


const Navbar = () => { 

    return (
            <div className="navbar-wrapper">

            
            <div className="navbar">
                <div className="logo">
                    <NavLink className="link" to="/"><img src={Logo} /></NavLink>
                </div>
                <div className="link-wrapper">
                    <NavLink className="link hover" exact to="/">Home</NavLink>
                    <NavLink className="link hover" to="/about-us">About</NavLink>
                    <NavLink className="link hover" to="/products">Products</NavLink>
                    <NavLink className="link hover" to="/contact">Contact</NavLink>
                    <NavLink className="link hover" to="/cart"><i class="fas fa-shopping-cart"></i></NavLink>
                </div>
            </div>
            </div>

    )
}

export default Navbar


