import React from 'react';
import shoumik from '../../images/my picture/shoumik.jpg'
import './About.css'

const About = () => {
    return (
        <div className='container'>
            <div className='container w-50 my-5 col-md-12'>
                <img className='w-100 container float-right' src={shoumik} alt="..." class="img-thumbnail" />
                <div className='mt-3 text-center'>
                    <h3 className='text-success'>My Goal</h3>
                    <p className='text-secondary '>My Goal is to be a Full Stack Web Developer</p>
                </div>
            </div>

        </div>
    );
};

export default About;