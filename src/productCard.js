import React, { useEffect } from 'react'

const ProductCard = props => {

    const name = props.product.name
    const price = props.product.price
    const category = props.product.category
    const description = props.product.description

    return (
        <div className="product-card">
            <div className="product-image">
                <img src={"https://source.unsplash.com/random"} />
            </div>
            <div className="card-info">
                <div className="card-title">{name}</div>
                <div className="card-category">{category}</div>
                <div className="card-description">{description}</div>
                <div className="card-price">$ {price}</div>
            </div>
            <div className="card-button">
                <button>Add to Cart</button>
            </div>
            <div></div>
            
            
        </div>
    )
}

export default ProductCard