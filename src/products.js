import React, { useEffect, useState } from 'react'
import Banner from "./banner"

import ProductCard from "./productCard"

import mockProducts from "./mockProducts"

const Products = () => {

    const [ category, setCategory ] = useState("All Products")
    const [ categoryList, setCategoryList] = useState(null)
    const [ untouchedProducts, setUntouchedProducts] = useState(null)
    const [ shownProducts, setShownProducts ] = useState(null)



    const getCategories = () => {
        let categories = {}
        mockProducts.map( product => {
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

        let productsToShow = []
        untouchedProducts.map( product => {
            if (product.category === category) productsToShow.push(product)
        })

        setShownProducts(productsToShow)
        
    }


    useEffect( () => {
        getCategories()
        setShownProducts(mockProducts)
        setUntouchedProducts(mockProducts)
    }, [])


    return (
        
        <div>
            { categoryList === null ||  shownProducts === null ? <div></div> : 
            <div>
                <Banner title={"All Products"} path={"Products"} />
                <div className="products-page-wrapper">
                    <div className="products-page">
                        <div className="category-header">{category}</div>
                        <div className="product-content-wrapper">
                            <div className="left">
                                <div className="header">Filter Categories</div>
                                <div className="categories-list">

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
                                            <ProductCard product={product} />
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