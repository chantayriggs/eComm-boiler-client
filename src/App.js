import React, { useEffect, useState } from "react"

import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"

import Home from "./home"
import About from "./about"
import Products from "./products"
import Contact from "./contact"
import Cart from "./cart"
import Navbar from "./navbar"
import Footer from "./footer"
import Redirect from "./redirect"
import ProductDetail from "./productDetail"

import "./styles/main.scss"



const App = () => {


	// cookies if they're a guest, set cart items to user once we have login.
	const [ cartItems, setCartItems ] = useState(null)

	useEffect( () => {
		setCartItems([])

	}, [])


	return (
		<div>
			{ cartItems === null ? <div> Loading... </div> :
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
						<Products  cartItems={cartItems} setCartItems={setCartItems}  />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/cart">
						<Cart cartItems={cartItems} setCartItems={setCartItems} />
					</Route>
					<Route exact path="/instagram" component={Redirect} />
					<Route exact path="/youtube" component={Redirect} />
					<Route exact path="/twitter" component={Redirect} />
					<Route exact path="/facebook" component={Redirect} />
					<Route
						path="/product/:slug"
						render={props => (
						<ProductDetail
							{...props}
						/>
						)}
					/>
				</Switch>

				<Footer/>
			</Router>
			}

		</div>

	)
}

export default App