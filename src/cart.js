import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"


import Banner from "./banner"


import mockProducts from "./mockProducts"

const Cart = props => {

    const [ fullItems, setFullItems ] = useState([])
    const [ empty, setEmpty ] = useState(true)

    useEffect( () => {
        let toBeAdded = [     {
            _id: "sjkahg;sdgha",
            name: "Name of product",
            image_src: "https://source.unsplash.com/random",
            price: 15.34,
            quantity: 1,
            category: "Category 1",
            description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
        },
        {
            _id: "sjkahg;sdghaasdf",
            name: "Name of product",
            image_src: "https://source.unsplash.com/random",
            price: 15.34,
            quantity: 1,
            category: "Category 3",
            description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
        }]
        mockProducts.map( product => {

            // QUANTITY

            if (props.cartItems.includes(product._id)) {
                toBeAdded.push(product)
            }

            fullItems.concat(toBeAdded)
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
                                        
                                        <div className="cart-item">
                                            <div className="image-wrapper">
                                                <img src={item.image_src} />
                                            </div>
                                            <div>{item.name}</div>
                                            <div className="quantity">
                                                <i class="fas fa-minus"></i>
                                                <div className="number">{item.quantity}</div>
                                                <i class="fas fa-plus"></i>
                                            </div>
                                            <div className="price">$ {item.price}</div>
                                            <div><i class="fas fa-times"></i></div>
                                        </div>
                                    ))         

                                }
                                    <div className="bottom">
                                        <NavLink to="/products">
                                            <i class="fas fa-arrow-left"></i>
                                            <div>Continue Shopping</div>
                                        </NavLink>
                                        <div>Subtotal $${}</div>
                                    </div>
                            </div>
                            <div className="payment"></div>
                        </div>


                    

                    </div>
            
                : <div> Empty Cart</div> }


       
            </div>

        </div>
    )
}

export default Cart