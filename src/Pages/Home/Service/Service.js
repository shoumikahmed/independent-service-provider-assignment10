import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, price } = service

    return (
        <div className='service'>
            <img className='w-100 rounded-top' src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>

            <Link to="/checkout">
                <button className='btn btn-success'>Book: {name}</button>
            </Link>
        </div>
    );
};

export default Service;