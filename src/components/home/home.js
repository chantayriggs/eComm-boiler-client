import React from 'react'
import Slider from "./carousel/Slider"
import Offers from "./offers"
import Featured from "./featured"
import Accessories from "./accessories"
import Reviews from "./reviews"
import Qualities from "./qualities"

import images from './images'

const Home = () => {
    return (
        <div>
            <Slider slides={images} />
            <Offers />
            <Featured />
            <Accessories />
            <Reviews />
            <Qualities />
        </div>
    )
}

export default Home