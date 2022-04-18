import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, price } = service

    return (
        <div className='wrapper container pb-5'>
            <div className="card-box">
                <img className='' src={img} alt="" />
                <div className="info">
                    <h5 className=' text-white'>{name}</h5>
                    <p className='m-0 mt-2 text-warning'><strong>Price: ${price}</strong></p>
                    <p className='m-0 mb-2'><small>{description}</small></p>
                    <Link to="/checkout">
                        <button className='button'>{name}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;