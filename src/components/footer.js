import React from 'react'
import { NavLink } from "react-router-dom"

import Logo from "../images/logo_only.jpg"

const Footer = props => {
    return (
        <div className="footer">
                <div className="content-wrapper">

                <div className="useful-links-wrapper">
                    <div className="header">Useful Links</div>
                    <div className="links-wrapper">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about-us">About Us</NavLink>
                        <NavLink to="/products">Products</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>

                </div>
                <div className="logo-icons-wrapper">
                    <div className="logo">
                        <img src={Logo} />
                    </div>
                    <div className="icons" >
                        <a href="instagram" target="_blank">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="youtube" target="_blank">
                            <i class="fab fa-youtube"></i>
                        </a>
                        <a href="twitter" target="_blank">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="facebook" target="_blank">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </div>
                </div>

                {/* <div className="useful-links-wrapper">
                    <div className="header">Categories</div>
                    <div className="category-wrapper">
                        <NavLink to="/products">Category 1</NavLink>
                        <NavLink to="/products">Category 2</NavLink>
                        <NavLink to="/products">Category 3</NavLink>
                        <NavLink to="/products">Category 4</NavLink>
                        <NavLink to="/products">Category 5</NavLink>
                    </div>

                </div> */}
                <div className="contact-wrapper">
                    <div className="header">Contact Info</div>
                    <div className="info-wrapper">
                        <div className="info" >
                        <i class="fas fa-map-marker-alt"></i>
                            <div>9am - 5pm</div>
                        </div>
                        <div className="info" >
                            <i class="far fa-envelope"></i>
                            <div>email@gmail.com</div>
                        </div>
                        <div className="info" >
                            <i class="fas fa-phone"></i>
                            <div>(858) 123-4567</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer