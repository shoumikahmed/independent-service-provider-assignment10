import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';


const Login = () => {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    })

    const [
        signInWithEmail,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailChange = event => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(event.target.value)

        if (validEmail) {
            setUserInfo({ ...userInfo, email: event.target.value })
            setErrors({ ...errors, email: "" })
        }
        else {
            setErrors({ ...errors, email: "Invalid email" })
            setUserInfo({ ...userInfo, email: "" })
        }
    }

    const handlePasswordChange = event => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(event.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: event.target.value });
            setErrors({ ...errors, password: "" });
        }
        else {
            setErrors({ ...errors, password: "Need 6 characters!" });
            setUserInfo({ ...userInfo, password: "" })
        }
    }

    const handleSubmit = event => {
        event.preventDefault()

        signInWithEmail(userInfo.email, userInfo.password)
    }

    useEffect(() => {
        console.log(hookError)
    }, [hookError])

    return (
        <div className='container w-50 mx-auto'>
            <h1 className='text-success text-center my-3'>Please Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onChange={handleEmailChange} type="email" placeholder="Enter email" required />
                </Form.Group>
                {errors?.email && <p className='text-danger'>{errors.email}</p>}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" required />
                </Form.Group>
                {errors?.password && <p className='text-danger'>{errors.password}</p>}
                <Button variant="success w-50 mx-auto d-block mb-2 rounded-pill" type="submit">
                    Login
                </Button>
                {/* {error && <p className='text-danger'>{error}</p>}
                {hookError && <p className='text-danger'>{hookError?.message}</p>} */}
            </Form>
            <p className='mt-2'>New to Genius Car? <Link to='/register' className='text-success pe-auto text-decoration-none' >Please Register</Link></p>
            <p className='mt-2'>Forget Password? <button className='btn btn-link text-success pe-auto text-decoration-none' >Reset Password</button></p>

        </div>
    );
};

export default Login;