import React, { useEffect, useState } from 'react'

import mockProducts from "../../mockProducts"
import Banner from "../banner"

const ProductDetail = props => {


    const [ currentProduct, setCurrentProduct ] = useState(null)


    useEffect (() => {
        console.log(props.match.params.slug)

        // axios call to grab single product by id ^^^^
        mockProducts.map( product => {
            if ( product._id === props.match.params.slug) setCurrentProduct(product)
        })
    }, [])



    return (
        <div>
            
            {
                // TODO loading
                currentProduct === null ? <div>Loading...</div>
                :
                <div>

                    <Banner title={"Product Detail"} path={"Product Detail"}/>
                    <div className="product-detail-wrapper">
                        <div className="content-wrapper" >
                            <div className="image-wrapper">
                                <img src={currentProduct.image_src} />

                            </div>
                            <div className="right">
                                <div className="detail-title">{currentProduct.name}</div>
                                <div className="detail-category">{currentProduct.category}</div>
                                <div className="detail-price">$ {currentProduct.price}</div>
                                <div className="detail-button">
                                    <button>Add to Cart</button>
                                </div>
                                
                            </div>

                        </div>
                        <div className="detail-description" >{currentProduct.description}</div>
                    </div>
                    
                </div>
            }
        </div>
    )
}

export default ProductDetail