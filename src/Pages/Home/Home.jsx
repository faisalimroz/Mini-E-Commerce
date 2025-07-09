import React from 'react';
import Banner from '../../Components/banner';
import Products from '../Products/Products';
import Performance from '../Performance/Performance';
import OurClient from '../../Components/OurClient';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Performance></Performance>
            <OurClient></OurClient>
        </div>
    );
};

export default Home;