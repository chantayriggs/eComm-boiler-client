import React, { useEffect, useState, useContext } from 'react'
import { Link } from "react-router-dom"

import { StateContext } from "../../context/stateContext"

const ProductCard = props => {

    const stateContext = useContext(StateContext)

    const [ beenClicked, setBeenClicked ] = useState(false)


    const handleAddToCart = product => {
        let ids = []
        stateContext.cartItems.map( cartItem => {
            ids.push(cartItem._id)
        })
        if (ids.includes(product._id)) {

        } else {
            let productToPush = product
            productToPush.quantity = 1
            let cart = stateContext.cartItems
            cart.push(productToPush)
            stateContext.setCartItems(cart)

        }
        setBeenClicked(true)

    }

    return (
        <div className="product-card">
            <div className="product-image">
                <img src={props.product.image_src} />
            </div>
            <div className="card-info">
                <Link product={props.product} className="card-title" to={`/product/${props.product._id}`} >
                    <div>{props.product.name}</div>
                </Link>
                
                <div className="card-category">{props.product.category}</div>
                <div className="card-description">{props.product.description}</div>
                <div className="card-price">$ {props.product.price}</div>
            </div>
            <div className="card-button">
                <button onClick={() => handleAddToCart(props.product)} >{ beenClicked ? "Added to Cart" : "Add to Cart" }</button>
            </div>
            <div></div>
            
            
        </div>
    )
}

export default ProductCard