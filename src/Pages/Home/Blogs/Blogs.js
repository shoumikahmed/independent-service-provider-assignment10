import React from 'react';

const Blogs = () => {
    return (
        <section className='px-4 my-4 mx-auto'>
            <h1 className='mb-6 text-success text-center'>
                Basic Questions
            </h1>
            <div className='grid grid-cols-1 gap-24 md:grid-cols-2'>
                <div className='mt-4 border p-4 rounded'>
                    <h4 className='mt-10 mb-3'>
                        Difference between authorization and authentication.
                    </h4>
                    <h6 className='text-secondary'>
                        Authentication
                    </h6>
                    <p className='m-0'>1. In authentication users are verified.</p>
                    <p className='m-0'>2. Authentication process is done before the authorization process.</p>
                    <p className='m-0'>3. Authentication process needs user's login details.</p>
                    <p className='m-0'>4. Authentication describes the person is user or not.</p>
                    <br />
                    <h6 className='text-secondary'>
                        Authorization
                    </h6>
                    <p className='m-0'>1. In authorization users are validated.</p>
                    <p className='m-0'>2. Authorization process is done after the authentication process.</p>
                    <p className='m-0'>3. Authorization process needs user's security.</p>
                    <p className='m-0'>4. Authorization describes what are the permissions user have.</p>

                </div>
                <div className='mt-4 border p-4 rounded'>
                    <h4 className='mt-10 mb-3'>
                        Why are you using firebase? What other options do you have to implement authentication?
                    </h4>
                    <p>
                        Firebase Authentication process is easy to use.It helps to authenticate the website very simply.It supports name, email address, phone number, google, github, facebook etc.
                    </p>
                    <p>
                        firebase authentication not only supports those things but also supports it supports cards, retina scans, voice recognition, and fingerprints.Using firebase authentication people make there website more suggestive.
                    </p>
                </div>
                <div className='mt-4 border p-4 rounded'>
                    <h4 className='mt-10 mb-3'>
                        What other services does firebase provide other than authentication?
                    </h4>
                    <p>
                        Here are many services which Firebase provides, Most useful of them are:
                    </p>
                    <ul>
                        <li>Cloud Firestore.</li>
                        <li>Cloud Functions.</li>
                        <li>Authentication.</li>
                        <li>Hosting.</li>
                        <li>Cloud Storage.</li>
                        <li>Google Analytics.</li>
                        <li>Predictions.</li>
                        <li> Cloud Messaging.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Blogs;