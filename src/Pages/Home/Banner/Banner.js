import React from 'react';
import banner from '../../../images/banner/banner.jpg'
import './Banner.css'

const Banner = () => {

    return (
        <div className=' h-100'>
            <div className='container d-flex flex-column justify-content-center  h-100'>
                <h1 className='text-white'>Best Photography for Your Wedding.</h1>
                <p className='text-white'>Taking iconic photography goes beyond just using a camera to capture a moment. A professional photographer is in the business of using cameras to take pictures which are developed into prints or prepared as digital photos.</p>
            </div>
        </div>

    );
};

export default Banner;