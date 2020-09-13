import React, { useState } from 'react'

import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"

import Home from "./home"
import About from "./about"
import Products from "./products"
import Contact from "./contact"
import Cart from "./cart"

import Logo from "./images/logo.png"


const Navbar = () => {


    const [menu, setMenu] = useState(false)
    const [search, setSearch] = useState(false)

    return (
        <Router>
            <div className="navbar">
            <NavLink className="link" to="/"><img src={Logo} /></NavLink>
                <div className="link-wrapper">
                    <NavLink className="link hover" to="/about-us">About</NavLink>
                    <NavLink className="link hover" to="/products">Products</NavLink>
                    <div 
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

                    </div>

                    <NavLink className="link hover" to="/contact">Contact</NavLink>
                    <NavLink className="link hover" to="/cart"><i class="fas fa-shopping-cart"></i></NavLink>
                </div>
            </div>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about-us">
                    <About />
                </Route>
                <Route path="/products">
                    <Products />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </Router>
    )
}

export default Navbar


