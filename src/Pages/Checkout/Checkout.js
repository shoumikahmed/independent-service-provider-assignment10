import React from 'react';
import './Checkout.css'

const Checkout = () => {
    return (
        <section className='Check-Out'>
            <h2 className='title'>Check Out</h2>
            <div className='container'>
                <div className="checkout-form row">
                    <div className="form-field col-lg-6">
                        <input type="text" className='input-text' name="" id="name" />
                        <label htmlFor="name" className='label'>Name</label>
                    </div>
                    <div className="form-field col-lg-6">
                        <input type="email" className='input-text' name="" id="email" />
                        <label htmlFor="email" className='label'>Email</label>
                    </div>
                    <div className="form-field col-lg-6">
                        <input type="text" className='input-text' name="" id="address1" />
                        <label htmlFor="address1" className='label'>Address</label>
                    </div>
                    <div className="form-field col-lg-6">
                        <input type="text" className='input-text' name="" id="address2" />
                        <label htmlFor="address2" className='label'>Address (optional)</label>
                    </div>
                    <div className="form-field col-lg-6">
                        <input type="number" className='input-text' name="" id="code" />
                        <label htmlFor="code" className='label'>Post Code</label>
                    </div>
                    <div className="form-field col-lg-6">
                        <input type="text" className='input-text' name="" id="country" />
                        <label htmlFor="country" className='label'>Country</label>
                    </div>
                    <div className="form-field col-lg-6">
                        <input type="text" className='input-text' name="" id="city" />
                        <label htmlFor="city" className='label'>City</label>
                    </div>
                    <div className="form-field col-lg-6">
                        <input type="number" className='input-text' name="" id="phone" />
                        <label htmlFor="phone" className='label'>Phone Number</label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input type="submit" className='submit-btn' value="submit" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Checkout;