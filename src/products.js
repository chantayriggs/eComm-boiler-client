import React from 'react'
import { NavLink } from "react-router-dom"

const Products = () => {
    return (
        <div>
            <div className="banner-wrapper" >
                <div className="banner">
                    <div className="header">Product</div>
                    <div className="path"> 
                        <NavLink to="/">Home</NavLink>
                        <i class="fas fa-angle-right"></i>
                        <div className="current">Product</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Products