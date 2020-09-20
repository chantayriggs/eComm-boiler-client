import React, { useEffect, useState, useContext } from 'react'

import { StateContext } from "../../context/stateContext"

import Banner from "../banner"
import ProductCard from "./productCard"

const Products = () => {

    const stateContext = useContext(StateContext)

    const [ category, setCategory ] = useState("All Products")
    const [ categoryList, setCategoryList] = useState(null)
    const [ untouchedProducts, setUntouchedProducts] = useState(null)
    const [ shownProducts, setShownProducts ] = useState(null)

    const getCategories = () => {
        let categories = {}
        stateContext.allProducts.map( product => {
            if ( categories[product.category] > 0) {
                categories[product.category] += 1
            } else {
                categories[product.category] = 1
            }
        })
        setCategoryList(categories)
    }


    const handleCategoryClick = category => {
        setCategory(category)

        if (category === "All Products") {
            setShownProducts(stateContext.allProducts)
        } else {
            let productsToShow = []
            untouchedProducts.map( product => {
                if (product.category === category) productsToShow.push(product)
            })
    
            setShownProducts(productsToShow)
        }
    }

    useEffect( () => {
        setShownProducts(stateContext.allProducts)
        setUntouchedProducts(stateContext.allProducts)
        getCategories()
    }, [])



    return (
        
        <div>
            
            { categoryList === null ? <div></div> : 
            <div>
                <Banner title={"All Products"} path={"Products"} />
                <div className="products-page-wrapper">
                    <div className="products-page">
                        <div className="category-header">{category}</div>
                        <div className="product-content-wrapper">
                            <div className="left">
                                <div className="header">Filter Categories</div>
                                <div className="categories-list">
                                    <div onClick={ () => handleCategoryClick("All Products")} className={ category === "All Products" ? "category chosen" : "category" }>
                                                <div > 
                                                    <i class="fas fa-angle-right"></i>
                                                    <span >All Products</span>
                                                </div>
                                                <div className="amount">({stateContext.allProducts.length})</div>
                                            </div>
                                    {
                                        Object.entries(categoryList).map( currentCategory => (
                                            <div onClick={ () => handleCategoryClick(currentCategory[0])} className={ category === currentCategory[0] ? "category chosen" : "category" }>
                                                <div > 
                                                    <i class="fas fa-angle-right"></i>
                                                    <span >{currentCategory[0]}</span>
                                                </div>
                                                <div className="amount">({currentCategory[1]})</div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="right">
                                <div className="product-card-wrapper">
                                    {
                                        shownProducts.map( product => (
                                            <ProductCard cartItems={stateContext.cartItems} setCartItems={stateContext.setCartItems} product={product} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>

    )
}

export default Products



