import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {

    return (
        <div className='banner-img'>
            <div className='container d-flex flex-column justify-content-center align-items-start h-100'>
                <h1 className='text-white w-50'><strong>HI THERE I'M <span className=''>SHOUMIK AHMED</span></strong></h1>
                <p className='text-white w-75'>I am a professional photographar.And i enjoy it very much.If you have an event or wedding or etc you can hire me for photography.I have my own services for hiring.Wedding photography service,Advertising photography service,Portrait photography service,Food and drink photography and many more.Please explore my website.</p>
                <Link to="/services" className="btn btn-outline-light rounded-pill py-3 px-4">Explore my services</Link>
            </div>
        </div>

    );
};

export default Banner;