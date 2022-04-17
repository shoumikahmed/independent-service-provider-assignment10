import React from 'react';
import google from '../../../images/social/google.png'
import github from '../../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const navigate = useNavigate()

    let errorElement;

    if (loading || githubLoading) {
        return <Loading></Loading>
    }

    if (error || githubError) {
        errorElement = <p className='text-danger'>Error: {error?.message} {githubError?.message}</p>
    }

    if (user || githubUser) {
        navigate('/home')
    }

    return (
        <div>
            <div>
                <div className='d-flex align-items-center'>
                    <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                    <div className='px-2 mb-1'>or</div>
                    <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                </div>
                {errorElement}
                <div className='mt-2'>
                    <button onClick={() => signInWithGoogle()} className='btn btn-success rounded-pill w-50 d-block mx-auto my-2'>
                        <img style={{ height: '30px' }} className='px-2' src={google} alt="" />
                        Google Sign In
                    </button>
                    <button onClick={() => signInWithGithub()} className='btn btn-success rounded-pill w-50 d-block mx-auto'>
                        <img style={{ height: '30px' }} className='px-2' src={github} alt="" />
                        Github Sign In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;