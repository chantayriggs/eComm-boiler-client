import React, { useEffect, useState, useContext } from 'react'
import { NavLink } from "react-router-dom"

import { StateContext } from "../../context/stateContext"

import Banner from "../banner"
import CartItem from "./cartItem"



const Cart = () => {

    const stateContext = useContext(StateContext)

    const getTotal = () => {
        let newTotal = 0
        stateContext.cartItems.map( cartItem => {
            newTotal += cartItem.price * cartItem.quantity
        })
        stateContext.setTotal(newTotal)
    }

    useEffect(() => {
        
    }, [])

    return (
        <div>
            <Banner title={"My Cart"} path={"Shopping Cart"} />
            <div className="cart-wrapper">
                
                { stateContext.cartItems.length > 0 ? 
                    
                    <div className="cart-content-wrapper">

                        <div className="items-payment-wrapper">

                            <div>

                                {
                                    stateContext.cartItems.map( item => (
                                        <CartItem getTotal={getTotal} item={item} />

                                    ))         

                                }
                                    <div className="bottom">
                                        <NavLink to="/products">
                                            <i class="fas fa-arrow-left"></i>
                                            <div>Continue Shopping</div>
                                        </NavLink>
                                        <div className="sub-checkout" >
                                            <div className="subtotal">{`Subtotal $${stateContext.total.toFixed(2)}`}</div>
                                            <button>Checkout</button>
                                        </div>
                                    </div>
                            </div>
                            <div className="payment">Payment Stuff Will Go Here</div>
                        </div>


                    

                    </div>
            
            :                     <div className="cart-content-wrapper">

                <div className="items-payment-wrapper">

                    <div>

                            <div className="cart-empty">Your Cart is Empty</div>
                            <div className="bottom">
                                <NavLink to="/products">
                                    <i class="fas fa-arrow-left"></i>
                                    <div>Continue Shopping</div>
                                </NavLink>
                            </div>
                    </div>
                    <div className="payment">Payment Stuff Will Go Here</div>
                </div>


            

            </div> }


       
            </div>

        </div>
    )
}

export default Cart


// const [ fullItems, setFullItems ] = useState([])
// const [ total, setTotal ] = useState(0)


// const sendTotal = (price, direction) => {
//     if (direction === "add") setTotal(total + Number(price))
//     if (direction === "minus") setTotal(total - Number(price))
// }

// const handleItemDelete = item => {
//     let newFullItems = []
//     fullItems.map( product => {
//         if (product._id !== item._id ) {
//             newFullItems.push(product)
//         }
//     })
//     setFullItems(newFullItems)


//     let newCartItems = []
//     props.cartItems.map( product => {
//         if (product !== item._id ) {
//             newCartItems.push(item._id)
//         }
//     })
//     props.setCartItems(newCartItems)

//     setTotal(total - (item.price * item.quantity))

// }


// useEffect( () => {
//     let toBeAdded = []
//     mockProducts.map( product => {

//             if (props.cartItems.includes(product._id)) {
//                 product.quantity = 1
//                 toBeAdded.push(product)
//             } 
//     })
//     fullItems.concat(toBeAdded)
    


//     // setting total
//     let tempTotal = 0
//     toBeAdded.map( product => {
//         tempTotal += product.price * product.quantity
//         console.log(tempTotal)
//     })
//     setTotal(tempTotal)

//     setFullItems(toBeAdded)

    

// }, [])