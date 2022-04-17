import React, { useRef } from 'react';
import { Button, Form, ToastContainer } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (loading || sending) {
        return <Loading></Loading>
    }

    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        signInWithEmailAndPassword(email, password)
    }

    const navigateRegister = event => {
        navigate('/register')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email')
        }
        else {
            toast('Please enter your email address')
        }
    }

    return (
        <div className='container w-50 mx-auto'>
            <h1 className='text-success text-center my-3'>Please Login</h1>
            <Form onSubmit={handleSubmit}>
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
            {errorElement}
            <p className='mt-2'>New to Genius Car? <Link onClick={navigateRegister} to='/register' className='text-success pe-auto text-decoration-none' >Please Register</Link></p>
            <p className='mt-2'>Forget Password? <button onClick={resetPassword} className='btn btn-link text-success pe-auto text-decoration-none' >Reset Password</button></p>
            <ToastContainer />
        </div>
    );
};

export default Login;