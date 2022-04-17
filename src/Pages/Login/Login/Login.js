import React, { useRef } from 'react';
import { Button, Form, ToastContainer } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Login = () => {

    return (
        <div className='container w-50 mx-auto'>
            <h1 className='text-success text-center my-3'>Please Login</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="success w-50 mx-auto d-block mb-2 rounded-pill" type="submit">
                    Login
                </Button>
            </Form>
            <p className='mt-2'>New to Genius Car? <Link to='/register' className='text-success pe-auto text-decoration-none' >Please Register</Link></p>
            <p className='mt-2'>Forget Password? <button className='btn btn-link text-success pe-auto text-decoration-none' >Reset Password</button></p>
            <ToastContainer />
        </div>
    );
};

export default Login;