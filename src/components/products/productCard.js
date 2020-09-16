import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"


const ProductCard = props => {

    const id = props.product._id
    const name = props.product.name
    const image_src = props.product.image_src
    const price = props.product.price
    const category = props.product.category
    const description = props.product.description

    const [ beenClicked, setBeenClicked ] = useState(false)


    const handleAddToCart = id => {
        props.cartItems.push(id)
        setBeenClicked(true)
    }

    return (
        <div className="product-card">
            <div className="product-image">
                <img src={image_src} />
            </div>
            <div className="card-info">
                <Link product={props.product} className="card-title" to={`/product/${id}`} >
                    <div>{name}</div>
                </Link>
                
                <div className="card-category">{category}</div>
                <div className="card-description">{description}</div>
                <div className="card-price">$ {price}</div>
            </div>
            <div className="card-button">
                <button onClick={() => handleAddToCart(id)} >{ beenClicked ? "Added to Cart" : "Add to Cart" }</button>
            </div>
            <div></div>
            
            
        </div>
    )
}

export default ProductCard