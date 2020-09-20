import React, { useEffect, useState, useContext } from 'react'

import { StateContext } from "../../context/stateContext"

const CartItem = props => {

    const stateContext = useContext(StateContext)

    const handleQuantityChange = operation => {
        
        let newCart = []

        stateContext.cartItems.map( cartItem => {
            let changedItem = cartItem
            if (cartItem._id === props.item._id) {
                if (operation === "-") changedItem.quantity -= 1
                if (operation === "+") changedItem.quantity += 1
            }
            newCart.push(changedItem)
        })
        stateContext.setCartItems(newCart)
        props.getTotal()
    }



    const deleteCartItem = () => {
        let oldCart = stateContext.cartItems
        let newCart = []
        oldCart.map( product => {
            if (product._id !== props.item._id) {
                newCart.push(product)
            } 
        })
        stateContext.setCartItems(newCart)
        props.getTotal()
    }

    useEffect( () => {
        props.getTotal()
    },)


    return (
            <div className="cart-item">
                <div className="image-wrapper">
                    <img src={props.item.image_src} />
                </div>
                <div>{props.item.name}</div>
                <div className="quantity">
                    <i onClick={ ()=> handleQuantityChange("-")} class="fas fa-minus"></i>
                    <div className="number">{props.item.quantity}</div>
                    <i onClick={ ()=> handleQuantityChange("+")} class="fas fa-plus"></i>
                </div>
                <div className="price">$ {(props.item.price * props.item.quantity).toFixed(2) }</div>
                <div onClick={ ()=> deleteCartItem() }><i class="fas fa-times"></i></div>
            </div>
    )
}

export default CartItem