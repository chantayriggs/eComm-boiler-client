import React, { createContext, useState, useEffect } from "react"
import StateServices from "../services/stateServices"

export const StateContext = createContext()

export default ({ children }) => {
    const [allProducts, setAllProducts] = useState(null)
    const [cartItems, setCartItems] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [total, setTotal] = useState(0)


    useEffect(() => {
        let gettingAllProducts = StateServices.getAllProducts()
        setAllProducts(gettingAllProducts)
        setIsLoaded(true)
    }, [])

    return(
        <div>
            { 
                !isLoaded ? 
                <h1>loading...</h1> 
                : 
                <StateContext.Provider value={{ 
                    allProducts, 
                    setAllProducts, 
                    cartItems, 
                    setCartItems, 
                    total,
                    setTotal
                    
                }}>
                    { children }
                </StateContext.Provider>
            }
        </div>
    )
}