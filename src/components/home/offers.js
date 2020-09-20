import React from 'react'
import { NavLink } from "react-router-dom"

const Offers = () => {
    return (
        <div className="offer-container">
            <div className="offer-wrapper" >
                <div className="offer">
                    <div></div>
                    <div className="words">
                        <div className="feature-heading">
                            Mix & Match
                        </div>
                        <div className="feature-details">Mauris laoreet lectus sed dolor venenatis dignissim</div>
                        <NavLink to="/products" className="feature-action">Get Offer!</NavLink>
                    </div>
                </div>
                <div className="offer">
                    <div></div>
                    <div className="words">
                        <div className="feature-heading">
                            Feature Heading 2
                        </div>
                        <div className="feature-details">Vestibulum metus orci, ornare sit amet fringilla quis, luctus a augue</div>
                        <NavLink to="/products" className="feature-action">Shop Now</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offers