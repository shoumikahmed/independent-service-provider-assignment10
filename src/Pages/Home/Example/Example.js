import React from 'react';
import './Example.css'

const Example = () => {
    return (
        <section className='container details-container my-3'>
            <div className="row gx-3">
                <div className="col-md-3 text-white p-4 details">
                    <h3 className='text-warning'>Phone</h3>
                    <p>If you want to hire me for photography you can contact with me</p>
                    <p className='text-warning'>Phone: 01778-774082</p>
                </div>
                <div className="col-md-3 text-white p-4 details">
                    <h3 className='text-warning'>Meeting</h3>
                    <p>If you want to meet with me for photography we can bother</p>
                    <p className='text-warning'>Address: R.N.Road, Jashore</p>
                </div>
                <div className="col-md-3 text-white p-4 details">
                    <h3 className='text-warning'>Checkout</h3>
                    <p>If you want hire me for photography you can go to checkout page</p>
                    <p className='text-warning'>Click the card button</p>
                </div>
                <div className="col-md-3 text-white p-4 details">
                    <h3 className='text-warning'>Sign In</h3>
                    <p>You can sign in in my website to explore me as a professional photographer</p>
                    <p className='text-warning'>Go To: Sign In</p>
                </div>
            </div>
        </section>
    );
};

export default Example;