import React from 'react';
import banner from '../assets/banner.jpg'
const Banner = () => {
    return (
        <div>
         <img className='w-full h-[500px] object-cover' src={banner} alt="banner" />
        </div>
    );
};

export default Banner;