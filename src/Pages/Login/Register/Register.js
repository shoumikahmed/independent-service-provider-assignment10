import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import './Register.css'

const Register = () => {

    return (
        <div>
            <h2 className='text-center my-3 text-success'>Please Register</h2>
            <form className='register-form'>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='Password' required />
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">Accept Genius Car Terms and Conditions</label>
                <input className='btn btn-success mx-auto w-50 mt-2' type="submit" value="Register" />
            </form>
            <p className='mt-2 text-center'>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none'>Please Login</Link></p>
        </div>
    );
};

export default Register;