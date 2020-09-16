import React, { useEffect, useState } from 'react'

const CartItem = props => {


    const [quantity, setQuantity] = useState(props.item.quantity)

    const handleQuantityChange = operation => {
        if ( operation === "-" && quantity !== 1  ) {
            setQuantity(quantity - 1)

        }
        if ( operation === "+" ) {
            setQuantity(quantity + 1)
        }
        props.item.quantity = quantity
        console.log(props.item.quantity)
    }

    // useEffect( () => {

    // }, [])

    return (
            <div className="cart-item">
                <div className="image-wrapper">
                    <img src={props.item.image_src} />
                </div>
                <div>{props.item.name}</div>
                <div className="quantity">
                    <i onClick={ () => handleQuantityChange("-")} class="fas fa-minus"></i>
                    <div className="number">{quantity}</div>
                    <i onClick={ () => handleQuantityChange("+")} class="fas fa-plus"></i>
                </div>
                <div className="price">$ {(props.item.price * quantity).toFixed(2) }</div>
                <div><i class="fas fa-times"></i></div>
            </div>
    )
}

export default CartItem