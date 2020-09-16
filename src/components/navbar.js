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
                    <NavLink className="link hover" to="/about-us">About</NavLink>
                    <NavLink className="link hover" to="/products">Products</NavLink>



                    {/* <div 
                        class="link category-dropdown"
                        onMouseOver={() => setMenu(true)}
                        >
                    
                        { menu ? <div>Categories <i class="fas fa-chevron-up"></i></div> : <div>Categories <i class="fas fa-chevron-down"></i></div>}
                        
                        { 
                            menu === true ?  

                            <div className="dropdown-menu"
                            onMouseLeave={() => setMenu(false)}
                            >
                                <div className="category"><NavLink to="/products">Category 1</NavLink></div>
                                <div className="category"><NavLink to="/products">Category 2</NavLink></div>
                                <div className="category"><NavLink to="/products">Category 3</NavLink></div>
                            </div>
                            : null
                        }

                    </div> */}

                    

                    <NavLink className="link hover" to="/contact">Contact</NavLink>
                    <NavLink className="link hover" to="/cart"><i class="fas fa-shopping-cart"></i></NavLink>
                </div>
            </div>
            </div>

    )
}

export default Navbar


