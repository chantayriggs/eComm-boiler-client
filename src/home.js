import React from 'react';
import Carousel from "./carousel"
import Offers from "./offers"
import Featured from "./featured"
import Accessories from "./accessories"
import Reviews from "./reviews"
import Qualities from "./qualities"
import Footer from "./footer"

const Home = () => {
    return (
        <div>
            <Carousel />
            <Offers />
            <Featured />
            <Accessories />
            <Reviews />
            <Qualities />
        </div>
    );
};

export default Home;