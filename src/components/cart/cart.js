import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"


import Banner from "../banner"
import CartItem from "./cartItem"


import mockProducts from "../../mockProducts"

const Cart = props => {

    const [ fullItems, setFullItems ] = useState([])

    useEffect( () => {
        let toBeAdded = []
        mockProducts.map( product => {

                if (props.cartItems.includes(product._id)) {
                    product.quantity = 1
                    toBeAdded.push(product)
                } 
        })
        fullItems.concat(toBeAdded)
        setFullItems(toBeAdded)

    }, [])

    return (
        <div>
            <Banner title={"My Cart"} path={"Shopping Cart"} />
            <div className="cart-wrapper">
                
                { fullItems.length > 0 ? 
                    
                    <div className="cart-content-wrapper">

                        <div className="items-payment-wrapper">

                            <div>

                                {
                                    fullItems.map( item => (
                                        <CartItem item={item} />

                                    ))         

                                }
                                    <div className="bottom">
                                        <NavLink to="/products">
                                            <i class="fas fa-arrow-left"></i>
                                            <div>Continue Shopping</div>
                                        </NavLink>
                                        <div className="sub-checkout" >
                                            <div>Subtotal ${}</div>
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