import React from "react"

import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"

import Home from "./home"
import About from "./about"
import Products from "./products"
import Contact from "./contact"
import Cart from "./cart"

import Navbar from "./navbar"
import Footer from "./footer"

import "./styles/main.scss"



const App = () => {

	return (
			<Router>
				<Navbar />
			
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

				<Footer />
			</Router>


	)
}

export default App