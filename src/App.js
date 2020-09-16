import React, { useEffect, useState } from "react"

import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"

import Home from "./components/home/home"
import About from "./components/about/about"
import Products from "./components/products/products"
import Contact from "./components/contact/contact"
import Cart from "./components/cart/cart"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Redirect from "./components/redirect"
import ProductDetail from "./components/products/productDetail"

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